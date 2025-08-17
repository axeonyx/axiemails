import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import EmailShowcase from '@/components/EmailShowcase';
import ServiceCard from '@/components/ServiceCard';
import MetricsCard from '@/components/MetricsCard';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import AnimatedBlobs from '@/components/AnimatedBlobs';

const Index = () => {
  const observerRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    // Setup Intersection Observer for animations
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

    // Observe all fade elements
    observerRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    // Cleanup
    return () => {
      observerRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Handle hash navigation from other pages
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Wait for the page to render then scroll to the section
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  // Add elements to be observed
  const addToObserver = (el: HTMLElement | null) => {
    if (el) observerRefs.current.push(el);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Decorative blobs */}
      <AnimatedBlobs />

      <Header />

{/* Hero Section */}
<section className="min-h-screen flex items-center pt-36 pb-8 px-6 md:px-8 lg:px-12 hero-gradient-bg">
  <div className="max-w-7xl mx-auto w-full">
    <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
      
      {/* Left: Text Content */}
      <div 
        className="fade-in-element lg:w-1/2 flex flex-col justify-center items-center text-center h-full" 
        ref={addToObserver}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
          We help you turn subscribers into lifelong customers.
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Increase your revenue by{' '}
          <span className="text-green-500 font-semibold">15-30%</span> in
          60 days through strategic email marketing.
        </p>
        <a 
          href="https://calendly.com/anish-axiemails/30min" 
          className="button-primary-small hover-float inline-block"
          aria-label="Book a free audit via Calendly"
        >
          Get Your Free Audit
        </a>
      </div>

      <div 
        className="flex justify-center lg:justify-end w-full lg:w-1/2" 
        ref={addToObserver}
      >
        <img
          src="/HeroImage.png"
          alt="Illustration representing strategic email marketing for revenue growth"
          className="w-full h-auto max-w-[600px] object-contain"
        />
      </div>
    </div>

    {/* Social Proof (Inside Hero) */}
    <div className="text-center mt-8 space-y-4">
      <h3 className="text-xl font-semibold tracking-wider text-primary">
        Helped 75+ brands grow their business and generated over $30M in revenue and counting
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-8">
        <img
          src="/logos.png"
          alt="Client Logo"
          className="h-30 md:h-60 w-auto max-w-full object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
        />
        {/* Add more logos here if needed */}
      </div>
    </div>

    {/* New Case Study Section */}
    <div className="text-center mt-16 mb-16">
      <h3 className="text-3xl font-semibold mb-6">See Our Case Studies</h3>
      <p className="text-lg text-muted-foreground mb-8">
        Curious about how we help businesses like yours grow? Check out our case studies to see the results we’ve delivered.
      </p>
      <a 
        href="https://axiemails.com/casestudies" 
        className="button-primary-small hover-float inline-block"
        aria-label="View our Case Studies"
      >
        View Case Studies
      </a>
    </div>
  </div>
</section>

      {/* Email Showcase Section */}
      <EmailShowcase />

      {/* Services Section */}
      <section id="services" className="section">
        <div className="fade-in-element text-center mb-16" ref={addToObserver}>
          <h2 className="section-title mx-auto">Our Services</h2>
          <p className="section-description mx-auto">
          Everything you need to make email marketing work for you.
          From strategy to design, We’ve got the tools and expertise to turn your email list into a revenue machine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H21C22.1046 19 23 18.1046 23 17V7C23 5.89543 22.1046 5 21 5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 9H23"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              title: 'Email Strategy',
              description:
                'We’ll create a game plan tailored to your business, so every email feels personal and drives results.',
            },
            {
              icon: (
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 2H9C8.44772 2 8 2.44772 8 3V21C8 21.5523 8.44772 22 9 22H15C15.5523 22 16 21.5523 16 21V3C16 2.44772 15.5523 2 15 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 18H12.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              title: 'Automation Sequences',
              description:
                'Our automated sequences turn leads into loyal customers—without you lifting a finger.',
            },
            {
              icon: (
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 8H19C20.1046 8 21 8.89543 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C3.89543 21 3 19.1046 3 18V10C3 8.89543 3.89543 8 5 8H6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 14C15 14.7956 14.6839 15.5587 14.1213 16.1213C13.5587 16.6839 12.7956 17 12 17C11.2044 17 10.4413 16.6839 9.87868 16.1213C9.31607 15.5587 9 14.7956 9 14C9 13.2044 9.31607 12.4413 9.87868 11.8787C10.4413 11.3161 11.2044 11 12 11C12.7956 11 13.5587 11.3161 14.1213 11.8787C14.6839 12.4413 15 13.2044 15 14Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11V8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 17V20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 14H6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 14H18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              title: 'Email Design',
              description:
                'Emails so good, your subscribers will actually look forward to opening them. (Yes, really.)',
            },
            {
              icon: (
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15V3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              title: 'List Growth & Segmentation',
              description:
                'Grow your list with people who actually want to hear from you—and send them emails they’ll love.',
            },
            {
              icon: (
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2V6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 18V22"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.93 4.93L7.76 7.76"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.24 16.24L19.07 19.07"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12H6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 12H22"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.93 19.07L7.76 16.24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.24 7.76L19.07 4.93"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              title: 'Optimization & A/B Testing',
              description:
                'We’ll test, tweak, and optimize until your emails are performing at their absolute best.',
            },
            {
              icon: (
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 11L12 14L22 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              title: 'Email Deliverability',
              description:
                'Say goodbye to the spam folder. We’ll make sure your emails land right where they belong—in your subscribers’ inboxes.',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="fade-in-element"
              ref={addToObserver}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </section>

       {/* Metrics Section */}
<section className="section bg-gradient-to-br from-white to-accent/5">
  <div className="fade-in-element text-center mb-16" ref={addToObserver}>
    <h2 className="section-title mx-auto">Key Performance Metrics</h2>
    <p className="section-description mx-auto">
      We consistently outperform industry standard metrics.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="fade-in-element" ref={addToObserver} style={{ transitionDelay: '100ms' }}>
      <MetricsCard
        title="Open Rate"
        value="60%"
        description="Industry average: 25%"
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        }
        className="bg-gradient-to-br from-white to-purple-50"
        observerRef={addToObserver}
      />
    </div>
    
    <div className="fade-in-element" ref={addToObserver} style={{ transitionDelay: '200ms' }}>
      <MetricsCard
        title="Click Rate"
        value="4%"
        description="Industry average: 2%"
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        }
        className="bg-gradient-to-br from-white to-blue-50"
        observerRef={addToObserver}
      />
    </div>
    
    <div className="fade-in-element" ref={addToObserver} style={{ transitionDelay: '300ms' }}>
      <MetricsCard
        title="Conversion Rate"
        value="4%"
        description="Industry average: 1.5%"
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 21H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        }
        className="bg-gradient-to-br from-white to-green-50"
        observerRef={addToObserver}
      />
    </div>

    <div className="fade-in-element" ref={addToObserver} style={{ transitionDelay: '500ms' }}>
      <MetricsCard
        title="Cart Recovery Rate"
        value="22%"
        description="Industry average: 15%"
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        className="bg-gradient-to-br from-white to-orange-50"
        observerRef={addToObserver}
      />
    </div>
  </div>
</section>

      {/* Why Us Section */}
      <section id="why-us" className="section bg-gradient-to-br from-white to-purple-50">
        <div className="fade-in-element text-center mb-16" ref={addToObserver}>
          <h2 className="section-title mx-auto">Why Choose AxieMails?</h2>
          <p className="section-description mx-auto">
            Our approach is different because we focus on what truly matters -
            <span className="font-bold"> RESULTS</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className="fade-in-element space-y-8 order-2 md:order-1"
            ref={addToObserver}
          >
            {[
              {
                title: 'Email Marketing Specialists',
                description:
                  'Unlike general agencies, we focus exclusively on Email & SMS Marketing for maximum results.',
              },
              {
                title: 'Data-Driven Strategy',
                description:
                  'Every recommendation is backed by data analysis and industry benchmarks.',
              },
              {
                title: 'Conversion-Focused',
                description:
                  'Our primary goal is generating revenue, not just improving vanity metrics.',
              },
              {
                title: 'Tailored Approach',
                description:
                  'Custom strategies designed for your specific business needs and audience.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-4 item-hover"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 bg-accent/10 w-10 h-10 rounded-full flex items-center justify-center text-accent">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="fade-in-element rounded-xl overflow-hidden shadow-xl order-1 md:order-2 hover-float"
            ref={addToObserver}
            style={{ transitionDelay: '200ms' }}
          >
            <img
              src="/Why Us.png"
              alt="Email marketing results"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="section bg-white">
        <div className="fade-in-element text-center mb-16" ref={addToObserver}>
          <h2 className="section-title mx-auto">Client Results</h2>
          <p className="section-description mx-auto">
          See what we’ve done for Businesses like yours. We’ve helped our clients boost revenue by 20-30% and we’re ready to do the same for you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="fade-in-element rounded-xl overflow-hidden shadow-xl hover-float"
            ref={addToObserver}
          >
            <img
              src="/Results.png"
              alt="Client results"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="https://calendly.com/anish-axiemails/30min" className="button-primary">
            Get Same Results
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in-element mb-8" ref={addToObserver}>
            <h2 className="section-title mx-auto">Contact Us</h2>
            <p className="section-description mx-auto">
              Ready to boost your email ROI? Book a free strategy call to
              discuss how we can help you scale your business.
            </p>
          </div>

          <div
            className="fade-in-element"
            ref={addToObserver}
            style={{ transitionDelay: '100ms' }}
          >
            <a
              href="mailto:hello@axiemails.com"
              className="text-lg text-accent hover:underline mb-8 inline-block"
            >
              anish@axiemails.com
            </a>

            <div className="mt-6">
              <a
                href="https://calendly.com/anish-axiemails/30min"
                className="button-primary-small px-8 py-3 text-base"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
