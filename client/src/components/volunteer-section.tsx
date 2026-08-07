import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useLanguage } from "@/hooks/use-language";
import { Heart, Users, Globe, BookOpen, Mic, Code, Palette, MessageCircle } from "lucide-react";

export default function VolunteerSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interests: [] as string[],
    message: ""
  });
  const { toast } = useToast();
  const { t } = useLanguage();

  const volunteerMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/volunteers", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Thank You for Your Heart to Serve!",
        description: "We will contact you soon with next steps to join our ministry team.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        interests: [],
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Error",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
      console.error('Volunteer error:', error);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in your name and email address.",
        variant: "destructive",
      });
      return;
    }

    volunteerMutation.mutate(formData);
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }));
  };

  const roleOptions = [
    {
      icon: Code,
      title: "Technology Development",
      description: "Help build and maintain our AI platform",
      value: "technology"
    },
    {
      icon: Mic,
      title: "Voice & Audio",
      description: "TTS quality testing and voice coaching",
      value: "voice"
    },
    {
      icon: Globe,
      title: "Translation & Localization",
      description: "Translate content into your native language",
      value: "translation"
    },
    {
      icon: BookOpen,
      title: "Content & Scripture",
      description: "Curate and review biblical content",
      value: "content"
    },
    {
      icon: Palette,
      title: "Design & Media",
      description: "Create visual assets and user experiences",
      value: "design"
    },
    {
      icon: MessageCircle,
      title: "Community Support",
      description: "Help users and moderate community spaces",
      value: "community"
    },
    {
      icon: Users,
      title: "Outreach & Partnership",
      description: "Connect with churches and organizations",
      value: "outreach"
    },
    {
      icon: Heart,
      title: "Prayer & Spiritual Care",
      description: "Provide prayer support and spiritual guidance",
      value: "prayer"
    }
  ];

  const additionalInterests = [
    { label: "Marketing & Social Media", value: "marketing" },
    { label: "Event Coordination", value: "events" },
    { label: "Fundraising & Donations", value: "fundraising" },
    { label: "Legal & Compliance", value: "legal" },
    { label: "Education & Training", value: "education" },
    { label: "Research & Analytics", value: "research" }
  ];

  return (
    <section id="volunteer" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Join God's Global Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of a worldwide ministry transforming hearts through Scripture memorization. 
            Your unique gifts can help spread God's Word to every nation and tongue.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Ministry Opportunities */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Ministry Opportunities</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {roleOptions.map((role, index) => {
                const IconComponent = role.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <div className="bg-primary text-white p-2 rounded-lg">
                          <IconComponent size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{role.title}</h4>
                          <p className="text-sm text-gray-600">{role.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Impact Stats */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-100 border-0">
              <CardContent className="p-6">
                <h4 className="font-bold text-gray-900 mb-4">Our Global Impact</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-gray-600">Languages Supported</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">150+</div>
                    <div className="text-sm text-gray-600">Countries Reached</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">10,000+</div>
                    <div className="text-sm text-gray-600">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">380+</div>
                    <div className="text-sm text-gray-600">AI Voices Available</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Volunteer Form */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-0 shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-gray-900">Answer the Call to Serve</CardTitle>
              <p className="text-gray-600">Join thousands of volunteers making Scripture accessible worldwide</p>
            </CardHeader>
            
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="volunteer-name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </Label>
                    <Input
                      id="volunteer-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your full name"
                      className="border-gray-300 focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="volunteer-email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </Label>
                    <Input
                      id="volunteer-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your.email@example.com"
                      className="border-gray-300 focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="volunteer-phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number (Optional)
                  </Label>
                  <Input
                    id="volunteer-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+1 (555) 123-4567"
                    className="border-gray-300 focus:border-primary"
                  />
                </div>

                <div>
                  <Label className="block text-sm font-semibold text-gray-700 mb-3">
                    Areas of Interest (Select all that apply)
                  </Label>
                  <div className="grid grid-cols-1 gap-3">
                    {roleOptions.map((option) => (
                      <label key={option.value} className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(option.value)}
                          onChange={(e) => handleInterestChange(option.value, e.target.checked)}
                          className="rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <div>
                          <span className="font-medium text-gray-900">{option.title}</span>
                          <p className="text-sm text-gray-600">{option.description}</p>
                        </div>
                      </label>
                    ))}
                    
                    {additionalInterests.map((option) => (
                      <label key={option.value} className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(option.value)}
                          onChange={(e) => handleInterestChange(option.value, e.target.checked)}
                          className="rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="font-medium text-gray-900">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="volunteer-message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Heart & Vision (Optional)
                  </Label>
                  <Textarea
                    id="volunteer-message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Share your testimony, experience, or how you feel called to serve in this ministry..."
                    rows={4}
                    className="border-gray-300 focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                  disabled={volunteerMutation.isPending}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">
                    {volunteerMutation.isPending ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Submitting...
                      </div>
                    ) : (
                      "Submit Application & Join the Mission"
                    )}
                  </span>
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to be contacted about volunteer opportunities. 
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-primary to-blue-600 text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            "Therefore go and make disciples of all nations..." — Matthew 28:19
          </h3>
          <p className="text-lg opacity-90 mb-6">
            Every volunteer, every prayer, every contribution helps fulfill the Great Commission through technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="bg-white text-primary hover:bg-gray-100 border-2 border-white hover:border-gray-200 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold">
              Learn More About Our Mission
            </Button>
            <Button variant="outline" className="bg-white text-primary hover:bg-gray-100 border-2 border-white hover:border-gray-200 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold">
              Download Ministry Resources
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}