import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Pause, RotateCcw, Mic, Trophy, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import iphoneImage from '@assets/image_1753527270040.png';

interface IPhoneDemoPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ScriptureVerse {
  reference: string;
  english: string;
  korean: string;
  words: string[];
}

// Voice options with human-like characteristics (Google Cloud TTS)
const voiceOptions = [
  { id: 'sarah-young', name: '🎀 Sarah (Young Female)', gender: 'female', age: 'young', accent: 'US', description: 'Bright, energetic voice' },
  { id: 'emily-adult', name: '👩 Emily (Adult Female)', gender: 'female', age: 'adult', accent: 'US', description: 'Warm, professional voice' },
  { id: 'margaret-senior', name: '👵 Margaret (Senior Female)', gender: 'female', age: 'senior', accent: 'US', description: 'Gentle, wise voice' },
  { id: 'david-young', name: '👨 David (Young Male)', gender: 'male', age: 'young', accent: 'US', description: 'Clear, confident voice' },
  { id: 'michael-adult', name: '🎯 Michael (Adult Male)', gender: 'male', age: 'adult', accent: 'US', description: 'Deep, authoritative voice' },
  { id: 'robert-senior', name: '👴 Robert (Senior Male)', gender: 'male', age: 'senior', accent: 'US', description: 'Distinguished, calm voice' },
  { id: 'grace-uk', name: '🇬🇧 Grace (British Female)', gender: 'female', age: 'adult', accent: 'UK', description: 'Elegant British accent' },
  { id: 'james-uk', name: '🇬🇧 James (British Male)', gender: 'male', age: 'adult', accent: 'UK', description: 'Classic British accent' }
];

const scriptureVerses: ScriptureVerse[] = [
  {
    reference: "Psalm 119:11",
    english: "Your word I have hidden in my heart, that I might not sin against You.",
    korean: "내가 주께 범죄하지 아니하려 하여 주의 말씀을 내 마음에 쌓아 두었나이다",
    words: ["Your", "word", "I", "have", "hidden", "in", "my", "heart,", "that", "I", "might", "not", "sin", "against", "You."]
  },
  {
    reference: "John 3:16",
    english: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    korean: "하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라",
    words: ["For", "God", "so", "loved", "the", "world", "that", "he", "gave", "his", "one", "and", "only", "Son,", "that", "whoever", "believes", "in", "him", "shall", "not", "perish", "but", "have", "eternal", "life."]
  }
];

// Christian illustration SVG (Loaves and Fishes)
const LoavesAndFishesIllustration = () => (
  <svg width="200" height="120" viewBox="0 0 200 120" className="opacity-20">
    {/* Loaves */}
    <ellipse cx="70" cy="60" rx="25" ry="15" fill="white" stroke="white" strokeWidth="1"/>
    <ellipse cx="110" cy="50" rx="25" ry="15" fill="white" stroke="white" strokeWidth="1"/>
    <ellipse cx="90" cy="80" rx="25" ry="15" fill="white" stroke="white" strokeWidth="1"/>
    
    {/* Fishes */}
    <path d="M40 40 Q50 35 60 40 Q50 45 40 40 Z" fill="white" stroke="white" strokeWidth="1"/>
    <path d="M130 70 Q140 65 150 70 Q140 75 130 70 Z" fill="white" stroke="white" strokeWidth="1"/>
    <circle cx="45" cy="40" r="2" fill="#1a1a1a"/>
    <circle cx="135" cy="70" r="2" fill="#1a1a1a"/>
  </svg>
);

// Fireworks animation component
const FireworksAnimation = ({ show }: { show: boolean }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-ping"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: '1.5s'
          }}
        >
          <div className="w-4 h-4 bg-yellow-400 rounded-full opacity-75"></div>
        </div>
      ))}
      {[...Array(12)].map((_, i) => (
        <div
          key={`spark-${i}`}
          className="absolute animate-bounce"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 1.5}s`,
            animationDuration: '2s'
          }}
        >
          <div className="w-2 h-2 bg-red-400 rounded-full opacity-60"></div>
        </div>
      ))}
    </div>
  );
};

export function IPhoneDemoPopup({ isOpen, onClose }: IPhoneDemoPopupProps) {
  const [currentVerse, setCurrentVerse] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [repetitionCount, setRepetitionCount] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [memorizedVerses, setMemorizedVerses] = useState<string[]>([]);
  const [userRanking, setUserRanking] = useState({ global: 0, country: 0, church: 0 });
  const [selectedVoice, setSelectedVoice] = useState('sarah-young');
  const [isLoadingTTS, setIsLoadingTTS] = useState(false);
  
  const speechSynthesis = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      speechSynthesis.current = window.speechSynthesis;
      
      // Initialize speech recognition
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.lang = 'en-US';
      }
    }
  }, []);

  const verse = scriptureVerses[currentVerse];

  const playScripture = async () => {
    setIsPlaying(true);
    setIsLoadingTTS(true);
    setCurrentWordIndex(-1);
    
    try {
      // Get high-quality Google Cloud TTS audio
      const response = await fetch('/api/tts/synthesize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: verse.english,
          voiceId: selectedVoice,
          languageCode: 'en-US',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get TTS audio');
      }

      const { audioContent, speechData, fallback } = await response.json();
      const speechTiming = JSON.parse(speechData);
      
      setIsLoadingTTS(false);

      if (audioContent && !fallback) {
        // Play high-quality Google TTS audio
        const audioBlob = new Blob([
          Uint8Array.from(atob(audioContent), c => c.charCodeAt(0))
        ], { type: 'audio/mpeg' });
        
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        
        // Sync word highlighting with audio playback
        speechTiming.timings.forEach((timing: number, index: number) => {
          setTimeout(() => {
            if (index < speechTiming.words.length) {
              setCurrentWordIndex(index);
            }
          }, timing * 1000);
        });
        
        audio.onended = () => {
          setIsPlaying(false);
          setCurrentWordIndex(-1);
          setRepetitionCount(prev => prev + 1);
          URL.revokeObjectURL(audioUrl);
        };
        
        audio.onerror = () => {
          setIsPlaying(false);
          setCurrentWordIndex(-1);
          URL.revokeObjectURL(audioUrl);
        };
        
        await audio.play();
        
      } else {
        // Enhanced fallback to browser TTS with better voice selection
        if (speechSynthesis.current) {
          const utterance = new SpeechSynthesisUtterance(verse.english);
          const selectedVoiceInfo = voiceOptions.find(v => v.id === selectedVoice);
          
          // Get all available voices
          const voices = speechSynthesis.current.getVoices();
          
          if (selectedVoiceInfo && voices.length > 0) {
            // Smart voice selection based on user choice
            let selectedSystemVoice = null;
            
            // First try to find voices with quality indicators
            const premiumVoices = voices.filter(voice => 
              voice.name.toLowerCase().includes('premium') ||
              voice.name.toLowerCase().includes('enhanced') ||
              voice.name.toLowerCase().includes('neural') ||
              voice.name.toLowerCase().includes('natural')
            );
            
            // Then filter by gender and accent
            const genderFilteredVoices = (premiumVoices.length > 0 ? premiumVoices : voices).filter(voice => {
              const nameMatches = selectedVoiceInfo.gender === 'female' 
                ? voice.name.toLowerCase().includes('female') || voice.name.toLowerCase().includes('woman')
                : voice.name.toLowerCase().includes('male') || voice.name.toLowerCase().includes('man');
              
              const langMatches = selectedVoiceInfo.accent === 'UK' 
                ? voice.lang.includes('GB') || voice.lang.includes('UK')
                : voice.lang.includes('US') && !voice.lang.includes('GB');
              
              return nameMatches || langMatches;
            });
            
            // Select the best matching voice
            if (genderFilteredVoices.length > 0) {
              selectedSystemVoice = genderFilteredVoices[0];
            } else if (voices.length > 0) {
              // Fallback to any available voice
              selectedSystemVoice = voices.find(voice => voice.lang.startsWith('en')) || voices[0];
            }
            
            if (selectedSystemVoice) {
              utterance.voice = selectedSystemVoice;
            }
            
            // Optimize speech parameters based on selected voice characteristics
            utterance.rate = selectedVoiceInfo.age === 'senior' ? 0.7 : selectedVoiceInfo.age === 'young' ? 0.85 : 0.8;
            utterance.pitch = selectedVoiceInfo.gender === 'female' ? 1.1 : 0.9;
            utterance.volume = 1;
          }
          
          let wordIndex = 0;
          const words = verse.words;
          
          utterance.onboundary = (event) => {
            if (event.name === 'word' && wordIndex < words.length) {
              setCurrentWordIndex(wordIndex);
              wordIndex++;
            }
          };
          
          utterance.onend = () => {
            setIsPlaying(false);
            setCurrentWordIndex(-1);
            setRepetitionCount(prev => prev + 1);
          };
          
          utterance.onerror = () => {
            setIsPlaying(false);
            setCurrentWordIndex(-1);
          };
          
          utteranceRef.current = utterance;
          speechSynthesis.current.speak(utterance);
        }
      }
    } catch (error) {
      console.error('TTS Error:', error);
      setIsPlaying(false);
      setIsLoadingTTS(false);
      setCurrentWordIndex(-1);
    }
  };

  const stopPlayback = () => {
    if (speechSynthesis.current && utteranceRef.current) {
      speechSynthesis.current.cancel();
      setIsPlaying(false);
      setCurrentWordIndex(-1);
    }
  };

  const startMemorizationTest = () => {
    if (!recognitionRef.current) {
      alert('Speech recognition not supported in this browser');
      return;
    }

    setIsRecording(true);
    
    recognitionRef.current.onresult = async (event: any) => {
      const transcript = event.results[0][0].transcript;
      
      try {
        // Use Gemini API for more accurate speech recognition assessment
        const response = await fetch('/api/stt/recognize', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            transcript: transcript,
            expectedText: verse.english,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to process speech recognition');
        }

        const { accuracy } = await response.json();
        
        if (accuracy >= 0.95) {
          setShowFireworks(true);
          setMemorizedVerses(prev => [...prev, verse.reference]);
          setUserRanking(prev => ({
            global: prev.global + 10,
            country: prev.country + 15,
            church: prev.church + 20
          }));
          
          setTimeout(() => setShowFireworks(false), 3000);
          alert(`🎉 축하합니다! ${(accuracy * 100).toFixed(1)}% 정확도로 암송을 완료했습니다!`);
        } else {
          alert(`아쉽습니다. ${(accuracy * 100).toFixed(1)}% 정확도입니다. 95% 이상이 필요합니다.`);
        }
      } catch (error) {
        console.error('STT API Error:', error);
        
        // Fallback to local similarity calculation
        const originalText = verse.english.toLowerCase().replace(/[^\w\s]/g, '');
        const spokenText = transcript.toLowerCase().replace(/[^\w\s]/g, '');
        const similarity = calculateSimilarity(originalText, spokenText);
        
        if (similarity >= 0.95) {
          setShowFireworks(true);
          setMemorizedVerses(prev => [...prev, verse.reference]);
          setUserRanking(prev => ({
            global: prev.global + 10,
            country: prev.country + 15,
            church: prev.church + 20
          }));
          
          setTimeout(() => setShowFireworks(false), 3000);
          alert(`🎉 축하합니다! ${(similarity * 100).toFixed(1)}% 정확도로 암송을 완료했습니다!`);
        } else {
          alert(`아쉽습니다. ${(similarity * 100).toFixed(1)}% 정확도입니다. 95% 이상이 필요합니다.`);
        }
      }
      
      setIsRecording(false);
    };
    
    recognitionRef.current.onerror = () => {
      setIsRecording(false);
      alert('음성 인식 중 오류가 발생했습니다.');
    };
    
    recognitionRef.current.start();
  };

  const calculateSimilarity = (str1: string, str2: string): number => {
    const words1 = str1.split(' ');
    const words2 = str2.split(' ');
    const maxLength = Math.max(words1.length, words2.length);
    
    let matches = 0;
    for (let i = 0; i < Math.min(words1.length, words2.length); i++) {
      if (words1[i] === words2[i]) {
        matches++;
      }
    }
    
    return matches / maxLength;
  };

  const resetProgress = () => {
    setRepetitionCount(0);
    setCurrentWordIndex(-1);
    stopPlayback();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <FireworksAnimation show={showFireworks} />
      
      {/* iPhone 16 Frame Container */}
      <div className="relative">
        {/* iPhone 16 Physical Frame */}
        <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
          <div className="bg-gray-900 rounded-[2.5rem] w-[400px] h-[800px] relative overflow-hidden">
            {/* Dynamic Island */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-full z-10"></div>
            
            {/* Status Bar */}
            <div className="absolute top-2 left-0 right-0 flex justify-between items-center px-8 py-2 text-white text-sm z-10">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 bg-white rounded-sm opacity-75"></div>
                <div className="w-6 h-3 border border-white rounded-sm opacity-75">
                  <div className="w-4 h-full bg-white rounded-sm"></div>
                </div>
              </div>
            </div>
            
            {/* App Content Area */}
            <div className="absolute top-16 left-4 right-4 bottom-8 bg-white rounded-xl shadow-inner overflow-y-auto">
              
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-t-xl">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-5 h-5" />
                  <h1 className="text-lg font-bold">AI Voice Demo</h1>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="text-white hover:bg-white/20 h-8 w-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Main Content */}
              <div className="p-4 space-y-4 bg-white">
                
                {/* Scripture Selection */}
                <div className="space-y-2">
                  <label className="text-gray-800 text-sm font-medium">Select Scripture Verse</label>
                  <Select value={currentVerse.toString()} onValueChange={(value) => setCurrentVerse(Number(value))}>
                    <SelectTrigger className="w-full bg-white border border-gray-300 text-gray-800">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {scriptureVerses.map((verse, index) => (
                        <SelectItem key={index} value={index.toString()}>
                          {verse.reference}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Voice Selection */}
                <div className="space-y-2">
                  <label className="text-gray-800 text-sm font-medium">Select AI Voice</label>
                  <Select value={selectedVoice} onValueChange={setSelectedVoice}>
                    <SelectTrigger className="w-full bg-white border border-gray-300 text-gray-800">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {voiceOptions.map((voice) => (
                        <SelectItem key={voice.id} value={voice.id}>
                          {voice.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Scripture Display */}
                <div className="bg-gray-50 rounded-xl p-6 space-y-4 border border-gray-300 shadow-sm">
                  {/* English Text */}
                  <div className="space-y-2">
                    <p className="text-gray-900 text-lg font-bold leading-relaxed italic">
                      "{verse.words.map((word, index) => (
                        <span
                          key={index}
                          className={`${
                            currentWordIndex === index
                              ? 'bg-blue-600 text-white px-1 rounded shadow-sm'
                              : 'text-gray-900'
                          }`}
                        >
                          {word}{' '}
                        </span>
                      ))}"
                    </p>
                    
                    {/* Korean Text */}
                    <p className="text-gray-700 text-sm leading-relaxed font-medium">
                      {verse.korean}
                    </p>
                    
                    <p className="text-gray-600 text-sm font-semibold">
                      — {verse.reference}
                    </p>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-700">
                    <span>반복 횟수</span>
                    <span>{repetitionCount}/12</span>
                  </div>
                  <Progress value={(repetitionCount / 12) * 100} className="bg-gray-200" />
                </div>

                {/* Main Play Button */}
                <div className="flex justify-center">
                  <Button
                    onClick={isPlaying ? stopPlayback : playScripture}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white w-full py-4 text-lg font-medium rounded-xl flex items-center justify-center gap-3"
                    disabled={isRecording || isLoadingTTS}
                  >
                    {isLoadingTTS ? (
                      <>
                        <Volume2 className="w-5 h-5 animate-pulse" />
                        음성 로딩 중...
                      </>
                    ) : isPlaying ? (
                      <>
                        <Pause className="w-5 h-5" />
                        ▶ Play Scripture
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5" />
                        ▶ Play Scripture
                      </>
                    )}
                  </Button>
                </div>

                {/* Secondary Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    onClick={resetProgress}
                    variant="outline"
                    className="border-gray-300 text-gray-600 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    초기화
                  </Button>
                  
                  <Button
                    onClick={startMemorizationTest}
                    className="bg-red-500 hover:bg-red-600 text-white flex items-center gap-2"
                    disabled={isRecording || repetitionCount < 3}
                  >
                    <Mic className={`w-4 h-4 ${isRecording ? 'animate-pulse' : ''}`} />
                    {isRecording ? '녹음 중...' : '암송 테스트'}
                  </Button>
                </div>

                {/* Current Voice Display */}
                <div className="bg-blue-50 border border-blue-300 rounded-xl p-3 shadow-sm">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-blue-700">
                      <Volume2 className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {voiceOptions.find(v => v.id === selectedVoice)?.name}
                      </span>
                    </div>
                    <p className="text-xs text-blue-600">
                      {voiceOptions.find(v => v.id === selectedVoice)?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Close button outside iPhone */}
        <Button
          onClick={onClose}
          variant="ghost"
          className="absolute -top-12 -right-12 text-white hover:text-gray-300 bg-black/50 hover:bg-black/70 rounded-full w-12 h-12 p-0"
        >
          <X className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}