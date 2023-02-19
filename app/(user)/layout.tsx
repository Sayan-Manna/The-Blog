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
      <body className="max-w-7xl mx-auto">
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
