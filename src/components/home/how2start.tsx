"use client"
import React from "react";

interface Step {
  number: number;
  title: string;
  content: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Create Wallet",
    content: "Visit phantom.app and follow the simple steps to create a new account with the phantom app or browser extension."
  },
  {
    number: 2,
    title: "Get Some SOL",
    content: "Tap the ‘BUY BUTTON’ in the APP to purchase Solana, or deposit $SOL to your Phantom Wallet from the crypto exchange of your choice."
  },
  {
    number: 3,
    title: "SWAP SOL for SLOG",
    content: "Tap the swap icon in your phantom wallet and paste the $SIXR token address. Swap your $SOL for $SIXR."
  }, 
  {
    number: 4,
    title: "DOWNLOAD TELEGRAM",
    content: "Download the TG app on your phone and message @sixr_bot. Type  /start  then click “open web app.”"
  },
  {
    number: 5,
    title: "SHARE GAME",
    content: "Tap the share icon in your app and share with your friends to win massive airdrops."
  },
];

const HowToStart = () => {
  return (
    <section className="bg-[#F2C230] py-20 min-h-screen flex items-center">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-[64px] font-extrabold text-black leading-tight mb-6">HOW TO START</h2>
          <p className="text-xl md:text-[40px] font-bold text-black leading-tight max-w-[80%] mx-auto">
            Follow these easy steps to buy SIXR and own part of the growing SIXR universe.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-4 md:px-0">
          <div className="flex flex-col justify-center gap-6 flex-1">
            {steps.slice(0, 3).map((step) => (
              <div key={step.number} className="bg-[#117C41] border-[3px] border-black p-6 flex flex-col items-center h-48 box-border">
                <h3 className="text-2xl font-bold text-black mb-4">
                  <span className="text-[#F2C230] mr-2">{step.number}.</span> {step.title}
                </h3>
                <p className="text-[20px] font-light text-black">{step.content}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center gap-6 flex-1">
            {steps.slice(3).map((step) => (
              <div key={step.number} className="bg-[#117C41] border-[3px] border-black p-6 flex flex-col items-center h-48 box-border">
                <h3 className="text-2xl font-bold text-black mb-4">
                  <span className="text-[#F2C230] mr-2">{step.number}.</span> {step.title}
                </h3>
                <p className="text-lg font-light text-black">{step.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToStart;