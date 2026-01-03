import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-30 pt-16 font-sans">
      <div className="max-w-7xl bg-zinc-30 mx-auto px-6 lg:px-8">
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
              We welcome all types of corporate partnership that can facilitate 
              our humanitarian services to under served communities.
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
                <a href="#" className="p-2 bg-black text-white rounded-full hover:bg-zinc-800 transition-colors">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Address Column */}
          <div>
            
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-sm mb-6 uppercase text-black tracking-wider">Contact us</h4>
            <div className="space-y-6 text-sm text-zinc-600">
              <div>
                <p className="font-bold text-black mb-1">Email:</p>
                <a href="mailto:contactus@lagosfoodbank.org" className="block hover:text-[#76e094]">gg.org</a>
                <a href="mailto:lagosfoodbank@gmail.com" className="block hover:text-[#76e094]">ss@gmail.com</a>
                <a href="mailto:partnership@lagosfoodbank.org" className="block hover:text-[#76e094]">ss.org</a>
              </div>
              <div>
                <p className="font-bold text-black mb-1">Phone:</p>
                <p>07058617222</p>
              </div>
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="font-bold text-sm mb-6 text-black uppercase tracking-wider">Explore</h4>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li><a href="#about" className="hover:text-black">About Us</a></li>
              <li><a href="#donate" className="hover:text-black">Donate</a></li>
              <li><a href="#gallery" className="hover:text-black">Gallery</a></li>
              <li><a href="#volunteer" className="hover:text-black">Become a volunteer</a></li>
              <li><a href="#contact" className="hover:text-black">Contact</a></li>
            </ul>
          </div>
        </div>

    

      {/* Copyright Bar */}
      <div className="bg-black py-6 w-[100%]text-center">
        <p className="text-zinc-400 text-xs tracking-wide">
          © Copyright 2026. Rupee Ready. All Rights Reserved.
        </p>
      </div>
      </div>
    </footer>
    
    );
}

export default Footer;