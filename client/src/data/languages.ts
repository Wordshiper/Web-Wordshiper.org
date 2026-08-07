export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  ttsCode?: string;
  region?: string;
}

export const languages: Language[] = [
  // Major languages with TTS support
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸', ttsCode: 'en-US', region: 'US' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷', ttsCode: 'ko-KR', region: 'KR' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', ttsCode: 'es-ES', region: 'ES' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', ttsCode: 'fr-FR', region: 'FR' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', ttsCode: 'de-DE', region: 'DE' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', ttsCode: 'ja-JP', region: 'JP' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳', ttsCode: 'zh-CN', region: 'CN' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', ttsCode: 'ar-XA', region: 'SA' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', ttsCode: 'hi-IN', region: 'IN' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷', ttsCode: 'pt-BR', region: 'BR' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺', ttsCode: 'ru-RU', region: 'RU' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', ttsCode: 'it-IT', region: 'IT' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱', ttsCode: 'nl-NL', region: 'NL' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱', ttsCode: 'pl-PL', region: 'PL' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷', ttsCode: 'tr-TR', region: 'TR' },
  { code: 'sv', name: 'Swedish', nativeName: 'Svenska', flag: '🇸🇪', ttsCode: 'sv-SE', region: 'SE' },
  { code: 'da', name: 'Danish', nativeName: 'Dansk', flag: '🇩🇰', ttsCode: 'da-DK', region: 'DK' },
  { code: 'no', name: 'Norwegian', nativeName: 'Norsk', flag: '🇳🇴', ttsCode: 'nb-NO', region: 'NO' },
  { code: 'fi', name: 'Finnish', nativeName: 'Suomi', flag: '🇫🇮', ttsCode: 'fi-FI', region: 'FI' },
  { code: 'cs', name: 'Czech', nativeName: 'Čeština', flag: '🇨🇿', ttsCode: 'cs-CZ', region: 'CZ' },
  { code: 'sk', name: 'Slovak', nativeName: 'Slovenčina', flag: '🇸🇰', ttsCode: 'sk-SK', region: 'SK' },
  { code: 'hu', name: 'Hungarian', nativeName: 'Magyar', flag: '🇭🇺', ttsCode: 'hu-HU', region: 'HU' },
  { code: 'ro', name: 'Romanian', nativeName: 'Română', flag: '🇷🇴', ttsCode: 'ro-RO', region: 'RO' },
  { code: 'bg', name: 'Bulgarian', nativeName: 'Български', flag: '🇧🇬', ttsCode: 'bg-BG', region: 'BG' },
  { code: 'hr', name: 'Croatian', nativeName: 'Hrvatski', flag: '🇭🇷', ttsCode: 'hr-HR', region: 'HR' },
  { code: 'sr', name: 'Serbian', nativeName: 'Српски', flag: '🇷🇸', ttsCode: 'sr-RS', region: 'RS' },
  { code: 'sl', name: 'Slovenian', nativeName: 'Slovenščina', flag: '🇸🇮', ttsCode: 'sl-SI', region: 'SI' },
  { code: 'lt', name: 'Lithuanian', nativeName: 'Lietuvių', flag: '🇱🇹', ttsCode: 'lt-LT', region: 'LT' },
  { code: 'lv', name: 'Latvian', nativeName: 'Latviešu', flag: '🇱🇻', ttsCode: 'lv-LV', region: 'LV' },
  { code: 'et', name: 'Estonian', nativeName: 'Eesti', flag: '🇪🇪', ttsCode: 'et-EE', region: 'EE' },
  { code: 'uk', name: 'Ukrainian', nativeName: 'Українська', flag: '🇺🇦', ttsCode: 'uk-UA', region: 'UA' },
  { code: 'be', name: 'Belarusian', nativeName: 'Беларуская', flag: '🇧🇾', region: 'BY' },
  { code: 'mk', name: 'Macedonian', nativeName: 'Македонски', flag: '🇲🇰', region: 'MK' },
  { code: 'mt', name: 'Maltese', nativeName: 'Malti', flag: '🇲🇹', region: 'MT' },
  { code: 'ga', name: 'Irish', nativeName: 'Gaeilge', flag: '🇮🇪', region: 'IE' },
  { code: 'cy', name: 'Welsh', nativeName: 'Cymraeg', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', region: 'GB' },
  { code: 'is', name: 'Icelandic', nativeName: 'Íslenska', flag: '🇮🇸', ttsCode: 'is-IS', region: 'IS' },
  { code: 'fo', name: 'Faroese', nativeName: 'Føroyskt', flag: '🇫🇴', region: 'FO' },
  { code: 'lb', name: 'Luxembourgish', nativeName: 'Lëtzebuergesch', flag: '🇱🇺', region: 'LU' },
  
  // Asian languages
  { code: 'th', name: 'Thai', nativeName: 'ไทย', flag: '🇹🇭', ttsCode: 'th-TH', region: 'TH' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳', ttsCode: 'vi-VN', region: 'VN' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩', ttsCode: 'id-ID', region: 'ID' },
  { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu', flag: '🇲🇾', ttsCode: 'ms-MY', region: 'MY' },
  { code: 'fil', name: 'Filipino', nativeName: 'Filipino', flag: '🇵🇭', ttsCode: 'fil-PH', region: 'PH' },
  { code: 'km', name: 'Khmer', nativeName: 'ខ្មែរ', flag: '🇰🇭', region: 'KH' },
  { code: 'lo', name: 'Lao', nativeName: 'ລາວ', flag: '🇱🇦', region: 'LA' },
  { code: 'my', name: 'Myanmar', nativeName: 'မြန်မာ', flag: '🇲🇲', region: 'MM' },
  { code: 'si', name: 'Sinhala', nativeName: 'සිංහල', flag: '🇱🇰', region: 'LK' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳', ttsCode: 'ta-IN', region: 'IN' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳', ttsCode: 'te-IN', region: 'IN' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳', ttsCode: 'kn-IN', region: 'IN' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳', ttsCode: 'ml-IN', region: 'IN' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳', ttsCode: 'gu-IN', region: 'IN' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', flag: '🇮🇳', ttsCode: 'pa-IN', region: 'IN' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇧🇩', ttsCode: 'bn-IN', region: 'BD' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', flag: '🇵🇰', region: 'PK' },
  { code: 'ne', name: 'Nepali', nativeName: 'नेपाली', flag: '🇳🇵', region: 'NP' },
  { code: 'dz', name: 'Dzongkha', nativeName: 'རྫོང་ཁ', flag: '🇧🇹', region: 'BT' },
  { code: 'mn', name: 'Mongolian', nativeName: 'Монгол', flag: '🇲🇳', region: 'MN' },
  { code: 'uz', name: 'Uzbek', nativeName: 'Oʻzbek', flag: '🇺🇿', region: 'UZ' },
  { code: 'kk', name: 'Kazakh', nativeName: 'Қазақ', flag: '🇰🇿', region: 'KZ' },
  { code: 'ky', name: 'Kyrgyz', nativeName: 'Кыргыз', flag: '🇰🇬', region: 'KG' },
  { code: 'tg', name: 'Tajik', nativeName: 'Тоҷикӣ', flag: '🇹🇯', region: 'TJ' },
  { code: 'tk', name: 'Turkmen', nativeName: 'Türkmen', flag: '🇹🇲', region: 'TM' },
  
  // African languages
  { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili', flag: '🇰🇪', region: 'KE' },
  { code: 'zu', name: 'Zulu', nativeName: 'isiZulu', flag: '🇿🇦', region: 'ZA' },
  { code: 'af', name: 'Afrikaans', nativeName: 'Afrikaans', flag: '🇿🇦', ttsCode: 'af-ZA', region: 'ZA' },
  { code: 'xh', name: 'Xhosa', nativeName: 'isiXhosa', flag: '🇿🇦', region: 'ZA' },
  { code: 'yo', name: 'Yoruba', nativeName: 'Yorùbá', flag: '🇳🇬', region: 'NG' },
  { code: 'ig', name: 'Igbo', nativeName: 'Igbo', flag: '🇳🇬', region: 'NG' },
  { code: 'ha', name: 'Hausa', nativeName: 'Hausa', flag: '🇳🇬', region: 'NG' },
  { code: 'am', name: 'Amharic', nativeName: 'አማርኛ', flag: '🇪🇹', region: 'ET' },
  { code: 'ti', name: 'Tigrinya', nativeName: 'ትግርኛ', flag: '🇪🇷', region: 'ER' },
  { code: 'om', name: 'Oromo', nativeName: 'Afaan Oromo', flag: '🇪🇹', region: 'ET' },
  { code: 'so', name: 'Somali', nativeName: 'Soomaali', flag: '🇸🇴', region: 'SO' },
  { code: 'rw', name: 'Kinyarwanda', nativeName: 'Ikinyarwanda', flag: '🇷🇼', region: 'RW' },
  { code: 'rn', name: 'Kirundi', nativeName: 'Ikirundi', flag: '🇧🇮', region: 'BI' },
  { code: 'mg', name: 'Malagasy', nativeName: 'Malagasy', flag: '🇲🇬', region: 'MG' },
  
  // Middle Eastern languages
  { code: 'fa', name: 'Persian', nativeName: 'فارسی', flag: '🇮🇷', region: 'IR' },
  { code: 'he', name: 'Hebrew', nativeName: 'עברית', flag: '🇮🇱', ttsCode: 'he-IL', region: 'IL' },
  { code: 'ku', name: 'Kurdish', nativeName: 'Kurdî', flag: '🇮🇶', region: 'IQ' },
  { code: 'az', name: 'Azerbaijani', nativeName: 'Azərbaycan', flag: '🇦🇿', region: 'AZ' },
  { code: 'hy', name: 'Armenian', nativeName: 'Հայերեն', flag: '🇦🇲', region: 'AM' },
  { code: 'ka', name: 'Georgian', nativeName: 'ქართული', flag: '🇬🇪', region: 'GE' },
  
  // Pacific languages
  { code: 'mi', name: 'Māori', nativeName: 'Te Reo Māori', flag: '🇳🇿', region: 'NZ' },
  { code: 'sm', name: 'Samoan', nativeName: 'Gagana Samoa', flag: '🇼🇸', region: 'WS' },
  { code: 'to', name: 'Tongan', nativeName: 'Lea Fakatonga', flag: '🇹🇴', region: 'TO' },
  { code: 'fj', name: 'Fijian', nativeName: 'Vosa Vakaviti', flag: '🇫🇯', region: 'FJ' },
  
  // Latin American variants
  { code: 'es-MX', name: 'Mexican Spanish', nativeName: 'Español Mexicano', flag: '🇲🇽', ttsCode: 'es-MX', region: 'MX' },
  { code: 'es-AR', name: 'Argentinian Spanish', nativeName: 'Español Argentino', flag: '🇦🇷', ttsCode: 'es-AR', region: 'AR' },
  { code: 'es-CO', name: 'Colombian Spanish', nativeName: 'Español Colombiano', flag: '🇨🇴', ttsCode: 'es-CO', region: 'CO' },
  { code: 'pt-PT', name: 'European Portuguese', nativeName: 'Português Europeu', flag: '🇵🇹', ttsCode: 'pt-PT', region: 'PT' },
  
  // Additional Asian languages
  { code: 'tl', name: 'Tagalog', nativeName: 'Tagalog', flag: '🇵🇭', region: 'PH' },
  { code: 'ceb', name: 'Cebuano', nativeName: 'Cebuano', flag: '🇵🇭', region: 'PH' },
  { code: 'hil', name: 'Hiligaynon', nativeName: 'Hiligaynon', flag: '🇵🇭', region: 'PH' },
  { code: 'war', name: 'Waray', nativeName: 'Waray', flag: '🇵🇭', region: 'PH' },
];

export const getLanguageByCode = (code: string): Language | undefined => {
  return languages.find(lang => lang.code === code || lang.ttsCode === code);
};

export const getLanguagesWithTTS = (): Language[] => {
  return languages.filter(lang => lang.ttsCode);
};

export const getPopularLanguages = (): Language[] => {
  return languages.slice(0, 20); // First 20 most common languages
};

export const searchLanguages = (query: string): Language[] => {
  const lowercaseQuery = query.toLowerCase();
  return languages.filter(lang => 
    lang.name.toLowerCase().includes(lowercaseQuery) ||
    lang.nativeName.toLowerCase().includes(lowercaseQuery) ||
    lang.code.toLowerCase().includes(lowercaseQuery)
  );
};