import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Volume2, Heart, BookOpen, Clock } from 'lucide-react';

interface ImmersiveLoadingIntroProps {
  onComplete: () => void;
}

export default function ImmersiveLoadingIntro({ onComplete }: ImmersiveLoadingIntroProps) {
  const [currentScene, setCurrentScene] = useState(0);
  const [isSkipped, setIsSkipped] = useState(false);
  const [showSkipButton, setShowSkipButton] = useState(false);

  const scenes = [
    {
      id: 1,
      title: "Morning · Lunch · Evening",
      subtitle: "5 Minutes Each, Life Transformed by the Word",
      description: "15 minutes a day, the revolution of Scripture memorization begins",
      background: "bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600",
      icon: Clock,
      duration: 3000
    },
    {
      id: 2,
      title: "Preserve Your Voice Forever",
      subtitle: "Are you losing your voice due to illness or accident?",
      description: "We'll preserve your voice reading Scripture forever, so you can listen and memorize anytime",
      background: "bg-gradient-to-br from-rose-500 via-pink-600 to-purple-700",
      icon: Heart,
      duration: 3500
    },
    {
      id: 3,
      title: "With AI Voices",
      subtitle: "Natural Human-like Voices",
      description: "8 unique AI voices to help you memorize Scripture",
      background: "bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700",
      icon: Volume2,
      duration: 3000
    },
    {
      id: 4,
      title: "Where Scripture Becomes Life",
      subtitle: "Bible Memorization Platform",
      description: "Experience daily transformation with Wordshiper",
      background: "bg-gradient-to-br from-emerald-500 via-teal-600 to-blue-700",
      icon: BookOpen,
      duration: 3000
    },
    {
      id: 5,
      title: "Wordshiper",
      subtitle: "Memorize Scripture. 15 Minutes a Day. A Life Transformed!",
      description: "Start your journey today",
      background: "bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800",
      icon: Play,
      duration: 4000
    }
  ];

  useEffect(() => {
    // Show skip button after 2 seconds
    const skipTimer = setTimeout(() => {
      setShowSkipButton(true);
    }, 2000);

    return () => clearTimeout(skipTimer);
  }, []);

  useEffect(() => {
    if (isSkipped) return;

    if (currentScene < scenes.length - 1) {
      const timer = setTimeout(() => {
        setCurrentScene(prev => prev + 1);
      }, scenes[currentScene].duration);

      return () => clearTimeout(timer);
    } else {
      // Last scene completed
      const finalTimer = setTimeout(() => {
        onComplete();
      }, scenes[currentScene].duration);

      return () => clearTimeout(finalTimer);
    }
  }, [currentScene, isSkipped, onComplete, scenes]);

  const handleSkip = () => {
    setIsSkipped(true);
    onComplete();
  };

  const currentSceneData = scenes[currentScene];
  const IconComponent = currentSceneData.icon;

  return (
    <motion.div
      className={`fixed inset-0 z-50 flex items-center justify-center ${currentSceneData.background}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Skip Button */}
      <AnimatePresence>
        {showSkipButton && (
          <motion.button
            onClick={handleSkip}
            className="absolute top-8 right-8 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Skip Intro
          </motion.button>
        )}
      </AnimatePresence>

      {/* Progress Indicator */}
      <div className="absolute top-8 left-8 flex space-x-2 z-10">
        {scenes.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === currentScene
                ? 'w-12 bg-white'
                : index < currentScene
                ? 'w-8 bg-white/70'
                : 'w-4 bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center text-white max-w-4xl mx-auto px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScene}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Icon */}
            <motion.div
              className="flex justify-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            >
              <div className="bg-white/20 backdrop-blur-lg rounded-full p-8 shadow-2xl">
                <IconComponent className="w-16 h-16 text-white" />
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-6xl md:text-8xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {currentSceneData.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              className="text-2xl md:text-4xl font-semibold text-white/90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {currentSceneData.subtitle}
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              {currentSceneData.description}
            </motion.p>

            {/* Animated Play Button for last scene */}
            {currentScene === scenes.length - 1 && (
              <motion.div
                className="flex justify-center pt-8"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <motion.button
                  onClick={onComplete}
                  className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full text-xl font-bold shadow-2xl flex items-center gap-3 transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-6 h-6" />
                  Get Started
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 50,
            }}
            animate={{
              y: -50,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Subtle Pulsing Effect */}
      <motion.div
        className="absolute inset-0 bg-white/5"
        animate={{ opacity: [0, 0.1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}