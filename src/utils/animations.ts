import { useEffect, useState, useRef } from 'react';

// Simple hook to animate elements when they enter the viewport
export const useInView = (threshold = 0.1, rootMargin = '0px') => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Once it's been seen, no need to keep observing
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold, rootMargin]);

  return { ref, isInView };
};

// Hook to create staggered animations for multiple elements
export const useStaggeredAnimation = (
  count: number,
  baseDelay: number = 0.1
) => {
  return Array.from({ length: count }, (_, i) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: baseDelay + i * 0.1,
    },
  }));
};

// Hook to track scroll position
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};
