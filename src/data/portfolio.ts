import type { StaticImageData } from "next/image";
import askCover from "../../public/images/placeholders/ask-1.png";
import microservicesCover from "../../public/images/placeholders/photo-1.jpg";

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
    heading: "Technical Skills",
    groups: [
      {
        category: "Java & Core Programming",
        items: [
          "Java 17+",
          "Core Java",
          "OOPs",
          "Collections",
          "Multithreading",
          "Streams API",
          "Data Structures & Algorithms",
        ],
      },
      {
        category: "Spring & Backend Development",
        items: [
          "Spring Boot",
          "Spring Security",
          "Spring Data JPA",
          "Hibernate",
          "REST APIs",
          "Microservices",
          "System Design",
          "Design Patterns",
        ],
      },
      {
        category: "Databases, Cloud & DevOps",
        items: [
          "SQL",
          "Git",
          "Maven",
          "Docker",
          "CI/CD",
          "Github Actions",
          "AWS",
        ],
      },
      {
        category: "Testing & Code Quality",
        items: ["Junit", "AI-Assisted Coding", "Debugging"],
      },
    ],
  },

  experience: {
    heading: "Work Experience",
    role: "AI Intern",
    company: "Peepal Farm",
    period: "Jan 2025 – Mar 2025",
    location: "Himachal Pradesh, India",
    teamSummary: "Team of 3",
    bullets: [
      "Built a RAG chatbot prototype with a team of 3 to answer Peepal Farm's common queries on animal care, adoption, and veganism using the NGO's own documents.",
      "Learned the RAG flow independently: embeddings, a vector database (ChromaDB), and LangChain with an LLM, all in Python.",
      "Identified hallucination issues during testing and learned why better retrieval and fine-tuning are needed for accurate answers.",
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
          "Built a multi-role healthcare retail platform using Spring Boot, Spring Security, and JPA/Hibernate with Role-Based Access Control (RBAC) and Two-Factor Authentication (2FA) for Admin, Pharmacist, and Customer roles, backed by a normalized relational schema that eliminates N+1 query issues.",
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
          "Built a containerized microservices system with five Spring Boot services (API Gateway, Auth, Patient, Billing, Analytics) using Docker Compose, central JWT authentication, gRPC and Kafka communication, JUnit and REST Assured tests, and AWS CDK cloud infrastructure.",
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
