"use client"
import { useEffect, useState } from "react"
import { useTypewriter } from 'react-simple-typewriter'
import GrainEffect from "./GrainEffect"
import { motion } from "framer-motion"

export default function AlternateHero() {
  const [windowHeight, setWindowHeight] = useState(0)
  const [text] = useTypewriter({
    words: ['Experience', 'Wonder', 'Innovation', 'Spectacle', 'Magic'],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 90,
    delaySpeed: 1200,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Video Background */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/BannerVideo.mp4" type="video/mp4" />
        </video>
        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
      </motion.div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        <motion.h1 
          className="font-playfair text-5xl md:text-8xl leading-tight tracking-tight text-white drop-shadow-lg relative z-20"
          style={{textShadow: '0 4px 32px rgba(0,0,0,0.7)'}}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Where Vision<br />
          Meets <span className="italic text-[#ff6633] relative group">
            {text}
            <span className="animate-pulse">|</span>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#ff6633] group-hover:w-full transition-all duration-300"></span>
          </span>
        </motion.h1>
        <motion.div 
          className="mt-14 relative z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="inline-block bg-[#73e0a8] text-green-900 px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
            Saudi Arabia&apos;s leading event innovation house
          </span>
        </motion.div>
      </div>
      {/* Single Grain Effect Overlay */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <GrainEffect />
      </div>
    </div>
  )
}
