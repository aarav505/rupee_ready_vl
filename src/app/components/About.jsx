'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, User, Banknote, ShieldCheck, Dumbbell, Landmark, PiggyBank, GraduationCap } from 'lucide-react';

const About = () => {
  const missions = [
    {
      icon: <PiggyBank className="w-8 h-8 text-white" />,
      title: "Money Safety & Fraud Prevention",
      description: "In an age of digital scams, we equip youth with the tools to identify threats. We believe financial security starts with awareness."
    },
    {
      icon: <Landmark className="w-8 h-8 text-white" />,
      title: "Digital Finance Literacy",
      description: "From UPI to digital banking, we simplify the complex world of online finance. We provide the knowledge needed to navigate modern systems."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      title: "Basic Tax & Planning",
      description: "We make tax literacy relatable and 'reel-worthy.' Our mission is to demystify taxes, ensuring no young Indian feels left behind."
    }
  ];

  const stats = [
    { icon: <Users size={20} />, value: "500+", label: "Youth Trained" },
    { icon: <User size={20} />, value: "30+", label: "Classes Taken" },
    { icon: <Banknote size={20} />, value: "1.5L+", label: "Money Raised" },
    { icon: <Dumbbell size={20} />, value: "24/7", label: "Support Access" }
  ];

  return (
    <section id="about" className="min-h-[85vh] scroll-mt-20 pt-0 pb-20 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-black font-serif mb-20 text-center">About Us.</h1>
        
        {/* Mission Cards Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {missions.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center relative">
              {index !== 0 && (
                <div className="hidden md:block absolute left-[-1.5rem] top-10 bottom-10 w-[1px] bg-gray-200" />
              )}
              {/* FIXED: text-white added so icon is visible against blue-900 */}
              <div className="w-16 h-16 bg-blue-900 rounded-full text-white flex items-center justify-center mb-6 shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-black font-serif mb-4 leading-tight px-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base px-2">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Impact Statistics Bar - CENTERED VERSION */}
        <div className="relative rounded-[2rem] overflow-hidden min-h-[250px] flex justify-center items-center shadow-2xl">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80")' }}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
          </div>

          {/* Centering Logic: Changed grid-cols-5 to flex with justify-center */}
          <div className="relative z-10 w-full flex flex-wrap justify-center gap-8 md:gap-16 py-10 px-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-white min-w-[140px] border-r-0 md:border-r last:border-r-0 border-white/20 md:pr-16 last:pr-0"
              >
                <div className="mb-4 bg-white/10 p-2.5 rounded-full backdrop-blur-md">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-300 text-center font-medium">
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