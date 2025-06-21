import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const apologyMessages = [
  {
    title: "I'm truly sorry",
    message:
      "I know I hurt you, and I can't take back what I did. But I want you to know that I recognize my mistake and I'm genuinely sorry from the bottom of my heart.",
    emoji: "💔",
  },
  {
    title: "You mean everything to me",
    message:
      "You are the most important person in my life. I never want to lose you or make you feel unvalued. You deserve so much better than how I treated you.",
    emoji: "💕",
  },
  {
    title: "I take full responsibility",
    message:
      "I'm not making excuses. What I did was wrong, and I take full responsibility for my actions. I should have been better, and I promise to learn from this.",
    emoji: "🙏",
  },
  {
    title: "Please forgive me",
    message:
      "I know forgiveness isn't something I can demand or expect immediately. But I'm hoping that you can find it in your heart to forgive me, in time.",
    emoji: "💫",
  },
  {
    title: "I love you so much",
    message:
      "My love for you is real and deep. I love your smile, your laugh, the way you care for others, and how you make everything better just by being you.",
    emoji: "💖",
  },
  {
    title: "You're amazing",
    message:
      "You're beautiful, intelligent, kind, and everything I could ever want in a partner. I'm so lucky to have you in my life, and I don't want to lose that.",
    emoji: "✨",
  },
];

const Sorry = () => {
  const navigate = useNavigate();
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const nextMessage = () => {
    if (currentMessage < apologyMessages.length - 1) {
      setCurrentMessage(currentMessage + 1);
    }
  };

  const prevMessage = () => {
    if (currentMessage > 0) {
      setCurrentMessage(currentMessage - 1);
    }
  };

  return (
    <div className="min-h-screen romantic-gradient relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="floating-hearts">
        {[...Array(15)].map((_, i) => (
          <Heart key={i} className="heart" size={15 + Math.random() * 25} />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-white hover:bg-white/20 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back Home
          </Button>
          <div className="text-white/80 font-medium">
            {currentMessage + 1} of {apologyMessages.length}
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-center text-white mb-12"
          >
            My Heartfelt Apology
          </motion.h1>

          {/* Message Card */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isRevealed ? 1 : 0, y: isRevealed ? 0 : 100 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMessage}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="card-romantic text-center relative overflow-hidden">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-shimmer bg-shimmer animate-shimmer opacity-30"></div>

                  <div className="relative z-10">
                    <motion.div
                      className="text-6xl mb-6"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {apologyMessages[currentMessage].emoji}
                    </motion.div>

                    <motion.h2
                      className="text-3xl md:text-4xl font-bold text-romantic mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {apologyMessages[currentMessage].title}
                    </motion.h2>

                    <motion.p
                      className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 px-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {apologyMessages[currentMessage].message}
                    </motion.p>

                    <motion.div
                      className="flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <MessageCircle className="text-rose-400 mr-2" size={24} />
                      <span className="text-rose-600 font-medium">
                        With all my love
                      </span>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-between items-center mt-8"
          >
            <Button
              onClick={prevMessage}
              disabled={currentMessage === 0}
              variant="outline"
              className="bg-white/20 border-white/30 text-white hover:bg-white/30 disabled:opacity-50"
            >
              <ArrowLeft className="mr-2" size={16} />
              Previous
            </Button>

            <div className="flex space-x-2">
              {apologyMessages.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                    index === currentMessage ? "bg-white" : "bg-white/40"
                  }`}
                  onClick={() => setCurrentMessage(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <Button
              onClick={nextMessage}
              disabled={currentMessage === apologyMessages.length - 1}
              variant="outline"
              className="bg-white/20 border-white/30 text-white hover:bg-white/30 disabled:opacity-50"
            >
              Next
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </motion.div>

          {/* Continue button */}
          {currentMessage === apologyMessages.length - 1 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-12"
            >
              <Button
                onClick={() => navigate("/memories")}
                className="btn-romantic text-lg px-8 py-4"
              >
                See Our Beautiful Memories
                <Heart className="ml-2" size={20} />
              </Button>
            </motion.div>
          )}
        </div>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-20 left-10 text-white/20"
          animate={{
            rotate: 360,
            y: [0, -20, 0],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Heart size={40} />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-10 text-white/20"
          animate={{
            rotate: -360,
            y: [0, 20, 0],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Heart size={35} />
        </motion.div>
      </div>
    </div>
  );
};

export default Sorry;
