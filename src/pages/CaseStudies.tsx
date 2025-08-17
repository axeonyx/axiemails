import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-6 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we've helped brands transform their email marketing and drive exceptional results
            </p>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-16 px-6 md:px-8 lg:px-12 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Detailed Case Studies Coming Soon
            </h2>
            <p className="text-muted-foreground mb-8">
              We're currently preparing comprehensive case studies showcasing our client successes. 
              Check back soon to see how we've helped businesses like yours achieve remarkable growth.
            </p>
            <div className="bg-white/50 backdrop-blur-sm border border-border/50 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">What You'll Find Here Soon:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Detailed performance metrics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Before & after comparisons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Strategy breakdowns</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>ROI achievements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Client testimonials</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Implementation timelines</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <a 
              href="https://calendly.com/anish-axiemails/30min" 
              className="button-primary inline-block"
            >
              Schedule Your Free Audit
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;