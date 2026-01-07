'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, User, Banknote, ShieldCheck, Dumbbell, Landmark, PiggyBank, GraduationCap } from 'lucide-react';

const About = () => {
  const missions = [
    {
      icon: <PiggyBank className="w-6 h-6 md:w-8 md:h-8 text-white" />,
      title: "Money Safety & Fraud Prevention",
      description: "In an age of digital scams, we equip youth with the tools to identify threats. We believe financial security starts with awareness."
    },
    {
      icon: <Landmark className="w-6 h-6 md:w-8 md:h-8 text-white" />,
      title: "Digital Finance Literacy",
      description: "From UPI to digital banking, we simplify the complex world of online finance. We provide the knowledge needed to navigate modern systems."
    },
    {
      icon: <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-white" />,
      title: "Basic Tax & Planning",
      description: "We make tax literacy relatable and 'reel-worthy.' Our mission is to demystify taxes, ensuring no young Indian feels left behind."
    }
  ];

  const stats = [
    { icon: <Users size={18} className="md:w-5 md:h-5" />, value: "500+", label: "Youth Trained" },
    { icon: <User size={18} className="md:w-5 md:h-5" />, value: "30+", label: "Classes Taken" },
    { icon: <Banknote size={18} className="md:w-5 md:h-5" />, value: "1.5L+", label: "Money Raised" },
    { icon: <Dumbbell size={18} className="md:w-5 md:h-5" />, value: "24/7", label: "Support Access" }
  ];

  return (
    <section id="about" className="min-h-screen md:min-h-[85vh] scroll-mt-20 pt-12 md:pt-0 pb-12 md:pb-20 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black font-serif mb-12 md:mb-20 text-center">
          About Us.
        </h1>
        
        {/* Mission Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-24">
          {missions.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center relative">
              {index !== 0 && (
                <div className="hidden md:block absolute left-[-1.5rem] top-10 bottom-10 w-[1px] bg-gray-200" />
              )}
              {/* Icon container - smaller on mobile */}
              <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-900 rounded-full text-white flex items-center justify-center mb-4 md:mb-6 shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black font-serif mb-3 md:mb-4 leading-tight px-2 md:px-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base px-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Statistics Bar - Mobile Optimized */}
        <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden min-h-[200px] md:min-h-[250px] flex justify-center items-center shadow-2xl">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80")' }}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
          </div>

          {/* Stats Grid - 2x2 on mobile, 1x4 on desktop */}
          <div className="relative z-10 w-full grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-6 md:gap-8 lg:gap-16 py-8 md:py-10 px-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-white min-w-[100px] md:min-w-[140px] md:border-r md:last:border-r-0 border-white/20 md:pr-8 lg:pr-16 md:last:pr-0"
              >
                <div className="mb-3 md:mb-4 bg-white/10 p-2 md:p-2.5 rounded-full backdrop-blur-md">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-[9px] md:text-[10px] lg:text-xs uppercase tracking-widest text-gray-300 text-center font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;