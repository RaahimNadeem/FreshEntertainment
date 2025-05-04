"use client"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion, useScroll, useTransform } from "framer-motion"

const HighlightedText = ({ text }: { text: string }) => {
  const words = text.split(' ');
  const specialWords = ['immersive', 'multi-sensory', 'transcend', 'premier', 'innovation'];
  
  return (
    <>
      {words.map((word, i) => {
        const isSpecial = specialWords.some(special => word.toLowerCase().includes(special.toLowerCase()));
        return (
          <motion.span
            key={i}
            className={`inline-block ${isSpecial ? 'relative group cursor-pointer' : ''}`}
            whileHover={isSpecial ? { scale: 1.1 } : {}}
            transition={{ type: "spring", stiffness: 500 }}
          >
            {word}
            {i < words.length - 1 && <span className="inline-block w-2" />}
            {isSpecial && (
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#73e0a8]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.span>
        );
      })}
    </>
  );
};

export default function Hero() {
  const [windowHeight, setWindowHeight] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [text] = useTypewriter({
    words: ['Experience', 'Wonder', 'Innovation', 'Spectacle', 'Magic'],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 90,
    delaySpeed: 1200,
  })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

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
    <motion.div 
      ref={containerRef}
      style={{ opacity, scale }}
      className="relative"
    >
      <section className="container mx-auto px-6 my-32">
        <motion.div 
          className="w-full flex justify-end"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="max-w-5xl font-bold text-right text-white text-2xl md:text-4xl pr-4 md:pr-0 relative group"
            style={{ lineHeight: '1.4' }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <HighlightedText text="Fresh Entertainment is Saudi Arabia's premier event innovation house, specializing in creating immersive, multi-sensory experiences that transcend traditional event boundaries." />
            <motion.div 
              className="absolute inset-0 bg-white/5 rounded-xl -z-10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
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
            {[
              { src: "/img1.webp", basis: "25%" },
              { src: "/img2.webp", basis: "16.6667%" },
              { src: "/img3.webp", basis: "25%" },
              { src: "/img4.webp", basis: "16.6667%" },
              { src: "/img5.webp", basis: "16.6667%" },
              { src: "/img6.jpg", basis: "25%" },
              { src: "/img7.webp", basis: "16.6667%" }
            ].map((img, idx) => (
              <motion.div
                key={idx}
                className="h-[400px] flex-shrink-0 mr-1 relative group"
                style={{ flexBasis: img.basis }}
                onHoverStart={() => setIsHovering(idx)}
                onHoverEnd={() => setIsHovering(null)}
              >
                <Image src={img.src} alt="Gallery image" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                  >
                    <span className="text-2xl">+</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom row - 6 images of varying widths, scrolling left to right */}
        <div className="overflow-hidden relative">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {/* Original row */}
            {[
              { src: "/img8.jpg", basis: "16.6667%" },
              { src: "/img8.jpg", basis: "16.6667%" },
              { src: "/img10.jpg", basis: "25%" },
              { src: "/img11.jpg", basis: "16.6667%" },
              { src: "/img12.jpg", basis: "16.6667%" },
              { src: "/img14.webp", basis: "16.6667%" },
              { src: "/img13.jpg", basis: "25%" },
              { src: "/img115.jpg", basis: "16.6667%" }
            ].map((img, idx) => (
              <motion.div
                key={idx}
                className="h-[400px] flex-shrink-0 mr-1 relative group"
                style={{ flexBasis: img.basis }}
                onHoverStart={() => setIsHovering(idx + 7)}
                onHoverEnd={() => setIsHovering(null)}
              >
                <Image src={img.src} alt="Gallery image" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                  >
                    <span className="text-2xl">+</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
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
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </motion.div>
  )
} 