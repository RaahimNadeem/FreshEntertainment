"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const missionText = `
At Fresh Entertainment, our mission is to unite communities and ignite passions through unforgettable experiences. We believe in the power of creativity, diversity, and innovation to inspire and connect people from all walks of life. Our commitment is to deliver events that not only entertain but also empower, leaving a lasting positive impact on everyone we reach.
`;

const visionText = `
Our vision is to become a global leader in entertainment, setting new standards for creativity, inclusivity, and impact. We strive to create a world where everyone can experience the joy of connection and the thrill of discovery through our innovative events and initiatives.
`;

// Custom hook to detect md+ screens
function useIsMdUp() {
  const [isMdUp, setIsMdUp] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsMdUp(window.matchMedia('(min-width: 768px)').matches);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMdUp;
}

const OurMission = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { scrollYProgress } = useScroll();
  const isMdUp = useIsMdUp();
  
  // Enhanced scroll animations with opposite movements
  const missionY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const visionY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const missionOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  const visionOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  const missionScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.1]);
  const visionScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.1]);
  const missionRotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const visionRotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <div ref={ref} className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden">
      {/* Enhanced background with gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/fifa2.png')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/60" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-0">
          {/* Mission Card */}
          {isMdUp ? (
            <motion.div
              style={{ 
                y: missionY,
                opacity: missionOpacity,
                scale: missionScale,
                rotate: missionRotate
              }}
              className="relative w-full md:flex-1 flex flex-col justify-center items-start bg-gradient-to-br from-[#ff6633]/95 to-[#ff6633]/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] rounded-3xl md:rounded-l-3xl md:rounded-r-none p-8 sm:p-10 md:p-12 min-h-[400px] md:max-w-md md:w-[450px] transition-all duration-500 hover:shadow-[0_12px_48px_rgba(0,0,0,0.3)] mb-6 md:mb-0"
            >
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-12 md:mb-16 tracking-tight"
              >
                THE <br className="hidden md:block" /> MISSION
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-white/95 text-base sm:text-lg md:text-xl font-light leading-relaxed tracking-wide"
              >
                {missionText}
              </motion.p>
            </motion.div>
          ) : (
            <div
              className="relative w-full flex flex-col justify-center items-start bg-gradient-to-br from-[#ff6633]/95 to-[#ff6633]/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] rounded-3xl p-8 sm:p-10 min-h-[400px] mb-6"
            >
              <h2 className="text-white font-extrabold text-3xl sm:text-4xl mb-8 sm:mb-12 tracking-tight">
                THE MISSION
              </h2>
              <p className="text-white/95 text-base sm:text-lg font-light leading-relaxed tracking-wide">
                {missionText}
              </p>
            </div>
          )}
          {/* Vision Card */}
          {isMdUp ? (
            <motion.div
              style={{ 
                y: visionY,
                opacity: visionOpacity,
                scale: visionScale,
                rotate: visionRotate
              }}
              className="relative w-full md:flex-1 flex flex-col justify-center items-start bg-gradient-to-br from-neutral-900/95 to-neutral-800/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] rounded-3xl md:rounded-r-3xl md:rounded-l-none p-8 sm:p-10 md:p-12 min-h-[400px] md:max-w-md md:w-[450px] transition-all duration-500 hover:shadow-[0_12px_48px_rgba(0,0,0,0.3)]"
            >
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-12 md:mb-16 tracking-tight"
              >
                THE VISION
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-white/95 text-base sm:text-lg md:text-xl font-light leading-relaxed tracking-wide"
              >
                {visionText}
              </motion.p>
            </motion.div>
          ) : (
            <div
              className="relative w-full flex flex-col justify-center items-start bg-gradient-to-br from-neutral-900/95 to-neutral-800/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] rounded-3xl p-8 sm:p-10 min-h-[400px]"
            >
              <h2 className="text-white font-extrabold text-3xl sm:text-4xl mb-8 sm:mb-12 tracking-tight">
                THE VISION
              </h2>
              <p className="text-white/95 text-base sm:text-lg font-light leading-relaxed tracking-wide">
                {visionText}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default OurMission; 