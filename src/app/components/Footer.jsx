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
    <footer className="bg-zinc-50 pt-25 font-sans relative">
      {/* 1. Main Content Container (Constrained Width) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Logo & Partnership Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="shrink-0">
                <img 
                  src="/logo.jpeg" 
                  alt="GHAI Logo" 
                  className="h-16 w-auto rounded-full"
                />
              </div>
              <div className="leading-tight font-bold text-xs uppercase tracking-tighter text-zinc-800">
                Rupee Ready <br />
                <span className="text-[10px] font-medium opacity-60">Finance | Money | Education</span>
              </div>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Website Developed by <span className='font-bold text-black'>Aarav Anand.</span>
            </p>
            <div>
              <h4 className="font-bold text-black text-sm mb-4">Follow us</h4>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-black text-white rounded-full hover:bg-zinc-800 transition-colors">
                  <Facebook size={18} fill="currentColor" />
                </a>
                <a href="#" className="p-2 bg-black text-white rounded-full hover:bg-zinc-800 transition-colors">
                  <Twitter size={18} fill="currentColor" />
                </a>
                <a href="https://www.instagram.com/rupeeready/" className="p-2 bg-black text-white rounded-full hover:bg-zinc-800 transition-colors">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Spacer Column (Empty as per your request) */}
          <div className="hidden lg:block"></div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-sm mb-6 uppercase text-black tracking-wider">Contact us</h4>
            <div className="space-y-6 text-sm text-zinc-600">
              <div>
                <p className="font-bold text-black mb-1">Email:</p>
                <a href="mailto:contact@rupeeready.org" className="block hover:text-[#76e094]">contact@rupeeready.org</a>
                <a href="mailto:rupeeready@gmail.com" className="block hover:text-[#76e094]">rupeeready@gmail.com</a>
              </div>
              <div>
                <p className="font-bold text-black mb-1">Phone:</p>
                <p>+91 XXXXX XXXXX</p>
              </div>
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="font-bold text-sm mb-6 text-black uppercase tracking-wider">Explore</h4>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li><a href="#home" className="hover:text-black transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-black transition-colors">About Us</a></li>
               <li><a href="#gallery" className="hover:text-black transition-colors">Gallery</a></li>
              <li><a href="#partners" className="hover:text-black transition-colors">Partners</a></li>
              <li><a href="#volunteer" className="hover:text-black transition-colors">Volunteer</a></li>
             
              
            </ul>
          </div>
        </div>
      </div>

      {/* 2. Full-Width Copyright Bar (Moved outside the max-w container) */}
      <div className="w-full bg-black py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-zinc-400 text-xs tracking-[0.1em]">
            © COPYRIGHT 2026. RUPEE READY. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>

      {/* 3. Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={goToTop}
          className="fixed bottom-20 right-8 z-50 p-3 bg-black text-white rounded-full shadow-2xl hover:bg-black transition-all duration-300 hover:-translate-y-2 animate-bounce-slow"
          aria-label="Back to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </footer>
  );
};

export default Footer;