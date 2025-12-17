"use client";
import { motion } from "framer-motion";
import { Globe, Users, Zap, Brain } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const About = () => {
    const { t } = useLanguage();

    const icons = [
        <Globe key="globe" className="w-10 h-10 text-white" />,
        <Users key="users" className="w-10 h-10 text-white" />,
        <Brain key="brain" className="w-10 h-10 text-white" />,
        <Zap key="zap" className="w-10 h-10 text-white" />
    ];

    return (
        <section id="about" className="py-32 relative bg-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 mb-20 items-end">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-[0.8]">
                            {t.about.title.split(/(?:<br\s*\/?>|\.)/i).filter(Boolean).map((part, i) => (
                                <span key={i} className="block">{part.trim()}</span>
                            ))}
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <p className="text-xl md:text-2xl text-gray-400 font-light border-l border-white/20 pl-6 leading-relaxed">
                            {t.about.description}
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {t.about.features.map((feature, index) => {
                        // First and last items span more columns for asymmetry
                        const colSpan = index === 0 || index === 3 ? "md:col-span-8" : "md:col-span-4";
                        const bgClass = index % 2 === 0 ? "bg-white/[0.03]" : "bg-indigo-900/[0.1]";

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`${colSpan} ${bgClass} relative p-8 md:p-12 border border-white/5 group overflow-hidden transition-colors hover:bg-white/[0.08] min-h-[300px] flex flex-col justify-between`}
                            >
                                {/* Decorative Corner */}
                                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                                    <div className="text-xs font-mono text-indigo-400">0{index + 1} // SYS</div>
                                </div>
                                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-indigo-500 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 translate-x-4 group-hover:translate-y-0 group-hover:translate-x-0" />

                                <div className="mb-6 p-4 bg-white/5 rounded-full w-20 h-20 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(79,70,229,0.3)]">
                                    {icons[index]}
                                </div>

                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white uppercase tracking-wide group-hover:text-indigo-300 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};
