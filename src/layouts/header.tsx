"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Logo as LogoImage } from '@/assets';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDeckClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleDownload = () => {
    // Replace this URL with your PDF file path
    const pdfUrl = '/document/SLOG.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'SLOG-Deck.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowModal(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 p-4 transition-all w-full duration-300 ease-in-out z-50 ${isScrolled || isMobileMenuOpen ? 'bg-[#F2C230] shadow-md' : 'bg-transparent'}`}>
        <nav className="flex justify-between items-center mx-auto px-4">
          <Link href="/" className="flex items-center text-black font-bold text-xl gap-2">
            <Image
              src={LogoImage}
              alt="SLOG Logo"
              width={32}
              height={32}
            />
            <span className="mx-1 text-2xl font-extrabold">SLOG</span>
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#game-flow" className="text-black font-bold transition-opacity hover:opacity-80">GAME FLOW</a>
            <a href="#" onClick={handleDeckClick} className="text-black font-bold transition-opacity hover:opacity-80">DECK</a>
            <a href="#tokenomics" className="text-black font-bold transition-opacity hover:opacity-80">TOKENOMICS</a>
            <a href="#whitepaper" className="text-black font-bold transition-opacity hover:opacity-80">WHITEPAPER</a>
            <button className="text-black border-4 border-black py-2 px-4 font-extrabold transition-transform hover:scale-105"><a href="https://www.birdeye.so/token/9Xfko1cNUJ6cpgBxkdH7k7VyYouUmCtUij5tDWUFpump?chain=solana">BUY NOW</a></button>
          </div>
          <button className="block md:hidden text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            ☰
          </button>
        </nav>
        {isMobileMenuOpen && (
          <div className="block md:hidden p-4">
            <a href="#game-flow" className="block py-2 text-black font-bold transition-opacity hover:opacity-80">GAME FLOW</a>
            <a href="#air-drop" onClick={handleDeckClick} className="block py-2 text-black font-bold transition-opacity hover:opacity-80">DECK</a>
            <a href="#tokenomics" className="block py-2 text-black font-bold transition-opacity hover:opacity-80">TOKENOMICS</a>
            <a href="#whitepaper" className="block py-2 text-black font-bold transition-opacity hover:opacity-80">WHITEPAPER</a>
            <button className="w-full mt-2 text-black border-4 border-black py-2 px-4 font-extrabold transition-transform hover:scale-105"><a href="https://www.birdeye.so/token/9Xfko1cNUJ6cpgBxkdH7k7VyYouUmCtUij5tDWUFpump?chain=solana">BUY NOW</a></button>
          </div>
        )}
      </header>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4">Download SLOG Deck</h3>
            <p className="mb-6">Click download to download the official $SLOG deck</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleDownload}
                className="px-4 py-2 bg-[#F2C230] text-black font-bold rounded hover:bg-[#d9ae2b] transition-colors"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
