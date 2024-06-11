"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const tabData = ["FIgma", "Tailwind", "Next.js", "Framer-Motion"];

const About = ({ id }) => {
  const [jitterX, setJitterX] = useState(0);
  const [jitterY, setJitterY] = useState(0);

  useEffect(() => {
    const jitterInterval = setInterval(() => {
      setJitterX(Math.random() * 4 - 2);
      setJitterY(Math.random() * 4 - 2);
    }, 50);

    return () => clearInterval(jitterInterval);
  }, []);
  return (
    <div id={id} className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/about-image.png"
          alt="about image"
          width={500}
          height={500}
          className="rounded-full"
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base md:text-lg ">
            I am a frontEnd web designer plus developer excelling in design
            software like FIgma and framework like React
          </p>
          <div className="flex items-center justify-center mt-8 ">
            <span className="mr-3 font-semibold hover:text-white text-[#ADb7be] border-b border-purple-500">
              Skills
            </span>
          </div>
          <div className="mt-8 ">
            <ul className="flex flex-row items-center justify-between">
              {tabData.map((data, index) => {
                return (
                  <li key={index}>
                    {" "}
                    <motion.div
                      animate={{
                        x: jitterX,
                        y: jitterY,
                        rotateZ: Math.random() * 6 - 3,
                      }}
                      transition={{ ease: "easeInOut", duration: 0.08 }}
                    >
                      {" "}
                      {data}
                    </motion.div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
