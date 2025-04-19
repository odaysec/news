import React from 'react';
import Hero from '../components/Hero';
import QuotesList from '../components/QuotesList';
import About from '../components/About';
import ContactSection from '../components/ContactSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <QuotesList />
      <About />
      <ContactSection />
    </div>
  );
};

export default Home;