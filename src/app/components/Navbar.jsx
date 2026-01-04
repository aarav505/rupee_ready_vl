'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Gift, ArrowLeft } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [blobStyle, setBlobStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef([]);
  const containerRef = useRef(null);
  
  const pathname = usePathname();
  const isDonatePage = pathname === '/donate';

  const navItems = [
    { name: 'Home', href: '/#home', id: 'home' },
    { name: 'About', href: '/#about', id: 'about' },
    { name: 'Partners', href: '/#partners', id: 'partners' },
    { name: 'Gallery', href: '/#gallery', id: 'gallery' },
    { name: 'Volunteer', href: '/#volunteer', id: 'volunteer' },
  ];

  // Logic to update active index based on scroll position
  useEffect(() => {
    if (isDonatePage || pathname !== '/') return;

    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = navItems.findIndex((item) => item.id === entry.target.id);
          if (index !== -1) setActiveIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    });

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname, isDonatePage]);

  const handleScroll = (e, index, href) => {
    setActiveIndex(index);
    setIsOpen(false);

    if (pathname !== '/') return; 

    e.preventDefault();
    const targetId = href.split('#')[1]; 
    const elem = document.getElementById(targetId);
    
    if (elem) {
      const targetY = elem.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const updateBlobPosition = () => {
      if (!isDonatePage && navRefs.current[activeIndex] && containerRef.current) {
        const activeButton = navRefs.current[activeIndex];
        const container = containerRef.current;
        const containerRect = container.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();
        
        setBlobStyle({
          left: buttonRect.left - containerRect.left,
          width: buttonRect.width,
        });
      }
    };

    updateBlobPosition();
    window.addEventListener('resize', updateBlobPosition);
    return () => window.removeEventListener('resize', updateBlobPosition);
  }, [activeIndex, isDonatePage]);

  return (
    <nav className="bg-zinc-50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <Link href="/" className="shrink-0">
            <img src="/logo.jpeg" alt="Logo" className="h-16 w-auto rounded-full" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {!isDonatePage ? (
              <div ref={containerRef} className="flex items-center rounded-full px-2 py-2 border border-blue-900/20 relative">
                <div 
                  className="absolute bg-gradient-to-r from-blue-950 to-blue-950 rounded-full shadow-md transition-all duration-500 ease-out pointer-events-none"
                  style={{
                    left: `${blobStyle.left}px`,
                    width: `${blobStyle.width}px`,
                    height: 'calc(100% - 1rem)',
                    top: '0.5rem',
                  }}
                />
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    ref={(el) => (navRefs.current[index] = el)}
                    href={item.href}
                    onClick={(e) => handleScroll(e, index, item.href)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 relative z-10 ${
                      index === activeIndex ? 'text-white' : 'text-black'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          {/* Donate/Back Button */}
          <div className="hidden md:block">
            <Link
              href={isDonatePage ? "/" : "/donate"}
              className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200 shadow-lg inline-flex items-center justify-center gap-2 overflow-hidden relative group"
            >
              {isDonatePage ? (
                <>
                  <ArrowLeft size={18} />
                  <span>Back to Home</span>
                </>
              ) : (
                <>
                  <span className="group-hover:scale-0 group-hover:opacity-0 transition-all duration-300">Donate</span>
                  <Gift size={20} className="absolute scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
                </>
              )}
            </Link>
          </div>

          {/* Mobile UI */}
          <div className="md:hidden flex items-center space-x-4">
            <Link href={isDonatePage ? "/" : "/donate"} className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              {isDonatePage && <ArrowLeft size={14} />}
              {isDonatePage ? "Back" : "Donate"}
            </Link>
            {!isDonatePage && (
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && !isDonatePage && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, index, item.href)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  index === activeIndex ? 'bg-blue-950 text-white' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;