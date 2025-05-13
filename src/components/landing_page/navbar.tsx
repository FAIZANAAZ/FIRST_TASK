"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full py-4 px-4 md:px-[80px]">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-[23px] md:text-[30px] font-bold text-gray-900">
          break<span className="text-[#86198F]">io</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-[#985aa0]">
            HOME
          </Link>
          <Link href="/HERO_SEC_2" className="text-gray-700 hover:text-[#985aa0]">
            Second_Hero_page
          </Link>
          <Link href="/HERO_SEC_3" className="text-gray-700 hover:text-[#985aa0]">
            Third_Hero_page
          </Link>
          <Link href="/" className="text-gray-700 hover:text-[#985aa0]">
            Log In
          </Link>
          <Button className="bg-[#C026D3] hover:bg-[#985aa0] text-white rounded-full px-6">Start Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 py-4">
          <Link href="/" className="text-gray-700 hover:text-[#985aa0]">
            Home
          </Link>
          <Link href="/HERO_SEC_2" className="text-gray-700 hover:text-[#985aa0]">
                        Second_Hero_page

          </Link>
          <Link href="/HERO_SEC_3" className="text-gray-700 hover:text-[#985aa0]">
            Third_Hero_page
          </Link>
          
          <Link href="/" className="text-gray-700 hover:text-[#985aa0]">
            Log In
          </Link>
          <Button className="bg-[#C026D3] hover:bg-[#985aa0] text-white rounded-full w-full">Start Now</Button>
        </div>
      )}
    </nav>
  )
}