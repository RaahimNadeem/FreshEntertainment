"use client";

import React from "react";
import { motion } from "framer-motion";

const About = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <>
      {/* Orange section with heading and right-aligned paragraph */}
      <div
        ref={ref}
        className="min-h-screen py-4 gap-8 h-full px-8 md:px-24 flex flex-col justify-center"
      >
        <motion.div 
          className="max-w-5xl mb-4 md:mb-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-6xl leading-tight font-bold">
            At Fresh Entertainment, we don't just create events; we create
            experiences that{" "}
            <span className="relative group">
              inspire
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-300"></span>
            </span>
            ,{" "}
            <span className="relative group">
              captivate
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-300"></span>
            </span>
            , and{" "}
            <span className="relative group">
              connect
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-300"></span>
            </span>
            . Whether you're celebrating a milestone, hosting a cultural showcase, or launching a
            brand, we'll make it unforgettable.
          </h2>
        </motion.div>
        <motion.div 
          className="w-full flex justify-end -mt-2 md:-mt-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-xl sm:text-lg md:text-3xl leading-relaxed text-right max-w-2xl">
            We blend{" "}
            <span className="relative group">
              cultural authenticity
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-300"></span>
            </span>{" "}
            with{" "}
            <span className="relative group">
              cutting-edge technology
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-300"></span>
            </span>{" "}
            to deliver experiences that resonate deeply with audiences and create
            lasting impressions.
          </p>
        </motion.div>
      </div>
    </>
  );
});

export default About;
