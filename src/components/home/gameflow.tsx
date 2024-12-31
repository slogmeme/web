"use client"
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GameFlowStep1, GameFlowStep2, GameFlowStep3, GameFlowStep4 } from '@/assets';

const sections = [
  {
    title: "1. CHOOSE YOUR LEAGUE",
    description: "Choose a league and manage for your home team. You'll get an opportunity for world domination later...",
    image: GameFlowStep1,
  },
  {
    title: "2. TRAIN UP STARS",
    description: "Start a new team to invite up to 11 brand new players to train with you and win quickly.",
    image: GameFlowStep2,
  },
  {
    title: "3. TRADE YOUR TEAM'S PLAYERS",
    description: "Own them in-game to play/win or trade them for $SLOG! The more they play, The more valuable they become.",
    image: GameFlowStep3,
  },
  {
    title: "4. PLAY & WIN",
    description: "Climb the leaderboards, when you win matches, score points, and earn special badges.",
    image: GameFlowStep4,
  }
];

const GameFlow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && headerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY;
        const containerTop = containerRect.top + scrollPosition;
        const containerBottom = containerRect.bottom + scrollPosition;
        
        // Calculate when header should be fixed
        if (scrollPosition >= containerTop && scrollPosition <= containerBottom - headerRef.current.offsetHeight) {
          headerRef.current.style.position = 'fixed';
          headerRef.current.style.top = '0';
        } else if (scrollPosition > containerBottom - headerRef.current.offsetHeight) {
          headerRef.current.style.position = 'absolute';
          headerRef.current.style.top = `${containerBottom - headerRef.current.offsetHeight - containerTop}px`;
        } else {
          headerRef.current.style.position = 'absolute';
          headerRef.current.style.top = '0';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="game-flow"
      ref={containerRef}
      className="bg-[#F2C230] min-h-screen py-20 px-4 overflow-hidden relative"
    >
      {/* Header Section - Now with scroll behavior */}
      <motion.div 
        ref={headerRef}
        className="w-full left-0 right-0 px-4 z-20 bg-[#F2C230]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-[1200px] mx-auto text-center pt-20 pb-3">
          <h2 className="text-5xl md:text-8xl font-extrabold text-black mb-4">GAME FLOW</h2>
          <p className="text-xl md:text-5xl font-bold text-black">EASY TO PLAY. HARD TO MASTER!</p>
        </div>
      </motion.div>

      <div className="max-w-[1200px] mx-auto mt-[200px]">
        {/* Game Flow Steps */}
        <div className="flex flex-col gap-20">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Image Section */}
              <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <motion.div 
                  className="relative aspect-square w-full max-w-[500px] mx-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={section.image}
                    alt={section.title}
                    layout="fill"
                    objectFit="contain"
                  />
                </motion.div>
              </div>

              {/* Text Section */}
              <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} 
                             text-center md:text-left ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <h3 className="text-4xl font-extrabold text-black mb-4">
                  {section.title}
                </h3>
                <p className="text-xl text-black">
                  {section.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameFlow;
