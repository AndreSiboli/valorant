import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";

import MainContainer from "@/components/layout/MainContainer";

const font = Poppins({
  variable: "--font-poppins",
  subsets: ["latin-ext"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Valorant",
  description: "This is a site just for training website skills",
  authors: { name: "André" },
  keywords: ["valorant", "game", "shooter"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.variable} `}>
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
