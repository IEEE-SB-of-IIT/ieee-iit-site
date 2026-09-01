import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
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
  const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;

  return (
    <html lang="en">
      <head>
        {googleTagId ? (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
            />
            <Script id="google-tag">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleTagId}');
            `}</Script>
          </>
        ) : null}
      </head>
      <body
        className={`${poppins.variable} antialiased relative min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-500/30 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
