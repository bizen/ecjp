"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useRef } from "react";
import { ArrowUpRight, Scale, AlertTriangle } from "lucide-react";

export const News = () => {
    const { t } = useLanguage();
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} id="news" className="py-32 relative bg-black overflow-hidden perspective-1000">
            {/* Cyberpunk Grid Floor */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(6,182,212,0.1)_100%)] opacity-20" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(0deg,rgba(6,182,212,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.2)_1px,transparent_1px)] bg-[size:50px_50px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom opacity-30" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    style={{ opacity }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Section Header */}
                    <div className="flex items-center gap-4 mb-16">
                        <div className="w-2 h-12 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
                        <div>
                            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter shadow-red-500/50">
                                {t.news.title}
                            </h2>
                            <p className="text-red-400 font-mono tracking-widest text-sm md:text-base mt-2">
                                 // {t.news.subtitle}
                            </p>
                        </div>
                    </div>

                    {/* Main News Card */}
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Left Side: Headline & Content */}
                        <div className="space-y-8">
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-transparent" />
                                <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-white">
                                    {t.news.article.headline}
                                </h3>
                                <p className="text-xl text-red-500 font-bold mb-6">
                                    {t.news.article.subheadline}
                                </p>
                                <div className="prose prose-invert max-w-none mb-8">
                                    <p className="text-gray-300 leading-relaxed text-lg text-justify">
                                        {t.news.article.content}
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-white/5 border border-white/10 p-6 rounded-lg relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Scale className="w-24 h-24" />
                                </div>
                                <blockquote className="relative z-10 italic text-xl text-gray-200 mb-4 border-l-4 border-red-500 pl-4">
                                    {t.news.article.quote}
                                </blockquote>
                                <cite className="block text-red-400 font-mono text-sm not-italic text-right">
                                    — {t.news.article.quoteAuthor}
                                </cite>
                            </motion.div>

                            <div className="flex flex-wrap gap-4">
                                <motion.a
                                    href="https://techcrunch.com/2024/11/15/openai-competitors-file-amicus-brief-backing-elon-musks-lawsuit-against-the-company/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-sm uppercase tracking-wider transition-colors shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                                >
                                    {t.news.article.readMore}
                                    <ArrowUpRight className="w-5 h-5" />
                                </motion.a>
                                <motion.a
                                    href="https://encodeai.org/about-us"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-bold rounded-sm uppercase tracking-wider transition-colors"
                                >
                                    {t.news.article.visitHQ}
                                    <ArrowUpRight className="w-5 h-5" />
                                </motion.a>
                            </div>
                        </div>

                        {/* Right Side: Data Visualization / Key Points */}
                        <motion.div
                            style={{ y }}
                            className="bg-[#050505] border border-red-900/30 rounded-xl p-8 relative overflow-hidden backdrop-blur-sm"
                        >
                            <div className="absolute inset-0 scanline opacity-10 pointer-events-none" />
                            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                                <span className="text-red-500 font-mono text-xs">SYS.ALERT_LEVEL: HIGH</span>
                                <AlertTriangle className="w-5 h-5 text-red-500 animate-pulse" />
                            </div>

                            <div className="space-y-6">
                                {t.news.article.features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ x: 50, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center justify-between group"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-2 h-2 bg-red-500 rounded-full group-hover:animate-ping" />
                                            <span className="text-gray-400 font-mono">{feature.label}</span>
                                        </div>
                                        <span className="text-white font-bold">{feature.value}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-12 p-4 bg-red-900/10 border border-red-500/20 rounded text-xs font-mono text-red-400">
                                &gt; STATUS: AMICUS_BRIEF_FILED<br />
                                &gt; TARGET: US_DISTRICT_COURT<br />
                                &gt; OBJECTIVE: PROTECT_PUBLIC_INTEREST
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default News;
