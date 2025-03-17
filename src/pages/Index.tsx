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
      <section className="min-h-screen flex items-center pt-28 pb-20 px-6 md:px-8 lg:px-12 hero-gradient-bg">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="fade-in-element" ref={addToObserver}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 max-w-4xl">
                We help you turn subscribers into lifelong customers.
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                We increase your revenue by{' '}
                <span className="text-green-500 font-semibold">20-30%</span> in
                60 days or we work for free.
              </p>
              <a 
                href="https://calendly.com/anish-axiemails/30min" 
                className="button-primary-small hover-float mx-auto"
              >
                Get Free Audit
              </a>
            </div>
          </div>

          {/* Canva embed */}
          <div
            className="fade-in-element rounded-xl overflow-hidden shadow-2xl mx-auto max-w-3xl"
            ref={addToObserver}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-full h-full relative aspect-video">
              <iframe
                loading="lazy"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  top: 0,
                  left: 0,
                  border: 'none',
                  padding: 0,
                  margin: 0,
                }}
                src="https://www.canva.com/design/DAGf2CaurqM/IsWH6s4b9qBMX9FJuJwM8w/view?embed"
                allowFullScreen={true}
                allow="fullscreen"
                className="card-3d"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-8 px-6 md:px-8 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 space-y-4">
            <h3 className="text-2xl font-semibold tracking-wider text-primary">
              Over 8+ Brands trust AxieMails
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <img
                src="/1.png"
                alt="Client Logo"
                className="h-10 md:h-20 w-auto max-w-full object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            </div>
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
            Our Strategic Services help you connect with your customers and drive
            more revenue through email marketing.
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
                'We develop comprehensive email strategies aligned with your business goals, audience needs, and market trends.',
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
                'Our high-converting automated sequences nurture leads and turn customers into repeat buyers on autopilot.',
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
                'Beautiful, responsive email designs that enhance your brand while maximizing engagement and conversions.',
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
                'Strategic lead magnets and opt-in methods to grow your email list and Segmentation to send targeted campaigns that resonate with your audience.',
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
                'Continuous analysis and refinement of your email campaigns to maximize open rates, clicks, and conversions through A/B Testing.',
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
                'We help maximize your email reach by ensuring your campaigns land in your subscribers inboxes, not spam folders.',
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
        value="25%"
        description="Industry average: 18%"
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
        value="8%"
        description="Industry average: 5%"
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
    
    <div className="fade-in-element" ref={addToObserver} style={{ transitionDelay: '400ms' }}>
      <MetricsCard
        title="ROI"
        value="45x"
        description="45x Return on investment"
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        }
        className="bg-gradient-to-br from-white to-yellow-50"
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
      <section id="results" className="section bg-secondary">
        <div className="fade-in-element text-center mb-16" ref={addToObserver}>
          <h2 className="section-title mx-auto">Client Results</h2>
          <p className="section-description mx-auto">
            Real results from businesses just like yours. We help you achieve 20-30% increase in revenue through email marketing.
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
