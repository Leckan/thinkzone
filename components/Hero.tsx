"use client";
import Image from "next/image";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { BackgroundGradient } from "./ui/background-gradient";

function Hero() {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        flex items-center justify-center absolute top-0 left-0"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center
         dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw]  items-center justify-center flex flex-col">
          <BackgroundGradient className="rounded-[22px] max-w-sm p-5 sm:p-5 bg-white dark:bg-zinc-900">
            <Image
              src={`/thinkzone1.png`}
              alt="Think Zone Technology"
              height="140"
              width="140"
              className="object-contain rounded-xl"
            />
          </BackgroundGradient>

          <TextGenerateEffect
            className="text-center textt-[40px] md:text-5xl lg:text-6xl"
            words="AI Solutions for a Smarter Future."
          />
          <p className="text-center  md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
          Artificial Intelligence | Data Analytics | Process Automation
          </p>
          <a href="/about">
            <MagicButton
              title="Show Projects"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
