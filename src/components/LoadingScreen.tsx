"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const LoadingScreen = () => {
    const [progress, setProgress] = useState(0);
    const [text, setText] = useState("INITIALIZING SYSTEM...");

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                // Random increment for "hacking" feel
                return prev + Math.floor(Math.random() * 10) + 1;
            });
        }, 150);

        const textTimer = setTimeout(() => setText("ESTABLISHING LINK..."), 1000);
        const textTimer2 = setTimeout(() => setText("DECRYPTING DATA..."), 2000);
        const textTimer3 = setTimeout(() => setText("ACCESS GRANTED"), 3000);

        return () => {
            clearInterval(timer);
            clearTimeout(textTimer);
            clearTimeout(textTimer2);
            clearTimeout(textTimer3);
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono overflow-hidden"
        >
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="scanline" />
            </div>

            <div className="relative z-10 w-64 md:w-96">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-black tracking-tighter mb-2 flex justify-center gap-2 md:gap-3"
                    >
                        <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Encode</span>
                        <span className="bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(220,38,38,0.6)]">Japan</span>
                    </motion.div>
                    <div className="text-[10px] md:text-xs text-indigo-500 tracking-[0.3em] uppercase">
                        Global AI Policy & Education
                    </div>
                </div>

                <div className="flex justify-between items-end mb-2 text-indigo-500 text-[10px] tracking-widest font-bold">
                    <span>SYS.CONNECTION_PROTOCOL</span>
                    <span>TARGET_LOCKED</span>
                </div>

                {/* Progress Bar Container */}
                <div className="h-1 bg-gray-900 border border-gray-800 rounded-full overflow-hidden relative">
                    <motion.div
                        className="h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                        initial={{ width: "0%" }}
                        animate={{ width: `${Math.min(progress, 100)}%` }}
                    />
                </div>

                <div className="mt-4 flex justify-between text-indigo-400 text-sm font-bold">
                    <span className="animate-pulse">{text}</span>
                    <span>{Math.min(progress, 100)}%</span>
                </div>

                {/* Decorative Hex Codes */}
                <div className="mt-12 grid grid-cols-4 gap-2 opacity-30 text-[10px] text-green-500 text-center select-none pointer-events-none">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <motion.span
                            key={i}
                            animate={{ opacity: [0.2, 1, 0.2] }}
                            transition={{ duration: Math.random() * 2 + 1, repeat: Infinity }}
                        >
                            {Math.random().toString(16).substr(2, 6).toUpperCase()}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
