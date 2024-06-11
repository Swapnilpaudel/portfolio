"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "Home", href: "#header" },
  { title: "About", href: "#body" },
  { title: "Contact", href: "#footer" },
];
const Navbar = () => {
  const [jitterX, setJitterX] = useState(0);
  const [jitterY, setJitterY] = useState(0);

  useEffect(() => {
    const jitterInterval = setInterval(() => {
      setJitterX(Math.random() * 4 - 2);
      setJitterY(Math.random() * 4 - 2);
    }, 50);

    return () => clearInterval(jitterInterval);
  }, []);
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 bg-[#121212]">
        <Link
          href={"#home"}
          className="text-2xl md:text-3xl text-white font-semibold flex items-center justify-center"
        >
          <motion.div
            animate={{
              x: jitterX,
              y: jitterY,
              rotateZ: Math.random() * 6 - 3,
            }}
            transition={{ ease: "easeInOut", duration: 0.08 }}
          >
            swapnil.dev
          </motion.div>
        </Link>
        <div className="block md:hidden">
          {!navOpen ? (
            <button
              onClick={() => setNavOpen((prev) => !prev)}
              key="open"
              className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white  hover:border-white"
            >
              {<Bars3Icon className="h-5 w-5" />}
            </button>
          ) : (
            <button
              onClick={() => setNavOpen((prev) => !prev)}
              key="close"
              className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white  hover:border-white"
            >
              {<XMarkIcon className="h-5 w-5" />}
            </button>
          )}
        </div>

        <div className=" hidden md:block md:w-auto " id="navbar">
          <ul className="flex items-center justify-between p-3 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map(({ title, href }, index) => {
              return (
                <li key={index}>
                  <NavLink href={href} title={title}></NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full h-[1px] bg-white/5"></div>
      </div>
      {navOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
