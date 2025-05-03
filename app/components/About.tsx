"use client"

import React from "react"

const About = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <>
      {/* Orange section with heading and right-aligned paragraph */}
      <div ref={ref} className="py-10 h-full px-8 md:px-24 flex flex-col justify-between">
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

      <div className="relative my-2">
        <div className="w-full h-0.5 bg-white opacity-50"></div>
      </div>

      {/* Image grid and mission/vision */}
      <div className="w-full py-6 md:py-16 h-full flex flex-col justify-center overflow-x-hidden">
        <div className="w-full max-w-[100rem] mx-auto px-2 sm:px-4 md:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 items-center">
            {/* Left: Main image with two overlapping images */}
            <div className="relative flex justify-center items-center w-full">
              <img
                src="/img1.webp"
                alt="Event visual"
                className="w-full max-w-3xl rounded-xl shadow-lg object-cover"
              />
              {/* Top-right small image */}
              <img
                src="/img2.webp"
                alt="Avatar detail"
                className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-12 h-12 sm:w-16 sm:h-16 md:w-28 md:h-28 rounded-full border-2 border-white shadow-lg object-cover"
              />
              {/* Bottom-left small image */}
              <img
                src="/img3.webp"
                alt="Avatar detail"
                className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-12 h-12 sm:w-16 sm:h-16 md:w-28 md:h-28 rounded-full border-2 border-white shadow-lg object-cover"
              />
            </div>
            {/* Right: Mission and Vision */}
            <div className="flex flex-col gap-10 justify-center items-center w-full h-full">
              {/* Mission */}
              <div className="group">
                <div className="inline-block px-6 py-2 rounded-full bg-blue-300/80 backdrop-blur-sm border border-white/20 text-[#23272e] font-semibold text-lg mb-2 transition-all duration-300 group-hover:bg-blue-300 group-hover:border-white/40 group-hover:shadow-lg group-hover:shadow-blue-300/20">Our Mission</div>
                <div className="text-base sm:text-lg md:text-xl leading-relaxed text-white max-w-md">
                  To transform spaces into immersive journeys that engage all five senses
                </div>
              </div>
              {/* Vision */}
              <div className="group">
                <div className="inline-block px-6 py-2 rounded-full bg-green-300/80 backdrop-blur-sm border border-white/20 text-[#23272e] font-semibold text-lg mb-2 transition-all duration-300 group-hover:bg-green-300 group-hover:border-white/40 group-hover:shadow-lg group-hover:shadow-green-300/20">Our Vision</div>
                <div className="text-base sm:text-lg md:text-xl leading-relaxed text-white max-w-md">
                  To pioneer the future of experiential entertainment in the Middle East
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
})

export default About 