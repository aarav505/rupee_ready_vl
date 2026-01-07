'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  const corporations = [
    { name: "HDFC Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg" },
    { name: "Zerodha", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Zerodha_logo.svg" },
    { name: "Tata", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Tata_logo.svg" },
    { name: "Paytm", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo.svg" },
    { name: "Razorpay", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Razorpay_logo.svg" },
    { name: "ICICI", logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg" },
  ];

  const donors = [
    "Aditi Sharma", "Rajesh Malhotra", "Vikram Sethi", 
    "Ananya Iyer", "Siddharth Verma", "Meera Reddy",
    "Karan Johar", "Priya Das", "Rahul Hegde"
  ];

  return (
    <section id="partners" className="min-h-[80vh] md:h-[90vh] flex items-center justify-center bg-zinc-30 overflow-hidden py-12 md:py-0">
      <div className="max-w-6xl w-full px-4 md:px-6 flex flex-col items-center">
        
        {/* Single Minimal Heading */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-black tracking-tight">
            Partners.
          </h2>
          <div className="w-10 md:w-12 h-1 bg-blue-900 mx-auto mt-3 md:mt-4 rounded-full" />
        </div>

        <div className="w-full">
          
          {/* Corporations Logo Cloud */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-16 opacity-70">
            {corporations.map((corp, index) => (
              <motion.img 
                key={index}
                whileHover={{ opacity: 1, scale: 1.05 }}
                src={corp.logo} 
                alt={corp.name} 
                className="h-6 sm:h-7 md:h-8 lg:h-10 w-auto grayscale object-contain transition-all"
              />
            ))}
          </div>

          {/* Minimalist Donors List */}
          <div className="flex flex-wrap mt-10 md:mt-15 justify-center gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-3 md:gap-y-4 max-w-4xl mx-auto px-2">
            {donors.map((donor, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-3">
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-500 font-sans tracking-wide">
                  {donor}
                </span>
                {index !== donors.length - 1 && (
                  <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-gray-200 rounded-full" />
                )}
              </div>
            ))}
          </div>

        </div>

        {/* Subtle Bottom CTA */}
        <motion.button 
          whileHover={{ y: -2 }}
          className="mt-10 md:mt-16 lg:mt-20 text-gray-400 hover:text-black text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-colors"
        >
          Join the movement →
        </motion.button>

      </div>
    </section>
  );
};

export default Partners;