import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
        className={`${poppins.variable} antialiased relative min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-500/30 overflow-x-hidden`}
      >
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-blue-500/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-blob" />
            <div className="absolute top-[10%] -right-[10%] w-[40vw] h-[40vw] bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] bg-sky-400/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-50 animate-blob animation-delay-4000" />
          </div>

          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), 
                                 linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
              maskImage:
                "linear-gradient(to bottom, black 40%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 40%, transparent 100%)",
            }}
          />

          <div className="absolute inset-0 opacity-[0.03] mix-blend-hard-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
