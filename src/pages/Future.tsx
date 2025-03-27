
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { sections } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useInView } from '@/utils/animations';
import { Network, Users2, Shield, TrendingUp } from 'lucide-react';

const FuturePage = () => {
  const section = sections[4]; // Future section
  const { ref, isInView } = useInView(0.1);
  
  // Page transition effect
  useEffect(() => {
    document.body.classList.add('animate-fade-in');
    
    return () => {
      document.body.classList.remove('animate-fade-in');
    };
  }, []);

  const icons = [Network, Users2, Shield, TrendingUp];

  return (
    <div className="min-h-screen relative">
      <div className="scan-line" />
      <Header />
      
      <main>
        <section className="py-24 relative overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10" />
          
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {section.items?.map((item, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <div 
                    key={i}
                    className={cn(
                      "glass-card p-6 rounded-md cyberpunk-border transform transition-all duration-700",
                      isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}
                    style={{ transitionDelay: `${i * 0.15 + 0.5}s` }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-muted rounded-md mr-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-mono uppercase text-primary">{item.title}</h3>
                    </div>
                    <p className="text-foreground/80">{item.description}</p>
                  </div>
                );
              })}
            </div>
            
            <div className="glass-card p-8 rounded-md cyberpunk-border">
              <h3 className="text-xl font-mono uppercase mb-6 text-primary">Research Frontiers</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold mb-3 text-secondary">Technical Challenges</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">&#9654;</span>
                      <span>Advanced reasoning capabilities beyond current LLM limitations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">&#9654;</span>
                      <span>Reliable long-term planning and execution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">&#9654;</span>
                      <span>Effective collaboration between multiple specialized agents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">&#9654;</span>
                      <span>Secure and private agent architectures</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-3 text-secondary">Emerging Applications</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">&#9654;</span>
                      <span>Autonomous scientific research assistants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">&#9654;</span>
                      <span>Personalized education and skill development agents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">&#9654;</span>
                      <span>Healthcare diagnostic and monitoring systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">&#9654;</span>
                      <span>Creative collaboration partners for artists and designers</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 border border-primary/30 rounded-md bg-muted/50">
                <h4 className="text-center text-lg font-bold mb-3 text-primary">Timeline Projection</h4>
                <div className="relative h-16">
                  <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                    <div className="w-full h-1 bg-muted relative">
                      <div className="absolute h-3 w-3 rounded-full bg-primary -top-1 left-1/4"></div>
                      <div className="absolute h-3 w-3 rounded-full bg-primary -top-1 left-1/2"></div>
                      <div className="absolute h-3 w-3 rounded-full bg-primary -top-1 left-3/4"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/4 -translate-x-1/2 text-xs text-primary">2025</div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs text-primary">2030</div>
                  <div className="absolute bottom-0 left-3/4 -translate-x-1/2 text-xs text-primary">2035</div>
                  <div className="absolute top-0 left-1/4 -translate-x-1/2 text-xs text-foreground/80">Specialized agents</div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 text-xs text-foreground/80">General agents</div>
                  <div className="absolute top-0 left-3/4 -translate-x-1/2 text-xs text-foreground/80">Agent networks</div>
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

export default FuturePage;
