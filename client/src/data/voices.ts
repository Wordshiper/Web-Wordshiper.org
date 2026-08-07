export interface Voice {
  name: string;
  displayName: string;
  languageCode: string;
  gender: "MALE" | "FEMALE" | "NEUTRAL";
  flag: string;
  type: "Wavenet" | "Neural2" | "Standard" | "Chirp3-HD";
}

export const voices: Voice[] = [
  // English variants
  { name: "en-US-Wavenet-D", displayName: "English (US) - Male", languageCode: "en-US", gender: "MALE", flag: "🇺🇸", type: "Wavenet" },
  { name: "en-US-Wavenet-F", displayName: "English (US) - Female", languageCode: "en-US", gender: "FEMALE", flag: "🇺🇸", type: "Wavenet" },
  { name: "en-US-Neural2-A", displayName: "English (US) - Female AI", languageCode: "en-US", gender: "FEMALE", flag: "🇺🇸", type: "Neural2" },
  { name: "en-US-Neural2-C", displayName: "English (US) - Male AI", languageCode: "en-US", gender: "MALE", flag: "🇺🇸", type: "Neural2" },
  { name: "en-GB-Wavenet-A", displayName: "English (UK) - Female", languageCode: "en-GB", gender: "FEMALE", flag: "🇬🇧", type: "Wavenet" },
  { name: "en-GB-Wavenet-B", displayName: "English (UK) - Male", languageCode: "en-GB", gender: "MALE", flag: "🇬🇧", type: "Wavenet" },
  { name: "en-AU-Wavenet-A", displayName: "English (Australia) - Female", languageCode: "en-AU", gender: "FEMALE", flag: "🇦🇺", type: "Wavenet" },
  { name: "en-AU-Wavenet-B", displayName: "English (Australia) - Male", languageCode: "en-AU", gender: "MALE", flag: "🇦🇺", type: "Wavenet" },
  { name: "en-IN-Wavenet-A", displayName: "English (India) - Female", languageCode: "en-IN", gender: "FEMALE", flag: "🇮🇳", type: "Wavenet" },
  { name: "en-IN-Wavenet-B", displayName: "English (India) - Male", languageCode: "en-IN", gender: "MALE", flag: "🇮🇳", type: "Wavenet" },

  // Korean
  { name: "ko-KR-Wavenet-A", displayName: "Korean - Female", languageCode: "ko-KR", gender: "FEMALE", flag: "🇰🇷", type: "Wavenet" },
  { name: "ko-KR-Wavenet-B", displayName: "Korean - Male", languageCode: "ko-KR", gender: "MALE", flag: "🇰🇷", type: "Wavenet" },
  { name: "ko-KR-Neural2-A", displayName: "Korean - Female AI", languageCode: "ko-KR", gender: "FEMALE", flag: "🇰🇷", type: "Neural2" },
  { name: "ko-KR-Neural2-C", displayName: "Korean - Male AI", languageCode: "ko-KR", gender: "MALE", flag: "🇰🇷", type: "Neural2" },

  // Spanish variants
  { name: "es-ES-Wavenet-B", displayName: "Spanish (Spain) - Male", languageCode: "es-ES", gender: "MALE", flag: "🇪🇸", type: "Wavenet" },
  { name: "es-ES-Wavenet-C", displayName: "Spanish (Spain) - Female", languageCode: "es-ES", gender: "FEMALE", flag: "🇪🇸", type: "Wavenet" },
  { name: "es-MX-Wavenet-A", displayName: "Spanish (Mexico) - Female", languageCode: "es-MX", gender: "FEMALE", flag: "🇲🇽", type: "Wavenet" },
  { name: "es-MX-Wavenet-B", displayName: "Spanish (Mexico) - Male", languageCode: "es-MX", gender: "MALE", flag: "🇲🇽", type: "Wavenet" },
  { name: "es-AR-Wavenet-A", displayName: "Spanish (Argentina) - Female", languageCode: "es-AR", gender: "FEMALE", flag: "🇦🇷", type: "Wavenet" },
  { name: "es-CO-Wavenet-A", displayName: "Spanish (Colombia) - Female", languageCode: "es-CO", gender: "FEMALE", flag: "🇨🇴", type: "Wavenet" },

  // French variants
  { name: "fr-FR-Wavenet-A", displayName: "French (France) - Female", languageCode: "fr-FR", gender: "FEMALE", flag: "🇫🇷", type: "Wavenet" },
  { name: "fr-FR-Wavenet-B", displayName: "French (France) - Male", languageCode: "fr-FR", gender: "MALE", flag: "🇫🇷", type: "Wavenet" },
  { name: "fr-CA-Wavenet-A", displayName: "French (Canada) - Female", languageCode: "fr-CA", gender: "FEMALE", flag: "🇨🇦", type: "Wavenet" },
  { name: "fr-CA-Wavenet-B", displayName: "French (Canada) - Male", languageCode: "fr-CA", gender: "MALE", flag: "🇨🇦", type: "Wavenet" },

  // German
  { name: "de-DE-Wavenet-A", displayName: "German - Female", languageCode: "de-DE", gender: "FEMALE", flag: "🇩🇪", type: "Wavenet" },
  { name: "de-DE-Wavenet-B", displayName: "German - Male", languageCode: "de-DE", gender: "MALE", flag: "🇩🇪", type: "Wavenet" },
  { name: "de-DE-Neural2-A", displayName: "German - Female AI", languageCode: "de-DE", gender: "FEMALE", flag: "🇩🇪", type: "Neural2" },
  { name: "de-DE-Neural2-B", displayName: "German - Male AI", languageCode: "de-DE", gender: "MALE", flag: "🇩🇪", type: "Neural2" },

  // Japanese
  { name: "ja-JP-Wavenet-A", displayName: "Japanese - Female", languageCode: "ja-JP", gender: "FEMALE", flag: "🇯🇵", type: "Wavenet" },
  { name: "ja-JP-Wavenet-C", displayName: "Japanese - Male", languageCode: "ja-JP", gender: "MALE", flag: "🇯🇵", type: "Wavenet" },
  { name: "ja-JP-Neural2-B", displayName: "Japanese - Female AI", languageCode: "ja-JP", gender: "FEMALE", flag: "🇯🇵", type: "Neural2" },
  { name: "ja-JP-Neural2-C", displayName: "Japanese - Male AI", languageCode: "ja-JP", gender: "MALE", flag: "🇯🇵", type: "Neural2" },

  // Chinese variants
  { name: "zh-CN-Wavenet-A", displayName: "Chinese (Mandarin) - Female", languageCode: "zh-CN", gender: "FEMALE", flag: "🇨🇳", type: "Wavenet" },
  { name: "zh-CN-Wavenet-B", displayName: "Chinese (Mandarin) - Male", languageCode: "zh-CN", gender: "MALE", flag: "🇨🇳", type: "Wavenet" },
  { name: "zh-TW-Wavenet-A", displayName: "Chinese (Taiwan) - Female", languageCode: "zh-TW", gender: "FEMALE", flag: "🇹🇼", type: "Wavenet" },
  { name: "zh-HK-Wavenet-A", displayName: "Chinese (Hong Kong) - Female", languageCode: "zh-HK", gender: "FEMALE", flag: "🇭🇰", type: "Wavenet" },

  // Arabic
  { name: "ar-XA-Wavenet-A", displayName: "Arabic - Female", languageCode: "ar-XA", gender: "FEMALE", flag: "🇸🇦", type: "Wavenet" },
  { name: "ar-XA-Wavenet-B", displayName: "Arabic - Male", languageCode: "ar-XA", gender: "MALE", flag: "🇸🇦", type: "Wavenet" },
  { name: "ar-XA-Chirp3-HD-Achernar", displayName: "Arabic - Female HD", languageCode: "ar-XA", gender: "FEMALE", flag: "🇸🇦", type: "Chirp3-HD" },
  { name: "ar-XA-Chirp3-HD-Achird", displayName: "Arabic - Male HD", languageCode: "ar-XA", gender: "MALE", flag: "🇸🇦", type: "Chirp3-HD" },

  // Hindi & Indian languages
  { name: "hi-IN-Wavenet-A", displayName: "Hindi - Female", languageCode: "hi-IN", gender: "FEMALE", flag: "🇮🇳", type: "Wavenet" },
  { name: "hi-IN-Wavenet-B", displayName: "Hindi - Male", languageCode: "hi-IN", gender: "MALE", flag: "🇮🇳", type: "Wavenet" },
  { name: "ta-IN-Wavenet-A", displayName: "Tamil - Female", languageCode: "ta-IN", gender: "FEMALE", flag: "🇮🇳", type: "Wavenet" },
  { name: "te-IN-Wavenet-A", displayName: "Telugu - Female", languageCode: "te-IN", gender: "FEMALE", flag: "🇮🇳", type: "Wavenet" },
  { name: "kn-IN-Wavenet-A", displayName: "Kannada - Female", languageCode: "kn-IN", gender: "FEMALE", flag: "🇮🇳", type: "Wavenet" },
  { name: "ml-IN-Wavenet-A", displayName: "Malayalam - Female", languageCode: "ml-IN", gender: "FEMALE", flag: "🇮🇳", type: "Wavenet" },
  { name: "gu-IN-Wavenet-A", displayName: "Gujarati - Female", languageCode: "gu-IN", gender: "FEMALE", flag: "🇮🇳", type: "Wavenet" },
  { name: "pa-IN-Wavenet-A", displayName: "Punjabi - Female", languageCode: "pa-IN", gender: "FEMALE", flag: "🇮🇳", type: "Wavenet" },
  { name: "bn-IN-Wavenet-A", displayName: "Bengali - Female", languageCode: "bn-IN", gender: "FEMALE", flag: "🇧🇩", type: "Wavenet" },

  // Portuguese variants
  { name: "pt-BR-Wavenet-A", displayName: "Portuguese (Brazil) - Female", languageCode: "pt-BR", gender: "FEMALE", flag: "🇧🇷", type: "Wavenet" },
  { name: "pt-BR-Wavenet-B", displayName: "Portuguese (Brazil) - Male", languageCode: "pt-BR", gender: "MALE", flag: "🇧🇷", type: "Wavenet" },
  { name: "pt-PT-Wavenet-A", displayName: "Portuguese (Portugal) - Female", languageCode: "pt-PT", gender: "FEMALE", flag: "🇵🇹", type: "Wavenet" },
  { name: "pt-PT-Wavenet-B", displayName: "Portuguese (Portugal) - Male", languageCode: "pt-PT", gender: "MALE", flag: "🇵🇹", type: "Wavenet" },

  // Russian
  { name: "ru-RU-Wavenet-A", displayName: "Russian - Female", languageCode: "ru-RU", gender: "FEMALE", flag: "🇷🇺", type: "Wavenet" },
  { name: "ru-RU-Wavenet-B", displayName: "Russian - Male", languageCode: "ru-RU", gender: "MALE", flag: "🇷🇺", type: "Wavenet" },

  // Italian
  { name: "it-IT-Wavenet-A", displayName: "Italian - Female", languageCode: "it-IT", gender: "FEMALE", flag: "🇮🇹", type: "Wavenet" },
  { name: "it-IT-Wavenet-B", displayName: "Italian - Male", languageCode: "it-IT", gender: "MALE", flag: "🇮🇹", type: "Wavenet" },

  // Other European languages
  { name: "nl-NL-Wavenet-A", displayName: "Dutch - Female", languageCode: "nl-NL", gender: "FEMALE", flag: "🇳🇱", type: "Wavenet" },
  { name: "nl-NL-Wavenet-B", displayName: "Dutch - Male", languageCode: "nl-NL", gender: "MALE", flag: "🇳🇱", type: "Wavenet" },
  { name: "pl-PL-Wavenet-A", displayName: "Polish - Female", languageCode: "pl-PL", gender: "FEMALE", flag: "🇵🇱", type: "Wavenet" },
  { name: "pl-PL-Wavenet-B", displayName: "Polish - Male", languageCode: "pl-PL", gender: "MALE", flag: "🇵🇱", type: "Wavenet" },
  { name: "tr-TR-Wavenet-A", displayName: "Turkish - Female", languageCode: "tr-TR", gender: "FEMALE", flag: "🇹🇷", type: "Wavenet" },
  { name: "tr-TR-Wavenet-B", displayName: "Turkish - Male", languageCode: "tr-TR", gender: "MALE", flag: "🇹🇷", type: "Wavenet" },
  { name: "sv-SE-Wavenet-A", displayName: "Swedish - Female", languageCode: "sv-SE", gender: "FEMALE", flag: "🇸🇪", type: "Wavenet" },
  { name: "da-DK-Wavenet-A", displayName: "Danish - Female", languageCode: "da-DK", gender: "FEMALE", flag: "🇩🇰", type: "Wavenet" },
  { name: "nb-NO-Wavenet-A", displayName: "Norwegian - Female", languageCode: "nb-NO", gender: "FEMALE", flag: "🇳🇴", type: "Wavenet" },
  { name: "fi-FI-Wavenet-A", displayName: "Finnish - Female", languageCode: "fi-FI", gender: "FEMALE", flag: "🇫🇮", type: "Wavenet" },
  { name: "cs-CZ-Wavenet-A", displayName: "Czech - Female", languageCode: "cs-CZ", gender: "FEMALE", flag: "🇨🇿", type: "Wavenet" },
  { name: "sk-SK-Wavenet-A", displayName: "Slovak - Female", languageCode: "sk-SK", gender: "FEMALE", flag: "🇸🇰", type: "Wavenet" },
  { name: "hu-HU-Wavenet-A", displayName: "Hungarian - Female", languageCode: "hu-HU", gender: "FEMALE", flag: "🇭🇺", type: "Wavenet" },
  { name: "ro-RO-Wavenet-A", displayName: "Romanian - Female", languageCode: "ro-RO", gender: "FEMALE", flag: "🇷🇴", type: "Wavenet" },
  { name: "bg-BG-Wavenet-A", displayName: "Bulgarian - Female", languageCode: "bg-BG", gender: "FEMALE", flag: "🇧🇬", type: "Wavenet" },
  { name: "hr-HR-Wavenet-A", displayName: "Croatian - Female", languageCode: "hr-HR", gender: "FEMALE", flag: "🇭🇷", type: "Wavenet" },
  { name: "sr-RS-Wavenet-A", displayName: "Serbian - Female", languageCode: "sr-RS", gender: "FEMALE", flag: "🇷🇸", type: "Wavenet" },
  { name: "sl-SI-Wavenet-A", displayName: "Slovenian - Female", languageCode: "sl-SI", gender: "FEMALE", flag: "🇸🇮", type: "Wavenet" },
  { name: "lt-LT-Wavenet-A", displayName: "Lithuanian - Female", languageCode: "lt-LT", gender: "FEMALE", flag: "🇱🇹", type: "Wavenet" },
  { name: "lv-LV-Wavenet-A", displayName: "Latvian - Female", languageCode: "lv-LV", gender: "FEMALE", flag: "🇱🇻", type: "Wavenet" },
  { name: "et-EE-Wavenet-A", displayName: "Estonian - Female", languageCode: "et-EE", gender: "FEMALE", flag: "🇪🇪", type: "Wavenet" },
  { name: "uk-UA-Wavenet-A", displayName: "Ukrainian - Female", languageCode: "uk-UA", gender: "FEMALE", flag: "🇺🇦", type: "Wavenet" },
  { name: "is-IS-Wavenet-A", displayName: "Icelandic - Female", languageCode: "is-IS", gender: "FEMALE", flag: "🇮🇸", type: "Wavenet" },

  // Asian languages
  { name: "th-TH-Wavenet-A", displayName: "Thai - Female", languageCode: "th-TH", gender: "FEMALE", flag: "🇹🇭", type: "Wavenet" },
  { name: "vi-VN-Wavenet-A", displayName: "Vietnamese - Female", languageCode: "vi-VN", gender: "FEMALE", flag: "🇻🇳", type: "Wavenet" },
  { name: "id-ID-Wavenet-A", displayName: "Indonesian - Female", languageCode: "id-ID", gender: "FEMALE", flag: "🇮🇩", type: "Wavenet" },
  { name: "ms-MY-Wavenet-A", displayName: "Malay - Female", languageCode: "ms-MY", gender: "FEMALE", flag: "🇲🇾", type: "Wavenet" },
  { name: "fil-PH-Wavenet-A", displayName: "Filipino - Female", languageCode: "fil-PH", gender: "FEMALE", flag: "🇵🇭", type: "Wavenet" },

  // African languages
  { name: "af-ZA-Standard-A", displayName: "Afrikaans - Female", languageCode: "af-ZA", gender: "FEMALE", flag: "🇿🇦", type: "Standard" },
  { name: "sw-KE-Wavenet-A", displayName: "Swahili - Female", languageCode: "sw-KE", gender: "FEMALE", flag: "🇰🇪", type: "Wavenet" },

  // Middle Eastern
  { name: "he-IL-Wavenet-A", displayName: "Hebrew - Female", languageCode: "he-IL", gender: "FEMALE", flag: "🇮🇱", type: "Wavenet" },
  { name: "he-IL-Wavenet-B", displayName: "Hebrew - Male", languageCode: "he-IL", gender: "MALE", flag: "🇮🇱", type: "Wavenet" }
];

export const getVoicesByLanguage = (languageCode: string): Voice[] => {
  return voices.filter(voice => voice.languageCode === languageCode);
};

export const getPopularVoices = (): Voice[] => {
  const popularLanguages = ['en-US', 'ko-KR', 'es-ES', 'fr-FR', 'de-DE', 'ja-JP', 'zh-CN', 'ar-XA', 'hi-IN', 'pt-BR', 'ru-RU', 'it-IT'];
  return voices.filter(voice => popularLanguages.includes(voice.languageCode));
};

export const searchVoices = (query: string): Voice[] => {
  const lowercaseQuery = query.toLowerCase();
  return voices.filter(voice => 
    voice.displayName.toLowerCase().includes(lowercaseQuery) ||
    voice.languageCode.toLowerCase().includes(lowercaseQuery)
  );
};
