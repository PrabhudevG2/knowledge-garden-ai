import { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { sections } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useInView } from '@/utils/animations';
import { Briefcase, Code, Users, Beaker } from 'lucide-react';

const UseCasesPage = () => {
  const section = sections[3]; // Use Cases section
  const { ref, isInView } = useInView(0.1);
  
  // Page transition effect
  useEffect(() => {
    document.body.classList.add('animate-fade-in');
    
    return () => {
      document.body.classList.remove('animate-fade-in');
    };
  }, []);

  const icons = [Briefcase, Code, Users, Beaker];

  return (
    <div className="min-h-screen relative">
      <div className="scan-line" />
      <Header />
      
      <main>
        <section className="py-24 relative overflow-hidden">
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl -z-10" />
          
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
                // Ensure item.slug exists before creating the link
                if (!item.slug) return null;
                const linkTo = `/${section.id}/${item.slug}`;

                return (
                  <Link
                    key={i}
                    to={linkTo}
                    className={cn(
                      "block glass-card p-6 rounded-md cyberpunk-border transform transition-all duration-700 hover:scale-105 hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background", // Added block, hover, focus styles
                      isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}
                    style={{ transitionDelay: `${i * 0.15 + 0.5}s` }}
                  >
                    {/* Content remains the same, just wrapped by Link */}
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-muted rounded-md mr-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-mono uppercase text-primary">{item.title}</h3>
                    </div>
                    <p className="text-foreground/80">{item.description}</p>
                  </Link>
                );
              })}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 glass-card p-6 rounded-md cyberpunk-border">
                <h3 className="text-xl font-mono uppercase mb-4 text-primary">Implementation Approaches</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-bold mb-1">API Integration</h4>
                    <p className="text-sm text-foreground/80">Connect to existing AI services via APIs for rapid deployment with minimal infrastructure needs.</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-bold mb-1">Custom Development</h4>
                    <p className="text-sm text-foreground/80">Build agents from the ground up with full control over architecture and capabilities.</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-bold mb-1">Hybrid Approach</h4>
                    <p className="text-sm text-foreground/80">Combine existing services with custom components for an optimal balance of speed and customization.</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-md cyberpunk-border">
                <h3 className="text-xl font-mono uppercase mb-4 text-primary">Adoption Readiness</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Technical infrastructure</span>
                    <div className="w-24 h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-3/4"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Data availability</span>
                    <div className="w-24 h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-4/5"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Organizational culture</span>
                    <div className="w-24 h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-1/2"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Regulatory compliance</span>
                    <div className="w-24 h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-2/3"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>ROI potential</span>
                    <div className="w-24 h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-4/5"></div>
                    </div>
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

export default UseCasesPage;
