import React from "react";
import Image from "next/image";
import { CricketCharacter } from "@/assets";

const TwoImages = () => {
  return (
    <section className="bg-[#F2C230] py-10 min-h-screen flex items-center justify-center">
      <div className="flex w-full flex-col md:flex-row">
        <div className="flex-1 relative w-full md:w-1/2 h-screen md:h-full">
          <Image 
            src={CricketCharacter}
            alt="Cricket Player Character"
            layout="fill"
            objectFit="cover"
            className="rounded-none"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex-1 relative w-full md:w-1/2 h-screen md:h-full">
          <Image 
            src={CricketCharacter}
            alt="Cricket Player Character"
            layout="fill"
            objectFit="cover"
            className="rounded-none"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};

export default TwoImages;