"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function AlternateHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMenuOpen(false) // Close menu after clicking a link
  }

  return (
    <>
      <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-[95vw] sm:w-[90vw] max-w-xl">
        <div className="flex items-center justify-center px-2 sm:px-4 py-2 sm:py-3 rounded-b-2xl sm:rounded-b-3xl bg-gray-700/60 backdrop-blur-lg shadow-lg" style={{fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'}}>
          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center space-x-2 sm:space-x-4 md:space-x-6">
            <Link 
              href="#about" 
              onClick={(e) => handleSmoothScroll(e, 'about')}
              className="uppercase text-xs sm:text-sm md:text-base font-bold tracking-wide sm:tracking-widest text-white hover:underline transition-all"
            >
              ABOUT
            </Link>
            <Link 
              href="#services" 
              onClick={(e) => handleSmoothScroll(e, 'services')}
              className="uppercase text-xs sm:text-sm md:text-base font-bold tracking-wide sm:tracking-widest text-white hover:underline transition-all"
            >
              SERVICES
            </Link>
            <Link 
              href="#milestones" 
              onClick={(e) => handleSmoothScroll(e, 'milestones')}
              className="uppercase text-xs sm:text-sm md:text-base font-bold tracking-wide sm:tracking-widest text-white hover:underline transition-all"
            >
              MILESTONES
            </Link>
            <Link 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="uppercase text-xs sm:text-sm md:text-base font-bold tracking-wide sm:tracking-widest text-white bg-[#fa6031] hover:bg-[#d14a24] px-2 py-1 sm:px-4 sm:py-1.5 md:px-5 rounded-full transition-all"
            >
              CONTACT
            </Link>
          </nav>
          
          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 text-white hover:text-gray-300 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 sm:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[90vw] max-w-sm bg-gray-800/95 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden">
            <nav className="flex flex-col py-4">
              <Link 
                href="#about" 
                onClick={(e) => handleSmoothScroll(e, 'about')}
                className="uppercase text-sm font-bold tracking-widest text-white hover:bg-gray-700/50 px-6 py-3 transition-all border-b border-gray-700/50"
              >
                ABOUT
              </Link>
              <Link 
                href="#services" 
                onClick={(e) => handleSmoothScroll(e, 'services')}
                className="uppercase text-sm font-bold tracking-widest text-white hover:bg-gray-700/50 px-6 py-3 transition-all border-b border-gray-700/50"
              >
                SERVICES
              </Link>
              <Link 
                href="#milestones" 
                onClick={(e) => handleSmoothScroll(e, 'milestones')}
                className="uppercase text-sm font-bold tracking-widest text-white hover:bg-gray-700/50 px-6 py-3 transition-all border-b border-gray-700/50"
              >
                MILESTONES
              </Link>
              <Link 
                href="#contact" 
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className="uppercase text-sm font-bold tracking-widest text-white bg-[#fa6031] hover:bg-[#d14a24] mx-4 my-2 px-6 py-3 rounded-full transition-all text-center"
              >
                CONTACT
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
} 