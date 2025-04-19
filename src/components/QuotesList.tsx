import React, { useState, useEffect } from 'react';
import QuoteCard from './QuoteCard';
import { quotes } from '../data/quotes';

const QuotesList: React.FC = () => {
  const [selectedQuote, setSelectedQuote] = useState(quotes[0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('quotes');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="quotes" className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto">
        <div className={`mb-12 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            Personal <span className="text-cyan-400">Perspectives</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Critical observations from years of experience monitoring technology trends and cybersecurity landscapes in Indonesia.
          </p>
        </div>

        <div className={`grid grid-cols-1 gap-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {quotes.map((quote, index) => (
            <QuoteCard 
              key={index} 
              quote={quote}
              isSelected={selectedQuote.id === quote.id}
              onClick={() => setSelectedQuote(quote)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesList;