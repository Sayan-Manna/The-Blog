"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../public/memoji2.png";
import { useTheme } from "next-themes";
import DarkModeButton from "./DarkModeButton";
import { motion } from "framer-motion";
import { useState } from "react";
// import useMediaQuery from "../hooks/useMediaQuery";

{
  /* <header className=" sticky top-0 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-[#ffe5d9] dark:border-[#161b33]/50 flex items-center justify-between space-x-2 px-10 py-4 font-bold z-20"> */
  // "flex items-center justify-between space-x-2 px-10 py-4 font-bold"
}

function Header() {
  //   {
  //   isTopOfPage,
  //   scrollData,
  //   setScrollData,
  //   hideNav,
  // }: {
  //   isTopOfPage: any;
  //   scrollData: any;
  //   setScrollData: any;
  //   hideNav: any;
  // }
  const { theme } = useTheme();
  // const [isMenuToggled, setIsMenuToggled] = useState(false);
  // var navGround = "";
  // const navbarBackgroundLight = isTopOfPage ? "" : "bg-light";
  // const navbarBackgroundDark = isTopOfPage ? "" : "bg-darkmode";
  // {
  //   theme === "dark"
  //     ? (navGround += navbarBackgroundDark)
  //     : (navGround += navbarBackgroundLight);
  // }

  return (
    <header
      // className={
      //   hideNav == false
      //     ? "animation md:animation_md"
      //     : "animation_hiden md:animation_md"
      // }
      className="sticky top-0 backdrop-filter backdrop-blur-md bg-opacity-80 border-b border-[#ffe5d9] dark:border-[#161b33]/50 space-x-2 px-5 md:px-10 py-1 md:py-3 font-bold z-20"
    >
      <div className="flex justify-between">
        <motion.div
          className="flex md:space-x-4 font-bold"
          initial={{
            x: -400,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="rounded-full p-2 shadow-md noselect">
            {theme === "dark" ? (
              <Image
                className="object-cover"
                width={40}
                height={40}
                src={Logo}
                alt="logo"
              />
            ) : (
              <Image
                className="object-cover"
                width={40}
                height={40}
                src={Logo}
                alt="logo"
              />
            )}
          </Link>
          {/* <h2 className="flex justify-center items-center">SAYAN 🚀</h2> */}
        </motion.div>

        <div className="noselect flex justify-center items-center space-x-4 md:space-x-10 font-bold md:px-10">
          <motion.div
            initial={{
              x: 400,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 0.5 }}
          >
            <DarkModeButton></DarkModeButton>
          </motion.div>
          <motion.div
            initial={{
              x: 400,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="https://sayanwrites.engineer/studio"
              className="noselect px-3 md:px-5 md:py-5 py-3 text-sm md:text-base bg-gray-900 dark:bg-[#e07a5f]/40 text-[#f7ab0a] dark:text-white rounded-full text-center"
            >
              Open Studio⚡️
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
export default Header;
