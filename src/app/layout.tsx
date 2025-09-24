import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hair Hosp - Przeszczep włosów",
  description: "Marzenie o bujnych włosach staje się rzeczywistością. 20 lat doświadczenia, zabiegi do 1835€. FUE, DHI, Sapphire FUE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen w-full bg-gray-100 flex justify-center">
          <div className="w-full max-w-[430px] bg-white min-h-screen flex flex-col">
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
