import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundGlow from "@/components/BackgroundGlow";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "IEEE Student Branch of IIT",
  description: "IEEE Student Branch of Informatics Institute of Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <BackgroundGlow />
        <ScrollReveal />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

