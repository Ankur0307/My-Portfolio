// ─── Types ───────────────────────────────────────────────────────

export interface Project {
  title: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  challenges: string;
  learned: string;
  github?: string;
  live?: string;
  image?: string;
  category?: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  tags: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

// ─── Personal Info ───────────────────────────────────────────────

export const personalInfo = {
  name: "Ankur Gupta",
  headline: "I build web apps, data systems,\nand AI tools.",
  description:
    "I am a Full Stack Developer and Data Science enthusiast who enjoys building real-world projects, data-driven systems, and modern web applications.",
  email: "ankurgreaternoida@gmail.com",
  phone: "+91 8178312715",
  location: "Greater Noida, India",
};

export const aboutContent = {
  intro:
    "I'm Ankur Gupta, a B.Tech CSE (Data Science) student at NIET with a CGPA of 8.73. I'm passionate about building tools that solve real problems — from full-stack web applications to data-driven analytics systems.",
  what_i_build:
    "I build modern web applications using React, Next.js, and Tailwind CSS on the frontend, and Node.js, FastAPI, and MySQL on the backend. I enjoy working across the entire stack — from designing clean UIs to writing efficient database queries.",
  interests:
    "My interests span across AI/ML, Data Visualization, Web Development, and System Design. I'm fascinated by how data can be transformed into actionable insights, and how well-designed software can make complex information accessible.",
  goal:
    "My career goal is to work as a Software Engineer or Data Engineer at a product-driven company where I can build impactful systems at scale. I want to keep learning, contribute to open source, and eventually mentor other developers.",
};

// ─── Skills ──────────────────────────────────────────────────────

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "FastAPI"],
  },
  {
    category: "Database",
    skills: ["MySQL", "MongoDB"],
  },
  {
    category: "Data Science",
    skills: ["Python", "Pandas", "NumPy", "Machine Learning"],
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "Linux", "Vercel"],
  },
];

// ─── Projects (Case Study Style) ────────────────────────────────

export const projects: Project[] = [
  {
    title: "Real-Time Stock Analysis Platform",
    problem:
      "Stock market data is complex and difficult for individual investors to analyze manually. There was no simple tool to visualize real-time trends and make data-driven decisions quickly.",
    solution:
      "Built a real-time stock data visualization and analytics platform that pulls live data from financial APIs, displays interactive charts, and provides trend indicators to help users make informed decisions.",
    features: [
      "Real-time stock price tracking with live API integration",
      "Interactive chart visualization with multiple timeframes",
      "Market trend indicators and analytics dashboard",
      "User-friendly interface for quick data exploration",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "MySQL", "REST APIs"],
    challenges:
      "Handling real-time data updates efficiently without overwhelming the API rate limits, and ensuring the chart rendering remained smooth even with large datasets.",
    learned:
      "Learned how to work with financial APIs, handle real-time data streams, and build performant data visualization interfaces. Deepened my understanding of SQL query optimization for time-series data.",
    github: "https://github.com/Ankur0307/",
  },
  {
    title: "Bookstore Management System",
    problem:
      "Small bookstores often rely on manual record-keeping for inventory and sales, leading to errors, lost records, and inefficient billing processes.",
    solution:
      "Developed a comprehensive digital management system that automates inventory tracking, streamlines the billing process, and provides clear sales analytics for better business decisions.",
    features: [
      "Complete inventory management with CRUD operations",
      "Automated billing and invoice generation",
      "Sales tracking and reporting dashboard",
      "Search and filter functionality for quick book lookup",
    ],
    techStack: ["HTML", "CSS", "MySQL"],
    challenges:
      "Designing a relational database schema that could handle complex relationships between books, customers, sales, and inventory while maintaining data integrity.",
    learned:
      "Gained deep understanding of relational database design, SQL joins and aggregations, and how to build data-driven applications that solve real business problems.",
    github: "https://github.com/Ankur0307/",
  },
];

// ─── Blog Posts ──────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  {
    title: "How I Built My Developer Portfolio",
    excerpt:
      "A deep dive into the design decisions, technology stack, and architecture behind this portfolio website — from typography choices to animation philosophy.",
    date: "2025-03-15",
    readTime: "8 min read",
    slug: "how-i-built-my-portfolio",
    tags: ["Next.js", "Design", "Web Dev"],
  },
  {
    title: "MongoDB vs MySQL: When to Use What",
    excerpt:
      "A practical comparison of MongoDB and MySQL based on real-world projects. Learn when to choose a relational database vs a document store.",
    date: "2025-02-20",
    readTime: "6 min read",
    slug: "mongodb-vs-mysql",
    tags: ["Database", "Backend"],
  },
  {
    title: "Getting Started with Machine Learning in Python",
    excerpt:
      "A beginner-friendly guide to building your first ML model using Python, Pandas, and scikit-learn — with practical examples and common pitfalls.",
    date: "2025-01-10",
    readTime: "10 min read",
    slug: "machine-learning-basics",
    tags: ["Python", "ML", "Data Science"],
  },
];

// ─── Social Links ────────────────────────────────────────────────

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Ankur0307/", icon: "Github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ankurgupta2882/",
    icon: "Linkedin",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/Ankuroo7/",
    icon: "Code2",
  },
  {
    label: "Email",
    href: "mailto:ankurgreaternoida@gmail.com",
    icon: "Mail",
  },
];

export const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];
