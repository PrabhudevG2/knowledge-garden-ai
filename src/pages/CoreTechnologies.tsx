
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { sections } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useInView } from '@/utils/animations';
import { Cpu, Sparkles, Zap, Database } from 'lucide-react';

const CoreTechnologiesPage = () => {
  const section = sections[1]; // Core Technologies section
  const { ref, isInView } = useInView(0.1);
  
  // Page transition effect
  useEffect(() => {
    document.body.classList.add('animate-fade-in');
    
    return () => {
      document.body.classList.remove('animate-fade-in');
    };
  }, []);

  const icons = [Cpu, Sparkles, Zap, Database];

  return (
    <div className="min-h-screen relative">
      <div className="scan-line" />
      <Header />
      
      <main>
        <section className="py-24 relative overflow-hidden">
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl -z-10" />
          
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
              <h3 className="text-xl font-mono uppercase mb-6 text-primary">Technical Architecture</h3>
              <div className="bg-muted p-4 rounded-md font-mono text-sm mb-6 overflow-x-auto">
                <pre className="whitespace-pre text-foreground/80">
{`// Sample Agent Architecture
class AIAgent {
  constructor(options = {}) {
    this.llm = options.llm || new LargeLanguageModel();
    this.memory = options.memory || new Memory();
    this.planner = options.planner || new Planner();
    this.tools = options.tools || [];
    this.executor = new Executor(this.tools);
  }

  async process(input) {
    const context = this.memory.retrieveRelevant(input);
    const plan = await this.planner.createPlan(input, context);
    const result = await this.executor.execute(plan);
    this.memory.store(input, plan, result);
    return result;
  }
}`}
                </pre>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-muted/50 p-4 rounded-md border border-primary/20">
                  <h4 className="font-mono text-primary mb-2">Input Processing</h4>
                  <p className="text-sm">Converting natural language or structured inputs into agent-readable formats</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-md border border-primary/20">
                  <h4 className="font-mono text-primary mb-2">Reasoning Engine</h4>
                  <p className="text-sm">Core decision-making component utilizing LLMs or other AI models</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-md border border-primary/20">
                  <h4 className="font-mono text-primary mb-2">Output Generation</h4>
                  <p className="text-sm">Transforming agent decisions into appropriate actions or responses</p>
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

export default CoreTechnologiesPage;
