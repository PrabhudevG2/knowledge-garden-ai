
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
  }[];
}

export const heroContent = {
  title: "AI Agents",
  subtitle: "Autonomous programs reshaping how we interact with technology",
  description: "Explore the cutting-edge world of AI agents - from core technologies and implementation frameworks to real-world applications and future developments.",
};

export const sections: ContentSection[] = [
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
  {
    id: "core-technologies",
    chip: "Core Technologies",
    title: "The Building Blocks of AI Agents",
    description: "AI agents integrate multiple technologies across perception, reasoning, learning, and action execution.",
    content: [
      "At their foundation, today's most sophisticated AI agents often build upon large language models (LLMs) like GPT-4, Claude, or Llama. These models provide the reasoning and language understanding capabilities essential for complex tasks.",
      "The agent framework typically includes components for environment perception, memory management, planning, tool usage, and action execution - all orchestrated to work together coherently."
    ],
    items: [
      {
        title: "Foundation Models",
        description: "Large language and multimodal models that provide reasoning, understanding, and generation capabilities.",
        icon: "brain"
      },
      {
        title: "Planning & Reasoning",
        description: "Mechanisms to formulate strategies, sequence actions, and adapt to changing circumstances.",
        icon: "git-branch"
      },
      {
        title: "Tool Use",
        description: "Abilities to leverage external tools and APIs to expand capabilities beyond native functions.",
        icon: "tool"
      },
      {
        title: "Memory Systems",
        description: "Short and long-term memory implementations to maintain context and learn from past interactions.",
        icon: "database"
      }
    ]
  },
  {
    id: "frameworks",
    chip: "Frameworks",
    title: "Agent Development Frameworks",
    description: "Several frameworks have emerged to simplify the development and deployment of AI agents.",
    content: [
      "Agent frameworks provide scaffolding for building autonomous systems, handling the complexity of component integration and offering ready-made solutions for common challenges."
    ],
    items: [
      {
        title: "LangChain",
        description: "Popular framework for building LLM-powered applications with integrated tools and structured outputs.",
        icon: "link"
      },
      {
        title: "AutoGPT",
        description: "Experimental project showcasing autonomous GPT-4 instances that can tackle complex goals.",
        icon: "cpu"
      },
      {
        title: "BabyAGI",
        description: "Task-driven autonomous agent that breaks down objectives and prioritizes subtasks.",
        icon: "baby"
      },
      {
        title: "LlamaIndex",
        description: "Data framework for connecting custom data sources to large language models.",
        icon: "database"
      }
    ]
  },
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
        icon: "briefcase"
      },
      {
        title: "Software Development",
        description: "Coding assistants that can debug, refactor, and generate entire applications from specifications.",
        icon: "code"
      },
      {
        title: "Customer Engagement",
        description: "Advanced conversational agents handling support, sales, and personalized interactions.",
        icon: "users"
      },
      {
        title: "Scientific Research",
        description: "Lab assistants and hypothesis generators accelerating discovery across disciplines.",
        icon: "flask"
      }
    ]
  },
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
        icon: "network"
      },
      {
        title: "Human-Agent Teaming",
        description: "Frameworks for effective collaboration between humans and increasingly autonomous AI systems.",
        icon: "users"
      },
      {
        title: "Responsibility & Governance",
        description: "Developing oversight mechanisms and ethical frameworks for deploying autonomous systems.",
        icon: "shield"
      },
      {
        title: "Economic Transformation",
        description: "Reshaping industries and creating new opportunities as agent capabilities expand.",
        icon: "trending-up"
      }
    ]
  }
];
