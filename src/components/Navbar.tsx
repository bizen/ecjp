"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const { scrollY } = useScroll();
    const { t, language, setLanguage } = useLanguage();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    // Scroll spy - detect which section is in view
    useEffect(() => {
        const sectionIds = ["home", "about", "news", "contact"];

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150; // offset for navbar height

            for (const id of sectionIds) {
                const element = document.getElementById(id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(id);
                        break;
                    }
                }
            }

            // Check if at top of page
            if (window.scrollY < 100) {
                setActiveSection("home");
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === "ja" ? "en" : "ja");
    };

    const navItems = [
        { label: t.nav.home, href: "#home", id: "home" },
        { label: t.nav.about, href: "#about", id: "about" },
        { label: t.nav.news, href: "#news", id: "news" },
        { label: t.nav.contact, href: "#contact", id: "contact" },
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

                {/* Desktop Menu - Premium Pill Design */}
                <div className="hidden md:flex items-center">
                    {/* Outer glow wrapper */}
                    <div className="relative group">
                        {/* Gradient border effect */}
                        <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-red-500/20 rounded-full blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Main pill container */}
                        <div className="relative flex items-center bg-black/90 backdrop-blur-2xl rounded-full px-1.5 py-1 gap-0.5 border border-white/[0.08] shadow-2xl shadow-black/50">
                            {navItems.map((item) => {
                                const isActive = activeSection === item.id;
                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className={cn(
                                            "relative px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-300 whitespace-nowrap",
                                            isActive
                                                ? "text-black"
                                                : "text-gray-400 hover:text-white"
                                        )}
                                    >
                                        <span className="relative z-10">{item.label}</span>
                                        {/* Active indicator background */}
                                        <span
                                            className={cn(
                                                "absolute inset-0 rounded-full transition-all duration-300",
                                                isActive
                                                    ? "bg-white opacity-100"
                                                    : "bg-white/[0.06] opacity-0 hover:opacity-100"
                                            )}
                                        />
                                    </Link>
                                );
                            })}

                            <div className="w-px h-4 bg-gradient-to-b from-transparent via-white/20 to-transparent mx-1" />

                            <button
                                onClick={toggleLanguage}
                                className="relative flex items-center gap-1.5 px-3 py-2 text-[13px] font-medium text-gray-400 hover:text-white rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap group/lang"
                            >
                                <Globe className="w-3.5 h-3.5" />
                                <span>{language === "ja" ? "EN" : "JP"}</span>
                                <span className="absolute inset-0 bg-white/[0.06] rounded-full opacity-0 group-hover/lang:opacity-100 transition-opacity duration-300" />
                            </button>

                            {/* Special Join Button - Double Border */}
                            <Link
                                href="https://discord.com/invite/zgfT338w"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative ml-1.5 group/join"
                            >
                                {/* Outer border */}
                                <motion.span
                                    className="absolute -inset-[3px] rounded-full border transition-colors duration-300"
                                    animate={{
                                        borderColor: activeSection === "contact"
                                            ? "rgba(168, 85, 247, 0.7)"
                                            : "rgba(255, 255, 255, 0.4)",
                                    }}
                                    transition={{ duration: 0.5 }}
                                />
                                {/* Inner border */}
                                <motion.span
                                    className="absolute inset-0 rounded-full border transition-colors duration-300"
                                    animate={{
                                        borderColor: activeSection === "contact"
                                            ? "rgba(168, 85, 247, 0.9)"
                                            : "rgba(255, 255, 255, 0.6)",
                                    }}
                                    transition={{ duration: 0.5 }}
                                />
                                {/* Button content */}
                                <motion.span
                                    className="relative flex items-center justify-center px-4 py-2 rounded-full font-semibold text-[13px] whitespace-nowrap overflow-hidden"
                                    animate={{
                                        scale: activeSection === "contact" ? 1 : 1,
                                    }}
                                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                >
                                    {/* Background gradient */}
                                    <motion.span
                                        className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{
                                            opacity: activeSection === "contact" ? 1 : 0,
                                            scale: activeSection === "contact" ? 1 : 0,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            ease: [0.4, 0, 0.2, 1]
                                        }}
                                    />
                                    {/* Shimmer effect */}
                                    <AnimatePresence>
                                        {activeSection === "contact" && (
                                            <motion.span
                                                initial={{ x: "-100%", opacity: 0 }}
                                                animate={{ x: "200%", opacity: [0, 1, 0] }}
                                                exit={{ opacity: 0 }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                    repeatDelay: 2,
                                                    ease: "easeInOut"
                                                }}
                                                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                                            />
                                        )}
                                    </AnimatePresence>
                                    {/* Text */}
                                    <span className="relative z-10 text-white">
                                        {t.nav.join}
                                    </span>
                                </motion.span>
                            </Link>
                        </div>
                    </div>
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
