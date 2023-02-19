"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../public/memoji2.png";
import { useTheme } from "next-themes";
import DarkModeButton from "./DarkModeButton";
import { motion } from "framer-motion";

{
  /* <header className=" sticky top-0 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-[#ffe5d9] dark:border-[#161b33]/50 flex items-center justify-between space-x-2 px-10 py-4 font-bold z-20"> */
}

function Header() {
  const { theme } = useTheme();
  return (
    <header className="flex items-center justify-between space-x-2 px-10 py-4 font-bold">
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
        transition={{ duration: 1.5 }}
      >
        <Link href="/" className="rounded-full p-2 shadow-md">
          {theme === "dark" ? (
            <Image
              className="object-cover"
              width={54}
              height={54}
              src={Logo}
              alt="logo"
            />
          ) : (
            <Image
              className="object-cover"
              width={54}
              height={54}
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
        transition={{ duration: 1.5 }}
        // className="flex flex-row items-center"
      >
        <DarkModeButton></DarkModeButton>
      </motion.div>
    </header>
  );
}
export default Header;
