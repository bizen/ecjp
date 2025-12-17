"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();
    const { t, language, setLanguage } = useLanguage();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    const toggleLanguage = () => {
        setLanguage(language === "ja" ? "en" : "ja");
    };

    const navItems = [
        { label: t.nav.home, href: "#home" },
        { label: t.nav.about, href: "#about" },
        { label: t.nav.news, href: "#news" },
        { label: t.nav.contact, href: "#contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter flex gap-1 items-center">
                    <span className="text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">Encode</span>
                    <span className="bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(220,38,38,0.4)]">Japan</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
                    >
                        <Globe className="w-4 h-4" />
                        {language === "ja" ? "English" : "日本語"}
                    </button>
                    <Link href="#contact" className="cursor-pointer px-5 py-2 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors">
                        {t.nav.join}
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleLanguage}
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        {language === "ja" ? "EN" : "JP"}
                    </button>
                    <button className="text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col space-y-4"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="text-left text-lg font-medium text-white pt-2 block w-full"
                        onClick={() => setIsOpen(false)}
                    >
                        {t.nav.join}
                    </Link>
                </motion.div>
            )}
        </nav>
    );
};
