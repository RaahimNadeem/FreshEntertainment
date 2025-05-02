"use client"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import Header from "./components/Header"

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

      {/* Hero Section - Full viewport height */}
      <section className="container mx-auto px-6 my-32" >
        <div className="flex flex-col justify-center h-full">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-5xl md:text-8xl leading-tight tracking-tight">
              Where Vision
              <br />
              Meets<span className="italic"> Experience</span>
            </h1>
            <div className="mt-8">
              <span className="inline-block bg-green-400 text-green-900 px-4 py-2 rounded-full text-sm font-medium">
                Saudi Arabia&apos;s leading event innovation house
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid - Masonry style matching the reference */}
      <section className="w-full py-12" style={{ minHeight: `${windowHeight}px` }}>
        {/* Top row - 5 images of varying widths, scrolling right to left */}
        <div className="overflow-hidden relative mb-1">
          <div className="flex animate-marquee whitespace-nowrap">
            {/* Original row */}
            <div className="bg-gray-200 h-[400px] flex-shrink-0 mr-1" style={{flexBasis: '25%'}}></div>
            <div className="bg-gray-200 h-[400px] flex-shrink-0 mr-1" style={{flexBasis: '16.6667%'}}></div>
            <div className="bg-gray-200 h-[400px] flex-shrink-0 mr-1" style={{flexBasis: '25%'}}></div>
            <div className="bg-gray-200 h-[400px] flex-shrink-0 mr-1" style={{flexBasis: '16.6667%'}}></div>
            <div className="bg-gray-200 h-[400px] flex-shrink-0 mr-1" style={{flexBasis: '16.6667%'}}></div>
            {/* Duplicate for seamless loop */}
            <div className="bg-gray-200 h-[400px] flex-shrink-0 mr-1" style={{flexBasis: '25%'}}></div>
            <div className="bg-gray-200 h-[400px] flex-shrink-0 mr-1" style={{flexBasis: '16.6667%'}}></div>
            <div className="bg-gray-200 h-[400px] flex-shrink-0 mr-1" style={{flexBasis: '25%'}}></div>
            <div className="bg-gray-200 h-[400px] flex-shrink-0 mr-1" style={{flexBasis: '16.6667%'}}></div>
            <div className="bg-gray-200 h-[400px] flex-shrink-0 mr-1" style={{flexBasis: '16.6667%'}}></div>
          </div>
        </div>

        {/* Bottom row - 6 images of varying widths, scrolling left to right */}
        <div className="overflow-hidden relative">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {/* Original row */}
            <div className="bg-gray-200 h-[400px] flex-shrink-0 mr-1" style={{flexBasis: '16.6667%'}}></div>
            <div className="bg-gray-200 h-[400px] flex-shrink-0 mr-1" style={{flexBasis: '16.6667%'}}></div>
            <div className="bg-gray-200 h-[400px] flex-shrink-0 mr-1" style={{flexBasis: '25%'}}></div>
            <div className="bg-gray-200 h-[400px] flex-shrink-0 mr-1" style={{flexBasis: '16.6667%'}}></div>
            <div className="bg-gray-200 h-[400px] flex-shrink-0 mr-1" style={{flexBasis: '16.6667%'}}></div>
            <div className="bg-gray-200 h-[400px] flex-shrink-0 mr-1" style={{flexBasis: '8.3333%'}}></div>
            {/* Duplicate for seamless loop */}
            <div className="bg-gray-200 h-[400px] flex-shrink-0 mr-1" style={{flexBasis: '16.6667%'}}></div>
            <div className="bg-gray-200 h-[400px] flex-shrink-0 mr-1" style={{flexBasis: '16.6667%'}}></div>
            <div className="bg-gray-200 h-[400px] flex-shrink-0 mr-1" style={{flexBasis: '25%'}}></div>
            <div className="bg-gray-200 h-[400px] flex-shrink-0 mr-1" style={{flexBasis: '16.6667%'}}></div>
            <div className="bg-gray-200 h-[400px] flex-shrink-0 mr-1" style={{flexBasis: '16.6667%'}}></div>
            <div className="bg-gray-200 h-[400px] flex-shrink-0 mr-1" style={{flexBasis: '8.3333%'}}></div>
          </div>
        </div>
      </section>
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>

      {/* Orange Section - Changes color when scrolled into view - Full viewport height */}
      <section
        ref={orangeSectionRef}
        className="w-full"
        style={{ minHeight: `${windowHeight}px` }}
      >
        <div className="container mx-auto px-6 py-16 h-full flex flex-col justify-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl mb-6 leading-tight">
              Fresh Entertainment is Saudi Arabia&apos;s premier event innovation house, specializing in creating
              immersive, multi-sensory experiences that transcend traditional event boundaries.
            </h2>

            <div className="flex justify-center my-12">
              <div className="w-4 h-4 bg-white rotate-45"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80">
                {/* Three placeholder images positioned as in the design */}
                <div className="bg-gray-200 w-3/5 h-3/5 rounded absolute top-0 left-0"></div>
                <div className="bg-gray-200 w-2/5 h-2/5 rounded absolute bottom-0 left-1/4"></div>
                <div className="bg-gray-200 w-1/3 h-1/3 rounded absolute top-1/4 right-0"></div>
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
