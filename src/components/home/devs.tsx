"use client"
import { GreenHeart } from "@/assets";
import React from "react";
import Image from "next/image";

const Devs = () => {
  return (
    <section className="bg-[#0F3DD4] py-20 min-h-screen flex items-center">
      {/* Mobile Layout */}
      <div className="w-full px-6 md:hidden">
        <div className="flex flex-col items-center">
          {/* Heart Icon */}
          <div className="relative w-16 h-16 mb-3">
            <Image
              src={GreenHeart}
              alt="Green Heart Icon"
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* Title */}
          <h2 className="text-[64px] font-bold text-black text-center mb-3">
            FROM<br />THE DEVS
          </h2>

          {/* Text Content */}
          <div className="flex flex-col gap-2 text-black text-[20px] font-medium">
            <p>
              Welcome! SLOG is a cricket inspired gaming ecosystem.
            </p>
            <p>
              We are here for the fans and want to make this the best game to play ever!
            </p>
            <p>
              Earn while enjoying and playing a fun game that over 2.5 BILLION people love.
            </p>
            <p>
              Earn SLOG by bowling, batting and playing, trading in-game assets, buying and selling players and teams and participating in the ecosystem.
            </p>
          </div>

          {/* CTA Button */}
          <button className="mt-9 bg-transparent text-black border-4 border-black py-5 px-16 w-full text-2xl font-extrabold hover:bg-black hover:bg-opacity-10">
            <a href="https://github.com/slogmeme">
            READ DOCS
            </a>
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-20 h-20 mb-4">
              <Image
                src={GreenHeart}
                alt="Green Heart Icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h2 className="text-8xl font-bold text-black mb-52">FROM<br />THE<br />DEVS</h2>
            <button className="bg-transparent text-black border-[3px] border-black py-5 px-16 w-full text-[32px] font-extrabold cursor-pointer hover:bg-black hover:bg-opacity-10">
              READ DOCS
            </button>
          </div>
          <div className="flex flex-col gap-8 justify-normal">
            <p className="font-sans text-[40px] text-black font-medium">
              Welcome! SLOG is a cricket inspired gaming ecosystem.
            </p>
            <p className="font-sans text-[40px] text-black font-medium">
              We are here for the fans and want to make this the best game to play ever!
            </p>
            <p className="font-sans text-[40px] text-black font-medium">
              Earn while enjoying and playing a fun game that over 2.5 BILLION people love.
            </p>
            <p className="font-sans text-[40px] text-black font-medium">
              Earn SLOG by bowling, batting and playing, trading in-game assets, buying and selling players and teams and participating in the ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Devs;
