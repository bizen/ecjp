"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useRef } from "react";

const FloatingParticles = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {Array.from({ length: 30 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-white/20"
                    initial={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                        opacity: 0,
                    }}
                    animate={{
                        y: ["0%", "-50%", "0%"],
                        x: ["0%", Math.random() * 10 - 5 + "%", "0%"],
                        opacity: [0, 0.4, 0],
                        scale: [0, Math.random() * 1 + 1, 0]
                    }}
                    transition={{
                        duration: Math.random() * 15 + 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 10,
                    }}
                    style={{
                        width: Math.random() * 4 + "px",
                        height: Math.random() * 4 + "px",
                        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" // Triangle particles
                    }}
                />
            ))}
        </div>
    );
};

export const Hero = () => {
    const { t } = useLanguage();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section ref={containerRef} id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#030014]">
            <FloatingParticles />

            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1)_0%,transparent_50%)] animate-pulse" />
                <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
                <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            </div>

            <motion.div
                style={{ y, opacity }}
                className="container mx-auto px-6 z-10 relative flex flex-col items-center justify-center h-full"
            >
                {/* Large Typography Background Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-5">
                    <span className="text-[20vw] font-black leading-none text-white block transform -rotate-12 blur-sm">
                        ENCODE
                    </span>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="text-center max-w-5xl mx-auto"
                >
                    <div className="mb-8 flex justify-center items-center gap-4">
                        <div className="h-[1px] w-12 bg-indigo-500" />
                        <span className="text-gray-400 font-mono text-sm tracking-widest uppercase">
                            {t.hero.badge}
                        </span>
                        <div className="h-[1px] w-12 bg-indigo-500" />
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.9] mix-blend-difference text-white">
                        <span className="block hover:text-indigo-500 transition-colors duration-500">{t.hero.title_prefix}</span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-gray-400 block pb-4">
                            {t.hero.title_highlight}
                        </span>
                    </h1>

                    <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light border-l-2 border-indigo-500/30 pl-6 text-left inline-block">
                        {t.hero.description}
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Link href="#contact" className="cyber-border group relative px-10 py-5 bg-white/5 overflow-hidden font-bold tracking-wider text-white transition-all hover:bg-white/10 inline-block text-center">
                            <div className="absolute inset-0 w-full h-full bg-indigo-600/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                            <span className="relative z-10 flex items-center gap-2">
                                {t.hero.join}
                                <span className="text-xl">→</span>
                            </span>
                        </Link>
                    </div>
                </motion.div>
            </motion.div>

            {/* Tech Decoration */}
            <div className="absolute bottom-10 left-10 hidden md:block">
                <div className="flex flex-col gap-2 font-mono text-xs text-gray-600">
                    <div>COORDS: 35.6762° N, 139.6503° E</div>
                    <div>SYS: ONLINE</div>
                    <div className="animate-pulse text-indigo-500">Connect...</div>
                </div>
            </div>
        </section>
    );
};
