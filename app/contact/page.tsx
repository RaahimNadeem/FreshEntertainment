"use client"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useScroll, useTransform } from "framer-motion"
import Contact from "../components/Contact"
import AlternateHeader from "../components/AlternateHeader"

export default function ContactPage() {
  const [contactRef, contactInView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  const [windowHeight, setWindowHeight] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const parallaxY = useTransform(
    useScroll().scrollY,
    [0, windowHeight],
    [0, -windowHeight * 0.2]
  )

  let bgColor = 'bg-[#1e2321]';
  if (contactInView) {
    bgColor = 'bg-[#73e0a8]';
  }

  return (
    <main className={`min-h-screen text-white transition-colors duration-700 ease-in-out ${bgColor} overflow-hidden`}>
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${scrollY * 0.5}px ${scrollY * 0.5}px, rgba(115, 224, 168, 0.1), transparent 50%)`,
        }}
      />
      <AlternateHeader />
      <motion.div 
        ref={contactRef}
        style={{ y: parallaxY }}
        className="relative z-10"
      >
        <Contact />
      </motion.div>
    </main>
  )
} 