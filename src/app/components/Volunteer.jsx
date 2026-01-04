'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, MousePointerClick } from 'lucide-react';

const Volunteer = () => {
  const [copied, setCopied] = useState(false);
  const email = "rupeeready@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="volunteer" className="relative h-[80vh] md:h-[80vh] w-full overflow-hidden flex items-center  justify-center">
      {/* Background Image with Dark Overlay - Inspired by Reference */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80")', // Professional financial/growth imagery
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      </div>

      {/* Content Area */}
      <div className="relative z-10 w-full max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
       

          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">
            Together, we can make a difference.
          </h2>

          {/* Click to Copy Email Interaction */}
          <div className="inline-block group cursor-pointer">   
            <button 
              onClick={copyToClipboard}
              className="relative flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/20 px-8 py-5 rounded-full transition-all duration-300 group-active:scale-95"
            >
              <span className="text-xl md:text-3xl font-medium text-white tracking-tight">
                {email}
              </span>
              
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black">
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <Check size={20} className="text-green-600" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <Copy size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Tooltip */}
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-blue-950 text-white text-xs font-bold py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {copied ? 'COPIED!' : 'CLICK TO COPY'}
              </span>
            </button>
          </div>

          <p className="mt-8 text-zinc-400 text-sm uppercase tracking-[0.3em] font-medium">
            Reach out to volunteer
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Volunteer;