"use client"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Tagline from "./components/Tagline"

export default function Home() {
  const [taglineRef, taglineInView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })
  const [orangeSectionRef, orangeInView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  let bgColor = 'bg-[#1e2321]';
  if (taglineInView) {
    bgColor = 'bg-[#73e0a8]';
  } else if (orangeInView) {
    bgColor = 'bg-[#ff6633]';
  }

  return (
    <main className={`min-h-screen text-white transition-colors duration-700 ease-in-out ${bgColor}`}>
      <Header />
      <Hero />
      <About ref={orangeSectionRef} />
      <Tagline ref={taglineRef} />
    </main>
  )
}
