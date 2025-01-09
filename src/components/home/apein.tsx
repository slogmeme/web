"use client"
import React from "react";
import Image from "next/image";
import { CricketCharacterTr } from "@/assets";

const CTA = () => {
    return (
        <section className="bg-[#0F3DD4] min-h-screen flex items-center relative overflow-hidden">
            <div className="max-w-[90vw] mx-auto w-full p-5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                <div className="block md:hidden">
                    <h2 className="text-[40px] text-[#F2C230] font-bold">
                        READY TO GET BOWLED OVER?
                    </h2>
                </div>
                <div className="relative h-[400px] md:h-[600px]">
                    <Image
                        src={CricketCharacterTr}
                        alt="Cricket Player"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="bottom left"
                        priority
                    />
                </div>
                <div className="text-[#F2C230] text-right font-extrabold">
                    <h2 className="text-[64px] md:text-[76px] mb-8 hidden md:block">
                        READY TO GET<br />BOWLED OVER?
                    </h2>
                    <a
                        href="https://dexscreener.com/solana/9Xfko1cNUJ6cpgBxkdH7k7VyYouUmCtUij5tDWUFpump"
                        className="mt-24 md:mt-0 inline-block bg-[#117C41] w-full text-black border-4 border-black py-4 px-8 text-[24px] md:text-[32px] font-bold text-center transition-transform hover:translate-y-[-3px]"
                    >
                        CLICK TO APE IN
                    </a>
                </div>
            </div>
            <div
                className="absolute bottom-0 left-0 w-full h-[244px]"
                style={{
                    background: 'linear-gradient(248.67deg, #058940 2.57%, #012310 110.41%)',
                    clipPath: 'polygon(0 25%, 100% 0, 100% 100%, 0 100%)',
                    // or you can use transform for a different approach:
                    // transform: 'skewY(-5deg)',
                    // transformOrigin: 'bottom left'
                }}
            />
        </section>
    );
};

export default CTA;
