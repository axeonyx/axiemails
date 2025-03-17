
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return <header className={cn('fixed top-0 left-0 right-0 z-50 py-5 px-6 md:px-8 lg:px-12 transition-all duration-300', scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-5')}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-bold tracking-tight transition-all hover:opacity-80">AxieMails</a>
        
        <nav className="hidden md:flex items-center space-x-8">
        <a href="#email-designs" className="nav-link">Our Designs</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#why-us" className="nav-link">Why Us</a>
          <a href="#results" className="nav-link">Results</a>
          <a href="https://calendly.com/anish-axiemails/30min" className="button-primary-small">
            Get a Free Audit
          </a>
        </nav>
        
        {/* Mobile menu button */}
        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          <span className="sr-only">Open menu</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-64' : 'max-h-0'}`}>
        <div className="px-6 py-4 space-y-4">
          <a href="#services" className="block py-2 nav-link">Services</a>
          <a href="#email-designs" className="block py-2 nav-link">Our Designs</a>
          <a href="#why-us" className="block py-2 nav-link">Why Us</a>
          <a href="#results" className="block py-2 nav-link">Results</a>
        </div>
      </div>
    </header>;
};

export default Header;
