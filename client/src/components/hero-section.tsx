import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDonate = () => {
    const element = document.getElementById('donate');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-orange-500/5"></div>
      <div className="absolute inset-0 bg-pattern"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full mb-6">
              <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-primary font-medium">AI-Powered Bible Memorization Ministry</span>
            </div>
            
            <h1 className="font-bold text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
              Memorize the Word. <br />
              <span className="text-primary">Change the World.</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join thousands of believers worldwide using AI-powered voice technology to 
              memorize Scripture, strengthen faith, and share God's love through community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToDemo}
                className="bg-primary text-white px-8 py-4 text-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 5v10l7-5-7-5z" />
                </svg>
                Try TTS Demo
              </Button>
              
              <Button 
                variant="outline"
                onClick={scrollToDonate}
                className="border-2 border-primary text-primary px-8 py-4 text-lg font-semibold hover:bg-primary hover:text-white transition-all"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                Support Ministry
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Diverse group of people reading and studying Bible together in peaceful setting" 
              className="rounded-2xl shadow-2xl w-full animate-float"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H2z" />
                    <path d="M13 7a3 3 0 100-6 3 3 0 000 6zm-2 2a5 5 0 015 5v1h-4a1 1 0 01-1-1v-5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">10,000+ Believers</div>
                  <div className="text-sm text-gray-600">Memorizing Together</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
