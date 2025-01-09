"use client"
import React from "react";
import { motion } from "framer-motion";
import { FaTelegram, FaTiktok, FaFacebook, FaTwitch } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import { BsInstagram } from 'react-icons/bs';
import Image from "next/image";
import { Socialpic } from '@/assets'

const Socials = () => {
  return (
    <section className="relative">
      <div className="w-full relative h-[60vh]">
        <Image
          src={Socialpic}
          alt='social pic'
          fill
          className="object-cover w-full"
          priority
        />
      </div>

      <div className="bg-[#F2C230] py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-[1200px] w-full mx-auto"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 className="text-5xl md:text-6xl font-extrabold text-black mb-4" variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}>
              SOCIALS
            </motion.h2>
            <motion.p className="text-xl md:text-2xl font-medium text-black mb-12" variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}>
              JOIN THE CRICKET REVOLUTION
            </motion.p>
            <motion.div className="flex gap-6 justify-center items-center flex-wrap" variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}>
              {[
                { url: "https://t.me/SLOGMEME", icon: <FaTelegram /> },
                { url: "https://instagram.com/slogmeme", icon: <BsInstagram /> },
                { url: "https://facebook.com/slogmeme", icon: <FaFacebook /> },
                { url: "https://x.com/slogmeme", icon: <SiX /> },
                { url: "https://www.twitch.tv/slogmeme", icon: <FaTwitch /> },
              ].map((social: { url: string; icon: React.ReactNode }, index: number) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-yellow-400 w-12 md:w-16 h-12 md:h-16 rounded-lg flex items-center justify-center text-2xl cursor-pointer transition-transform hover:translate-y-[-5px]"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Socials;
