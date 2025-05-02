"use client"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"

export default function Home() {
  const [orangeSectionRef, inView] = useInView({
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

  return (
    <main className={`min-h-screen text-white transition-colors duration-700 ease-in-out ${inView ? 'bg-[#ff6633]' : 'bg-[#1e2321]'}`}>
      <Header />
      <Hero />

      {/* Orange Section - Changes color when scrolled into view - Full viewport height */}
      <section
        ref={orangeSectionRef}
        className="w-full"
        style={{ minHeight: `${windowHeight}px` }}
      >
        <div className="container py-16 h-full flex flex-col justify-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl mb-6 px-6 leading-tight font-bold">
              Fresh Entertainment is Saudi Arabia&apos;s premier event innovation house, specializing in creating
              immersive, multi-sensory experiences that transcend traditional event boundaries.
            </h2>
          </div>
        </div>

        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-white rotate-45 z-10"></div>
          </div>
          <div className="w-full h-0.5 bg-white"></div>
        </div>

        <div className="container py-16 h-full flex flex-col justify-center">
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80">
                {/* Main large image */}
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src="/placeholder2.jpg" 
                    alt="Main event image"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                {/* Overlapping top-right image */}
                <div className="absolute -top-4 -right-4 w-1/3 h-1/3 z-10">
                  <img 
                    src="/placeholder2.jpg" 
                    alt="Event detail"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
                {/* Overlapping bottom-left image */}
                <div className="absolute -bottom-4 -left-4 w-1/3 h-1/3 z-10">
                  <img 
                    src="/placeholder2.jpg" 
                    alt="Event detail"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
              <div>
                <p className="text-lg md:text-xl leading-relaxed">
                  We blend cultural authenticity with cutting-edge technology to deliver experiences that resonate
                  deeply with audiences and create lasting impressions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
