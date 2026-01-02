'use client';

import React from 'react';
import { ArrowUpRight, BookOpen, Zap, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="min-h-[90vh] bg-zinc-50 font-sans ">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-24 pb-12 px-6 text-center relative">
        
        {/* Animated Background Icons (Subtle) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-20 right-[15%] text-green-500/20 -rotate-12 hidden lg:block"
        >
          <Landmark size={120} />
        </motion.div>

        <div className="relative inline-block">
          {/* Main Decorative Book Icon */}
          <motion.div 
            initial={{ y: 20, opacity: 0, rotate: 0 }}
            animate={{ y: 0, opacity: 1, rotate: 12 }}
            transition={{ duration: 0.6 }}
            className="absolute -top-16 -right-12 text-green-600"
          >
            <BookOpen size={56} fill="rgba(22, 163, 74, 0.1)" />
          </motion.div>
          
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-8xl font-serif font-bold text-black leading-[1.1] mb-8"
          >
            Empowering <br />
            <span className="relative inline-block">
              India's Youth.
              {/* Highlight bar similar to GHAI image */}
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-2 left-0 h-4 md:h-6 bg-[#76e094] -z-10 opacity-80"
              />
            </span>
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl text-gray-700 text-lg md:text-xl leading-relaxed mb-10"
        >
          Rupee Ready is a youth-led non-profit initiative I started with one goal: 
          To make <span className="font-semibold text-black">money safety</span>, 
          digital finance awareness, and basic tax literacy simple, relatable, and reel-worthy.
        </motion.p>

        {/* Action Buttons with Framer Motion */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
          
          {/* Primary CTA: See our programs */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-black text-white pl-8 pr-2 py-2 rounded-full flex items-center gap-6 hover:shadow-xl transition-all"
          >
            <span className="font-medium flex items-center gap-2">
              
              Make a Difference
            </span>
            <motion.div 
              className="bg-white text-black p-2 rounded-full"
              whileHover={{ rotate: 45 }}
            >
              <ArrowUpRight size={20} />
            </motion.div>
          </motion.button>

          {/* Secondary CTA: Learn More */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-white border border-gray-300 text-black pl-8 pr-2 py-2 rounded-full flex items-center gap-6 hover:bg-gray-50 transition-all shadow-sm"
          >
            <span className="font-medium">Learn More</span>
            <motion.div 
              className="bg-gray-100 text-black p-2 rounded-full"
              whileHover={{ x: 2, y: -2 }}
            >
              <ArrowUpRight size={20} />
            </motion.div>
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Hero;