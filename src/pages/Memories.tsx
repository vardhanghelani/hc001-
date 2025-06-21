import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  ArrowLeft,
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

// Memory data with your actual photos
// TO ADD YOUR PHOTOS: Place them in the public/photos/ folder and update the image paths below
const memories = [
  {
    id: 1,
    title: "Our First Date",
    description:
      "That magical evening when everything started. I still remember how nervous I was and how your smile made everything perfect.",
    image: "/photos/first-date.jpg", // Replace with your actual photo
    date: "The beginning of forever",
    emoji: "💕",
  },
  {
    id: 2,
    title: "Your Beautiful Smile",
    description:
      "This photo captures what I love most about you - your radiant smile that lights up my whole world.",
    image: "/photos/her-smile.jpg", // Replace with your actual photo
    date: "Every day with you",
    emoji: "😍",
  },
  {
    id: 3,
    title: "Weekend Adventures",
    description:
      "All those spontaneous trips and adventures we took together. Every moment was an adventure with you by my side.",
    image: "/photos/weekend-adventure.jpg", // Replace with your actual photo
    date: "Our favorite weekends",
    emoji: "🌟",
  },
  {
    id: 4,
    title: "Cozy Evenings",
    description:
      "Those quiet nights together, watching movies, talking about everything and nothing. The simple moments that mean the most.",
    image: "/photos/cozy-evening.jpg", // Replace with your actual photo
    date: "Home is wherever you are",
    emoji: "🏠",
  },
  {
    id: 5,
    title: "Your Laugh",
    description:
      "I love making you laugh. Your joy is infectious and it's one of my favorite sounds in the world.",
    image: "/photos/her-laugh.jpg", // Replace with your actual photo
    date: "Music to my ears",
    emoji: "😂",
  },
  {
    id: 6,
    title: "Dancing Together",
    description:
      "Whether it's in the kitchen or at a party, dancing with you always feels like we're the only two people in the world.",
    image: "/photos/dancing.jpg", // Replace with your actual photo
    date: "Our song, our dance",
    emoji: "💃",
  },
  {
    id: 7,
    title: "Morning Coffee",
    description:
      "Those peaceful mornings sharing coffee and dreams. Starting each day with you makes everything better.",
    image: "/photos/morning-coffee.jpg", // Replace with your actual photo
    date: "Perfect mornings",
    emoji: "☕",
  },
  {
    id: 8,
    title: "Your Kindness",
    description:
      "The way you care for others, your gentle heart, and how you make everyone around you feel special.",
    image: "/photos/her-kindness.jpg", // Replace with your actual photo
    date: "Your beautiful soul",
    emoji: "🤗",
  },
];

const Memories = () => {
  const navigate = useNavigate();
  const [selectedMemory, setSelectedMemory] = useState<number | null>(null);

  const openMemory = (id: number) => {
    setSelectedMemory(id);
  };

  const closeMemory = () => {
    setSelectedMemory(null);
  };

  const navigateMemory = (direction: "prev" | "next") => {
    if (selectedMemory === null) return;

    const currentIndex = memories.findIndex((m) => m.id === selectedMemory);
    let newIndex;

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : memories.length - 1;
    } else {
      newIndex = currentIndex < memories.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedMemory(memories[newIndex].id);
  };

  const selectedMemoryData = memories.find((m) => m.id === selectedMemory);

  return (
    <div className="min-h-screen romantic-gradient relative overflow-hidden">
      {/* Background hearts */}
      <div className="floating-hearts">
        {[...Array(12)].map((_, i) => (
          <Heart key={i} className="heart" size={12 + Math.random() * 20} />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-6 sm:mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-white hover:bg-white/20 transition-colors text-sm sm:text-base py-2 px-3 sm:py-2 sm:px-4"
          >
            <ArrowLeft className="mr-1 sm:mr-2" size={16} />
            <span className="hidden sm:inline">Back Home</span>
            <span className="sm:hidden">Back</span>
          </Button>
          <div className="text-white/80 font-medium flex items-center text-sm sm:text-base">
            <Camera className="mr-1 sm:mr-2" size={16} />
            <span className="hidden sm:inline">
              {memories.length} Beautiful Memories
            </span>
            <span className="sm:hidden">{memories.length} Photos</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-center text-white mb-4 px-4"
        >
          Our Beautiful Memories
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-white/90 text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
        >
          Every moment with you is a treasure. Here are some of the memories
          that make my heart full.
        </motion.p>

        {/* Memory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 px-4 sm:px-0">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="cursor-pointer"
              onClick={() => openMemory(memory.id)}
            >
              <Card className="card-romantic overflow-hidden group active:scale-95">
                <div className="relative">
                  <img
                    src={memory.image}
                    alt={memory.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                    <div className="text-xl sm:text-2xl mb-1">
                      {memory.emoji}
                    </div>
                    <h3 className="font-semibold text-base sm:text-lg">
                      {memory.title}
                    </h3>
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">
                    {memory.description}
                  </p>
                  <p className="text-rose-500 text-xs mt-2 font-medium">
                    {memory.date}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Continue button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <Button
            onClick={() => navigate("/promise")}
            className="btn-romantic text-lg px-8 py-4"
          >
            See My Promises To You
            <Heart className="ml-2" size={20} />
          </Button>
        </motion.div>
      </div>

      {/* Memory Modal */}
      <AnimatePresence>
        {selectedMemory && selectedMemoryData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeMemory}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedMemoryData.image}
                  alt={selectedMemoryData.title}
                  className="w-full h-64 md:h-96 object-cover"
                />

                {/* Close button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeMemory}
                  className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white"
                >
                  <X size={20} />
                </Button>

                {/* Navigation buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigateMemory("prev")}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                >
                  <ChevronLeft size={20} />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigateMemory("next")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                >
                  <ChevronRight size={20} />
                </Button>

                {/* Memory info overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <div className="text-3xl mb-2">
                    {selectedMemoryData.emoji}
                  </div>
                  <h2 className="text-2xl font-bold mb-2">
                    {selectedMemoryData.title}
                  </h2>
                  <p className="text-rose-300 text-sm">
                    {selectedMemoryData.date}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {selectedMemoryData.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Memories;
