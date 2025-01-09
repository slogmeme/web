"use client"
import React from "react";
import Image from "next/image";
import { TeamImage } from '@/assets';

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="bg-[#F2C230] min-h-screen flex items-center justify-center">
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-4 md:px-0">
        <div className="block md:hidden text-center mt-6">
          <h2 className="text-5xl font-extrabold text-black mb-12">TOKENOMICS</h2>
          <p className=" text-[18px] leading-[24px] text-black">Fair Launch. No Pre-Mine. No team allocation. 2 billion total SLOG can ever exist, with half available on Solana and the other half available through gameplay on TON.</p>
        </div>
        <div>
          <div className="border-4 border-black overflow-hidden mb-6">
            <Image
              src={TeamImage}
              alt="SLOG Team"
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 justify-center text-center">
          <h2 className="text-5xl font-extrabold text-black mb-12 hidden md:block">TOKENOMICS</h2>
          <div className="border-[3px] border-black p-5 bg-transparent">
            <h3 className="text-2xl font-extrabold text-black mb-2">TOTAL SUPPLY</h3>
            <p className="text-lg font-extrabold text-black break-all">1,000,000,000 SLOG</p>
          </div>
          <div className="border-[3px] border-black p-5 bg-transparent">
            <h3 className="text-2xl font-extrabold text-black mb-2">TOKEN ADDRESS</h3>
            <p className="text-lg font-extrabold text-black break-all">9Xfko1cNUJ6cpgBxkdH7k7VyYouUmCtUij5tDWUFpump</p>
          </div>
          <a href="https://pump.fun/coin/9Xfko1cNUJ6cpgBxkdH7k7VyYouUmCtUij5tDWUFpump" className="bg-[#117C41] text-black border-[3px] border-black py-5 text-2xl font-extrabold text-center transition-opacity hover:opacity-90">
            BUY SLOG HERE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
