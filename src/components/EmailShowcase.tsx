import React, { useEffect, useRef } from 'react';

// Email showcases - these would be replaced with actual email designs
const emailDesigns = [
  {
    id: 1,
    image: '/Design1.png'  
  },
  {
    id: 2,
    image: 'Design2.png'
  },
  {
    id: 3,
    image: 'Design3.png'
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
      <div className="max-w-4xl mx-auto text-center">
        <div className="fade-in-element">
          <h2 className="section-title text-center mx-auto mb-6">Discover Our Email Designs That Drive Results.</h2>
          <p className="section-description text-center mx-auto mb-14">
            Hover over each design to scroll through our high-converting Email Designs.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {emailDesigns.map((email, index) => (
          <div 
            key={email.id} 
            className="fade-in-element"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="relative group">
              <div className="email-preview h-[600px] md:h-[700px] overflow-hidden hover:overflow-y-auto rounded-xl shadow-lg transform transition-transform duration-1000 hover:scale-[1.02] hover:-translate-y-2">
                <img 
                  src={email.image} 
                  alt="Email design example" 
                  className="w-full min-h-full object-top rounded-xl"
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