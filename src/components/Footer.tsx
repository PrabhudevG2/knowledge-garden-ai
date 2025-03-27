
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 bg-background border-t border-primary/20 relative overflow-hidden">
      {/* Cyberpunk grid overlay */}
      <div className="absolute inset-0 pointer-events-none z-[-5] opacity-10"
           style={{
             backgroundImage: `linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px), 
                             linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }} />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="container px-4 sm:px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Branding and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-mono uppercase tracking-wider">
                <span className="text-primary">&lt;AI</span> Agents<span className="text-primary">/&gt;</span>
              </span>
            </div>
            <p className="text-foreground/70 max-w-md">
              Comprehensive resource for understanding, developing, and deploying AI agents across various domains and applications.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-mono uppercase text-lg mb-4 text-primary">Sections</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/introduction" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Introduction
                </Link>
              </li>
              <li>
                <Link 
                  to="/core-technologies" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Core Technologies
                </Link>
              </li>
              <li>
                <Link 
                  to="/frameworks" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Frameworks
                </Link>
              </li>
              <li>
                <Link 
                  to="/use-cases" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Applications
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-mono uppercase text-lg mb-4 text-primary">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://arxiv.org/abs/2312.11805" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Agent Research
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/topics/ai-agents" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  GitHub Projects
                </a>
              </li>
              <li>
                <a 
                  href="https://python.langchain.com/docs/use_cases/autonomous_agents/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  LangChain Agents
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-6 border-t border-primary/20 text-center">
          <p className="text-foreground/60 text-sm">
            © {currentYear} <span className="text-primary">AI</span> Agents Guide. Created for educational purposes.
          </p>
          <div className="text-foreground/40 text-xs mt-2 font-mono">
            <span className="animate-pulse">█</span> AUTONOMOUS • INTELLIGENT • ADAPTIVE <span className="animate-pulse">█</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
