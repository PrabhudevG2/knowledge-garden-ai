
import { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { sections } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useInView } from '@/utils/animations';
import { Link2, Bot, Code, Braces } from 'lucide-react';

const FrameworksPage = () => {
  const section = sections[2]; // Frameworks section
  const { ref, isInView } = useInView(0.1);
  
  // Page transition effect
  useEffect(() => {
    document.body.classList.add('animate-fade-in');
    
    return () => {
      document.body.classList.remove('animate-fade-in');
    };
  }, []);

  const icons = [Link2, Bot, Code, Braces];

  return (
    <div className="min-h-screen relative">
      <div className="scan-line" />
      <Header />
      
      <main>
        <section className="py-24 relative overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
          
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
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
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
                    {/* Removed the placeholder Documentation link */}
                  </Link>
                );
              })}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="glass-card p-6 rounded-md cyberpunk-border">
                <h3 className="text-xl font-mono uppercase mb-4 text-primary">Framework Comparison</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-primary/30">
                        <th className="text-left py-2 px-4 text-primary">Framework</th>
                        <th className="text-left py-2 px-4 text-primary">Strengths</th>
                        <th className="text-left py-2 px-4 text-primary">Use Case</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-primary/10">
                        <td className="py-2 px-4">LangChain</td>
                        <td className="py-2 px-4">Flexibility, Ecosystem</td>
                        <td className="py-2 px-4">Production apps</td>
                      </tr>
                      <tr className="border-b border-primary/10">
                        <td className="py-2 px-4">AutoGPT</td>
                        <td className="py-2 px-4">Autonomy, Goal-oriented</td>
                        <td className="py-2 px-4">Research</td>
                      </tr>
                      <tr className="border-b border-primary/10">
                        <td className="py-2 px-4">BabyAGI</td>
                        <td className="py-2 px-4">Task management</td>
                        <td className="py-2 px-4">Personal assistants</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">LlamaIndex</td>
                        <td className="py-2 px-4">Data integration</td>
                        <td className="py-2 px-4">Knowledge retrieval</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-md cyberpunk-border">
                <h3 className="text-xl font-mono uppercase mb-4 text-primary">Getting Started</h3>
                <div className="bg-muted p-4 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                  <pre className="whitespace-pre text-foreground/80">
{`# Install LangChain
pip install langchain

# Simple agent example
from langchain.agents import load_tools
from langchain.agents import initialize_agent
from langchain.llms import OpenAI

llm = OpenAI(temperature=0)
tools = load_tools(["serpapi", "llm-math"], llm=llm)
agent = initialize_agent(
    tools, llm, agent="zero-shot-react-description"
)

agent.run("What was the high temperature in SF yesterday?")
`}
                  </pre>
                </div>
                <a href="#" className="cyberpunk-btn inline-block w-full text-center">Start Tutorial</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FrameworksPage;
