import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, ArrowRight, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const FloatingHearts = () => {
  return (
    <div className="floating-hearts">
      {[...Array(9)].map((_, i) => (
        <Heart key={i} className="heart" size={20 + Math.random() * 20} />
      ))}
    </div>
  );
};

const Sparkle = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    className="absolute"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      repeatDelay: 3,
    }}
  >
    <Sparkles className="text-gold" size={16} />
  </motion.div>
);

const Index = () => {
  const navigate = useNavigate();
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showMainContent, setShowMainContent] = useState(false);

  const openingMessages = [
    "I have something important to tell you...",
    "Something I've been wanting to say...",
    "From the bottom of my heart...",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainContent(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showMainContent) {
      const interval = setInterval(() => {
        setCurrentMessage((prev) => (prev + 1) % openingMessages.length);
      }, 1200);
      return () => clearInterval(interval);
    }
  }, [showMainContent, openingMessages.length]);

  if (!showMainContent) {
    return (
      <div className="min-h-screen romantic-gradient flex items-center justify-center relative overflow-hidden">
        <FloatingHearts />
        <motion.div
          className="text-center z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            key={currentMessage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl font-semibold text-white text-center px-4"
          >
            {openingMessages[currentMessage]}
          </motion.div>
          <motion.div
            className="mt-8"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Heart className="text-white mx-auto" size={40} />
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen romantic-gradient relative overflow-hidden">
      <FloatingHearts />

      {/* Sparkles */}
      <Sparkle delay={0} />
      <Sparkle delay={1} />
      <Sparkle delay={2} />

      <div className="relative z-10 container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            I'm{" "}
            <span className="text-romantic bg-white bg-clip-text">Sorry</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            My dearest Babliii, I made a mistake and I want to make it right. This
            website is my way of showing you how much you mean to me.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Card
              className="card-romantic h-full group cursor-pointer active:scale-95"
              onClick={() => navigate("/sorry")}
            >
              <div className="text-center p-4 sm:p-6">
                <motion.div
                  className="inline-block p-3 sm:p-4 bg-rose-100 rounded-full mb-4"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Heart className="text-rose-600" size={28} />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-semibold text-romantic mb-3 sm:mb-4">
                  My Apology
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  Read my heartfelt messages and see how sorry I truly am
                </p>
                <Button className="btn-romantic group-hover:shadow-lg w-full sm:w-auto text-sm sm:text-base py-3 sm:py-2">
                  Read Messages <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Card
              className="card-romantic h-full group cursor-pointer active:scale-95"
              onClick={() => navigate("/memories")}
            >
              <div className="text-center p-4 sm:p-6">
                <motion.div
                  className="inline-block p-3 sm:p-4 bg-peach rounded-full mb-4"
                  whileHover={{ scale: 1.1, rotate: -10 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Sparkles className="text-orange-600" size={28} />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-semibold text-romantic mb-3 sm:mb-4">
                  Our Memories
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  A collection of all our beautiful moments together
                </p>
                <Button className="btn-romantic group-hover:shadow-lg w-full sm:w-auto text-sm sm:text-base py-3 sm:py-2">
                  View Gallery <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Card
              className="card-romantic h-full group cursor-pointer active:scale-95"
              onClick={() => navigate("/promise")}
            >
              <div className="text-center p-4 sm:p-6">
                <motion.div
                  className="inline-block p-3 sm:p-4 bg-lavender rounded-full mb-4"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Gift className="text-purple-600" size={28} />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-semibold text-romantic mb-3 sm:mb-4">
                  My Promise
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  See how I plan to make things better and love you more
                </p>
                <Button className="btn-romantic group-hover:shadow-lg w-full sm:w-auto text-sm sm:text-base py-3 sm:py-2">
                  My Promises <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-center px-4"
        >
          <motion.div
            className="inline-block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-white/80 text-base sm:text-lg mb-4">
              Tap on any card above to start your journey
            </p>
            <Heart
              className="text-white mx-auto animate-heart-beat"
              size={24}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-10 text-white/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles size={32} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-10 text-white/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <Heart size={28} />
      </motion.div>
    </div>
  );
};

export default Index;
