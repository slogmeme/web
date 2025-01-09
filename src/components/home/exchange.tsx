"use client"
import React from "react";

const Exchange = () => {
  return (
    <section className="bg-[#F2C230] min-h-screen flex flex-col justify-start px-4 py-16 md:py-20">
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-4xl md:text-[64px] font-extrabold mb-4">EXCHANGES</h2>
        <p className="text-xl md:text-[32px] font-bold px-4">
          SLOG IS AVAILABLE FOR TRADE ON THESE MAJOR EXCHANGES:
        </p>
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col">
          {/* Exchange Buttons */}
          <div className="flex flex-col gap-4 mb-8">
            <a
              href="https://dexscreener.com/solana/9Xfko1cNUJ6cpgBxkdH7k7VyYouUmCtUij5tDWUFpump"
              className="bg-[#117C41] text-black py-4 text-base font-extrabold border-4 border-black text-center shadow-md transition-transform hover:translate-y-[-2px]"
            >
              RAYDIUM
            </a>
            <a
              href="https://lux.exchange"
              className="bg-[#117C41] text-black py-4 text-base font-extrabold border-4 border-black text-center shadow-md transition-transform hover:translate-y-[-2px]"
            >
              LX
            </a>
          </div>

          {/* Mobile Footer Text */}
          <div className="text-center text-2xl font-bold mt-8">
            <p>MORE EXCHANGE</p>
            <p>LISTINGS ARE ON THE</p>
            <p>WAY</p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            <a
              href="https://www.geckoterminal.com/solana/pools/HbndPTptXEzgtYnZ6VHU4TUqnkXhb7iCrAPL6sDFNPd3"
              className="bg-[#117C41] text-black py-4 text-[40px] font-extrabold border-4 border-black text-center shadow-md transition-transform hover:translate-y-[-2px]"
            >
              RAYDIUM
            </a>
            <a
              href="https://www.geckoterminal.com/solana/pools/HbndPTptXEzgtYnZ6VHU4TUqnkXhb7iCrAPL6sDFNPd3"
              className="bg-[#117C41] text-black py-4 text-[40px] font-extrabold border-4 border-black text-center shadow-md transition-transform hover:translate-y-[-2px]"
            >
              LX
            </a>
            {/* Desktop Footer Text */}
          </div>

          {/* Right Column */}
          <div className="bg-transparent rounded-lg overflow-hidden">

            <h3 className="text-[32px] font-bold text-left mt-16 leading-tight">
              + MORE<br />
              EXCHANGE<br />
              LISTINGS ARE ON<br />
              THE WAY ; )
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exchange;
