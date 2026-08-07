import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertVolunteerSchema, insertNewsletterSchema, insertDonationSchema } from "@shared/schema";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { z } from "zod";
import { synthesizeText, recognizeSpeech, generateScriptureAudio } from "./gemini-api";
import memorizeRouter from "./routes/memorize";
import { sendEmail } from "./email/sendgridMailer";
import { createNewsletterNotification, createVolunteerNotification } from "./email/templates";

export async function registerRoutes(app: Express): Promise<Server> {
  // Setup authentication
  await setupAuth(app);

  // Mount memorize routes
  app.use("/api/memorize", memorizeRouter);

  // Auth routes
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });
  
  // Volunteer registration endpoint
  app.post("/api/volunteers", async (req, res) => {
    try {
      const volunteerData = insertVolunteerSchema.parse(req.body);
      const volunteer = await storage.createVolunteer(volunteerData);
      
      // Send email notification to admin (non-blocking)
      let emailSent = false;
      try {
        const emailTemplate = createVolunteerNotification({
          name: volunteerData.name,
          email: volunteerData.email,
          phone: volunteerData.phone || undefined,
          interests: volunteerData.interests || [],
          message: volunteerData.message || undefined,
        });
        emailSent = await sendEmail({
          to: 'info@wordshiper.org',
          subject: emailTemplate.subject,
          text: emailTemplate.text,
          html: emailTemplate.html,
        });
      } catch (emailError) {
        console.error("Email notification failed:", emailError);
      }
      
      res.json({ ...volunteer, emailSent });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid volunteer data", details: error.errors });
      } else {
        console.error("Volunteer registration error:", error);
        res.status(500).json({ error: "Failed to register volunteer" });
      }
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const subscriberData = insertNewsletterSchema.parse(req.body);
      const subscriber = await storage.subscribeNewsletter(subscriberData);
      
      // Send email notification to admin (non-blocking)
      let emailSent = false;
      try {
        const emailTemplate = createNewsletterNotification({ email: subscriberData.email });
        emailSent = await sendEmail({
          to: 'info@wordshiper.org',
          subject: emailTemplate.subject,
          text: emailTemplate.text,
          html: emailTemplate.html,
        });
      } catch (emailError) {
        console.error("Email notification failed:", emailError);
      }
      
      res.json({ ...subscriber, emailSent });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid subscription data", details: error.errors });
      } else {
        console.error("Newsletter subscription error:", error);
        res.status(500).json({ error: "Failed to subscribe to newsletter" });
      }
    }
  });

  // Google Cloud TTS endpoint with human-like voices
  app.post("/api/tts/synthesize", async (req, res) => {
    const { text, voiceId, languageCode = 'en-US' } = req.body;
    
    try {
      
      if (!text) {
        return res.status(400).json({ error: "Missing required field: text" });
      }

      // Voice mapping for human-like characteristics (Updated with newer voices)
      const voiceMapping: Record<string, { name: string, gender: string, languageCode: string }> = {
        'sarah-young': { name: 'en-US-Neural2-F', gender: 'FEMALE', languageCode: 'en-US' }, // Young female neural voice
        'emily-adult': { name: 'en-US-Neural2-H', gender: 'FEMALE', languageCode: 'en-US' }, // Adult female neural voice
        'margaret-senior': { name: 'en-US-Neural2-G', gender: 'FEMALE', languageCode: 'en-US' }, // Senior female neural voice
        'david-young': { name: 'en-US-Neural2-D', gender: 'MALE', languageCode: 'en-US' }, // Young male neural voice
        'michael-adult': { name: 'en-US-Neural2-J', gender: 'MALE', languageCode: 'en-US' }, // Adult male neural voice
        'robert-senior': { name: 'en-US-Neural2-A', gender: 'MALE', languageCode: 'en-US' }, // Senior male neural voice
        'grace-uk': { name: 'en-GB-Neural2-A', gender: 'FEMALE', languageCode: 'en-GB' }, // British female neural voice
        'james-uk': { name: 'en-GB-Neural2-B', gender: 'MALE', languageCode: 'en-GB' } // British male neural voice
      };

      const selectedVoice = voiceMapping[voiceId] || voiceMapping['sarah-young'];

      // Call Google Cloud TTS API
      const apiKey = process.env.GOOGLE_CLOUD_TTS_API_KEY || process.env.GEMINI_API_KEY;
      const ttsResponse = await fetch(
        `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            input: { text },
            voice: {
              languageCode: selectedVoice.languageCode,
              name: selectedVoice.name,
              ssmlGender: selectedVoice.gender
            },
            audioConfig: {
              audioEncoding: 'MP3',
              speakingRate: 0.85, // Slightly slower for better comprehension
              pitch: 0.0,
              volumeGainDb: 2.0, // Slightly louder
              effectsProfileId: ['headphone-class-device'] // Better audio quality
            }
          })
        }
      );

      if (!ttsResponse.ok) {
        console.error('Google TTS API error:', await ttsResponse.text());
        // Fallback to optimized timing data
        const speechData = await synthesizeText(text, languageCode);
        return res.json({ speechData, fallback: true });
      }

      const ttsData = await ttsResponse.json();
      
      // Also generate timing data for word highlighting
      const speechData = await synthesizeText(text, languageCode);
      
      res.json({ 
        audioContent: ttsData.audioContent,
        speechData,
        voice: selectedVoice.name
      });
      
    } catch (error) {
      console.error('TTS Error:', error);
      // Fallback to basic timing data
      const speechData = await synthesizeText(text, languageCode);
      res.json({ speechData, fallback: true });
    }
  });

  // Scripture audio generation endpoint
  app.post("/api/scripture/audio", async (req, res) => {
    try {
      const { reference, text } = req.body;
      
      if (!reference || !text) {
        return res.status(400).json({ error: "Missing required fields: reference, text" });
      }

      const audioData = await generateScriptureAudio(reference, text);
      res.json({ audioData });
      
    } catch (error) {
      console.error('Scripture Audio Error:', error);
      res.status(500).json({ error: "Failed to generate scripture audio" });
    }
  });

  // Speech recognition endpoint for memorization testing
  app.post("/api/stt/recognize", async (req, res) => {
    try {
      const { transcript, expectedText } = req.body;
      
      if (!transcript || !expectedText) {
        return res.status(400).json({ error: "Missing required fields: transcript, expectedText" });
      }

      const recognitionResult = await recognizeSpeech(transcript, expectedText);
      res.json(recognitionResult);
      
    } catch (error) {
      console.error('STT Error:', error);
      res.status(500).json({ error: "Failed to recognize speech" });
    }
  });

  // Donation creation endpoint
  app.post("/api/donations", async (req, res) => {
    try {
      const donationData = insertDonationSchema.parse(req.body);
      const donation = await storage.createDonation(donationData);
      
      // In a real implementation, you would create a Stripe checkout session here
      // For now, we'll just return the donation record
      const stripePublishableKey = process.env.STRIPE_PUBLISHABLE_KEY || process.env.STRIPE_PK || "";
      
      res.json({ 
        donation,
        stripePublishableKey,
        message: "Donation record created. In production, this would redirect to Stripe Checkout."
      });
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid donation data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to create donation" });
      }
    }
  });

  // Get donation statistics (for admin/transparency)
  app.get("/api/donations/stats", async (req, res) => {
    try {
      const donations = await storage.getDonations();
      const totalAmount = donations.reduce((sum, d) => sum + parseFloat(d.amount), 0);
      const monthlyDonations = donations.filter(d => d.type === 'monthly').length;
      const oneTimeDonations = donations.filter(d => d.type === 'oneTime').length;
      
      res.json({
        totalAmount,
        totalDonations: donations.length,
        monthlyDonations,
        oneTimeDonations
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to get donation statistics" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
