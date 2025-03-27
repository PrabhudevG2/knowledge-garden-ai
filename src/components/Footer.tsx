
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 bg-gray-50 dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
      <div className="container px-4 sm:px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Branding and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-display font-medium">
                <span className="text-primary">AI</span> Agents
              </span>
            </div>
            <p className="text-foreground/70 max-w-md">
              Comprehensive resource for understanding, developing, and deploying AI agents across various domains and applications.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-lg mb-4">Sections</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#introduction" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#introduction')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                >
                  Introduction
                </a>
              </li>
              <li>
                <a 
                  href="#core-technologies" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#core-technologies')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                >
                  Core Technologies
                </a>
              </li>
              <li>
                <a 
                  href="#frameworks" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#frameworks')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                >
                  Frameworks
                </a>
              </li>
              <li>
                <a 
                  href="#use-cases" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#use-cases')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                >
                  Applications
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-medium text-lg mb-4">Resources</h3>
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
        
        <div className="mt-16 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-foreground/60 text-sm">
            © {currentYear} AI Agents Guide. Created for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
