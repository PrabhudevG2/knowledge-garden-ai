
import { heroContent } from '@/lib/data';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white dark:from-blue-950/20 dark:to-background -z-10" />
      
      {/* Abstract shapes */}
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl -z-10" />
      
      <div className="container px-4 sm:px-6 mx-auto max-w-7xl">
        <div className="flex flex-col max-w-4xl mx-auto text-center">
          {/* Overline */}
          <div 
            className="mb-6 inline-flex mx-auto"
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wide animate-fade-in">
              Explore the Future of Autonomous AI
            </span>
          </div>
          
          {/* Main title with slight character spacing */}
          <h1 
            className="text-hero font-display font-medium tracking-tight mb-4 leading-[1.1] text-balance animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            {heroContent.title}
            <span className="block text-primary">{heroContent.subtitle}</span>
          </h1>
          
          {/* Description */}
          <p 
            className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-8 text-balance animate-fade-in-up"
            style={{ animationDelay: '400ms' }}
          >
            {heroContent.description}
          </p>
          
          {/* CTA button */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mx-auto animate-fade-in-up"
            style={{ animationDelay: '600ms' }}
          >
            <a 
              href="#introduction" 
              className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#introduction')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              Start Learning
            </a>
            
            <a 
              href="#use-cases" 
              className="px-8 py-3 border border-gray-200 dark:border-gray-800 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-all"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#use-cases')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              View Applications
            </a>
          </div>
        </div>
        
        {/* Abstract floating elements */}
        <div className="relative h-[200px] mt-16 md:mt-24">
          <div className="absolute left-1/4 top-1/2 w-20 h-20 rounded-2xl bg-white dark:bg-gray-900 shadow-xl border border-gray-100 dark:border-gray-800 animate-float" 
              style={{ animationDelay: '0s' }}
          />
          <div className="absolute left-1/2 top-1/4 w-24 h-24 rounded-full bg-white dark:bg-gray-900 shadow-xl border border-gray-100 dark:border-gray-800 animate-float"
              style={{ animationDelay: '1.5s' }}
          />
          <div className="absolute right-1/4 top-3/4 w-16 h-16 rounded-md bg-white dark:bg-gray-900 shadow-xl border border-gray-100 dark:border-gray-800 animate-float"
              style={{ animationDelay: '0.8s' }}
          />
        </div>
      </div>
      
      {/* Down arrow indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg 
          width="20" 
          height="12" 
          viewBox="0 0 20 12" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-foreground/60"
        >
          <path 
            d="M1 1L10 10L19 1" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
