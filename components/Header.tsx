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
      className="animation_md"
    >
      <motion.div
        className="flex items-center space-x-2"
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
        <Link href="/" className="rounded-full p-2 shadow-md">
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
        {/* <h2>SAYAN 🚀</h2> */}
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
        // className="flex flex-row items-center"
      >
        <DarkModeButton></DarkModeButton>
      </motion.div>
    </header>
  );
}
export default Header;
