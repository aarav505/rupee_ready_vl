'use client';

import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Twitter, ChevronUp } from 'lucide-react';

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-zinc-50 pt-12 md:pt-20 lg:pt-25 font-sans relative">
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-12">
          
          {/* Logo & Partnership Column */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-3">
              <div className="shrink-0">
                <img 
                  src="/logo.jpeg" 
                  alt="GHAI Logo" 
                  className="h-12 md:h-16 w-auto rounded-full"
                />
              </div>
              <div className="leading-tight font-bold text-xs md:text-sm uppercase tracking-tighter text-zinc-800">
                Rupee Ready <br />
                <span className="text-[9px] md:text-[10px] font-medium opacity-60">Finance | Money | Education</span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
              Website Developed by <span className='font-bold text-black'>Aarav Anand.</span>
            </p>
            <div>
              <h4 className="font-bold text-black text-xs md:text-sm mb-3 md:mb-4">Follow us</h4>
              <div className="flex gap-3 md:gap-4">
                <a href="https://www.instagram.com/rupeeready/" className="p-2 bg-black text-white rounded-full hover:bg-zinc-800 transition-colors">
                  <Facebook size={16} className="md:w-[18px] md:h-[18px]" fill="currentColor" />
                </a>
                <a href="https://www.instagram.com/rupeeready/" className="p-2 bg-black text-white rounded-full hover:bg-zinc-800 transition-colors">
                  <Twitter size={16} className="md:w-[18px] md:h-[18px]" fill="currentColor" />
                </a>
                <a href="https://www.instagram.com/rupeeready/" className="p-2 bg-black text-white rounded-full hover:bg-zinc-800 transition-colors">
                  <Instagram size={16} className="md:w-[18px] md:h-[18px]" />
                </a>
              </div>
            </div>
          </div>

          {/* Spacer Column (Hidden on mobile and tablet) */}
          <div className="hidden lg:block"></div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-xs md:text-sm mb-4 md:mb-6 uppercase text-black tracking-wider">Contact us</h4>
            <div className="space-y-4 md:space-y-6 text-xs md:text-sm text-zinc-600">
              <div>
                <p className="font-bold text-black mb-1">Email:</p>
                <a href="mailto:rupeeready.npo@gmail.com" className="block hover:text-[#76e094] break-words">
                  rupeeready.npo@gmail.com
                </a>
              </div>
              <div>
                <p className="font-bold text-black mb-1">Phone:</p>
                <p>+91 6295319594</p>
              </div>
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="font-bold text-xs md:text-sm mb-4 md:mb-6 text-black uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-zinc-600">
              <li><a href="#home" className="hover:text-black transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-black transition-colors">About</a></li>
              <li><a href="#partners" className="hover:text-black transition-colors">Partners</a></li>
              <li><a href="#gallery" className="hover:text-black transition-colors">Gallery</a></li>
              <li><a href="#volunteer" className="hover:text-black transition-colors">Volunteer</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Full-Width Copyright Bar */}
      <div className="w-full bg-black py-6 md:py-8 mt-8 md:mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <p className="text-zinc-400 text-[10px] md:text-xs tracking-[0.1em]">
            © COPYRIGHT 2026. RUPEE READY. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>

      {/* Back to Top Button - Mobile Optimized */}
      {showTopBtn && (
        <button
          onClick={goToTop}
          className="fixed bottom-6 right-4 md:bottom-20 md:right-8 z-50 p-2.5 md:p-3 bg-black text-white rounded-full shadow-2xl hover:bg-black transition-all duration-300 hover:-translate-y-2 animate-bounce-slow"
          aria-label="Back to top"
        >
          <ChevronUp size={20} className="md:w-6 md:h-6" />
        </button>
      )}
    </footer>
  );
};

export default Footer;