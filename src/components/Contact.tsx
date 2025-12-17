"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Twitter, Github, Linkedin, Disc, Radio, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useRef, useState } from "react";

export const Contact = () => {
    const { t } = useLanguage();
    const containerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // Parallax effect for the background globe/elements
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <section ref={containerRef} id="contact" className="py-24 relative overflow-hidden bg-black flex items-center justify-center min-h-[800px]">
            {/* Scanning Line Background */}
            <div className="absolute inset-0 scanline opacity-20 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.15)_0%,transparent_70%)]" />

            {/* Animated Globe Wireframe Placeholder */}
            <motion.div style={{ y }} className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                <div className="w-[800px] h-[800px] border border-white/10 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute w-[600px] h-[600px] border border-dashed border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                <div className="absolute w-[400px] h-[400px] border border-dotted border-cyan-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
            </motion.div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Terminal Window Frame */}
                    <div
                        className="rounded-lg bg-[#0a0a0a] border border-white/10 overflow-hidden shadow-2xl relative group"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Terminal Header */}
                        <div className="bg-[#1a1a1a] p-3 flex items-center justify-between border-b border-white/5">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50 animate-pulse" />
                            </div>
                            <div className="text-xs font-mono text-gray-500 flex items-center gap-2">
                                <Radio className="w-3 h-3" />
                                CONNECTION_ESTABLISHED
                            </div>
                        </div>

                        {/* Terminal Content */}
                        <div className="p-8 md:p-12 relative">
                            <div className="absolute top-0 right-0 p-4 opacity-50">
                                <Globe className="w-24 h-24 text-indigo-900/40 animate-pulse" />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="font-mono"
                            >
                                <div className="text-indigo-400 text-sm mb-4 typing-effect">
                                    &gt; INITIALIZING OUTREACH PROTOCOLS...
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white glitch-hover inline-block">
                                    {t.contact.title}
                                </h2>
                                <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed border-l-2 border-indigo-500 pl-4">
                                    {t.contact.description}
                                </p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                {/* Community Card */}
                                <div className="bg-white/5 border border-indigo-500/30 p-6 rounded-lg relative group/card">
                                    <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none" />
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <Disc className="w-5 h-5 text-indigo-400" />
                                        {t.contact.types.community.title}
                                    </h3>

                                    <a href="https://discord.gg/zgfT338w" target="_blank" rel="noopener noreferrer" className="relative z-30 overflow-hidden w-full py-4 bg-indigo-600 text-white font-bold font-mono tracking-wider hover:bg-indigo-500 transition-all flex items-center justify-center gap-3 group/btn clip-path-polygon mb-6">
                                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500 pointer-events-none" />
                                        {t.contact.discord}
                                    </a>

                                    <ul className="space-y-3">
                                        {t.contact.types.community.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Partner Card */}
                                <div className="bg-white/5 border border-white/10 p-6 rounded-lg relative group/card">
                                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none" />
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <Mail className="w-5 h-5 text-gray-400" />
                                        {t.contact.types.partner.title}
                                    </h3>

                                    <a href="mailto:yt@encodeai.eu" className="relative z-30 overflow-hidden w-full py-4 border border-white/20 text-white font-bold font-mono tracking-wider hover:bg-white/5 transition-all flex items-center justify-center gap-3 mb-6">
                                        {t.contact.email}
                                    </a>

                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {t.contact.types.partner.description}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-4 leading-relaxed font-mono">
                                        {t.contact.types.partner.note}
                                    </p>
                                </div>
                            </div>

                            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-end items-center gap-4 text-xs font-mono text-gray-500">
                                <div className="text-right">
                                    <p>© {new Date().getFullYear()} ENCODE_SYS. {t.contact.rights}</p>
                                    <p className="mt-1 flex items-center gap-2 justify-end">
                                        <span className="w-2 h-2 bg-green-500 rounded-full" />
                                        {t.contact.branch}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Scanline overlay specific to terminal */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_3px] pointer-events-none z-20" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
