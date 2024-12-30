"use client"
import React from "react";
import Image from "next/image";
import { TeamImage } from '@/assets';

const Tokenomics = () => {
  return (
    <section className="bg-[#F2C230] min-h-screen flex items-center justify-center">
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="border-4 border-black overflow-hidden mb-6">
            <Image
              src={TeamImage}
              alt="SLOG Team"
              layout="responsive"
              width={500}
              height={500}
              className="w-3/4 h-auto"
            />
          </div>          
        </div>
        <div className="flex flex-col gap-6 justify-center text-center">
          <h2 className="text-5xl font-extrabold text-black mb-12">TOKENOMICS</h2>
          <div className="border-[3px] border-black p-5 bg-transparent">
            <h3 className="text-2xl font-extrabold text-black mb-2">TOTAL SUPPLY</h3>
            <p className="text-lg font-extrabold text-black break-all">6,000,000,000 SLOG</p>
          </div>
          <div className="border-[3px] border-black p-5 bg-transparent">
            <h3 className="text-2xl font-extrabold text-black mb-2">TOKEN ADDRESS</h3>
            <p className="text-lg font-extrabold text-black break-all">0x40e65cf175a996186f5d89284280604EbBA9E35F</p>
          </div>
          <a href="#buy" className="bg-[#117C41] text-black border-[3px] border-black py-5 text-2xl font-extrabold text-center transition-opacity hover:opacity-90">
            BUY SLOG HERE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
