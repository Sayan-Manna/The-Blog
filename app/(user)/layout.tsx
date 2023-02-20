"use client";
import "../../styles/globals.css";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import ThemeProviders from "./ThemeProviders";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrollData, setScrollData] = useState({ y: 0, lastY: 0 });
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [hideNav, setHideNav] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY === 0) {
  //       setIsTopOfPage(true);
  //     }
  //     if (window.scrollY !== 0) setIsTopOfPage(false);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollData((lastState) => {
        return {
          y: window.scrollY,
          lastY: lastState.y,
        };
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollData.lastY === scrollData.y) {
      return;
    }

    if (scrollData.y>395 && scrollData.y - scrollData.lastY > 0) {
      setHideNav(true);
    } else {
      setHideNav(false);
    }
  }, [scrollData]);
  return (
    <html>
      <body className=" bg-[#ffe5d9] dark:bg-[#161b33]/50 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 overflow-y-scroll overflow-x-hidden ">
        <ThemeProviders>
          {/* Header */}
          <Header
            isTopOfPage={isTopOfPage}
            scrollData={scrollData}
            setScrollData={setScrollData}
            hideNav={hideNav}
          />
          {/* Banner */}
          <Banner />
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}

// bg-[#f8edeb]
