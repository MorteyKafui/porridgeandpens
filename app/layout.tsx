import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-montserrat",
});

const myFont = localFont({
  src: "./Edosz.ttf",
  display: "swap",
  variable: "--font-edosz",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${myFont.variable}  antialiased`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
