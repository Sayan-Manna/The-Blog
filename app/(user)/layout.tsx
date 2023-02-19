import "../../styles/globals.css";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import ThemeProviders from "./ThemeProviders";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-[#ffe5d9] z-0 dark:bg-[#161b33]/50 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <ThemeProviders>
          {/* Header */}
          <Header />
          {/* Banner */}
          <Banner />
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}

// bg-[#f8edeb]
