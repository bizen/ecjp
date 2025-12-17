"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useRef } from "react";
import { Globe, Lightbulb, TrendingUp } from "lucide-react";
import Image from "next/image";

export const WhyJapan = () => {
    const { t } = useLanguage();
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="relative bg-[#050510] min-h-screen flex flex-col md:flex-row overflow-hidden">
            {/* Left Side: Title & Subtitle (40%) */}
            <div className="w-full md:w-[40%] p-0 pl-8 md:pl-0 pr-8 md:pr-12 flex flex-col justify-center items-end relative z-10 bg-[#050510]">
                <motion.div style={{ opacity, y }} className="w-full">
                    <div className="text-left md:text-right">
                        <motion.h2
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tighter leading-[1.1] whitespace-nowrap"
                        >
                            {/* Render different color text based on content match, strict solid colors no gradient */}
                            {t.whyJapan.title.includes("なぜ") ? (
                                <>
                                    <span className="text-white">なぜ</span>
                                    <span className="text-blue-700">日本？</span>
                                </>
                            ) : (
                                <>
                                    <span className="text-white mr-4">Why</span>
                                    <span className="text-blue-700">Japan?</span>
                                </>
                            )}
                        </motion.h2>
                        <motion.p
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-blue-300/80 font-mono"
                        >
                            // {t.whyJapan.subtitle}
                        </motion.p>
                    </div>
                </motion.div>
            </div>

            {/* Right Side: Visuals & Content (60%) */}
            <div className="w-full md:w-[60%] relative min-h-[60vh] md:min-h-screen flex items-center group/image">
                {/* Background Image & Effects */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/sakurafuji.jpg"
                        alt="Mount Fuji and Cherry Blossoms"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />

                    {/* Overlays - Darker for more gentle look */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050510] via-[#050510]/70 to-[#050510]/30" />
                    <div className="absolute inset-0 bg-blue-900/30 mix-blend-overlay" />

                    {/* Cyber Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(29,78,216,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(29,78,216,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

                    {/* Scanline Overlay (New) */}
                    <div className="absolute inset-0 scanline-overlay opacity-30" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 p-8 md:p-16 w-full max-w-4xl ml-8 md:ml-12">
                    {/* Description */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mb-10"
                    >
                        <p className="text-lg md:text-xl leading-relaxed text-gray-100 border-l-4 border-blue-700 pl-6 drop-shadow-md relative before:absolute before:inset-0 before:bg-blue-500/10 before:w-0 hover:before:w-full before:transition-all before:duration-500">
                            {t.whyJapan.description}
                        </p>
                    </motion.div>

                    {/* Features */}
                    <div className="grid gap-4">
                        {t.whyJapan.features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + idx * 0.1 }}
                                className="bg-black/40 border border-blue-800/30 p-4 rounded-lg backdrop-blur-md hover:bg-black/60 transition-colors group flex items-center gap-4 max-w-xl cyber-button-glow hover:border-blue-500/50"
                            >
                                <div className="p-3 rounded-full bg-blue-800/20 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:text-cyan-300 transition-all duration-300">
                                    {idx === 0 ? <Globe className="w-5 h-5" /> :
                                        idx === 1 ? <Lightbulb className="w-5 h-5" /> :
                                            <TrendingUp className="w-5 h-5" />}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-100 transition-colors">{feature.title}</h3>
                                    <p className="text-gray-300 text-sm font-mono">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
