"use client"
import { useEffect, useState } from "react"
import { useTypewriter } from 'react-simple-typewriter'
import GrainEffect from "./GrainEffect"

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
      <div className="absolute inset-0 w-full h-full">
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
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="font-playfair text-5xl md:text-8xl leading-tight tracking-tight text-white drop-shadow-lg relative z-20" style={{textShadow: '0 4px 32px rgba(0,0,0,0.7)'}}>
          Where Vision<br />
          Meets <span className="pl-4 italic text-[#ff6633]">{text}<span className="animate-pulse">|</span></span>
        </h1>
        <div className="mt-14 relative z-20">
          <span className="inline-block bg-[#73e0a8] text-green-900 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
            Saudi Arabia&apos;s leading event innovation house
          </span>
        </div>
      </div>
      {/* Single Grain Effect Overlay */}
      {/* <div className="absolute inset-0 z-30">
        <GrainEffect />
      </div> */}
    </div>
  )
}
