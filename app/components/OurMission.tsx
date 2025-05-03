"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const missionText = `
At Fresh Entertainment, our mission is to unite communities and ignite passions through unforgettable experiences. We believe in the power of creativity, diversity, and innovation to inspire and connect people from all walks of life. Our commitment is to deliver events that not only entertain but also empower, leaving a lasting positive impact on everyone we reach.
`;

const visionText = `
Our vision is to become a global leader in entertainment, setting new standards for creativity, inclusivity, and impact. We strive to create a world where everyone can experience the joy of connection and the thrill of discovery through our innovative events and initiatives.
`;

const OurMission = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { scrollYProgress } = useScroll();
  // Animate mission down and vision up as you scroll
  const missionY = useTransform(scrollYProgress, [0, 1], [80, 120]);
  const visionY = useTransform(scrollYProgress, [0, 1], [-80, -120]);
  const missionOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const visionOpacity = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

  return (
    <div 
      ref={ref} 
      className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center"
    >
      {/* Background image with blur */}
      <div 
        className="absolute inset-0 bg-[url('/fifa2.png')] bg-cover bg-center bg-no-repeat filter blur-sm"
      />
      {/* White overlay */}
      <div className="absolute inset-0 bg-neutral-500/20" />
      
      <motion.div
        style={{ y: missionY, opacity: missionOpacity }}
        className="relative flex-1 flex flex-col justify-center items-start bg-[#ff6633] backdrop-blur-md shadow-2xl rounded-l-3xl md:rounded-r-none rounded-b-3xl md:rounded-b-none p-8 md:p-12 min-h-[400px] max-w-md w-full md:w-[400px] h-[400px] md:h-[500px]"
      >
        <h2 className="text-white font-extrabold text-2xl md:text-4xl mb-16 drop-shadow-xl">THE <br></br> MISSION</h2>
        <p className="text-white/90 text-base md:text-lg font-sans leading-relaxed">{missionText}</p>
      </motion.div>
      <motion.div
        style={{ y: visionY, opacity: visionOpacity }}
        className="relative flex-1 flex flex-col justify-center items-start bg-neutral-800/20 backdrop-blur-xl shadow-2xl rounded-r-3xl md:rounded-l-none rounded-t-3xl md:rounded-t-none p-8 md:p-12 min-h-[400px] max-w-md w-full md:w-[400px] h-[400px] md:h-[500px]"
      >
        <h2 className="text-white font-extrabold text-2xl md:text-4xl mb-16 drop-shadow-xl">THE <br></br> VISION</h2>
        <p className="text-white/90 text-base md:text-lg font-sans leading-relaxed">{visionText}</p>
      </motion.div>
    </div>
  );
});

export default OurMission; 