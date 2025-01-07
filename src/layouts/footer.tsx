"use client"
import React from "react";
import Image from "next/image";
import { HeroBackground, FooterMobile, FooterImage } from '@/assets';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#F2C230] relative min-h-[400px] w-full">
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={HeroBackground}
          alt="Footer Background"
          fill
          className="hidden md:block object-cover"
          priority
        />

        <div className="flex flex-col gap-5 absolute bottom-5 left-10">
          <Link
            href="/guides-faq"
            className="text-black text-xl md:text-2xl font-medium underline underline-offset-4 hover:translate-x-[-5px] transition-transform"
          >
            Guides / FAQ
          </Link>
          <Link
            href="/github"
            className="text-black text-xl md:text-2xl font-medium underline underline-offset-4 hover:translate-x-[-5px] transition-transform"
          >
            Github
          </Link>
          <Link
            href="/whitepaper"
            className="text-black text-xl md:text-2xl font-medium underline underline-offset-4 hover:translate-x-[-5px] transition-transform"
          >
            Whitepaper
          </Link>
          <Link
            href="/terms"
            className="text-black text-xl md:text-2xl font-medium underline underline-offset-4 hover:translate-x-[-5px] transition-transform"
          >
            Terms of Service
          </Link>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-2xl">🏏</span>
            <span className="text-black text-xl font-bold">SLOG</span>
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <div className="relative h-full w-full">
            <Image
              src={FooterMobile}
              alt="Cricket Player Animation"
              width={221}
              height={300}
              className="object-contain object-center block md:hidden"
              priority
            />
          </div>

          <div className="relative h-full w-full">
            <Image
              src={FooterImage}
              alt="Phone Display"
              priority
              width={477}
              height={533.5}
              className="hidden md:block"
            />
          </div>
        </div>
      </div>

      {/* <div className="relative z-10 mx-2 w-full h-full flex flex-col md:flex-row">
        <div className="flex flex-col gap-5">
          <Link
            href="/guides-faq"
            className="text-black text-xl md:text-2xl font-medium underline underline-offset-4 hover:translate-x-[-5px] transition-transform"
          >
            Guides / FAQ
          </Link>
          <Link
            href="/github"
            className="text-black text-xl md:text-2xl font-medium underline underline-offset-4 hover:translate-x-[-5px] transition-transform"
          >
            Github
          </Link>
          <Link
            href="/whitepaper"
            className="text-black text-xl md:text-2xl font-medium underline underline-offset-4 hover:translate-x-[-5px] transition-transform"
          >
            Whitepaper
          </Link>
          <Link
            href="/terms"
            className="text-black text-xl md:text-2xl font-medium underline underline-offset-4 hover:translate-x-[-5px] transition-transform"
          >
            Terms of Service
          </Link>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-2xl">🏏</span>
            <span className="text-black text-xl font-bold">SLOG</span>
          </div>
        </div>

        <div>
          <div className="w-full h-[300px] md:hidden relative">
            <Image
              src={FooterMobile}
              alt="Cricket Player Animation"
              fill
              className="object-contain object-center"
              priority
            />
          </div>

          <div className="hidden md:block relative h-full w-auto">
            <Image
              src={FooterImage}
              alt="Phone Display"
              fill
              className="absolute right-0 bottom-0"
              priority
            />
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;