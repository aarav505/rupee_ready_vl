import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Gift } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [blobStyle, setBlobStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef([]);
  const containerRef = useRef(null);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Partners', href: '#partners' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Volunteer', href: '#volunteer' },

  ];

  const handleScroll = (e, index, href) => {
  e.preventDefault();
  setActiveIndex(index);
  setIsOpen(false);

  // This handles both "/#about" and "#about" to get just "about"
  const targetId = href.split('#')[1]; 
  const elem = document.getElementById(targetId);
  
  if (elem) {
    const rect = elem.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetY = rect.top + scrollTop - 80; // Navbar offset

    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });
  }
};

  useEffect(() => {
    const updateBlobPosition = () => {
      if (navRefs.current[activeIndex] && containerRef.current) {
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
  }, [activeIndex]);

  return (
    <nav className="bg-zinc-50  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0">
            <img 
              src="/logo.jpeg" 
              alt="GHAI Logo" 
              className="h-16 w-auto rounded-full"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 80"%3E%3Cpath fill="%2356773B" d="M20 10 Q40 5 50 20 Q55 30 45 40 Q35 50 25 45 Q15 40 20 30 Z"%3E%3C/path%3E%3Ctext x="50" y="60" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="%2356773B"%3EGHAI%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div ref={containerRef} className="flex items-center rounded-full px-2 py-2 border border-blue-900 relative">
              {/* Animated background blob */}
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
                <a
          key={item.name}
          ref={(el) => (navRefs.current[index] = el)}
          href={item.href}
          onClick={(e) => handleScroll(e, index, item.href)} // Used helper function
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 relative z-10 ${
            index === activeIndex ? 'text-white' : 'text-black'
          }`}
        >
          {item.name}
        </a>
              ))}
            </div>
          </div>

          {/* Donate Button */}
          <div className="hidden md:block">
            <a
              href="/donate"
              className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200 shadow-lg inline-flex items-center justify-center gap-2 overflow-hidden relative group"
            >
              <span className="group-hover:scale-0 group-hover:opacity-0 transition-all duration-300">
                Donate
              </span>
              <Gift 
                size={20} 
                className="absolute scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <a
              href="/donate"
              className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium"
            >
              Donate
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  index === activeIndex
                    ? 'bg-blue-950 text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;