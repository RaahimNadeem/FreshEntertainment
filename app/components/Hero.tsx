"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function Hero() {
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
    <>
      <section className="container mx-auto px-4 sm:px-6 md:px-8 my-16 sm:my-24 md:my-32">
        <div className="flex flex-col justify-center h-full">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-3xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight tracking-tight">
              Where Vision
              <br />
              Meets  
              <span className="italic text-[#ff6633]">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            <div className="mt-8 sm:mt-14">
              <span className="inline-block bg-green-400 text-green-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                Saudi Arabia&apos;s leading event innovation house
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid - Masonry style matching the reference */}
      <section className="w-full py-10" style={{ minHeight: `${windowHeight}px` }}>
        {/* Top row - 5 images of varying widths, scrolling right to left */}
        <div className="overflow-hidden relative mb-1">
          <div className="flex animate-marquee whitespace-nowrap">
            {/* Original row */}
            <div className="h-[300px] sm:h-[350px] md:h-[400px] flex-shrink-0 mr-1 relative" style={{flexBasis: '25%'}}>
              <Image src="/img1.webp" alt="Gallery image" fill className="object-cover" />
            </div>
            <div className="h-[300px] sm:h-[350px] md:h-[400px] flex-shrink-0 mr-1 relative" style={{flexBasis: '16.6667%'}}>
              <Image src="/img2.webp" alt="Gallery image" fill className="object-cover" />
            </div>
            <div className="h-[300px] sm:h-[350px] md:h-[400px] flex-shrink-0 mr-1 relative" style={{flexBasis: '25%'}}>
              <Image src="/img3.webp" alt="Gallery image" fill className="object-cover" />
            </div>
            <div className="h-[300px] sm:h-[350px] md:h-[400px] flex-shrink-0 mr-1 relative" style={{flexBasis: '16.6667%'}}>
              <Image src="/img4.webp" alt="Gallery image" fill className="object-cover" />
            </div>
            <div className="h-[300px] sm:h-[350px] md:h-[400px] flex-shrink-0 mr-1 relative" style={{flexBasis: '16.6667%'}}>
              <Image src="/img5.webp" alt="Gallery image" fill className="object-cover" />
            </div>
            {/* Duplicate for seamless loop */}
            <div className="h-[300px] sm:h-[350px] md:h-[400px] flex-shrink-0 mr-1 relative" style={{flexBasis: '25%'}}>
              <Image src="/img6.jpg" alt="Gallery image" fill className="object-cover" />
            </div>
            <div className="h-[300px] sm:h-[350px] md:h-[400px] flex-shrink-0 mr-1 relative" style={{flexBasis: '16.6667%'}}>
              <Image src="/img7.webp" alt="Gallery image" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Bottom row - 6 images of varying widths, scrolling left to right */}
        <div className="overflow-hidden relative">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {/* Original row */}
            <div className="h-[400px] flex-shrink-0 mr-1 relative" style={{flexBasis: '16.6667%'}}>
              <Image src="/img8.jpg" alt="Gallery image" fill className="object-cover" />
            </div>
            <div className="h-[400px] flex-shrink-0 mr-1 relative" style={{flexBasis: '16.6667%'}}>
              <Image src="/img8.jpg" alt="Gallery image" fill className="object-cover" />
            </div>
            <div className="h-[400px] flex-shrink-0 mr-1 relative" style={{flexBasis: '25%'}}>
              <Image src="/img10.jpg" alt="Gallery image" fill className="object-cover" />
            </div>
            <div className="h-[400px] flex-shrink-0 mr-1 relative" style={{flexBasis: '16.6667%'}}>
              <Image src="/img11.jpg" alt="Gallery image" fill className="object-cover" />
            </div>
            {/* <div className="h-[400px] flex-shrink-0 mr-1 relative" style={{flexBasis: '16.6667%'}}>
              <Image src="/placeholder2.jpg" alt="Gallery image" fill className="object-cover" />
            </div>
            <div className="h-[400px] flex-shrink-0 mr-1 relative" style={{flexBasis: '8.3333%'}}>
              <Image src="/placeholder2.jpg" alt="Gallery image" fill className="object-cover" />
            </div> */}
            {/* Duplicate for seamless loop */}
            <div className="h-[400px] flex-shrink-0 mr-1 relative" style={{flexBasis: '16.6667%'}}>
              <Image src="/img12.jpg" alt="Gallery image" fill className="object-cover" />
            </div>
            <div className="h-[400px] flex-shrink-0 mr-1 relative" style={{flexBasis: '16.6667%'}}>
              <Image src="/img14.webp" alt="Gallery image" fill className="object-cover" />
            </div>
            <div className="h-[400px] flex-shrink-0 mr-1 relative" style={{flexBasis: '25%'}}>
              <Image src="/img13.jpg" alt="Gallery image" fill className="object-cover" />
            </div>
            <div className="h-[400px] flex-shrink-0 mr-1 relative" style={{flexBasis: '16.6667%'}}>
              <Image src="/img115.jpg" alt="Gallery image" fill className="object-cover" />
            </div>
            {/* <div className="h-[400px] flex-shrink-0 mr-1 relative" style={{flexBasis: '16.6667%'}}>
              <Image src="/placeholder2.jpg" alt="Gallery image" fill className="object-cover" />
            </div>
            <div className="h-[400px] flex-shrink-0 mr-1 relative" style={{flexBasis: '8.3333%'}}>
              <Image src="/placeholder2.jpg" alt="Gallery image" fill className="object-cover" />
            </div> */}
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
    </>
  )
} 