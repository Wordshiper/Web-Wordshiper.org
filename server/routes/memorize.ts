import express from "express";
import path from "path";

const router = express.Router();

// Serve JSON of demo verses (shared/verses.json)
router.get("/verses", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "shared", "verses.json"));
});

// Google Cloud TTS proxy endpoint for memorization
router.post("/tts", async (req, res) => {
  try {
    const { text, voice_id, language_code = 'en-US' } = req.body || {};
    
    if (!text) {
      return res.status(400).json({ error: "Missing text" });
    }

    // Voice mapping for Google Cloud TTS Neural2 voices
    const voiceMapping: Record<string, { name: string, gender: string, languageCode: string }> = {
      'sarah-young': { name: 'en-US-Neural2-F', gender: 'FEMALE', languageCode: 'en-US' },
      'emily-adult': { name: 'en-US-Neural2-H', gender: 'FEMALE', languageCode: 'en-US' },
      'margaret-senior': { name: 'en-US-Neural2-G', gender: 'FEMALE', languageCode: 'en-US' },
      'david-young': { name: 'en-US-Neural2-D', gender: 'MALE', languageCode: 'en-US' },
      'michael-adult': { name: 'en-US-Neural2-J', gender: 'MALE', languageCode: 'en-US' },
      'robert-senior': { name: 'en-US-Neural2-A', gender: 'MALE', languageCode: 'en-US' },
      'grace-uk': { name: 'en-GB-Neural2-A', gender: 'FEMALE', languageCode: 'en-GB' },
      'james-uk': { name: 'en-GB-Neural2-B', gender: 'MALE', languageCode: 'en-GB' },
      // Korean voices
      'korean-female': { name: 'ko-KR-Neural2-A', gender: 'FEMALE', languageCode: 'ko-KR' },
      'korean-male': { name: 'ko-KR-Neural2-C', gender: 'MALE', languageCode: 'ko-KR' }
    };

    const selectedVoice = voiceMapping[voice_id] || voiceMapping['sarah-young'];
    const apiKey = process.env.GOOGLE_CLOUD_TTS_API_KEY || process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "Missing Google Cloud API key" });
    }

    // Call Google Cloud TTS API
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
            speakingRate: 0.85,
            pitch: 0.0,
            volumeGainDb: 2.0,
            effectsProfileId: ['headphone-class-device']
          }
        })
      }
    );

    if (!ttsResponse.ok) {
      const errorText = await ttsResponse.text();
      console.error('Google TTS API error:', errorText);
      return res.status(ttsResponse.status).json({ error: errorText });
    }

    const ttsData = await ttsResponse.json();
    
    // Return audio content as base64
    res.json({ 
      audioContent: ttsData.audioContent,
      voice: selectedVoice.name
    });
    
  } catch (err: any) {
    console.error("TTS proxy error:", err);
    res.status(500).json({ error: String(err?.message || err) });
  }
});

export default router;
