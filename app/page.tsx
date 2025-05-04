"use client"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Tagline from "./components/Tagline"
import AlternateHero from "./components/AlternateHero"
import AlternateHeader from "./components/AlternateHeader"
import AlternateTagline from "./components/AlternateTagline"
import OurMission from "./components/OurMission"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Milestones from "./components/Milestones"
import Preloader from "./components/Preloader"

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
    <>
      <Preloader />
      <main className={`min-h-screen text-white transition-colors duration-700 ease-in-out ${bgColor}`}>
        {/* <FilmGrain /> */}
        {/* <Header /> */}
        <AlternateHeader />
        <AlternateHero />
        <AlternateTagline />
        {/* <Hero /> */}
        <About ref={orangeSectionRef} />
        <OurMission />
        <Services />
        <Tagline ref={taglineRef} />
        <Milestones />
        <Contact />
      </main>
    </>
  )
}
