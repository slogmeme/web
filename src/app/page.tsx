"use client"
import React from "react";
import Hero from "@/components/home/hero";
import Layout from "@/layouts";
import Exchange from "@/components/home/exchange";
import Devs from "@/components/home/devs";
import GameFlow from "@/components/home/gameflow";
import HowToStart from "@/components/home/how2start";
import Tokenomics from "@/components/home/tokenomics";
import TwoImages from "@/components/home/2images";
import Socials from "@/components/home/socials";
import Earn from "@/components/home/earn";
import CTA from '@/components/home/apein';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero></Hero>
      <Exchange></Exchange>
      <Devs></Devs>
      <GameFlow></GameFlow>
      <HowToStart></HowToStart>
      <Earn></Earn>
      <CTA />
      <Tokenomics></Tokenomics>
      <TwoImages></TwoImages>
      <Socials></Socials>
    </Layout>
  );
}

export default Home