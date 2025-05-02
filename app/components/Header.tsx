"use client"
import Link from "next/link"

export default function Header() {
  return (
    <header className="container mx-auto px-6 py-6 flex justify-between items-center">
      <div className="flex items-center">
        <div className="mr-2">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" fill="white" />
            <path d="M10 10H30V15H10V10Z" fill="#1e2321" />
            <path d="M10 17H20V30H10V17Z" fill="#1e2321" />
            <path d="M22 17H30V22H22V17Z" fill="#1e2321" />
            <path d="M22 24H30V30H22V24Z" fill="#1e2321" />
          </svg>
        </div>
        <div>
          <h2 className="font-playfair font-bold text-white text-lg tracking-wide">FRESH</h2>
          <p className="text-xs text-gray-300 tracking-wider">ENTERTAINMENT</p>
        </div>
      </div>

      <div className="flex items-center justify-between w-full ml-10">
        <nav className="hidden md:flex items-center space-x-4">
          <Link href="#about" className="px-4 py-2 bg-[#333] hover:bg-[#444] rounded text-sm font-medium">
            ABOUT
          </Link>
          <Link href="#services" className="px-4 py-2 bg-[#333] hover:bg-[#444] rounded text-sm font-medium">
            SERVICES
          </Link>
          <Link href="#work" className="px-4 py-2 bg-[#333] hover:bg-[#444] rounded text-sm font-medium">
            WORK
          </Link>
          <Link href="#milestones" className="px-4 py-2 bg-[#333] hover:bg-[#444] rounded text-sm font-medium">
            MILESTONES
          </Link>
        </nav>

        <Link
          href="#contact"
          className="hidden md:block px-6 py-2 bg-[#ff6633] hover:bg-[#ff7744] rounded text-sm font-medium"
        >
          CONTACT
        </Link>
      </div>

      <div className="md:hidden">
        <button className="p-2 bg-[#333] rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  )
} 