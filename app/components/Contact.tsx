"use client"
import React from 'react'
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

const InstagramIcon = () => <FaInstagram className="inline-block text-xl" />;
const TwitterIcon = () => <FaTwitter className="inline-block text-xl" />;
const LinkedinIcon = () => <FaLinkedin className="inline-block text-xl" />;

const Contact = () => {
  return (
    <div className="min-h-screen mt-8 justify-center flex flex-col md:flex-row text-[#f6f5ef]">
      {/* Left Column */}
      <div className="w-full md:w-1/2 flex flex-col items-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 space-y-8 sm:space-y-12 md:space-y-16 max-w-2xl mx-auto md:mx-0">
        {/* Quirky Message */}
        <div className="w-full">
          <p className="text-lg sm:text-xl md:text-2xl mb-4">We genuinely care about you and your events. Let us know how we can serve you better.</p>
        </div>
        {/* Socials */}
        <div className="w-full">
          <h3 className="font-bold uppercase text-xs mb-2 tracking-widest">Social Links</h3>
          <ul className="space-y-2 text-base sm:text-lg">
            <li className="flex items-center space-x-2">
              <InstagramIcon />
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
            </li>
            <li className="flex items-center space-x-2">
              <TwitterIcon />
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
            </li>
            <li className="flex items-center space-x-2">
              <LinkedinIcon />
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
            </li>
          </ul>
        </div>
        {/* Dummy Form */}
        <div className="w-full">
          <h3 className="font-bold uppercase text-xs mb-2 tracking-widest">Contact Form</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full border-b border-[#f6f5ef] bg-transparent py-2 px-1 focus:outline-none placeholder:text-[#f6f5ef]/70" />
            <input type="email" placeholder="Your Email" className="w-full border-b border-[#f6f5ef] bg-transparent py-2 px-1 focus:outline-none placeholder:text-[#f6f5ef]/70" />
            <textarea placeholder="Your Message" className="w-full border-b border-[#f6f5ef] bg-transparent py-2 px-1 focus:outline-none placeholder:text-[#f6f5ef]/70" rows={3}></textarea>
            <button type="submit" className="mt-2 px-6 py-2 border border-[#f6f5ef] rounded-full hover:bg-[#f6f5ef] hover:text-[#1e2321] transition">Send</button>
          </form>
        </div>
      </div>
      {/* Right Column */}
      <div className="w-full md:w-1/2 flex flex-col items-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 border-t md:border-t-0 relative">
        <div className="w-full max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold leading-none tracking-tight mb-4 group">
            <span className="inline-block group-hover:rotate-[-2deg] transition-transform duration-500">DROP</span>{" "}
            <span className="inline-block group-hover:rotate-[2deg] transition-transform duration-500">US</span>
            <div className="flex items-center">
              <div className="relative group-hover:scale-110 transition-transform duration-500">
                <svg 
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mr-4 md:mr-6 transform group-hover:rotate-12 transition-all duration-500" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" 
                    stroke="#f6f5ef" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="group-hover:stroke-[#73e0a8] transition-colors duration-500"
                  />
                  <path 
                    d="M22 6L12 13L2 6" 
                    stroke="#f6f5ef" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="group-hover:stroke-[#73e0a8] transition-colors duration-500"
                  />
                  <path 
                    d="M4 4L12 12L20 4" 
                    stroke="#f6f5ef" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="group-hover:stroke-[#73e0a8] transition-colors duration-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  {/* Easter egg: Hidden smiley face that appears on hover */}
                  <circle 
                    cx="12" 
                    cy="12" 
                    r="2" 
                    fill="#f6f5ef" 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"
                  />
                </svg>
                <div className="absolute inset-0 bg-[#73e0a8]/10 rounded-full blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
              </div>
              <div className="relative">
                <span className='ml-4 md:ml-6 text-4xl sm:text-5xl md:text-7xl lg:text-9xl group-hover:text-[#73e0a8] transition-colors duration-500 inline-block group-hover:rotate-[-2deg]'>
                  A
                </span>
                {" "}
                <span className='text-4xl sm:text-5xl md:text-7xl lg:text-9xl group-hover:text-[#73e0a8] transition-colors duration-500 inline-block group-hover:rotate-[2deg]'>
                  LINE
                </span>
              </div>
            </div>
          </h1>
          <a 
            href="mailto:hello@freshentertainment.com" 
            className="block mt-6 sm:mt-8 text-xl sm:text-2xl underline decoration-[#f6f5ef] underline-offset-4 hover:text-[#ff6633] transition-all duration-500 relative group"
          >
            <span className="relative z-10 inline-block group-hover:scale-105 transition-transform duration-500">
              hello@freshentertainment.com
            </span>
            <div className="absolute inset-0 bg-[#ff6633]/10 rounded-full blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
            <span className="absolute -bottom-6 left-0 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
              (We promise to reply quick!)
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact 