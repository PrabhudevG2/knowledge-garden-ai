
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
    <div className="min-h-screen relative">
      {/* Scan line effect */}
      <div className="scan-line"></div>
      
      <Header />
      
      <main>
        <Hero />
        
        <Suspense fallback={
          <div className="h-screen flex flex-col items-center justify-center">
            <div className="font-mono text-primary animate-pulse mb-4">LOADING DATA...</div>
            <div className="w-24 h-1 bg-muted overflow-hidden rounded-full">
              <div className="h-full bg-primary animate-[scan_1.5s_linear_infinite]"></div>
            </div>
          </div>
        }>
          {sections.map((section, index) => (
            <ContentSection 
              key={section.id} 
              data={section} 
              index={index} 
              isAlternate={index % 2 === 1} 
            />
          ))}
        </Suspense>
        
        {/* CTA for Case Studies */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-[-5] opacity-10"
               style={{
                 backgroundImage: `linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px), 
                                 linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
                 backgroundSize: '40px 40px'
               }} />
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10" />
          
          <div className="container px-4 sm:px-6 mx-auto max-w-7xl">
            <div className="glass-card p-12 rounded-md cyberpunk-border max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-mono uppercase tracking-tight mb-4 cyberpunk-glow">
                <span className="text-primary">&lt;</span>
                Real World Applications
                <span className="text-primary">&gt;</span>
              </h2>
              <p className="mb-8 text-foreground/80">
                Discover how organizations are deploying AI agents to transform their operations, 
                improve efficiency, and create new opportunities.
              </p>
              <a href="/case-studies" className="cyberpunk-btn inline-block">ACCESS CASE STUDIES</a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
