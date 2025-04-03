export interface ContentSection {
  id: string;
  chip: string;
  title: string;
  description: string;
  content: string[];
  imageUrl?: string;
  items?: {
    title: string;
    description: string;
    icon?: string;
    slug: string;
    detailedContent?: string[];
  }[];
}

export const heroContent = {
  title: "AI Agents",
  subtitle: "Autonomous programs reshaping how we interact with technology",
  description: "Explore the cutting-edge world of AI agents - from core technologies and implementation frameworks to real-world applications and future developments.",
};

export const sections: ContentSection[] = [
  // Introduction Section
  {
    id: "introduction",
    chip: "Introduction",
    title: "Understanding AI Agents",
    description: "AI agents are autonomous or semi-autonomous software entities that perceive their environment, reason, and take actions to achieve specific goals.",
    content: [
      "AI agents represent a paradigm shift in how software interacts with the world. Unlike traditional programs that execute predefined instructions, agents observe, learn, decide, and act - resembling human cognitive processes.",
      "The concept of agency in artificial intelligence implies the ability to operate with some degree of independence, make decisions under uncertainty, and adapt strategies based on new information.",
      "Modern AI agents range from simple rule-based systems to complex architectures leveraging advanced machine learning models, particularly large language models (LLMs) which have dramatically expanded what's possible in agent design."
    ],
    imageUrl: "/placeholder.svg"
  },
  // Core Technologies Section (Corrected)
  {
    id: "core-technologies",
    chip: "Core Technologies",
    title: "The Building Blocks of AI Agents",
    description: "AI agents integrate multiple technologies across perception, reasoning, learning, and action execution.",
    content: [
      "At their foundation, today's most sophisticated AI agents often build upon large language models (LLMs) like GPT-4, Claude, or Llama. These models provide the reasoning and language understanding capabilities essential for complex tasks.",
      "The agent framework typically includes components for environment perception, memory management, planning, tool usage, and action execution - all orchestrated to work together coherently."
    ],
    items: [ // Only Foundation Models and Planning & Reasoning belong here
      {
        title: "Foundation Models",
        description: "Large language and multimodal models that provide reasoning, understanding, and generation capabilities.",
        icon: "brain",
        slug: "foundation-models",
        detailedContent: [
          "Foundation models represent a paradigm shift in AI, serving as versatile base systems that can be adapted to numerous downstream tasks through fine-tuning. These large-scale neural networks are pre-trained on massive, diverse datasets using self-supervised learning techniques.",
          "Core characteristics:",
          "- Scale: Typically billions to trillions of parameters",
          "- Architecture: Primarily transformer-based for efficient large-scale processing",
          "- Capabilities: Exhibit emergent behaviors like reasoning and few-shot learning",
          "- Examples: GPT-4 (language), DALL-E (image generation), CLIP (vision-language), Sora (video)",
          "Technical implementation involves two phases:",
          "1. Pre-training: Unsupervised learning on vast corpora to capture fundamental patterns",
          "2. Fine-tuning: Task-specific adaptation using smaller, curated datasets",
          "Key applications include:",
          "- Natural language: Translation, summarization, dialogue systems",
          "- Computer vision: Image classification, object detection, generation",
          "- Multimodal: Cross-modal understanding and generation",
          "- Specialized domains: Medical diagnosis, legal analysis, scientific discovery",
          "Critical considerations:",
          "- Computational requirements: Significant energy and hardware needs",
          "- Bias mitigation: Addressing skewed representations in training data",
          "- Environmental impact: Carbon footprint of training large models",
          "- Safety: Preventing misuse through careful deployment controls"
        ]
      },
      {
        title: "Planning & Reasoning",
        description: "Mechanisms to formulate strategies, sequence actions, and adapt to changing circumstances.",
        icon: "git-branch",
        slug: "planning-reasoning",
        detailedContent: [
          "Planning and reasoning form the cognitive core of AI agents, enabling them to solve complex problems by breaking them into actionable steps and making informed decisions.",
          "Planning approaches:",
          "- Classical: State-space search with forward/backward chaining",
          "- Probabilistic: Handling uncertain outcomes and partial observability",
          "- Hierarchical: Multi-level abstraction for complex tasks",
          "- Reactive: Real-time response to dynamic environments",
          "Reasoning methodologies:",
          "- Deductive: Logical inference from general rules",
          "- Inductive: Generalizing from specific examples",
          "- Abductive: Inferring most plausible explanations",
          "- Analogical: Solving new problems using past experiences",
          "Implementation techniques:",
          "- Symbolic methods: Rule-based systems and logic programming",
          "- Neural approaches: Learning planning policies from data",
          "- Hybrid neuro-symbolic: Combining strengths of both paradigms",
          "Critical applications:",
          "- Autonomous vehicles: Route planning and obstacle avoidance",
          "- Healthcare: Treatment planning and diagnostic reasoning",
          "- Manufacturing: Process optimization and scheduling",
          "- Business: Strategic decision support systems",
          "Key challenges:",
          "- Computational complexity in large state spaces",
          "- Handling incomplete or contradictory information",
          "- Maintaining explainability of decisions",
          "- Balancing exploration with exploitation"
        ]
      }
    ]
  },
  // Frameworks Section (Corrected - Includes Tool Use & Memory Systems)
  {
    id: "frameworks",
    chip: "Frameworks",
    title: "Agent Development Frameworks & Concepts",
    description: "Explore frameworks and core concepts simplifying the development and deployment of AI agents.",
    content: [
      "Agent frameworks provide scaffolding for building autonomous systems, handling component integration and offering solutions for common challenges like memory and tool use."
    ],
    items: [
      {
        title: "LangChain",
        description: "Popular framework for building LLM-powered applications with integrated tools and structured outputs.",
        icon: "link",
        slug: "langchain",
        detailedContent: [
          "LangChain is an open-source framework designed to simplify development of applications powered by large language models (LLMs). It provides structured approaches to building, deploying and managing LLM applications.",
          "Key components include: Chains (sequences of calls to components), Agents (LLMs that make decisions about actions), Memory (persisting state between calls), and Tools (external utilities that agents can interact with).",
          "Core architecture consists of: langchain-core (base abstractions), langchain (main chains/agents), langchain-community (third-party integrations), and langgraph (for building stateful multi-actor applications).",
          "Benefits include: Standardized interfaces for components, built-in support for common patterns like RAG, extensive integration ecosystem, and tools for observability and evaluation.",
          "Common use cases: Chatbots, question answering systems, document analysis, data extraction, and agentic workflows. The framework is particularly strong for applications requiring tool use and memory."
        ]
      },
      {
        title: "AutoGPT",
        description: "Experimental project showcasing autonomous GPT-4 instances that can tackle complex goals.",
        icon: "cpu",
        slug: "autogpt",
        detailedContent: [
          "AutoGPT is an open-source experimental project demonstrating autonomous AI agents powered by GPT-4. It enables AI agents to pursue complex, multi-step goals with minimal human intervention.",
          "Key features include: Goal-oriented task decomposition, internet access for research, long/short-term memory management, file manipulation, and integration with external tools and APIs.",
          "Architecture components: Task queue for managing objectives, memory system for context retention, command registry for executing actions, and feedback loops for self-improvement.",
          "Use cases include: Autonomous research assistants, content generation pipelines, data analysis workflows, and complex problem-solving agents that can adapt strategies dynamically.",
          "Limitations: High API costs for extended runs, potential for infinite loops without proper constraints, and challenges with very complex or ambiguous goals."
        ]
      },
      {
        title: "BabyAGI",
        description: "Task-driven autonomous agent that breaks down objectives and prioritizes subtasks.",
        icon: "baby",
        slug: "babyagi",
        detailedContent: [
          "BabyAGI is a lightweight autonomous agent framework that uses AI to create, prioritize, and execute tasks to achieve given objectives.",
          "Core components: Task creation (breaking goals into subtasks), prioritization (determining task sequence), execution (completing tasks), and learning (improving based on results).",
          "Key features: Simple architecture focused on task management, integration with vector databases for context, and the ability to recursively create new tasks based on results.",
          "Use cases: Personal productivity assistants, research automation, content generation pipelines, and any scenario requiring systematic task breakdown and execution.",
          "Limitations: Requires careful prompt engineering for complex goals, can get stuck in loops without proper constraints, and benefits from human oversight for important decisions."
        ]
      },
      {
        title: "LlamaIndex",
        description: "Data framework for connecting custom data sources to large language models.",
        icon: "database",
        slug: "llamaindex",
        detailedContent: [
          "LlamaIndex (formerly GPT Index) is a data framework designed to efficiently connect custom data sources to LLMs, enabling powerful retrieval-augmented generation (RAG) applications.",
          "Core features: Data connectors for various formats (PDFs, docs, APIs), indexing capabilities for efficient retrieval, query interfaces for LLM integration, and advanced retrieval techniques.",
          "Key components: Data loaders (ingest various formats), node parsers (chunk documents), vector stores (store embeddings), retrievers (fetch relevant data), and query engines (interface with LLMs).",
          "Use cases: Building knowledge bases, enterprise search systems, document question-answering, and any application requiring LLMs to access and reason over private or domain-specific data.",
          "Benefits: Optimized for retrieval performance, supports hybrid search (vector + keyword), handles complex document hierarchies, and provides tools for evaluation and optimization."
        ]
      },
      { // Tool Use (Correctly placed)
        title: "Tool Use",
        description: "Abilities to leverage external tools and APIs to expand capabilities beyond native functions.",
        icon: "tool",
        slug: "tool-use",
        detailedContent: [
          "Tool use represents a critical capability for AI agents, allowing them to extend their functionality beyond native capabilities by integrating with external systems and APIs.",
          "Core tool categories:",
          "- Information retrieval: Web search, database queries, knowledge graph access",
          "- Computation: Math engines, statistical packages, equation solvers",
          "- Execution: Code interpreters, robotic control APIs, IoT interfaces",
          "- Specialized: Domain-specific tools (CAD, medical imaging, financial modeling)",
          "Implementation framework:",
          "1. Tool registry: Catalog of available capabilities with metadata",
          "2. Selection mechanism: Context-aware tool matching",
          "3. Orchestration: Parallel execution and dependency management",
          "4. Learning: Automatic documentation parsing for new tools",
          "Key benefits:",
          "- Modular extensibility without model retraining",
          "- Real-time access to current information and systems",
          "- Physical world interaction through IoT and robotics",
          "- Specialized task performance via domain-specific tools",
          "Critical considerations:",
          "- Security: Sandboxing, access controls, and input validation",
          "- Reliability: Fallback mechanisms and tool health monitoring",
          "- Context maintenance: State preservation across tool boundaries",
          "- Verification: Output validation and automated error correction"
        ]
      },
      { // Memory Systems (Correctly placed)
        title: "Memory Systems",
        description: "Short and long-term memory implementations to maintain context and learn from past interactions.",
        icon: "database",
        slug: "memory-systems",
        detailedContent: [
          "Memory systems provide AI agents with the ability to retain, organize, and recall information, enabling continuity across interactions and learning from experience.",
          "Memory architecture components:",
          "- Short-term: Working memory for active context (conversation history, current task state)",
          "- Long-term: Persistent knowledge storage (learned patterns, domain knowledge)",
          "- Episodic: Recorded experiences for future reference",
          "- Semantic: Structured knowledge representation",
          "Implementation technologies:",
          "- Vector databases: For similarity-based retrieval",
          "- Knowledge graphs: For relational knowledge representation",
          "- Hybrid stores: Combining multiple approaches",
          "- Compression techniques: For efficient storage",
          "Key functions:",
          "- Context maintenance across interactions",
          "- Experience-based learning and adaptation",
          "- Knowledge retrieval and application",
          "- Performance optimization through pattern recognition",
          "Critical considerations:",
          "- Retrieval accuracy and latency tradeoffs",
          "- Catastrophic forgetting prevention",
          "- Memory consistency guarantees",
          "- Privacy and data governance",
          "- Computational efficiency optimizations"
        ]
      }
    ]
  },
  // Use Cases Section
  {
    id: "use-cases",
    chip: "Applications",
    title: "Real-World Applications",
    description: "AI agents are transforming industries through automation and augmentation of human capabilities.",
    content: [
      "The practical applications of AI agents span virtually every industry, from customer service and software development to scientific research and content creation.",
      "As agent capabilities expand, they're increasingly handling complex workflows that previously required significant human intervention."
    ],
    items: [
      {
        title: "Knowledge Workers",
        description: "Research assistants, data analysts, and content creation agents that enhance productivity.",
        icon: "briefcase",
        slug: "knowledge-workers",
        detailedContent: [
          "AI agents are revolutionizing knowledge work by automating routine tasks and augmenting human capabilities in research, analysis, and content creation.",
          "Key applications: Automated literature reviews, data synthesis from multiple sources, report generation, presentation creation, and meeting summarization.",
          "Technical implementation: Typically combines LLMs with RAG (Retrieval-Augmented Generation) to access organizational knowledge bases, plus tools for data analysis and visualization.",
          "Benefits: 24/7 availability, consistent output quality, ability to process vast amounts of information quickly, and reduction of repetitive tasks.",
          "Challenges: Requires careful validation of outputs, potential bias in training data, and need for human oversight on critical decisions."
        ]
      },
      {
        title: "Software Development",
        description: "Coding assistants that can debug, refactor, and generate entire applications from specifications.",
        icon: "code",
        slug: "software-development",
        detailedContent: [
          "AI is transforming software development through intelligent coding assistants that understand context and intent.",
          "Key capabilities: Code generation from natural language, automated debugging, test case creation, documentation generation, and architecture suggestions.",
          "Technical implementation: Combines LLMs with code understanding (AST parsing), execution environments for testing, and integration with IDEs and version control.",
          "Benefits: Faster development cycles, reduced boilerplate coding, improved code quality through automated reviews, and democratization of programming.",
          "Challenges: Hallucinations in generated code, security vulnerabilities in AI-suggested code, and the need for human validation of critical systems."
        ]
      },
      {
        title: "Customer Engagement",
        description: "Advanced conversational agents handling support, sales, and personalized interactions.",
        icon: "users",
        slug: "customer-engagement",
        detailedContent: [
          "AI agents are revolutionizing customer interactions through 24/7 intelligent support and personalized engagement.",
          "Key applications: Automated customer service, personalized product recommendations, lead qualification, appointment scheduling, and post-purchase follow-up.",
          "Technical implementation: Combines conversational AI with CRM integration, sentiment analysis, and real-time data access for context-aware responses.",
          "Benefits: Consistent service quality, multilingual support, reduced response times, and ability to handle high volumes of simultaneous interactions.",
          "Challenges: Maintaining brand voice, handling complex edge cases, and ensuring smooth handoffs to human agents when needed."
        ]
      },
      {
        title: "Scientific Research",
        description: "Lab assistants and hypothesis generators accelerating discovery across disciplines.",
        icon: "flask",
        slug: "scientific-research",
        detailedContent: [
          "AI agents are becoming invaluable partners in scientific research, augmenting human capabilities across all stages of the research process.",
          "Key applications: Literature review automation, experimental design suggestions, data analysis, hypothesis generation, and paper drafting assistance.",
          "Technical implementation: Combines domain-specific LLMs with scientific databases, data visualization tools, and statistical analysis packages.",
          "Benefits: Faster literature reviews, identification of non-obvious connections, handling large datasets, and reducing human bias in experimental design.",
          "Challenges: Requires rigorous validation of outputs, potential for hallucinated citations, and need for domain expertise in prompt engineering."
        ]
      }
    ]
  },
  // Future Section
  {
    id: "future",
    chip: "Future",
    title: "The Road Ahead",
    description: "AI agents are evolving rapidly, with emerging capabilities and ethical considerations.",
    content: [
      "The frontier of AI agent research includes improving reasoning, enabling more complex planning, enhancing multi-agent cooperation, and developing better alignment with human values.",
      "As agents become more capable, questions of autonomy, transparency, oversight, and economic impact become increasingly important to address."
    ],
    items: [
      {
        title: "Agentic Ecosystems",
        description: "Networks of specialized agents collaborating to solve complex problems beyond individual capabilities.",
        icon: "network",
        slug: "agentic-ecosystems",
        detailedContent: [
          "Agentic ecosystems represent the next evolution of AI systems, where multiple specialized agents collaborate in decentralized networks to solve complex problems.",
          "Key characteristics: Specialization (each agent has distinct capabilities), coordination mechanisms, shared knowledge bases, and emergent behaviors from interactions.",
          "Technical implementation: Combines multi-agent architectures with communication protocols (like stigmergy), decentralized decision-making, and shared memory systems.",
          "Applications: Large-scale scientific research, enterprise process automation, smart city management, and complex supply chain optimization.",
          "Challenges: Managing inter-agent communication overhead, preventing conflicts, ensuring system-wide security, and maintaining alignment with human objectives."
        ]
      },
      {
        title: "Human-Agent Teaming",
        description: "Frameworks for effective collaboration between humans and increasingly autonomous AI systems.",
        icon: "users",
        slug: "human-agent-teaming",
        detailedContent: [
          "Human-agent teaming focuses on creating seamless collaboration frameworks where humans and AI systems work as partners, each contributing their unique strengths.",
          "Key principles: Complementary capabilities (human judgment + AI speed), shared situational awareness, explainable AI decisions, and adjustable autonomy levels.",
          "Technical implementation: Combines intent recognition, mixed-initiative interaction models, explainability interfaces, and trust calibration mechanisms.",
          "Applications: Medical diagnosis support, emergency response coordination, complex manufacturing, and creative industries where human judgment is essential.",
          "Challenges: Maintaining appropriate trust levels, preventing over-reliance, handling responsibility attribution, and ensuring graceful degradation when systems fail."
        ]
      },
      {
        title: "Responsibility & Governance",
        description: "Developing oversight mechanisms and ethical frameworks for deploying autonomous systems.",
        icon: "shield",
        slug: "responsibility-governance",
        detailedContent: [
          "As AI systems become more autonomous, robust governance frameworks are essential to ensure safe and ethical deployment.",
          "Key components: Audit trails for AI decisions, accountability mechanisms, compliance monitoring, and ethical review boards for high-stakes applications.",
          "Technical approaches: Explainable AI techniques, decision logging, algorithmic impact assessments, and real-time monitoring for unintended consequences.",
          "Implementation challenges: Balancing innovation with safety, jurisdictional differences in regulations, and keeping pace with rapidly evolving capabilities.",
          "Emerging solutions: Adaptive regulatory sandboxes, third-party certification programs, and international cooperation on AI governance standards."
        ]
      },
      {
        title: "Economic Transformation",
        description: "Reshaping industries and creating new opportunities as agent capabilities expand.",
        icon: "trending-up",
        slug: "economic-transformation",
        detailedContent: [
          "AI agents are driving profound economic changes through automation, augmentation, and the creation of entirely new business models.",
          "Key impacts: Productivity gains in knowledge work, transformation of service industries, emergence of AI-as-a-service platforms, and shifts in labor market demands.",
          "Sector-specific effects: Healthcare (diagnostic support), finance (algorithmic trading), manufacturing (predictive maintenance), and education (personalized learning).",
          "Policy considerations: Workforce retraining programs, universal basic income debates, intellectual property frameworks for AI-generated content, and taxation of autonomous economic agents.",
          "Long-term outlook: Potential for both significant GDP growth and increased inequality, requiring careful policy design to ensure broad-based benefits from AI-driven productivity gains."
        ]
      }
    ]
  }
];
