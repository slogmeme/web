"use client"
import React from "react";
import Image from "next/image";
import { FooterAnimation } from '@/assets';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-sky-400 to-blue-600 py-16 px-5 relative min-h-[400px] flex items-center">
      <div className="max-w-[1400px] mx-auto w-full flex justify-end relative">
        <div className="absolute left-0 bottom-0 w-3/5 h-full md:w-full md:opacity-30">
          <Image 
            src={FooterAnimation}
            alt="Cricket Player Animation"
            layout="fill"
            objectFit="contain"
            objectPosition="bottom left"
          />
        </div>
        <div className="flex flex-col gap-5 relative z-10">
          <a href="/guides-faq" className="text-black text-xl underline font-medium transition-transform hover:translate-x-[-5px]">
            Guides / FAQ
          </a>
          <a href="/github" className="text-black text-xl underline font-medium transition-transform hover:translate-x-[-5px]">
            Github
          </a>
          <a href="/whitepaper" className="text-black text-xl underline font-medium transition-transform hover:translate-x-[-5px]">
            Whitepaper
          </a>
          <a href="/terms" className="text-black text-xl underline font-medium transition-transform hover:translate-x-[-5px]">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;