"use client"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="container mx-auto px-6 py-6 flex justify-between items-center">
      <div className="flex items-center">
        <div className="mr-2">
          <Image
            src="/logo.png"
            alt="Fresh Entertainment Logo"
            width={120}
            height={120}
            priority
          />
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