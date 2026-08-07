// 고급스러운 기독교 테마 SVG 일러스트레이션 컴포넌트

export const BibleMemoryIllustration = ({ className = "w-64 h-64" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* 배경 원형 그라데이션 */}
    <defs>
      <radialGradient id="bgGradient" cx="0.5" cy="0.3" r="0.8">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1"/>
        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.05"/>
      </radialGradient>
      <linearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E40AF"/>
        <stop offset="100%" stopColor="#3730A3"/>
      </linearGradient>
      <linearGradient id="lightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FEF3C7"/>
        <stop offset="100%" stopColor="#F59E0B"/>
      </linearGradient>
    </defs>
    
    {/* 배경 */}
    <circle cx="200" cy="200" r="190" fill="url(#bgGradient)"/>
    
    {/* 빛 효과 */}
    <path d="M200 50 L220 150 L200 180 L180 150 Z" fill="url(#lightGradient)" opacity="0.6"/>
    <path d="M200 50 L240 130 L200 180 L160 130 Z" fill="url(#lightGradient)" opacity="0.3"/>
    
    {/* 성경책 */}
    <rect x="120" y="180" width="160" height="120" rx="8" fill="url(#bookGradient)" stroke="#1E3A8A" strokeWidth="2"/>
    <rect x="125" y="185" width="150" height="110" rx="6" fill="#2563EB" opacity="0.8"/>
    
    {/* 책 페이지들 */}
    <rect x="130" y="190" width="140" height="100" rx="4" fill="#FFFFFF" opacity="0.95"/>
    <rect x="135" y="195" width="130" height="90" rx="3" fill="#F8FAFC"/>
    
    {/* 텍스트 라인들 (성경 구절을 나타냄) */}
    <rect x="145" y="210" width="80" height="3" rx="1.5" fill="#374151" opacity="0.7"/>
    <rect x="145" y="220" width="95" height="3" rx="1.5" fill="#374151" opacity="0.7"/>
    <rect x="145" y="230" width="70" height="3" rx="1.5" fill="#374151" opacity="0.7"/>
    <rect x="145" y="240" width="90" height="3" rx="1.5" fill="#374151" opacity="0.7"/>
    <rect x="145" y="250" width="85" height="3" rx="1.5" fill="#374151" opacity="0.7"/>
    
    {/* 하트 모양 (말씀이 마음에 새겨짐을 상징) */}
    <path d="M200 260 C190 250, 175 250, 175 265 C175 280, 200 295, 200 295 C200 295, 225 280, 225 265 C225 250, 210 250, 200 260 Z" 
          fill="#EF4444" opacity="0.8"/>
    
    {/* 십자가 (작고 우아하게) */}
    <rect x="255" y="200" width="3" height="20" rx="1.5" fill="#D97706"/>
    <rect x="248" y="206" width="17" height="3" rx="1.5" fill="#D97706"/>
    
    {/* 기도하는 손 실루엣 */}
    <path d="M320 220 C325 215, 330 218, 332 225 L335 240 C336 245, 334 250, 330 252 L325 254 C320 256, 315 254, 313 250 L310 235 C308 225, 312 220, 320 220 Z" 
          fill="#6B7280" opacity="0.6"/>
    <path d="M315 225 C320 220, 325 223, 327 230 L330 245 C331 250, 329 255, 325 257 L320 259 C315 261, 310 259, 308 255 L305 240 C303 230, 307 225, 315 225 Z" 
          fill="#6B7280" opacity="0.6"/>
  </svg>
);

export const FamilyWorshipIllustration = ({ className = "w-64 h-64" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="familyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#059669"/>
        <stop offset="100%" stopColor="#047857"/>
      </linearGradient>
      <radialGradient id="lightRadial" cx="0.5" cy="0.3" r="0.6">
        <stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.8"/>
        <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.2"/>
      </radialGradient>
    </defs>
    
    {/* 배경 따뜻한 빛 */}
    <circle cx="200" cy="150" r="120" fill="url(#lightRadial)"/>
    
    {/* 가족 실루엣들 */}
    {/* 아버지 */}
    <circle cx="170" cy="140" r="18" fill="url(#familyGradient)"/>
    <rect x="160" y="155" width="20" height="35" rx="10" fill="url(#familyGradient)"/>
    
    {/* 어머니 */}
    <circle cx="230" cy="140" r="16" fill="url(#familyGradient)"/>
    <rect x="222" y="155" width="16" height="32" rx="8" fill="url(#familyGradient)"/>
    
    {/* 자녀 1 */}
    <circle cx="150" cy="170" r="12" fill="url(#familyGradient)" opacity="0.9"/>
    <rect x="144" y="180" width="12" height="25" rx="6" fill="url(#familyGradient)" opacity="0.9"/>
    
    {/* 자녀 2 */}
    <circle cx="250" cy="170" r="10" fill="url(#familyGradient)" opacity="0.9"/>
    <rect x="246" y="178" width="8" height="20" rx="4" fill="url(#familyGradient)" opacity="0.9"/>
    
    {/* 성경책 (가족 중앙에) */}
    <rect x="185" y="200" width="30" height="20" rx="2" fill="#1E40AF"/>
    <rect x="187" y="202" width="26" height="16" rx="1" fill="#FFFFFF"/>
    <rect x="189" y="205" width="15" height="1" fill="#374151" opacity="0.5"/>
    <rect x="189" y="208" width="18" height="1" fill="#374151" opacity="0.5"/>
    <rect x="189" y="211" width="12" height="1" fill="#374151" opacity="0.5"/>
    
    {/* 기도 손 모양들 */}
    <ellipse cx="175" cy="175" rx="3" ry="8" fill="#374151" opacity="0.6" transform="rotate(-20 175 175)"/>
    <ellipse cx="179" cy="175" rx="3" ry="8" fill="#374151" opacity="0.6" transform="rotate(20 179 175)"/>
    
    <ellipse cx="225" cy="175" rx="3" ry="8" fill="#374151" opacity="0.6" transform="rotate(-20 225 175)"/>
    <ellipse cx="229" cy="175" rx="3" ry="8" fill="#374151" opacity="0.6" transform="rotate(20 229 175)"/>
    
    {/* 말씀 구름 효과 */}
    <circle cx="200" cy="100" r="40" fill="#E0E7FF" opacity="0.6"/>
    <circle cx="180" cy="90" r="25" fill="#E0E7FF" opacity="0.4"/>
    <circle cx="220" cy="95" r="30" fill="#E0E7FF" opacity="0.5"/>
    
    {/* 하트들 (사랑을 나타냄) */}
    <path d="M200 85 C196 81, 190 81, 190 87 C190 93, 200 103, 200 103 C200 103, 210 93, 210 87 C210 81, 204 81, 200 85 Z" 
          fill="#EF4444" opacity="0.7"/>
  </svg>
);

export const GlobalMissionIllustration = ({ className = "w-64 h-64" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0EA5E9"/>
        <stop offset="100%" stopColor="#0284C7"/>
      </linearGradient>
      <linearGradient id="crossGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B"/>
        <stop offset="100%" stopColor="#D97706"/>
      </linearGradient>
    </defs>
    
    {/* 지구 */}
    <circle cx="200" cy="200" r="100" fill="url(#globeGradient)"/>
    
    {/* 대륙들 */}
    <path d="M150 150 C160 140, 180 145, 190 155 C200 165, 185 175, 175 170 C165 165, 155 160, 150 150 Z" 
          fill="#22C55E" opacity="0.8"/>
    <path d="M220 180 C235 175, 250 185, 245 200 C240 215, 225 210, 230 195 C235 180, 225 185, 220 180 Z" 
          fill="#22C55E" opacity="0.8"/>
    <path d="M170 220 C180 215, 195 225, 190 240 C185 255, 170 250, 175 235 C180 220, 175 225, 170 220 Z" 
          fill="#22C55E" opacity="0.8"/>
    
    {/* 십자가 (지구 위에 빛나는) */}
    <rect x="195" y="120" width="10" height="60" rx="5" fill="url(#crossGradient)" opacity="0.9"/>
    <rect x="170" y="145" width="60" height="10" rx="5" fill="url(#crossGradient)" opacity="0.9"/>
    
    {/* 빛 광선들 */}
    <path d="M200 50 L205 100 L200 110 L195 100 Z" fill="#FEF3C7" opacity="0.7"/>
    <path d="M350 200 L300 205 L290 200 L300 195 Z" fill="#FEF3C7" opacity="0.7"/>
    <path d="M200 350 L195 300 L200 290 L205 300 Z" fill="#FEF3C7" opacity="0.7"/>
    <path d="M50 200 L100 195 L110 200 L100 205 Z" fill="#FEF3C7" opacity="0.7"/>
    
    {/* 대각선 광선들 */}
    <path d="M120 120 L160 160 L155 165 L115 125 Z" fill="#FEF3C7" opacity="0.5"/>
    <path d="M280 120 L240 160 L245 165 L285 125 Z" fill="#FEF3C7" opacity="0.5"/>
    <path d="M120 280 L160 240 L155 235 L115 275 Z" fill="#FEF3C7" opacity="0.5"/>
    <path d="M280 280 L240 240 L245 235 L285 275 Z" fill="#FEF3C7" opacity="0.5"/>
    
    {/* 말씀이 퍼져나가는 파동 */}
    <circle cx="200" cy="200" r="120" fill="none" stroke="#8B5CF6" strokeWidth="2" opacity="0.3"/>
    <circle cx="200" cy="200" r="140" fill="none" stroke="#8B5CF6" strokeWidth="1" opacity="0.2"/>
    <circle cx="200" cy="200" r="160" fill="none" stroke="#8B5CF6" strokeWidth="1" opacity="0.1"/>
  </svg>
);

export const CrossIllustration = ({ className = "w-64 h-64" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="crossBg" cx="0.5" cy="0.3" r="0.8">
        <stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.8"/>
        <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.2"/>
      </radialGradient>
      <linearGradient id="crossGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B"/>
        <stop offset="100%" stopColor="#D97706"/>
      </linearGradient>
    </defs>
    
    {/* 배경 빛 */}
    <circle cx="200" cy="200" r="150" fill="url(#crossBg)" opacity="0.6"/>
    
    {/* 십자가 */}
    <rect x="185" y="100" width="30" height="200" rx="15" fill="url(#crossGold)" stroke="#92400E" strokeWidth="2"/>
    <rect x="120" y="175" width="160" height="30" rx="15" fill="url(#crossGold)" stroke="#92400E" strokeWidth="2"/>
    
    {/* 십자가 위 장식 */}
    <circle cx="200" cy="105" r="8" fill="#FBBF24" opacity="0.8"/>
    
    {/* 빛 광선들 */}
    <path d="M200 50 L210 90 L200 100 L190 90 Z" fill="#FEF3C7" opacity="0.8"/>
    <path d="M350 200 L310 210 L300 200 L310 190 Z" fill="#FEF3C7" opacity="0.8"/>
    <path d="M200 350 L190 310 L200 300 L210 310 Z" fill="#FEF3C7" opacity="0.8"/>
    <path d="M50 200 L90 190 L100 200 L90 210 Z" fill="#FEF3C7" opacity="0.8"/>
    
    {/* 대각선 빛 */}
    <path d="M100 100 L140 140 L135 145 L95 105 Z" fill="#FEF3C7" opacity="0.6"/>
    <path d="M300 100 L260 140 L265 145 L305 105 Z" fill="#FEF3C7" opacity="0.6"/>
    <path d="M100 300 L140 260 L135 255 L95 295 Z" fill="#FEF3C7" opacity="0.6"/>
    <path d="M300 300 L260 260 L265 255 L305 295 Z" fill="#FEF3C7" opacity="0.6"/>
  </svg>
);

export const PrayingHandsIllustration = ({ className = "w-64 h-64" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="handsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B7355"/>
        <stop offset="100%" stopColor="#6B5B47"/>
      </linearGradient>
      <radialGradient id="holyLight" cx="0.5" cy="0.2" r="0.8">
        <stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.9"/>
        <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.1"/>
      </radialGradient>
    </defs>
    
    {/* 배경 성스러운 빛 */}
    <ellipse cx="200" cy="120" rx="180" ry="100" fill="url(#holyLight)"/>
    
    {/* 기도하는 손들 */}
    {/* 왼손 */}
    <path d="M160 150 C150 140, 145 160, 150 180 L155 220 C158 240, 162 260, 168 280 C172 295, 178 300, 185 305 C190 308, 195 310, 200 312" 
          fill="url(#handsGradient)" stroke="#5D4E37" strokeWidth="1"/>
    
    {/* 오른손 */}
    <path d="M240 150 C250 140, 255 160, 250 180 L245 220 C242 240, 238 260, 232 280 C228 295, 222 300, 215 305 C210 308, 205 310, 200 312" 
          fill="url(#handsGradient)" stroke="#5D4E37" strokeWidth="1"/>
    
    {/* 손가락들 디테일 */}
    <path d="M150 180 C155 175, 160 180, 158 190 L155 220" fill="url(#handsGradient)" stroke="#5D4E37" strokeWidth="0.5"/>
    <path d="M250 180 C245 175, 240 180, 242 190 L245 220" fill="url(#handsGradient)" stroke="#5D4E37" strokeWidth="0.5"/>
    
    {/* 성령의 비둘기 */}
    <path d="M200 80 C195 75, 190 78, 192 85 L195 90 C190 88, 185 92, 188 98 C192 95, 198 95, 202 98 C205 92, 200 88, 195 90 L198 85 C200 78, 205 75, 200 80 Z" 
          fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" opacity="0.9"/>
    
    {/* 십자가 (작게) */}
    <rect x="198" y="50" width="4" height="20" rx="2" fill="#D97706"/>
    <rect x="190" y="56" width="20" height="4" rx="2" fill="#D97706"/>
    
    {/* 기도 텍스트 효과 */}
    <circle cx="180" cy="120" r="2" fill="#F59E0B" opacity="0.6"/>
    <circle cx="220" cy="110" r="1.5" fill="#F59E0B" opacity="0.7"/>
    <circle cx="160" cy="130" r="1" fill="#F59E0B" opacity="0.8"/>
    <circle cx="240" cy="125" r="1.5" fill="#F59E0B" opacity="0.5"/>
  </svg>
);

export const DailyRoutineIllustration = ({ className = "w-64 h-64" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="clockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F3F4F6"/>
        <stop offset="100%" stopColor="#E5E7EB"/>
      </linearGradient>
      <linearGradient id="sunGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FCD34D"/>
        <stop offset="100%" stopColor="#F59E0B"/>
      </linearGradient>
    </defs>
    
    {/* 시계 배경 */}
    <circle cx="200" cy="200" r="120" fill="url(#clockGradient)" stroke="#9CA3AF" strokeWidth="3"/>
    <circle cx="200" cy="200" r="110" fill="#FFFFFF"/>
    
    {/* 시계 숫자들 */}
    <text x="200" y="110" textAnchor="middle" className="text-lg font-bold fill-gray-700">12</text>
    <text x="290" y="210" textAnchor="middle" className="text-lg font-bold fill-gray-700">3</text>
    <text x="200" y="300" textAnchor="middle" className="text-lg font-bold fill-gray-700">6</text>
    <text x="120" y="210" textAnchor="middle" className="text-lg font-bold fill-gray-700">9</text>
    
    {/* 시계 바늘들 */}
    <line x1="200" y1="200" x2="200" y2="140" stroke="#374151" strokeWidth="4" strokeLinecap="round"/>
    <line x1="200" y1="200" x2="250" y2="200" stroke="#374151" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="200" cy="200" r="8" fill="#374151"/>
    
    {/* 아침 태양 */}
    <circle cx="150" cy="150" r="25" fill="url(#sunGradient)"/>
    <path d="M150 120 L150 130 M130 130 L140 140 M130 170 L140 160 M150 180 L150 170 M170 170 L160 160 M170 130 L160 140" 
          stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
    
    {/* 점심 해 */}
    <circle cx="280" cy="120" r="20" fill="url(#sunGradient)"/>
    <path d="M280 95 L280 105 M265 105 L273 113 M265 135 L273 127 M280 145 L280 135 M295 135 L287 127 M295 105 L287 113" 
          stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
    
    {/* 저녁 달 */}
    <circle cx="250" cy="280" r="18" fill="#E5E7EB"/>
    <circle cx="245" cy="275" r="15" fill="#F9FAFB"/>
    <circle cx="240" cy="270" r="3" fill="#D1D5DB"/>
    <circle cx="248" cy="282" r="2" fill="#D1D5DB"/>
    
    {/* 별들 */}
    <path d="M290 260 L292 265 L297 265 L293 268 L295 273 L290 270 L285 273 L287 268 L283 265 L288 265 Z" 
          fill="#FCD34D"/>
    <path d="M320 290 L321 293 L324 293 L322 295 L323 298 L320 296 L317 298 L318 295 L316 293 L319 293 Z" 
          fill="#FCD34D"/>
    
    {/* 기도 상징 */}
    <ellipse cx="140" cy="250" rx="4" ry="12" fill="#6B7280" opacity="0.7" transform="rotate(-20 140 250)"/>
    <ellipse cx="148" cy="250" rx="4" ry="12" fill="#6B7280" opacity="0.7" transform="rotate(20 148 250)"/>
    
    {/* 성경 상징 */}
    <rect x="120" y="280" width="20" height="15" rx="2" fill="#1E40AF"/>
    <rect x="122" y="282" width="16" height="11" rx="1" fill="#FFFFFF"/>
  </svg>
);