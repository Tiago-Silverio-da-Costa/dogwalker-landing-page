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
          <FaBars className="text-2xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="hover:underline text-text-white">Home</a>
            </li>
            {/* <li>
              <a href="#services" className="hover:underline text-text-white">Services</a>
            </li> */}
            <li>
              <a href="#contact" className="hover:underline text-text-white">Contato</a>
            </li>
            <li>
              <a href="#pricing" className="hover:underline text-text-white">Preços</a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav ref={isMenuOpenRef} className="md:hidden absolute top-0 right-0 bg-gradient-to-r from-primary to-secondary w-1/2 h-screen flex flex-col items-center">
            <ul className="mt-12 space-y-4 text-xl">
              <li>
                <a href="#home" className="text-text-white hover:underline" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  Home
                </a>
              </li>
              {/* <li>
                <a href="#" className="text-text-white hover:underline" >
                  Services
                </a>
              </li> */}
              <li>
                <a href="#contact" className="text-text-white hover:underline" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-text-white hover:underline" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}