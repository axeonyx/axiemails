
import React, { useEffect, useRef } from 'react';

// Email showcases - these would be replaced with actual email designs
const emailDesigns = [
  {
    id: 1,
    title: 'E-commerce Promotion',
    description: 'Driving sales with strategic discounts',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&h=3000&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Welcome Sequence',
    description: 'Onboarding new subscribers effectively',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&h=3000&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Newsletter',
    description: 'Keeping customers engaged and informed',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&h=3000&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Abandoned Cart',
    description: 'Recovering potential lost sales',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200&h=3000&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Product Launch',
    description: 'Creating excitement for new releases',
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
      <div className="fade-in-element">
        <h2 className="section-title text-center mb-6">Email Designs that Convert</h2>
        <p className="section-description text-center mx-auto mb-14">
          Hover over each design to explore our high-converting email templates
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
        {emailDesigns.map((email, index) => (
          <div 
            key={email.id} 
            className="fade-in-element email-showcase-card"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="relative group">
              <div className="overflow-hidden rounded-xl h-[400px] shadow-md">
                <div className="email-preview w-full h-full">
                  <img 
                    src={email.image} 
                    alt={email.title} 
                    className="email-preview-content w-full h-auto object-cover transform scale-105"
                  />
                </div>
              </div>
              <div className="mt-4 px-1">
                <h3 className="font-medium text-lg">{email.title}</h3>
                <p className="text-muted-foreground text-sm">{email.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmailShowcase;
