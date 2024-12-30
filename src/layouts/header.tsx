"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Logo as LogoImage,  } from '@/assets';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 p-4 transition-all w-full duration-300 ease-in-out z-50 ${isScrolled || isMobileMenuOpen ? 'bg-[#F2C230] shadow-md' : 'bg-transparent'}`}>
      <nav className="flex justify-between items-center mx-auto px-4">
        <Link href="/" className="flex items-center text-black font-bold text-xl gap-2">
          <Image 
            src={LogoImage}
            alt="SLOG Logo"            
            className="w-8 h-8"
          />
          <span className="mx-1 text-2xl font-extrabold">SLOG</span>
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <a href="#game-flow" className="text-black font-bold transition-opacity hover:opacity-80">GAME FLOW</a>
          <a href="#air-drop" className="text-black font-bold transition-opacity hover:opacity-80">AIR DROP</a>
          <a href="#tokenomics" className="text-black font-bold transition-opacity hover:opacity-80">TOKENOMICS</a>
          <a href="#whitepaper" className="text-black font-bold transition-opacity hover:opacity-80">WHITEPAPER</a>
          <button className="text-black border-4 border-black py-2 px-4 font-extrabold transition-transform hover:scale-105">CONNECT WALLET</button>
        </div>
        <button className="block md:hidden text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </button>
      </nav>
      {isMobileMenuOpen && (
        <div className="block md:hidden p-4">
          <a href="#game-flow" className="block py-2 text-black font-bold transition-opacity hover:opacity-80">GAME FLOW</a>
          <a href="#air-drop" className="block py-2 text-black font-bold transition-opacity hover:opacity-80">AIR DROP</a>
          <a href="#tokenomics" className="block py-2 text-black font-bold transition-opacity hover:opacity-80">TOKENOMICS</a>
          <a href="#whitepaper" className="block py-2 text-black font-bold transition-opacity hover:opacity-80">WHITEPAPER</a>
          <button className="w-full mt-2 text-black border-4 border-black py-2 px-4 font-extrabold transition-transform hover:scale-105">CONNECT WALLET</button>
        </div>
      )}
    </header>
  );
};

export default Header;