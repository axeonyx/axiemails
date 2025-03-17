
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ 
  question, 
  answer, 
  isOpen, 
  onClick 
}) => {
  return (
    <div className="border-b border-border last:border-0">
      <button
        className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <div
          className={cn(
            "w-6 h-6 flex items-center justify-center transition-transform duration-300",
            isOpen ? "transform rotate-180" : ""
          )}
        >
          <svg 
            width="12" 
            height="8" 
            viewBox="0 0 12 8" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M1 1.5L6 6.5L11 1.5" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-out-expo",
          isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-muted-foreground">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What makes AXIEMAILS different from other email marketing agencies?",
      answer: "Unlike general marketing agencies, We specialize exclusively in Email & SMS Marketing with a focus on conversion optimization. Our team has years of experience crafting high-performing email sequences that build relationships while driving revenue."
    },
    {
      question: "How quickly can I expect to see results?",
      answer: "While results vary based on your current email program and audience, most clients see improved engagement within the first month and significant revenue increases within 90 days of implementing our strategies."
    },
    {
      question: "Do you offer ongoing support after the initial setup?",
      answer: "Absolutely. After the initial setup, We work on a monthly retainer basis to ensure your email marketing continues to perform optimally. Our team can handle everything from campaign management to performance analysis and iterative improvements."
    },
    {
      question: "How do you measure the success of email campaigns?",
      answer: "We track comprehensive metrics beyond open rates, including click-through rates, conversion rates, revenue generated, and ROI. We provide detailed reports showing exactly how your email campaigns are performing and contributing to your bottom line."
    },
    {
      question: "Can you work with our existing email service provider?",
      answer: "We believe Klaviyo to be the best ESP for Ecommerce businesses, So we only work with Klaviyo.So if you want to migrate to Klaviyo we can also manage that process seamlessly."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-white">
      <div className="mx-auto max-w-4xl">
        <h2 className="section-title text-center">Frequently Asked Questions</h2>
        <div className="mt-10">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
