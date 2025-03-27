
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import { useInView } from '@/utils/animations';

const caseStudies = [
  {
    id: 1,
    title: "Customer Support Transformation at TechCorp",
    company: "TechCorp",
    industry: "Software Technology",
    challenge: "TechCorp was struggling with scaling their customer support operations. The average ticket resolution time was 48 hours, with a customer satisfaction score of 72%. The company was losing customers due to slow response times and inconsistent support quality.",
    solution: "Implemented an AI agent system built on GPT-4 with specialized knowledge of product documentation and common support queries. The agent system was integrated with the customer ticketing system and had the ability to access customer data, product information, and support history.",
    implementation: [
      "Created a knowledge base from support documentation, FAQs, and past resolved tickets",
      "Developed categorization and prioritization algorithms for incoming tickets",
      "Built conversation flows for common support scenarios",
      "Implemented human handoff protocols for complex issues",
      "Designed a feedback loop for continuous improvement"
    ],
    results: [
      "Reduced average ticket resolution time from 48 hours to 4 hours",
      "Increased customer satisfaction score from 72% to 93%",
      "Automated resolution of 78% of tier-1 support queries",
      "Reduced support team workload by 65%, allowing them to focus on complex issues",
      "Decreased customer churn by 24% within six months"
    ],
    quote: "The AI agent system fundamentally transformed how we approach customer support. Our team now provides higher quality service while handling more requests than ever before.",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Inventory Optimization at Global Retail Chain",
    company: "MegaMart",
    industry: "Retail",
    challenge: "MegaMart was experiencing significant inventory management issues across their 500+ stores. Overstocking and understocking were causing approximately $15M in annual losses, and the manual forecasting process was time-consuming and error-prone.",
    solution: "Developed an agent-based inventory management system that combined ML forecasting with autonomous decision-making capabilities. The system could analyze sales data, seasonal trends, supply chain constraints, and external factors to optimize inventory levels.",
    implementation: [
      "Integrated with existing POS and ERP systems",
      "Created a multi-agent architecture with specialized forecasting, ordering, and allocation agents",
      "Implemented real-time monitoring and adaptation capabilities",
      "Designed an explainable AI interface for inventory managers to understand agent decisions",
      "Developed a phased rollout plan starting with 50 pilot stores"
    ],
    results: [
      "Reduced inventory costs by $22M annually (47% improvement)",
      "Decreased out-of-stock incidents by 64%",
      "Improved forecast accuracy from 74% to 91%",
      "Reduced inventory manager workload by 35%",
      "Increased inventory turnover rate by 27%"
    ],
    quote: "The agent system sees patterns across our vast data that humans simply can't identify. It's like having hundreds of inventory experts working 24/7 across all our stores.",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Clinical Trial Optimization at BioPharma Inc.",
    company: "BioPharma Inc.",
    industry: "Pharmaceutical",
    challenge: "BioPharma was experiencing challenges with their clinical trial processes. Patient recruitment was slow, data collection was error-prone, and analysis was time-consuming. The average time from trial initiation to completion was 3.5 years.",
    solution: "Implemented an agent-based clinical trial management system that handled recruitment optimization, data validation, compliance monitoring, and preliminary analysis. Multiple specialized agents worked together to streamline the entire process.",
    implementation: [
      "Created a secure, HIPAA-compliant architecture",
      "Developed patient matching algorithms to improve recruitment",
      "Built real-time data validation and anomaly detection",
      "Implemented automated regulatory compliance checking",
      "Designed natural language interfaces for researchers and participants"
    ],
    results: [
      "Reduced trial duration by 35% (from 3.5 years to 2.3 years)",
      "Improved patient recruitment rate by 87%",
      "Decreased data collection errors by 93%",
      "Reduced compliance issues by 76%",
      "Cut analysis time from weeks to hours"
    ],
    quote: "Our AI agent system has revolutionized how we conduct clinical trials. We're now able to bring life-saving drugs to market faster while maintaining the highest standards of safety and efficacy.",
    image: "/placeholder.svg"
  }
];

const CaseStudiesPage = () => {
  const { ref, isInView } = useInView(0.1);
  
  // Page transition effect
  useEffect(() => {
    document.body.classList.add('animate-fade-in');
    
    return () => {
      document.body.classList.remove('animate-fade-in');
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <div className="scan-line" />
      <Header />
      
      <main>
        <section className="py-24 relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl -z-10" />
          
          <div className="container px-4 sm:px-6 mx-auto max-w-7xl">
            <div className="max-w-3xl mx-auto mb-12">
              <h1 className="text-hero font-mono uppercase tracking-tight mb-6 cyberpunk-glow">
                <span className="text-primary">Real World</span>
                <span className="block">Case Studies</span>
              </h1>
              
              <div className="terminal-border mb-8">
                <p className="text-xl text-foreground/80 console-text p-4">
                  Explore how organizations across different industries have successfully implemented AI agents to solve complex business challenges and achieve significant results.
                </p>
              </div>
            </div>
            
            <div 
              // @ts-ignore - ref typing
              ref={ref} 
              className="space-y-16"
            >
              {caseStudies.map((study, index) => (
                <div 
                  key={study.id}
                  className={cn(
                    "glass-card p-8 rounded-md cyberpunk-border transform transition-all duration-700",
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center mb-6">
                        <div className="mr-4 font-mono text-2xl text-primary">[{study.id.toString().padStart(2, '0')}]</div>
                        <h2 className="text-2xl font-mono uppercase text-primary">{study.title}</h2>
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex items-center mb-2">
                          <span className="text-primary mr-2">Company:</span>
                          <span>{study.company}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-primary mr-2">Industry:</span>
                          <span>{study.industry}</span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-xl font-mono uppercase mb-2 text-secondary">Challenge</h3>
                        <p className="text-foreground/80">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-xl font-mono uppercase mb-2 text-secondary">Solution</h3>
                        <p className="text-foreground/80">{study.solution}</p>
                      </div>
                    </div>
                    
                    <div className="lg:w-1/3">
                      <div className="terminal-border h-full">
                        <div className="bg-muted/50 p-1">
                          <div className="font-mono text-xs text-primary p-1">// Implementation Details</div>
                        </div>
                        <div className="p-4">
                          <ul className="space-y-2 mb-4">
                            {study.implementation.map((step, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1 block">&#9654;</span>
                                <span className="text-sm">{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-mono uppercase mb-4 text-secondary">Results</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                      {study.results.map((result, i) => (
                        <div key={i} className="bg-muted/50 p-4 rounded-md border border-primary/20">
                          <p className="text-sm">{result}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4 py-2 italic bg-muted/30 rounded-r-md">
                      <p className="text-foreground/90">"{study.quote}"</p>
                      <p className="text-right text-sm text-primary mt-2">— {study.company} CTO</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 glass-card p-8 rounded-md cyberpunk-border">
              <h3 className="text-xl font-mono uppercase mb-6 text-primary text-center">Implementation Success Factors</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-muted/50 p-6 rounded-md border border-primary/20">
                  <h4 className="font-mono text-primary mb-3 text-lg">Strategic Approach</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">&#9654;</span>
                      <span className="text-sm">Clear problem definition and success metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">&#9654;</span>
                      <span className="text-sm">Executive sponsorship and cross-functional alignment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">&#9654;</span>
                      <span className="text-sm">Phased deployment approach</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-muted/50 p-6 rounded-md border border-primary/20">
                  <h4 className="font-mono text-primary mb-3 text-lg">Technical Foundation</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">&#9654;</span>
                      <span className="text-sm">High-quality data preparation and integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">&#9654;</span>
                      <span className="text-sm">Robust security and compliance architecture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">&#9654;</span>
                      <span className="text-sm">Scalable and maintainable infrastructure</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-muted/50 p-6 rounded-md border border-primary/20">
                  <h4 className="font-mono text-primary mb-3 text-lg">Human Factors</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">&#9654;</span>
                      <span className="text-sm">Organizational change management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">&#9654;</span>
                      <span className="text-sm">Explainable AI to build trust</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">&#9654;</span>
                      <span className="text-sm">Continuous education and training</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <a href="#" className="cyberpunk-btn inline-block">Start Your Implementation</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
