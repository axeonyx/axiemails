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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent truncate">
              How Oceanus Generated Over <span className="text-green-500">$150,000</span> from Emails Using Retention-First Strategy
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we helped Oceanus turn their email marketing into a major revenue driver, generating over $150,000 in revenue.
            </p>
          </div>
        </section>

        {/* Case Study Content */}
        <section className="py-16 px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Introduction
            </h2>
            <p className="text-lg mb-6">
              Oceanus The Label is a luxury swimwear and resort-wear brand that turned its email program around to drive significant revenue growth. Here's how they did it:
            </p>
            
            <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
            <p className="mb-6">
              Despite having flows and campaigns in place, the results were not in line with Oceanus's potential. Their email program had low engagement and was contributing less than 10% of their total revenue.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">The Strategy</h3>
            <p className="mb-6">
              We didn't start from scratch but audited and rebuilt the existing email setup focusing on three main pillars:
              <ul className="list-disc ml-6 mb-6">
                <li><strong>Smart Segmentation</strong>: Rebuilt the list into live segments based on real behavior.</li>
                <li><strong>Flow Infrastructure That Actually Converts</strong>: Mapped out the entire customer journey with a focus on personalized branching.</li>
                <li><strong>Campaign Rhythm + Retention Intent</strong>: Transitioned from generic email drops to a retention-first campaign calendar.</li>
              </ul>
            </p>

            <h3 className="text-xl font-semibold mb-4">The Results</h3>
            <p className="mb-6">
              After 45 days of executing the new strategy, Oceanus saw a significant improvement:
              <ul className="list-disc ml-6">
                <li>Email revenue contribution increased to <span className="font-bold">$150,000+</span>.</li>
                <li>Return customer rate increased by <span className="font-bold text-green-500">111%</span>, from <span className="font-bold">9%</span>, to <span className="font-bold">19.72%</span>.</li>
                <li>AOV (Average Order Value) increased by <span className="font-bold">19%</span> to <span className="font-bold">€352.</span></li>
              </ul>
            </p>

            {/* Image showcasing results */}
            <div className="mb-8">
              <img 
                src="/casestudyresults1.png" 
                alt="Results chart showing revenue growth from emails"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Explanation about the 150k revenue */}
            <h3 className="text-xl font-semibold mb-4">How We Helped Generate Over <span className="text-green-500">$150,000</span> from Emails</h3>
            <p className="mb-6">
              By implementing a retention-first email strategy, we helped Oceanus drive more than <span className="font-bold">$150,000</span> in revenue from emails alone. Through precise segmentation, highly targeted flows, and strategic campaign scheduling, we maximized customer lifetime value (LTV) and encouraged repeat purchases turning email marketing into a powerful revenue driver. Fast forward to today, We consistently generate over 30% of monthly revenue from emails.
            </p>

            {/* Image showcasing email campaigns */}
            <div className="mb-8">
              <img 
                src="/casestudyresults2.png" 
                alt="Screenshot of email campaign"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <h3 className="text-xl font-semibold mb-4">Why This Worked</h3>
            <p>
              The success wasn't due to more emails or new technology. It was due to a retention system built on customer behavior, focused on repeat purchases and maximizing customer lifetime value (LTV).
            </p>
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
