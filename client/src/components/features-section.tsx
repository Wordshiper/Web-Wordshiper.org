import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { 
  Brain, 
  Globe, 
  Mic, 
  Users, 
  Heart, 
  BookOpen, 
  Download, 
  Smartphone,
  Cloud,
  Lock,
  Zap,
  Target
} from "lucide-react";

export default function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Advanced algorithms adapt to your learning pace and preferred memorization style for optimal Scripture retention.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Globe,
      title: "Global Language Support",
      description: "Access 380+ premium AI voices across 50+ languages, bringing Scripture to life in your native tongue.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Mic,
      title: "Natural Voice Technology",
      description: "Google's WaveNet and Neural2 engines deliver human-like speech quality for immersive Scripture experience.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Users,
      title: "Community Connection",
      description: "Join a global network of believers sharing testimonies, progress, and encouragement in Scripture memorization.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Heart,
      title: "Ministry Focus",
      description: "Non-profit ministry dedicated to spreading God's Word through innovative technology and authentic spiritual growth.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Library",
      description: "Access thousands of verses, chapters, and books with accurate translations in multiple language variants.",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: Cloud,
      title: "Cloud Synchronization",
      description: "Your progress, bookmarks, and personal notes sync seamlessly across all your devices for continuous learning.",
      color: "bg-cyan-100 text-cyan-600"
    },
    {
      icon: Lock,
      title: "Privacy & Security",
      description: "Your spiritual journey remains private with enterprise-grade security and no data selling to third parties.",
      color: "bg-gray-100 text-gray-600"
    },
    {
      icon: Zap,
      title: "Instant Access",
      description: "No downloads or installations required. Access your Scripture memorization tools instantly from any web browser.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Target,
      title: "Progress Tracking",
      description: "Set goals, track memorization milestones, and celebrate spiritual growth with detailed analytics and insights.",
      color: "bg-emerald-100 text-emerald-600"
    }
  ];

  const testimonials = [
    {
      text: "Wordshiper has revolutionized my daily devotions. The Korean TTS feature helps me memorize verses perfectly.",
      author: "Sarah Kim",
      location: "Seoul, South Korea",
      flag: "🇰🇷"
    },
    {
      text: "As a pastor, I use Wordshiper to help our international congregation learn Scripture in their native languages.",
      author: "Pastor Miguel Rodriguez",
      location: "Mexico City, Mexico",
      flag: "🇲🇽"
    },
    {
      text: "The AI voices are so natural! My children love hearing Bible stories in perfect French pronunciation.",
      author: "Marie Dubois",
      location: "Paris, France",
      flag: "🇫🇷"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Spiritual Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience Scripture memorization like never before with our comprehensive suite of AI-powered tools designed specifically for believers worldwide.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 border-gray-200 group">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={24} />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Technology Showcase */}
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 md:p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Powered by Google Cloud AI
            </h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Leveraging the world's most advanced text-to-speech technology to bring Scripture to life with unprecedented quality and naturalness.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-4">
                <Brain className="w-12 h-12 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">WaveNet Technology</h4>
                <p className="text-sm opacity-90">Neural networks trained on human speech patterns</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-4">
                <Zap className="w-12 h-12 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Real-time Synthesis</h4>
                <p className="text-sm opacity-90">Instant audio generation with zero delays</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-4">
                <Globe className="w-12 h-12 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Global Infrastructure</h4>
                <p className="text-sm opacity-90">Available worldwide with 99.9% uptime</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Transforming Lives Globally
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-50 border-0 h-full">
                <CardContent className="p-6">
                  <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{testimonial.flag}</span>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Coming Soon Features */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Coming Soon to Wordshiper
            </h3>
            <p className="text-xl text-gray-600">
              Exciting new features in development to enhance your Scripture memorization journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <Smartphone className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Mobile App</h4>
              <p className="text-sm text-gray-600">Native iOS and Android apps with offline capabilities</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <Users className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Study Groups</h4>
              <p className="text-sm text-gray-600">Create and join virtual memorization groups</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <Target className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Smart Goals</h4>
              <p className="text-sm text-gray-600">AI-powered personalized memorization plans</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={() => scrollToSection('volunteer')}
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3"
            >
              Join Our Beta Testing Program
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}