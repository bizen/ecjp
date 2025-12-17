"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import News from "@/components/News";
import { Contact } from "@/components/Contact";
import { WhyJapan } from "@/components/WhyJapan";
import { LoadingScreen } from "@/components/LoadingScreen";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time roughly matching the loading screen animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen relative bg-[#030014] text-white overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* Ambient Noise Background */}
          <div className="noise-bg" />

          <Navbar />
          <Hero />
          <About />
          <WhyJapan />
          <div id="news">
            <News />
          </div>
          <Contact />
        </>
      )}
    </main>
  );
}
