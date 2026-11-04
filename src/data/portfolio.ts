import type { StaticImageData } from "next/image";
import askCover from "../../public/images/placeholders/ask-1.png";
import microservicesCover from "../../public/images/placeholders/photo-1.jpg";

export type ToolIconId =
  | "java"
  | "spring"
  | "sql"
  | "docker"
  | "git"
  | "github"
  | "junit"
  | "github-actions"
  | "aws"
  | "vercel";

export interface MainToolItem {
  id: ToolIconId;
  name: string;
  category: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  image: StaticImageData | string;
  imageAlt: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
}

export const portfolioData = {
  identity: {
    name: "Prince Kumar",
    role: "Java Backend Developer",
    location: "Delhi, India",
    phone: "+91 9289177949",
    email: "developer.prince.kumar@gmail.com",
    linkedin: "https://linkedin.com/in/nameisprince",
    github: "https://github.com/prince2404",
    resumePdfPath: "/Prince_Kumar_Resume.pdf",
    photoPath: "/images/prince.jpeg",
    photoAlt: "Photo of Prince Kumar",
    logoPath: "/images/prince-logo.svg",
    heroSummary:
      "Skilled in Java, Spring Boot, and SQL. Built a RAG chatbot prototype during an AI internship at Peepal Farm. Focused on clean architecture, secure APIs, and writing code that is easy to maintain.",
  },

  skills: {
    heading: "Main Tools",
    tools: [
      {
        id: "java",
        name: "Java",
        category: "Programming language",
      },
      {
        id: "spring",
        name: "Spring Boot",
        category: "Java framework",
      },
      {
        id: "sql",
        name: "SQL",
        category: "Database language",
      },
      {
        id: "docker",
        name: "Docker",
        category: "Container platform",
      },
      {
        id: "git",
        name: "Git",
        category: "Version control",
      },
      {
        id: "github",
        name: "GitHub",
        category: "Code hosting",
      },
      {
        id: "junit",
        name: "JUnit",
        category: "Testing framework",
      },
      {
        id: "github-actions",
        name: "GitHub Actions",
        category: "CI/CD automation",
      },
      {
        id: "aws",
        name: "AWS",
        category: "Cloud platform",
      },
      {
        id: "vercel",
        name: "Vercel",
        category: "Hosting platform",
      },
    ] as MainToolItem[],
  },

  experience: {
    heading: "Work Experience",
    entries: [
      {
        company: "Peepal Farm",
        description:
          "Built a RAG chatbot prototype with a team of 3 to answer Peepal Farm’s common queries on animal care, adoption, and veganism using the NGO’s own documents. The bot finds the most relevant information from those documents and uses it to write clear, helpful answers for people looking for guidance.",
        period: "Jan 2025 – Mar 2025",
      },
    ],
  },

  projects: {
    heading: "Recent Projects",
    items: [
      {
        id: "ask-healthcare",
        title: "Apna Swasthya Kendra (ASK)",
        image: askCover,
        imageAlt: "Apna Swasthya Kendra Healthcare Retail Platform",
        description:
          "A healthcare retail platform where admins, pharmacists, and customers each log in securely and see only what their role allows. Data is organized in a clean structure, so the app stays fast and reliable.",
        techStack: ["Spring Boot", "Java", "Spring Security", "React", "MySQL"],
        liveUrl: "https://apna-sk.vercel.app/",
        githubUrl: "https://github.com/prince2404/APNA_SK",
      },
      {
        id: "spring-microservices",
        title: "Java Spring Microservices",
        image: microservicesCover,
        imageAlt: "Java Spring Microservices Architecture",
        description:
          "A microservices project where the application is split into five independent services, each with its own job, such as login, billing, and analytics. All requests go through one gateway.",
        techStack: [
          "Java",
          "Spring Boot",
          "PostgreSQL",
          "gRPC",
          "Kafka",
          "JWT",
          "Docker",
          "AWS CDK",
        ],
        liveUrl: "https://github.com/prince2404/java-spring-microservices",
        githubUrl: "https://github.com/prince2404/java-spring-microservices",
      },
    ] as ProjectItem[],
  },

  contact: {
    heading: "Let's Connect",
  },
};
