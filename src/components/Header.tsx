
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-5 px-6 md:px-8 lg:px-12 transition-all duration-300',
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a 
          href="#" 
          className="text-xl md:text-2xl font-bold tracking-tight transition-all hover:opacity-80"
        >
          AXIEMAILS
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="nav-link">Services</a>
          <a href="#why-us" className="nav-link">Why Us</a>
          <a 
            href="#contact" 
            className="button-primary"
          >
            Book a Call
          </a>
        </nav>
        
        {/* Mobile menu button */}
        <button className="md:hidden p-2">
          <span className="sr-only">Open menu</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-foreground"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
