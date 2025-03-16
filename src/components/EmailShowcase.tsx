
import React, { useEffect, useRef } from 'react';

// Email showcases - these would be replaced with actual email designs
const emailDesigns = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&h=3000&auto=format&fit=crop'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&h=3000&auto=format&fit=crop'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&h=3000&auto=format&fit=crop'
  },
];

const EmailShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const fadeElements = section.querySelectorAll('.fade-in-element');
    fadeElements.forEach(el => observer.observe(el));

    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="email-designs" ref={sectionRef} className="section bg-secondary">
      <div className="fade-in-element text-center">
        <h2 className="section-title text-center mb-6">Email Designs that Convert</h2>
        <p className="section-description text-center mx-auto mb-14">
          Hover over each design to explore our high-converting email templates
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {emailDesigns.map((email, index) => (
          <div 
            key={email.id} 
            className="fade-in-element"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="relative group">
              <div className="email-preview h-[600px] md:h-[700px] overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={email.image} 
                  alt="Email design example" 
                  className="email-preview-content w-full h-auto object-cover transform scale-105"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmailShowcase;
