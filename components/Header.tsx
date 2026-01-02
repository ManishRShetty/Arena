"use client"
import React from 'react';
import { motion } from 'framer-motion';
//import { Gamepad2 } from 'lucide-react';
import Img from 'next/image';
const Header = () => {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 } as const}
            className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-xl"
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo/Brand */}
                    <motion.div
                        className="flex items-center gap-3"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 } as const}
                    >
                        <div className="p-2 ">
                            <Img src="/logo.png" alt="Arena Logo" width={150} height={100}/>
                        </div>
                        <div>
                            {/* <h1 className="text-xl font-bold text-white tracking-tight">
                                Arena
                            </h1> */}
                            {/* <p className="text-xs text-slate-400">by Manish Shetty</p> */}
                        </div>
                    </motion.div>

                    {/* Nav Items (optional - can be expanded) */}
                    <nav className="hidden md:flex items-center gap-6">
                        <a
                            href="#games"
                            className="text-sm text-slate-400 hover:text-white transition-colors"
                        >
                            Games
                        </a>
                        <a
                            href="https://manishshetty.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-slate-400 hover:text-white transition-colors"
                        >
                            Portfolio
                        </a>
                    </nav>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
