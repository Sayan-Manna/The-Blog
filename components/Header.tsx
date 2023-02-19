"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../public/memoji2.png";
import { useTheme } from "next-themes";
import DarkModeButton from "./DarkModeButton";

function Header() {
  const { theme } = useTheme();
  return (
    <header className="flex items-center justify-between space-x-2 px-10 py-4 font-bold">
      <div className="flex items-center space-x-2">
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
      </div>
      <div>
        <DarkModeButton></DarkModeButton>
      </div>
    </header>
  );
}
export default Header;
