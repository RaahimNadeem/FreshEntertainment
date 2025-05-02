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
        <div className="py-10 h-full px-8 md:px-24 flex flex-col justify-between">
          <div className="max-w-5xl">
            <h2 className="text-3xl md:text-4xl mb-12 leading-tight font-bold">
              Fresh Entertainment is Saudi Arabia&apos;s premier event innovation house, specializing in creating
              immersive, multi-sensory experiences that transcend traditional event boundaries.
            </h2>
          </div>
          <div className="w-full flex justify-end">
            <p className="text-base sm:text-lg md:text-2xl leading-relaxed text-right max-w-2xl">
              We blend cultural authenticity with cutting-edge technology to deliver experiences that resonate
              deeply with audiences and create lasting impressions.
            </p>
          </div>
        </div>

        <div className="relative my-6">
          <div className="w-full h-0.5 bg-white"></div>
        </div>

        <div className="w-full bg-red-500 py-8 md:py-16 h-full flex flex-col justify-center">
          <div className="w-full max-w-[100rem] mx-auto px-8 md:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
              {/* Left: Large card with overlapping avatars */}
              <div className="relative flex flex-col justify-center items-center">
                <div className="bg-[#23272e] rounded-xl w-full h-80 md:h-96 flex items-center justify-center relative">
                  <img
                    src="/placeholder2.jpg"
                    alt="Main avatar"
                    className="rounded-full w-40 h-40 object-cover border-4 border-white"
                  />
                  {/* Top-right small avatar */}
                  <div className="absolute -top-8 -right-8 w-28 h-28 bg-[#23272e] rounded-xl flex items-center justify-center shadow-lg">
                    <img
                      src="/placeholder2.jpg"
                      alt="Avatar detail"
                      className="rounded-full w-20 h-20 object-cover border-2 border-white"
                    />
                  </div>
                  {/* Bottom-left small avatar */}
                  <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-[#23272e] rounded-xl flex items-center justify-center shadow-lg">
                    <img
                      src="/placeholder2.jpg"
                      alt="Avatar detail"
                      className="rounded-full w-20 h-20 object-cover border-2 border-white"
                    />
                  </div>
                </div>
              </div>
              {/* Right: Mission and Vision */}
              <div className="flex flex-col gap-10 justify-center items-center w-full h-full">
                {/* Mission */}
                <div>
                  <div className="inline-block px-6 py-2 rounded-full bg-blue-300 text-[#23272e] font-semibold text-lg mb-2">Our Mission</div>
                  <div className="text-base sm:text-lg md:text-xl leading-relaxed text-white max-w-md">
                    To transform spaces into immersive journeys that engage all five senses
                  </div>
                </div>
                {/* Vision */}
                <div>
                  <div className="inline-block px-6 py-2 rounded-full bg-green-300 text-[#23272e] font-semibold text-lg mb-2">Our Vision</div>
                  <div className="text-base sm:text-lg md:text-xl leading-relaxed text-white max-w-md">
                    To pioneer the future of experiential entertainment in the Middle East
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
