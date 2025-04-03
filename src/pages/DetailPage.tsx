import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { sections } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';

// Helper function to generate basic content
const generateContent = (title: string, description: string): string[] => {
  return [
    `Delving deeper into **${title}**: ${description}. This concept/technology plays a crucial role within the broader landscape of AI agents, enabling specific capabilities or addressing key challenges.`,
    `Further exploration of **${title}** reveals its significance. Understanding its mechanisms and applications is essential for anyone looking to build or comprehend advanced agentic systems. ${description}`,
    `The implementation of **${title}** often involves complex algorithms and data structures. ${description} Its integration into agent frameworks allows for more sophisticated behaviors and interactions.`,
    `As the field evolves, **${title}** continues to be an area of active research and development. Future iterations may unlock even greater potential for AI agents. ${description}`
  ];
};

const DetailPage = () => {
  const { sectionId, itemSlug } = useParams<{ sectionId: string; itemSlug: string }>();

  // Find the section
  const section = sections.find(sec => sec.id === sectionId);
  // Find the item within the section
  const item = section?.items?.find(itm => itm.slug === itemSlug);

  // Page transition effect
  useEffect(() => {
    document.body.classList.add('animate-fade-in');
    window.scrollTo(0, 0); // Scroll to top on page load
    return () => {
      document.body.classList.remove('animate-fade-in');
    };
  }, [sectionId, itemSlug]); // Re-run effect if params change

  // Handle not found cases
  if (!section || !item) {
    // Option 1: Redirect to NotFound page
    // return <Navigate to="/not-found" replace />;

    // Option 2: Display a simple message (using this for now)
    return (
      <div className="min-h-screen relative flex flex-col">
        <div className="scan-line" />
        <Header />
        <main className="flex-grow container px-4 sm:px-6 mx-auto max-w-4xl py-16 text-center">
          <h1 className="text-4xl font-bold mb-4 text-destructive">Content Not Found</h1>
          <p className="text-xl text-foreground/80 mb-8">
            The requested detail page could not be found.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-background bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <ArrowLeft className="mr-2 -ml-1 h-5 w-5" />
            Go Back Home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Use detailedContent if available and not empty, otherwise generate placeholder
  const contentToDisplay =
    item.detailedContent && item.detailedContent.length > 0
      ? item.detailedContent
      : generateContent(item.title, item.description);

  return (
    <div className="min-h-screen relative flex flex-col">
      <div className="scan-line" />
      <Header />

      <main className="flex-grow">
        <section className="py-24 relative overflow-hidden">
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

          <div className="container px-4 sm:px-6 mx-auto max-w-4xl">
            {/* Back link */}
            <Link
              to={`/${section.id}`}
              className="inline-flex items-center text-primary hover:text-primary/80 mb-8 group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to {section.chip}
            </Link>

            {/* Item Title */}
            <h1 className="text-4xl md:text-5xl font-mono uppercase tracking-tight mb-6 cyberpunk-glow text-primary">
              {item.title}
            </h1>

            {/* Item Description */}
            <div className="terminal-border mb-12">
              <p className="text-xl text-foreground/80 console-text p-4">
                {item.description}
              </p>
            </div>

            {/* Generated Detailed Content */}
            {/* Adjusted styling for detailed content */}
            <div className="glass-card p-8 rounded-md cyberpunk-border max-w-none">
              <h2 className="text-2xl font-mono uppercase text-primary mb-6 border-b border-primary/20 pb-2">Detailed Overview</h2>
              {/* Apply enhanced prose styling */}
              <div className="prose prose-lg prose-invert max-w-none prose-p:text-foreground/80 prose-p:leading-relaxed prose-p:mb-4 prose-ul:list-disc prose-ul:ml-6 prose-li:my-1 space-y-4">
                {contentToDisplay.map((paragraph, i) => (
                  <p key={i}>
                    {/* Basic rendering, assuming plain text paragraphs */}
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DetailPage;