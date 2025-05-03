import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Coverage",
    description:
      "Access 100M+ candidates from verified job boards, niche sites, and professional networks. We ensure your job gets seen, remembered, and chosen by the top talent.",
    image: "/img1.webp",
    number: 1,
    color: "#fa6031",
  },
  {
    title: "Custom",
    description:
      "No generic templates here. We analyze your specific needs and customize every job ad for maximum impact—aligned with your goals and budget.",
    image: "/img2.webp",
    number: 2,
    color: "#a5c6fe",
  },
  {
    title: "Data-Driven Insights",
    description:
      "Get real-time data on candidate engagement, competitor behavior, and budget efficiency to make adjustments and maximize ROI.",
    image: "/img3.webp",
    number: 3,
    color: "#73e0a8",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % services.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const handlePrev = () => {
    if (!isAnimating) {
      setDirection(-1);
      setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % services.length);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        {services.map((service, idx) => (
          activeIndex === idx && (
            <motion.div
              key={service.title}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              onAnimationStart={() => setIsAnimating(true)}
              onAnimationComplete={() => setIsAnimating(false)}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0 flex flex-col md:flex-row items-center justify-between p-8 md:p-16"
            >
              {/* Left: Text */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex-1 flex flex-col justify-center items-start text-white z-10"
              >
                <motion.div
                  className="text-8xl md:text-9xl font-black mb-6 uppercase tracking-tighter"
                  style={{ color: service.color }}
                >
                  {service.title}
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl md:text-2xl text-white/80 font-light max-w-xl leading-relaxed"
                >
                  {service.description}
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
                  className="text-9xl font-black mt-8 opacity-20"
                  style={{ color: service.color }}
                >
                  {service.number}
                </motion.div>
              </motion.div>

              {/* Right: Image */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex-1 flex justify-center items-center relative z-10"
              >
                <motion.div
                  className="relative w-[600px] h-[400px]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="rounded-3xl shadow-2xl w-full h-full object-cover"
                    style={{ boxShadow: `0 0 50px ${service.color}40` }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `linear-gradient(45deg, ${service.color}20, transparent)`,
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Background Elements */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at center, ${service.color}10, transparent 70%)`,
                }}
              />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-8 z-20">
        <motion.button
          onClick={handlePrev}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-white text-2xl"
        >
          ←
        </motion.button>
        
        <div className="flex space-x-4">
          {services.map((_, idx) => (
            <motion.button
              key={idx}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeIndex === idx ? "bg-white" : "bg-white/30"
              }`}
              onClick={() => setActiveIndex(idx)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        <motion.button
          onClick={handleNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-white text-2xl"
        >
          →
        </motion.button>
      </div>
    </div>
  );
};

export default Services; 