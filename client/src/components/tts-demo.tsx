import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Play, Pause, Square, Volume2, Globe } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { GlobalReachShowcase } from "@/components/language-switcher";
import { scriptureVerses, getVerseByLanguage } from "@/data/scripture-verses";
import { voices, getVoicesByLanguage } from "@/data/voices";

export default function TTSDemo() {
  const [selectedVerse, setSelectedVerse] = useState(scriptureVerses[0].id);
  const [selectedVoice, setSelectedVoice] = useState("en-US-Wavenet-F");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const { toast } = useToast();
  const { t, currentLanguage } = useLanguage();

  const currentVerse = scriptureVerses.find(v => v.id === selectedVerse);
  const verseContent = currentVerse ? getVerseByLanguage(selectedVerse, currentLanguage) : null;
  const selectedVoiceData = voices.find(v => v.name === selectedVoice);
  const availableVoices = selectedVoiceData ? getVoicesByLanguage(selectedVoiceData.languageCode) : voices.slice(0, 10);

  const handlePlay = async () => {
    if (!verseContent) {
      toast({
        title: "No verse selected",
        description: "Please select a verse to hear.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Stop current audio if playing
      if (currentAudio) {
        currentAudio.pause();
        setCurrentAudio(null);
      }

      const response = await fetch('/api/tts/synthesize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: verseContent.text,
          voice: selectedVoice,
        }),
      });

      if (!response.ok) {
        throw new Error('TTS synthesis failed');
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);

      audio.onplay = () => setIsPlaying(true);
      audio.onpause = () => setIsPlaying(false);
      audio.onended = () => {
        setIsPlaying(false);
        setCurrentAudio(null);
        URL.revokeObjectURL(audioUrl);
      };

      setCurrentAudio(audio);
      await audio.play();

      toast({
        title: "Playing Scripture",
        description: `Now playing: ${verseContent.reference}`,
      });
    } catch (error) {
      console.error('TTS Error:', error);
      toast({
        title: "Audio Generation Failed",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePause = () => {
    if (currentAudio) {
      if (isPlaying) {
        currentAudio.pause();
      } else {
        currentAudio.play();
      }
    }
  };

  const handleStop = () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('demo.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('demo.subtitle')}
          </p>
          
          {/* Global language showcase */}
          <div className="flex justify-center items-center space-x-6 mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Globe className="w-5 h-5 text-primary" />
              <span>Supporting 50+ languages worldwide</span>
            </div>
            <div className="flex space-x-1">
              {['🇺🇸', '🇰🇷', '🇪🇸', '🇫🇷', '🇩🇪', '🇯🇵', '🇨🇳', '🇮🇳', '🇧🇷', '🇷🇺'].map((flag, i) => (
                <span key={i} className="text-2xl">{flag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Demo Controls */}
          <Card className="bg-white shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Volume2 className="w-6 h-6 text-primary" />
                <span>AI Voice Demo</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Verse Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Scripture Verse
                </label>
                <Select value={selectedVerse} onValueChange={setSelectedVerse}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {scriptureVerses.map((verse) => {
                      const verseData = getVerseByLanguage(verse.id, currentLanguage);
                      return (
                        <SelectItem key={verse.id} value={verse.id}>
                          {verseData?.reference || verse.reference}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>

              {/* Voice Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select AI Voice
                </label>
                <Select value={selectedVoice} onValueChange={setSelectedVoice}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    {availableVoices.map((voice) => (
                      <SelectItem key={voice.name} value={voice.name}>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{voice.flag}</span>
                          <span>{voice.displayName}</span>
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">{voice.type}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Verse Display */}
              {verseContent && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                  <blockquote className="text-lg text-gray-800 italic mb-3 leading-relaxed">
                    "{verseContent.text}"
                  </blockquote>
                  <cite className="text-sm font-semibold text-primary">
                    — {verseContent.reference}
                  </cite>
                </div>
              )}

              {/* Playback Controls */}
              <div className="flex justify-center space-x-4">
                <Button
                  onClick={handlePlay}
                  disabled={isLoading || isPlaying}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {isLoading ? (
                    <div className="flex items-center space-x-2 relative z-10">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Generating...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2 relative z-10">
                      <Play className="w-5 h-5 group-hover:animate-pulse" />
                      <span>Play Scripture</span>
                    </div>
                  )}
                </Button>

                {isPlaying && (
                  <>
                    <Button
                      onClick={handlePause}
                      variant="outline"
                      className="px-6 py-3 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                    >
                      <Pause className="w-5 h-5" />
                    </Button>
                    <Button
                      onClick={handleStop}
                      variant="outline"
                      className="px-6 py-3"
                    >
                      <Square className="w-5 h-5" />
                    </Button>
                  </>
                )}
              </div>

              {/* Voice Info */}
              {selectedVoiceData && (
                <div className="text-center bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <span className="text-2xl">{selectedVoiceData.flag}</span>
                    <span>Using {selectedVoiceData.displayName}</span>
                    <span className="bg-primary text-white px-2 py-1 rounded text-xs">
                      {selectedVoiceData.type}
                    </span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Features Showcase */}
          <div className="space-y-6">
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Features</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Natural Voices</h4>
                      <p className="text-sm text-gray-600">WaveNet & Neural2 technology for human-like speech</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Globe className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Global Languages</h4>
                      <p className="text-sm text-gray-600">380+ voices across 50+ languages and dialects</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Instant Generation</h4>
                      <p className="text-sm text-gray-600">Real-time audio synthesis powered by Google Cloud</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Memorization Tools</h4>
                      <p className="text-sm text-gray-600">Repeat, slow down, and practice verse by verse</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Usage Stats */}
            <Card className="bg-gradient-to-r from-primary to-blue-600 text-white border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Global Impact</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">50,000+</div>
                    <div className="text-sm opacity-90">Verses Generated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">150+</div>
                    <div className="text-sm opacity-90">Countries Reached</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">380+</div>
                    <div className="text-sm opacity-90">AI Voices</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-sm opacity-90">Always Available</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Global Reach Component */}
        <div className="mt-16">
          <GlobalReachShowcase />
        </div>
      </div>
    </section>
  );
}