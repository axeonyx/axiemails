import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import EmailShowcase from '@/components/EmailShowcase';
import ServiceCard from '@/components/ServiceCard';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
const Index = () => {
  const observerRefs = useRef<HTMLElement[]>([]);
  useEffect(() => {
    // Setup Intersection Observer for animations
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    // Observe all fade elements
    observerRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    // Cleanup
    return () => {
      observerRefs.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Add elements to be observed
  const addToObserver = (el: HTMLElement | null) => {
    if (el) observerRefs.current.push(el);
  };
  return <div className="relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="purple-blob w-[500px] h-[500px] top-[-100px] right-[-100px]"></div>
      <div className="purple-blob w-[600px] h-[600px] top-[30%] left-[-300px]" style={{
      animationDelay: '3s'
    }}></div>
      <div className="purple-blob w-[400px] h-[400px] bottom-[10%] right-[-200px]" style={{
      animationDelay: '6s'
    }}></div>
      
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-28 pb-20 px-6 md:px-8 lg:px-12 hero-gradient-bg">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="fade-in-element" ref={addToObserver}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 max-w-4xl purple-glow">
                TRANSFORMING SUBSCRIBERS INTO LIFELONG CUSTOMERS
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                We increase your revenue by <span className="text-green-500 font-semibold">20-30%</span> in 60 days or we work for free.
              </p>
              <a href="#contact" className="button-primary hover-float">
                Get Free Audit
              </a>
            </div>
          </div>
          
          {/* Canva embed */}
          <div className="fade-in-element rounded-xl overflow-hidden shadow-2xl mx-auto max-w-3xl perspective" ref={addToObserver} style={{
          transitionDelay: '200ms'
        }}>
            <div className="w-full h-full relative aspect-video">
              <iframe loading="lazy" style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              border: 'none',
              padding: 0,
              margin: 0
            }} src="https://www.canva.com/design/DAGf2CaurqM/IsWH6s4b9qBMX9FJuJwM8w/view?embed" allowFullScreen={true} allow="fullscreen" className="card-3d"></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* Social Proof */}
      <section className="py-12 px-6 md:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-8">
              Trusted by
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
              {/* Client logos would go here */}
              {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-8 w-32 bg-muted rounded-md hover:opacity-100 transition-opacity cursor-pointer hover:scale-105 transition-transform"></div>)}
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="section">
        <div className="fade-in-element text-center mb-16" ref={addToObserver}>
          <h2 className="section-title mx-auto">Our Services</h2>
          <p className="section-description mx-auto">
            Strategic services to help you connect with your audience and drive revenue
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
          icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H21C22.1046 19 23 18.1046 23 17V7C23 5.89543 22.1046 5 21 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M1 9H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>,
          title: "Email Strategy",
          description: "We develop comprehensive email strategies aligned with your business goals, audience needs, and market trends."
        }, {
          icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 2H9C8.44772 2 8 2.44772 8 3V21C8 21.5523 8.44772 22 9 22H15C15.5523 22 16 21.5523 16 21V3C16 2.44772 15.5523 2 15 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>,
          title: "Automation Sequences",
          description: "Our high-converting automated sequences nurture leads and turn customers into repeat buyers on autopilot."
        }, {
          icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8H19C20.1046 8 21 8.89543 21 10V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V10C3 8.89543 3.89543 8 5 8H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 14C15 14.7956 14.6839 15.5587 14.1213 16.1213C13.5587 16.6839 12.7956 17 12 17C11.2044 17 10.4413 16.6839 9.87868 16.1213C9.31607 15.5587 9 14.7956 9 14C9 13.2044 9.31607 12.4413 9.87868 11.8787C10.4413 11.3161 11.2044 11 12 11C12.7956 11 13.5587 11.3161 14.1213 11.8787C14.6839 12.4413 15 13.2044 15 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 11V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 17V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 14H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 14H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>,
          title: "Email Design",
          description: "Beautiful, responsive email designs that enhance your brand while maximizing engagement and conversions."
        }, {
          icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>,
          title: "List Growth",
          description: "Strategic lead magnets and opt-in methods to grow your email list with qualified, engaged subscribers."
        }, {
          icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4.93 4.93L7.76 7.76" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16.24 16.24L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4.93 19.07L7.76 16.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16.24 7.76L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>,
          title: "Optimization",
          description: "Continuous analysis and refinement of your email campaigns to maximize open rates, clicks, and conversions."
        }, {
          icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>,
          title: "Migration & Setup",
          description: "Seamless migration between email platforms and proper account setup for optimal deliverability."
        }].map((service, index) => <div key={index} className="fade-in-element" ref={addToObserver} style={{
          transitionDelay: `${index * 100}ms`
        }}>
              <ServiceCard icon={service.icon} title={service.title} description={service.description} />
            </div>)}
        </div>
      </section>
      
      {/* Email Showcase Section */}
      <EmailShowcase />
      
      {/* Why Us Section */}
      <section id="why-us" className="section">
        <div className="fade-in-element text-center mb-16" ref={addToObserver}>
          <h2 className="section-title mx-auto">Why Choose AXIEMAILS</h2>
          <p className="section-description mx-auto">
            Our approach is different because we focus on what truly matters - results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-element space-y-8 order-2 md:order-1" ref={addToObserver}>
            {[{
            title: "Email Marketing Specialists",
            description: "Unlike general agencies, we focus exclusively on email marketing for maximum results."
          }, {
            title: "Data-Driven Strategy",
            description: "Every recommendation is backed by data analysis and industry benchmarks."
          }, {
            title: "Conversion-Focused",
            description: "Our primary goal is generating revenue, not just improving vanity metrics."
          }, {
            title: "Tailored Approach",
            description: "Custom strategies designed for your specific business needs and audience."
          }].map((item, index) => <div key={index} className="flex gap-4 item-hover" style={{
            transitionDelay: `${index * 100}ms`
          }}>
                <div className="flex-shrink-0 bg-accent/10 w-10 h-10 rounded-full flex items-center justify-center text-accent">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>)}
          </div>
          
          <div className="fade-in-element rounded-xl overflow-hidden shadow-xl order-1 md:order-2 hover-float" ref={addToObserver} style={{
          transitionDelay: '200ms'
        }}>
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" alt="Email marketing results" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section id="results" className="section bg-secondary">
        <div className="fade-in-element text-center mb-16" ref={addToObserver}>
          <h2 className="section-title mx-auto">Client Results</h2>
          <p className="section-description mx-auto">
            Real results from businesses just like yours
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="fade-in-element rounded-xl overflow-hidden shadow-xl hover-float" ref={addToObserver}>
            <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200&auto=format&fit=crop" alt="Client results" className="w-full h-auto" />
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="button-primary pulse-animation">
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
              Ready to boost your email ROI? Book a free strategy call to discuss how we can help you grow your revenue.
            </p>
          </div>
          
          <div className="fade-in-element" ref={addToObserver} style={{
          transitionDelay: '100ms'
        }}>
            <a href="mailto:hello@axiemails.com" className="text-lg text-accent hover:underline mb-8 inline-block">
              hello@axiemails.com
            </a>
            
            <div className="mt-6">
              <a href="#" className="button-primary px-8 py-4 text-lg pulse-animation">
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
    </div>;
};
export default Index;