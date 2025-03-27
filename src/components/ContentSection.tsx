
import { useState, useRef, useEffect } from 'react';
import { ContentSection as SectionData } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useInView } from '@/utils/animations';
import { Link } from 'react-router-dom';

interface ContentSectionProps {
  data: SectionData;
  index: number;
  isAlternate?: boolean;
}

const ContentSection = ({ data, index, isAlternate = false }: ContentSectionProps) => {
  const { ref, isInView } = useInView(0.1);
  
  // Animation delay calculation
  const getAnimationDelay = (itemIndex: number) => {
    return ((itemIndex * 0.1) + 0.2) + 's';
  };

  // Generate path from section ID
  const generatePath = (id: string) => {
    return `/${id.charAt(0).toUpperCase() + id.slice(1)}`;
  };

  return (
    <section 
      id={data.id} 
      className={cn(
        "py-20 md:py-32 relative overflow-hidden",
        index % 2 !== 0 && "bg-muted/10"
      )}
      // @ts-ignore - ref typing
      ref={ref}
    >
      {/* Cyberpunk background elements */}
      <div className="absolute inset-0 pointer-events-none z-[-5] opacity-10"
           style={{
             backgroundImage: `linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px), 
                             linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }} />
           
      {index % 3 === 0 && (
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
      )}
      {index % 3 === 1 && (
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl -z-10" />
      )}
      {index % 3 === 2 && (
        <div className="absolute top-40 -left-40 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -z-10" />
      )}
      
      <div className="container px-4 sm:px-6 mx-auto max-w-7xl">
        <div className={cn(
          "grid grid-cols-1 gap-12 lg:gap-16",
          data.items?.length ? "lg:grid-cols-1" : "lg:grid-cols-2",
          isAlternate && !data.items?.length && "lg:grid-flow-dense"
        )}>
          {/* Text content */}
          <div className={cn(
            "flex flex-col",
            isAlternate && !data.items?.length ? "lg:col-start-2" : ""
          )}>
            {/* Section chip */}
            <div 
              className={cn(
                "inline-flex mb-6 self-start transform transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: getAnimationDelay(0) }}
            >
              <span className="px-3 py-1 rounded-none bg-muted text-primary text-xs font-mono uppercase tracking-wider border-l-2 border-r-2 border-primary">
                {data.chip}
              </span>
            </div>
            
            {/* Section title */}
            <h2 
              className={cn(
                "text-display font-mono uppercase tracking-tight mb-4 text-balance cyberpunk-glow transform transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: getAnimationDelay(1) }}
            >
              <span className="text-primary">&lt;</span>
              {data.title}
              <span className="text-primary">&gt;</span>
            </h2>
            
            {/* Section description */}
            <p 
              className={cn(
                "text-lg console-text mb-6 text-balance transform transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: getAnimationDelay(2) }}
            >
              {data.description}
            </p>
            
            {/* Section content paragraphs */}
            <div className="space-y-4">
              {data.content.map((paragraph, i) => (
                <p 
                  key={i} 
                  className={cn(
                    "text-foreground/70 transform transition-all duration-700",
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: getAnimationDelay(i + 3) }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            
            {/* Navigate to full page button */}
            <div 
              className={cn(
                "mt-6 transform transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: getAnimationDelay(data.content.length + 3) }}
            >
              <Link 
                to={generatePath(data.id)} 
                className="cyberpunk-btn inline-block"
              >
                EXPLORE FULL DATA
              </Link>
            </div>
            
            {/* Items grid if available */}
            {data.items && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {data.items.map((item, i) => (
                  <div 
                    key={i}
                    className={cn(
                      "glass-card p-6 rounded-md cyberpunk-border transition-all duration-300 hover:shadow-lg transform transition-all duration-700",
                      isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}
                    style={{ transitionDelay: getAnimationDelay(i + data.content.length + 4) }}
                  >
                    <h3 className="text-lg font-mono uppercase mb-2 text-primary">{item.title}</h3>
                    <p className="text-foreground/70 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Image if available and not using items grid */}
          {data.imageUrl && !data.items && (
            <div className={cn(
              "flex items-center justify-center",
              isAlternate ? "lg:col-start-1" : ""
            )}>
              <div 
                className={cn(
                  "relative w-full max-w-md aspect-square rounded-md overflow-hidden shadow-[0_0_30px_rgba(0,255,255,0.2)] transform transition-all duration-1000 cyberpunk-border",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                )}
                style={{ transitionDelay: '0.4s' }}
              >
                <img 
                  src={data.imageUrl} 
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
