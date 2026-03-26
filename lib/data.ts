// ─── Types ───────────────────────────────────────────────────────────────

export interface Project {
  title: string;
  subtitle?: string;
  description: string;
  techStack: string[];
  category: string;
  github?: string;
  live?: string;
}

export interface Experience {
  role: string;
  company: string;
  description: string;
  type: "internship" | "simulation" | "job";
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ContactLink {
  label: string;
  href: string;
  icon: string;
}

// ─── Data ────────────────────────────────────────────────────────────────

export const personalInfo = {
  name: "Ankur Gupta",
  tagline: "Data Analytics & Software Development Enthusiast",
  intro:
    "I build data-driven applications and scalable web solutions. Currently pursuing B.Tech in CSE (Data Science), I combine analytical thinking with hands-on development skills to create impactful digital experiences.",
  email: "ankurgreaternoida@gmail.com",
  phone: "+91 8178312715",
};

export const education = {
  degree: "B.Tech CSE (Data Science)",
  institution: "NIET",
  cgpa: "8.73",
};

export const projects: Project[] = [
  {
    title: "Real-Time Stock Analysis Platform",
    subtitle: "Live API-powered financial data dashboard",
    description:
      "A dynamic platform that displays real-time stock data and analytics using live API integrations. Features interactive charts, market trend indicators, and comprehensive data visualization dashboards for informed decision-making.",
    techStack: ["HTML", "CSS", "JavaScript", "MySQL", "APIs"],
    category: "Web Development",
    github: "https://github.com/Ankur0307/",
  },
  {
    title: "Bookstore Management System",
    subtitle: "Full-featured inventory and sales tracking",
    description:
      "A comprehensive management system for bookstores that handles inventory tracking, billing operations, and sales analytics. Built with a focus on efficiency and ease of use for store operators.",
    techStack: ["HTML", "CSS", "MySQL"],
    category: "Database",
    github: "https://github.com/Ankur0307/",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "C++", "JavaScript"],
  },
  {
    category: "Tools & Databases",
    skills: ["SQL", "Power BI", "Excel", "MySQL"],
  },
  {
    category: "Concepts & Tech",
    skills: ["Data Visualization", "APIs", "Web Development"],
  },
];

export const experiences: Experience[] = [
  {
    role: "Python Developer Intern",
    company: "YBI Foundation",
    description:
      "Developed Python-based applications and scripts for data processing and analysis. Collaborated with a team to build automation tools and improve development workflows.",
    type: "internship",
  },
  {
    role: "Data Analytics Simulation",
    company: "Deloitte (Virtual)",
    description:
      "Completed a comprehensive data analytics simulation covering data cleaning, analysis, visualization, and deriving actionable business insights from complex datasets.",
    type: "simulation",
  },
];

export const contactLinks: ContactLink[] = [
  { label: "Email", href: "mailto:ankurgreaternoida@gmail.com", icon: "Mail" },
  { label: "Phone", href: "tel:+918178312715", icon: "Phone" },
  { label: "GitHub", href: "https://github.com/Ankur0307/", icon: "Github" },
  { label: "LeetCode", href: "https://leetcode.com/u/Ankuroo7/", icon: "Code2" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ankurgupta2882/", icon: "Linkedin" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const categories = [
  { label: "All", icon: "Layers" },
  { label: "Web Development", icon: "Globe" },
  { label: "Database", icon: "Database" },
  { label: "Data Analytics", icon: "BarChart3" },
  { label: "Python", icon: "Terminal" },
];
