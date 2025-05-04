"use client"
import { motion } from "framer-motion"
import Image from "next/image"

interface Milestone {
  year: string
  title: string
  description: string
  image: string
}

const milestones: Milestone[] = [
  {
    year: "2022",
    title: "World Cup Qatar",
    description: "Created immersive fan experiences for the global football event. This project set a new standard for fan engagement on a global stage, blending technology, creativity, and culture.",
    image: "img2.webp"
  },
  {
    year: "2023",
    title: "Riyadh Eid Festival",
    description: "Designed and executed the largest Eid celebration in Saudi Arabia, featuring immersive installations, live performances, and record-breaking attendance.",
    image: "img115.jpg"
  },
  {
    year: "2024",
    title: "Visionary Collabs",
    description: "Partnered with global brands to create groundbreaking experiences, pushing the boundaries of what's possible in live entertainment and branded events.",
    image: "img4.webp"
  }
]

export default function Milestones() {
  return (
    <section className="relative px-4 md:px-0 bg-transparent">
         {/* Orange section with heading and right-aligned paragraph */}
      <div
        className="min-h-[50vh] py-4 gap-12 h-full px-8 md:px-24 flex flex-col justify-center"
      >
        <div className="w-full flex justify-end -mt-2 md:-mt-4">
        <h2 className="text-3xl md:text-6xl font-bold max-w-4xl text-right">
          Our journey is a tapestry of bold ideas, world-class collaborations, and unforgettable moments. 
          </h2>    
        </div>
        <div className="max-w-5xl mb-4 md:mb-8">
          <p className="text-xl sm:text-lg md:text-3xl leading-relaxed text-left max-w-2xl">
          Each milestone is a testament to our relentless pursuit of innovation and excellence—shaping experiences that resonate far beyond the event itself.
          </p>
        </div>
      </div>
      <div className="max-w-5xl mt-8 mb-24 sm:mb-36 mx-auto px-4 sm:px-6 md:px-8">
        <div className="relative">
          {/* Vertical accent line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-white/10 via-white/30 to-white/10 rounded-full -translate-x-1/2 z-0" />
          <div className="space-y-16 sm:space-y-24 md:space-y-32">
            {milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  className={`relative flex flex-col md:flex-row items-center md:items-stretch ${isEven ? '' : 'md:flex-row-reverse'}`}
                >
                  {/* Image */}
                  <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-8 md:pl-0 mb-8 md:mb-0">
                    <div className="relative w-full max-w-md h-48 sm:h-56 md:h-64 lg:h-80 rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-lg">
                      <Image
                        src={milestone.image}
                        alt={milestone.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                    </div>
                  </div>
                  {/* Connector dot */}
                  <div className="hidden md:flex flex-col items-center justify-center z-10">
                    <div className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 rounded-full bg-white border-4 border-white/30 shadow-lg" />
                  </div>
                  {/* Text */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-8 md:pr-0">
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-sm sm:text-base md:text-lg text-white/80">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
} 