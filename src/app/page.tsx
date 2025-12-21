import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import News from "@/components/News";
import { Contact } from "@/components/Contact";
import { WhyJapan } from "@/components/WhyJapan";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#030014] text-white overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
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
    </main>
  );
}
