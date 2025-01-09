"use client"
import React from "react";
import Image from "next/image";
import { CricketPlayerRewards, BlueHeart } from '@/assets';

const Earn = () => {
  return (
    <section className="bg-[#117C41] py-20 min-h-screen flex items-center">
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center text-center">
        <div className="flex flex-col items-center gap-6 p-5">
          <div className="relative w-12 h-12 mb-4">
            <Image
              src={BlueHeart}
              alt="Blue Heart Icon"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h2 className="text-5xl md:text-[64px] font-extrabold text-black mb-4">EARN $SLOG</h2>
          <p className="text-xl md:text-[32px] font-medium text-black mb-4 md:mb-8">
            Earn <span className="font-bold">SLOG</span> when you <span className="font-bold">Play</span> and complete <span className="font-bold">Quests</span>.
          </p>
          <a href="https://dexscreener.com/solana/9Xfko1cNUJ6cpgBxkdH7k7VyYouUmCtUij5tDWUFpump" className="inline-block bg-transparent text-black border-[3px] border-black py-5 px-16 text-2xl md:text-[32px] font-bold text-center transition-transform hover:translate-y-[-3px] w-full max-w-[572px]">
            GET REWARDS
          </a>
        </div>
        <div className="relative w-full h-[460px] md:h-[600px]">
          <Image
            src={CricketPlayerRewards}
            alt="Cricket Player Rewards"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Earn;
