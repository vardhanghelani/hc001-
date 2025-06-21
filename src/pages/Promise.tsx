import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, ArrowLeft, Check, Gift, Star, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const promises = [
  {
    icon: Heart,
    title: "I promise to love you unconditionally",
    description:
      "No matter what happens, my love for you will never waver. You are my heart, my soul, my everything.",
    color: "text-rose-500",
  },
  {
    icon: Star,
    title: "I promise to always listen",
    description:
      "Your thoughts, feelings, and dreams matter to me. I'll always give you my full attention and support.",
    color: "text-yellow-500",
  },
  {
    icon: Crown,
    title: "I promise to treat you like the queen you are",
    description:
      "You deserve to be cherished, respected, and treated with the love and care you give to everyone else.",
    color: "text-purple-500",
  },
  {
    icon: Gift,
    title: "I promise to make you feel special every day",
    description:
      "Little surprises, sweet messages, and thoughtful gestures to remind you how amazing you are.",
    color: "text-green-500",
  },
  {
    icon: Check,
    title: "I promise to be better",
    description:
      "I'll work on myself, learn from my mistakes, and become the partner you deserve.",
    color: "text-blue-500",
  },
  {
    icon: Heart,
    title: "I promise to never take you for granted again",
    description:
      "Every moment with you is a gift, and I'll appreciate and cherish every second we have together.",
    color: "text-pink-500",
  },
];

const Promise = () => {
  const navigate = useNavigate();
  const [revealedPromises, setRevealedPromises] = useState<number[]>([]);
  const [allRevealed, setAllRevealed] = useState(false);

  useEffect(() => {
    const revealTimer = setInterval(() => {
      setRevealedPromises((prev) => {
        if (prev.length < promises.length) {
          const newRevealed = [...prev, prev.length];
          if (newRevealed.length === promises.length) {
            setTimeout(() => setAllRevealed(true), 1000);
          }
          return newRevealed;
        }
        clearInterval(revealTimer);
        return prev;
      });
    }, 800);

    return () => clearInterval(revealTimer);
  }, []);

  return (
    <div className="min-h-screen romantic-gradient relative overflow-hidden">
      {/* Background hearts */}
      <div className="floating-hearts">
        {[...Array(20)].map((_, i) => (
          <Heart key={i} className="heart" size={10 + Math.random() * 25} />
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
          <div className="text-white/80 font-medium">My Sacred Promises</div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            My Promises To You
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
            These aren't just words - they're commitments from my heart. I
            promise to be the partner you deserve and to love you better every
            day.
          </p>
        </motion.div>

        {/* Promises Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {promises.map((promise, index) => {
            const Icon = promise.icon;
            const isRevealed = revealedPromises.includes(index);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateY: -90 }}
                animate={{
                  opacity: isRevealed ? 1 : 0.3,
                  y: isRevealed ? 0 : 100,
                  rotateY: isRevealed ? 0 : -90,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={isRevealed ? { scale: 1.05, y: -10 } : {}}
                className="perspective-1000"
              >
                <Card
                  className={`card-romantic h-full relative overflow-hidden ${isRevealed ? "shadow-2xl" : "shadow-md"}`}
                >
                  {isRevealed && (
                    <motion.div
                      className="absolute inset-0 bg-shimmer bg-shimmer animate-shimmer opacity-20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.2 }}
                      transition={{ delay: 0.5 }}
                    />
                  )}

                  <div className="relative z-10 text-center">
                    <motion.div
                      className={`inline-block p-6 rounded-full mb-6 ${isRevealed ? "bg-white" : "bg-gray-100"}`}
                      animate={
                        isRevealed
                          ? {
                              scale: [1, 1.1, 1],
                              rotateY: [0, 360, 0],
                            }
                          : {}
                      }
                      transition={{
                        duration: 2,
                        repeat: isRevealed ? Infinity : 0,
                        repeatDelay: 3,
                      }}
                    >
                      <Icon
                        className={`${promise.color} ${isRevealed ? "opacity-100" : "opacity-50"}`}
                        size={40}
                      />
                    </motion.div>

                    <motion.h3
                      className={`text-xl md:text-2xl font-semibold mb-4 ${isRevealed ? "text-romantic" : "text-gray-400"}`}
                      animate={isRevealed ? { opacity: 1 } : { opacity: 0.5 }}
                    >
                      {promise.title}
                    </motion.h3>

                    <motion.p
                      className={`text-gray-600 leading-relaxed ${isRevealed ? "opacity-100" : "opacity-50"}`}
                      animate={isRevealed ? { opacity: 1 } : { opacity: 0.5 }}
                      transition={{ delay: 0.3 }}
                    >
                      {promise.description}
                    </motion.p>

                    {isRevealed && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.5,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className="mt-6"
                      >
                        <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                          <Check size={16} className="mr-2" />I Promise
                        </div>
                      </motion.div>
                    )}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Final message */}
        {allRevealed && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <Card className="card-romantic max-w-4xl mx-auto">
              <motion.div
                className="text-center"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="text-6xl mb-6">💖</div>
                <h2 className="text-3xl md:text-4xl font-bold text-romantic mb-6">
                  These promises come from my heart
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  I know actions speak louder than words, and I'm ready to show
                  you every day how much you mean to me. Thank you for giving me
                  the chance to love you better. You are my world, my love, my
                  everything.
                </p>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <p className="text-2xl font-semibold text-romantic">
                    I love you with all my heart ❤️
                  </p>
                </motion.div>
              </motion.div>
            </Card>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8"
            >
              <Button
                onClick={() => navigate("/")}
                className="btn-romantic text-lg px-8 py-4"
              >
                Back to the Beginning
                <Heart className="ml-2" size={20} />
              </Button>
            </motion.div>
          </motion.div>
        )}

        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 left-5 text-white/20"
          animate={{
            rotate: 360,
            y: [0, -30, 0],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Star size={45} />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-5 text-white/20"
          animate={{
            rotate: -360,
            y: [0, 25, 0],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Crown size={40} />
        </motion.div>
      </div>
    </div>
  );
};

export default Promise;
