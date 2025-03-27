
import { useState, useRef, useEffect } from 'react';
import { ContentSection as SectionData } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useInView } from '@/utils/animations';

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

  return (
    <section 
      id={data.id} 
      className={cn(
        "py-20 md:py-32 relative overflow-hidden",
        index % 2 !== 0 && "bg-gray-50/50 dark:bg-gray-950/50"
      )}
      // @ts-ignore - ref typing
      ref={ref}
    >
      {/* Background elements */}
      {index % 3 === 0 && (
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl -z-10" />
      )}
      {index % 3 === 1 && (
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-purple-100/20 dark:bg-purple-900/10 rounded-full blur-3xl -z-10" />
      )}
      {index % 3 === 2 && (
        <div className="absolute top-40 -left-40 w-[500px] h-[500px] bg-green-100/20 dark:bg-green-900/10 rounded-full blur-3xl -z-10" />
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
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wide">
                {data.chip}
              </span>
            </div>
            
            {/* Section title */}
            <h2 
              className={cn(
                "text-display font-display font-medium tracking-tight mb-4 text-balance transform transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: getAnimationDelay(1) }}
            >
              {data.title}
            </h2>
            
            {/* Section description */}
            <p 
              className={cn(
                "text-lg text-foreground/80 mb-6 text-balance transform transition-all duration-700",
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
            
            {/* Items grid if available */}
            {data.items && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {data.items.map((item, i) => (
                  <div 
                    key={i}
                    className={cn(
                      "glass-card p-6 rounded-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-lg transform transition-all duration-700",
                      isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}
                    style={{ transitionDelay: getAnimationDelay(i + data.content.length + 3) }}
                  >
                    <h3 className="text-lg font-medium mb-2">{item.title}</h3>
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
                  "relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-1000",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                )}
                style={{ transitionDelay: '0.4s' }}
              >
                <img 
                  src={data.imageUrl} 
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
