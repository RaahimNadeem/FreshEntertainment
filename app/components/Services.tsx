"use client"

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Coverage",
    description:
      "Access 100M+ candidates from verified job boards, niche sites, and professional networks. We ensure your job gets seen, remembered, and chosen by the top talent.",
    image: "/img1.webp",
    number: 1,
    color: "#fa6031"
  },
  {
    title: "Custom",
    description:
      "No generic templates here. We analyze your specific needs and customize every job ad for maximum impact—aligned with your goals and budget.",
    image: "/img2.webp",
    number: 2,
    color: "#a5c6fe"
  },
  {
    title: "Data-Driven Insights",
    description:
      "Get real-time data on candidate engagement, competitor behavior, and budget efficiency to make adjustments and maximize ROI.",
    image: "/img3.webp",
    number: 3,
    color: "#73e0a8"
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

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
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <motion.div 
      ref={containerRef}
      style={{ opacity, scale }}
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"
        animate={{
          background: [
            "linear-gradient(to bottom, transparent, rgba(0,0,0,0.2), rgba(0,0,0,0.4))",
            "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3), rgba(0,0,0,0.5))",
            "linear-gradient(to bottom, transparent, rgba(0,0,0,0.2), rgba(0,0,0,0.4))",
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
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
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.4 }
              }}
              onAnimationStart={() => setIsAnimating(true)}
              onAnimationComplete={() => setIsAnimating(false)}
              className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 p-8 md:p-16"
            >
              {/* Image Section */}
              <motion.div 
                className="relative w-full md:w-1/2 h-64 md:h-96 group"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-lg shadow-2xl transition-all duration-500 group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                />
                <motion.div 
                  className="absolute -top-4 -left-4 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white"
                  style={{ backgroundColor: service.color }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                >
                  {service.number}
                </motion.div>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </motion.div>

              {/* Content Section */}
              <motion.div 
                className="w-full md:w-1/2 space-y-6"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <motion.h2 
                  className="text-4xl md:text-6xl font-bold relative inline-block"
                  style={{ color: service.color }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {service.title}
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1"
                    style={{ backgroundColor: service.color }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  />
                </motion.h2>
                <motion.p 
                  className="text-lg md:text-xl text-gray-300"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  {service.description}
                </motion.p>
              </motion.div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <motion.button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 flex items-center justify-center relative overflow-hidden group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span className="relative z-10">←</motion.span>
          <motion.div 
            className="absolute inset-0 bg-white"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            style={{ originX: 1, originY: 1 }}
          />
        </motion.button>
        <motion.button
          onClick={handleNext}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 flex items-center justify-center relative overflow-hidden group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span className="relative z-10">→</motion.span>
          <motion.div 
            className="absolute inset-0 bg-white"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            style={{ originX: 0, originY: 0 }}
          />
        </motion.button>
      </motion.div>

      {/* Progress Indicators */}
      <motion.div 
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {services.map((_, idx) => (
          <motion.div
            key={idx}
            className={`w-2 h-2 rounded-full ${idx === activeIndex ? 'bg-white' : 'bg-white/30'}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.5 }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services; 