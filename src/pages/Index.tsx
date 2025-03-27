
import { Suspense, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ContentSection from '@/components/ContentSection';
import Footer from '@/components/Footer';
import { sections } from '@/lib/data';

const Index = () => {
  // Page transition effect
  useEffect(() => {
    document.body.classList.add('animate-fade-in');
    
    return () => {
      document.body.classList.remove('animate-fade-in');
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          {sections.map((section, index) => (
            <ContentSection 
              key={section.id} 
              data={section} 
              index={index} 
              isAlternate={index % 2 === 1} 
            />
          ))}
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
