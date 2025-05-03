"use client"
import Link from "next/link"
import Image from "next/image"

export default function AlternateHeader() {
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-xl">
      <div className="flex items-center justify-center px-4 py-3 rounded-b-3xl bg-gray-700/60 backdrop-blur-lg shadow-lg" style={{fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'}}>
        <nav className="flex items-center space-x-6">
          <Link href="#about" className="uppercase text-base font-bold tracking-widest text-white hover:underline transition-all">ABOUT</Link>
          <Link href="#services" className="uppercase text-base font-bold tracking-widest text-white hover:underline transition-all">SERVICES</Link>
          <Link href="#work" className="uppercase text-base font-bold tracking-widest text-white hover:underline transition-all">WORK</Link>
          <Link href="#milestones" className="uppercase text-base font-bold tracking-widest text-white hover:underline transition-all">MILESTONES</Link>
          <Link href="#contact" className="uppercase text-base font-bold tracking-widest text-white bg-[#fa6031] hover:bg-[#d14a24] px-5 py-1.5 rounded-full transition-all">CONTACT</Link>
        </nav>
      </div>
    </header>
  )
} 