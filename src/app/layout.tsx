import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Encode Japan | AI Safety & Innovation",
  description: "Encode Japan is the Japanese branch of Encode, defending AI potential through smart policy and innovation.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja" className="h-full">
      <body className="h-full">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
