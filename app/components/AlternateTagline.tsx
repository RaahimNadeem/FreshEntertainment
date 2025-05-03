"use client"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function Hero() {
  const [windowHeight, setWindowHeight] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <>
      <section className="container mx-auto px-6 my-32">
         <div className="w-full flex justify-end">
        <div className="max-w-5xl font-bold text-right text-white text-2xl md:text-4xl pr-4 md:pr-0" style={{lineHeight: '1.4'}}>
        Fresh Entertainment is Saudi Arabia&apos;s premier event innovation house, specializing in creating
        immersive, multi-sensory experiences that transcend traditional event boundaries.        </div>
      </div>

      </section>

      {/* Gallery Grid - Masonry style matching the reference */}
      <section 
        ref={sectionRef}
        className={`w-full py-10 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-150'}`} 
        style={{ minHeight: `${windowHeight}px` }}
      >
        {/* Top row - 5 images of varying widths, scrolling right to left */}
        <div className="overflow-hidden relative mb-1">
          <div className="flex animate-marquee whitespace-nowrap">
            {/* Original row */}
            <div className="h-[400px] flex-shrink-0 mr-1 relative" style={{flexBasis: '25%'}}>
              <Image src="/img1.webp" alt="Gallery image" fill className="object-cover" />
            </div>
            <div className="h-[400px] flex-shrink-0 mr-1 relative" style={{flexBasis: '16.6667%'}}>
              <Image src="/img2.webp" alt="Gallery image" fill className="object-cover" />
            </div>
            <div className="h-[400px] flex-shrink-0 mr-1 relative" style={{flexBasis: '25%'}}>
              <Image src="/img3.webp" alt="Gallery image" fill className="object-cover" />
            </div>
            <div className="h-[400px] flex-shrink-0 mr-1 relative" style={{flexBasis: '16.6667%'}}>
              <Image src="/img4.webp" alt="Gallery image" fill className="object-cover" />
            </div>
            <div className="h-[400px] flex-shrink-0 mr-1 relative" style={{flexBasis: '16.6667%'}}>
              <Image src="/img5.webp" alt="Gallery image" fill className="object-cover" />
            </div>
            {/* Duplicate for seamless loop */}
            <div className="h-[400px] flex-shrink-0 mr-1 relative" style={{flexBasis: '25%'}}>
              <Image src="/img6.jpg" alt="Gallery image" fill className="object-cover" />
            </div>
            <div className="h-[400px] flex-shrink-0 mr-1 relative" style={{flexBasis: '16.6667%'}}>
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
        @keyframes scale-in {
          0% { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
        .animate-scale-in {
          animation: scale-in 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </>
  )
} 