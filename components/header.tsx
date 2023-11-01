"use client";

import { useEffect, useRef, useState } from "react";
import { FaDog, FaBars, FaTimes } from 'react-icons/fa';
import localFont from "next/font/local";

const Gotham = localFont({
  src: [
    {
      path: "../public/fonts/GothamBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Gotham-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/CHOMOLO.otf",
      weight: "600",
      style: "normal",
    },
  ],
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMenuOpenRef = useRef<HTMLDivElement>(null)

  //close popoup when click outside
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (
        isMenuOpen &&
        isMenuOpenRef.current &&
        event.target instanceof Node &&
        !isMenuOpenRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    document.addEventListener("touchend", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
      document.removeEventListener("touchend", handleClickOutside)
    }
  }, [isMenuOpen, isMenuOpenRef])


  return (
    <header className="bg-white text-primary fixed w-full">
      <div className="py-4 container flex items-center justify-between w-[90%] mx-auto max-w-5xl">
        <div className="flex items-center">
          <FaDog className="text-4xl mr-2" />
          <h1 className="text-2xl font-bold text-text-white">Dog Walker</h1>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <FaBars className="text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#home" className="hover:underline text-text-white">Home</a>
          <a href="#contact" className="hover:underline text-text-white">Contato</a>
          <a href="#pricing" className="hover:underline text-text-white">Preços</a>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div ref={isMenuOpenRef} className="md:hidden absolute top-0 right-0 w-1/2 h-screen flex gap-2 flex-col items-center bg-primary text-white pt-4">
            <a href="#home">
              Home
            </a>
            <a href="#contact">
              Contact
            </a>
            <a href="#pricing">
              Pricing
            </a>
          </div>
        )}
      </div>
    </header>
  )
}