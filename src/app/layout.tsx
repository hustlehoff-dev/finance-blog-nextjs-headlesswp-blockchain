import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import Navbar from "@/components/nav/Nav";
import "./layout.css";
import { Footer } from "@/components/footer/Footer";
import ScrollTop from "@/components/scrolltop/ScrollTop";
const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ComeInCrypto: Your Gateway To Crypto World",
  description: "Your Gateway To Crypto World: News, Guides, Tactics",
  keywords: "Bitcoin, Cryptocurrencies, Ethereum, Investing, Blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} antialiased comeincrypto-app`}>
        <Navbar />
        <ScrollTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
