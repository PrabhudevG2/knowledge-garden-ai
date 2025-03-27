
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { sections } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useInView } from '@/utils/animations';

const IntroductionPage = () => {
  const section = sections[0]; // Introduction section
  const { ref, isInView } = useInView(0.1);
  
  // Page transition effect
  useEffect(() => {
    document.body.classList.add('animate-fade-in');
    
    return () => {
      document.body.classList.remove('animate-fade-in');
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <div className="scan-line" />
      <Header />
      
      <main>
        <section className="py-24 relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10" />
          
          <div className="container px-4 sm:px-6 mx-auto max-w-7xl">
            <div className="max-w-3xl mx-auto mb-12">
              <h1 className="text-hero font-mono uppercase tracking-tight mb-6 cyberpunk-glow">
                <span className="text-primary">{section.chip}</span>
                <span className="block">{section.title}</span>
              </h1>
              
              <div className="terminal-border mb-8">
                <p className="text-xl text-foreground/80 console-text p-4">
                  {section.description}
                </p>
              </div>
            </div>
            
            <div 
              // @ts-ignore - ref typing
              ref={ref} 
              className="glass-card p-8 rounded-md cyberpunk-border mb-12"
            >
              <div className="prose prose-invert max-w-none">
                {section.content.map((paragraph, i) => (
                  <p 
                    key={i} 
                    className={cn(
                      "mb-6 text-lg transform transition-all duration-700",
                      isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}
                    style={{ transitionDelay: `${i * 0.2}s` }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-6 rounded-md cyberpunk-border">
                <h3 className="text-xl font-mono uppercase mb-4 text-primary">Key Concepts</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">&#9654;</span>
                    <span>Autonomy: The ability to operate independently with minimal human intervention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">&#9654;</span>
                    <span>Perception: Processing and understanding information from the environment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">&#9654;</span>
                    <span>Decision Making: Evaluating options and selecting appropriate actions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">&#9654;</span>
                    <span>Learning: Improving performance based on experience and feedback</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-6 rounded-md cyberpunk-border">
                <h3 className="text-xl font-mono uppercase mb-4 text-primary">Historical Timeline</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold">1950s-1960s</h4>
                    <p>Early AI research and the birth of the term "artificial intelligence"</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">1980s-1990s</h4>
                    <p>Development of expert systems and rule-based agents</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">2010s</h4>
                    <p>Deep learning revolution enables more sophisticated agent behaviors</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">2020s</h4>
                    <p>LLM-powered agents capable of complex reasoning and tool use</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default IntroductionPage;
