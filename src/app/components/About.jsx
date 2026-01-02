'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, User, Banknote, ShieldCheck, Dumbbell, Landmark, PiggyBank, GraduationCap } from 'lucide-react';

const About = () => {
  const missions = [
    {
      icon: <PiggyBank className="w-8 h-8 text-white" />,
      title: "Money Safety & Fraud Prevention",
      description: "In an age of digital scams, we equip youth with the tools to identify threats. We believe financial security starts with awareness of how to protect your digital footprint."
    },
    {
      icon: <Landmark className="w-8 h-8 text-white" />,
      title: "Digital Finance Literacy",
      description: "From UPI to digital banking, we simplify the complex world of online finance. We provide the knowledge needed to navigate modern financial systems with confidence."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      title: "Basic Tax & Planning",
      description: "We make tax literacy relatable and 'reel-worthy.' Our mission is to demystify taxes and financial planning, ensuring no young Indian feels left behind by financial jargon."
    }
  ];

  const stats = [
    { icon: <Users size={20} />, value: "5000+", label: "Youth Trained" },
    { icon: <User size={20} />, value: "85%", label: "Student Reach" },
    { icon: <Banknote size={20} />, value: "40%", label: "Improved Savings" },
    { icon: <ShieldCheck size={20} />, value: "1200", label: "Scams Prevented" },
    { icon: <Dumbbell size={20} />, value: "24/7", label: "Support Access" }
  ];

  return (
    <section id="about" className="min-h-[85vh] scroll-mt-20 pt-0 pb-20 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-black font-serif mb-20 text-center">About Us.</h1>
        {/* Mission Cards Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {missions.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center relative">
              {/* Vertical Divider for desktop */}
              {index !== 0 && (
                <div className="hidden md:block absolute left-[-1.5rem] top-10 bottom-10 w-[1px] bg-gray-200" />
              )}
              
              <div className="w-16 h-16 bg-blue-900 rounded-full text-blue-900 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-black font-serif mb-4 leading-tight px-4">
                {item.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm md:text-base px-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Statistics Bar */}
        <div className="relative rounded-[2rem] overflow-hidden min-h-[250px] flex items-center shadow-2xl">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          </div>

          {/* Stats Content */}
          <div className="relative z-10 w-full grid grid-cols-2 md:grid-cols-5 gap-4 py-10 px-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-white border-r last:border-r-0 border-white/20">
                <div className="mb-4 bg-white/10 p-2 rounded-full backdrop-blur-md">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-300 text-center px-2">
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