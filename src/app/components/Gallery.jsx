'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMaximized, setIsMaximized] = useState(false);

  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80', title: 'Workshop Session' },
    { id: 2, src: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80', title: 'Community Outreach' },
    { id: 3, src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80', title: 'Financial Literacy Drive' },
    { id: 4, src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80', title: 'School Seminar' },
  ];

  // Auto-play logic
  useEffect(() => {
    if (isMaximized) return; // Pause auto-play when viewing full screen
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Changes every 5 seconds
    return () => clearInterval(interval);
  }, [isMaximized, images.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="gallery" className="py-12 md:py-20 lg:py-24 bg-zinc-50 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-black mb-3 md:mb-4">
            Gallery.
          </h2>
          <div className="w-12 md:w-16 h-1 md:h-1.5 bg-blue-950 mx-auto rounded-full" />
        </div>

        {/* Main Display Area */}
        <div className="relative group aspect-video md:aspect-[21/9] rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl bg-zinc-200">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.0 }}
              className="absolute inset-0 cursor-pointer"
              onClick={() => setIsMaximized(true)}
            >
              <img 
                src={images[currentIndex].src} 
                alt={images[currentIndex].title}
                className="w-full h-full object-cover"
              />
              
              {/* Subtle Zoom Prompt on Hover (Hidden on mobile) */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-100 items-center justify-center hidden md:flex">
                <div className="bg-white/20 backdrop-blur-md p-3 md:p-4 rounded-full text-white">
                  <ZoomIn size={28} className="md:w-8 md:h-8" />
                </div>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl">
                  {images[currentIndex].title}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Manual Navigation Controls (Always visible on mobile, hover on desktop) */}
          <button 
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white p-2 md:p-3 rounded-full md:opacity-0 md:group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white p-2 md:p-3 rounded-full md:opacity-0 md:group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 md:h-2 transition-all duration-300 rounded-full ${
                idx === currentIndex ? 'w-6 md:w-8 bg-blue-950' : 'w-1.5 md:w-2 bg-zinc-300'
              }`}
            />
          ))}
        </div>

        {/* Fullscreen Lightbox */}
        <AnimatePresence>
          {isMaximized && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
              onClick={() => setIsMaximized(false)}
            >
              <button className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:rotate-90 transition-transform z-10">
                <X size={24} className="md:w-8 md:h-8" />
              </button>
              
              <motion.img 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                src={images[currentIndex].src} 
                alt={images[currentIndex].title}
                className="max-w-full max-h-[85vh] md:max-h-[90vh] rounded-lg md:rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;