
import { HeroSection } from "@/components/hero-section";
import "./globals.css";

import {Navbar} from '@/components/navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <HeroSection/>
        {children}
      </body>
    </html>
  );
}
