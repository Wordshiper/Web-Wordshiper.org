import { Link } from "wouter";
import { useLanguage } from "@/hooks/use-language";
import wordshiperLogoEn from "@assets/Wordshiper-Logo-E-450_1760638357068.png";
import wordshiperLogoKo from "@assets/wordshiper-logo-K-450_1760639053287.png";

export default function Footer() {
  const { currentLanguage } = useLanguage();
  const wordshiperLogo = currentLanguage === 'ko' ? wordshiperLogoKo : wordshiperLogoEn;
  return (
    <footer className="bg-gray-900 text-white py-16" data-testid="footer-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={wordshiperLogo} 
                alt="Wordshiper Logo" 
                className="w-12 h-12"
              />
              <div>
                <div className="font-bold text-2xl">Wordshiper</div>
                <div className="text-sm text-gray-400">Bible memorize to Worship God</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Empowering believers worldwide to memorize Scripture through innovative AI technology, 
              fostering spiritual growth and global unity in God's Word.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.017 8.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M.5 8.5a8 8 0 1116 0 8 8 0 01-16 0zm8-6.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Ministry</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors" data-testid="link-about">About Us</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors" data-testid="link-mission">Our Mission</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors" data-testid="link-leadership">Leadership Team</Link></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-church-partners">Church Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-testimonies">Testimonies</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">5 Union Square West FRNT 1 #1299<br />New York, NY 10003 U.S.A</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@wordshiper.org" className="hover:text-white transition-colors text-sm">info@wordshiper.org</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Tax-Deductible Notice - Prominent */}
        <div className="border-t border-gray-800 pt-8 pb-6">
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <p className="text-gray-200 text-base font-medium mb-2">
              Wordshiper Ministry is a 501(c)(3) nonprofit organization
            </p>
            <p className="text-gray-300 text-sm">
              Donations are tax-deductible as permitted by law • EIN: <span className="font-semibold text-white">33-1561112</span>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2025 Wordshiper. All rights reserved.</p>
            <p className="text-gray-400 text-sm">
              Made with <span className="text-red-500">❤️</span> for God's Kingdom
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
