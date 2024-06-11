"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Hero = ({ id }) => {
  return (
    <motion.div id={id} className="grid grid-cols-1 sm:grid-cols-12">
      <div className="col-span-7 place-self-center text-center sm:text-left">
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r  from-purple-400 to-red-600 ">
            Hello
          </span>
        </h1>
        <p className="text-[#ADb7be] text-base sm:text-lg lg:text-xl mb-6">
          <br />
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "I am a frontEnd Developer",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "I am a frontEnd Designer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
          <br />
        </p>
        <div>
          <Link
            className="px-6 py-3 sm:w-fit w-full rounded-full mr-4 bg-white hover:bg-slate-200 text-black"
            href="mailto:swapnilpaudel@gmail.com"
          >
            Hire ME
          </Link>
          <button className="px-1 py-1 sm:w-fit w-full rounded-full bg-gradient-to-br from-purple-500 to-red-600 hover:bg-slate-800 text-white mt-3">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5  py-2">
              Download CV
            </span>
          </button>
        </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0  ">
        <div className="rounded-full relative bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] ">
          <Image
            className="absolute transform -translate-x-1/2 -translate-y-12 top-1/2 left-1/2"
            src="/heroImage.png"
            alt="hero image"
            width={500}
            height={500}
          ></Image>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
