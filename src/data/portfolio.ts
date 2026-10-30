import type { GalleryKey } from "./gallery";

export interface ProjectItem {
  id: string;
  galleryKey: GalleryKey;
  title: string;
  subtitle: string;
  descriptionLines: string[];
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
    heading: "Skills",
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
    heading: "Experience",
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
    heading: "Projects",
    items: [
      {
        id: "ask-healthcare",
        galleryKey: "project-ask",
        title: "Apna Swasthya Kendra (ASK)",
        subtitle: "Healthcare Retail Platform",
        descriptionLines: [
          "Built a multi-role platform using Spring Boot, Spring Security, and JPA/Hibernate, with Role-Based Access Control (RBAC) and Two-Factor Authentication (2FA) for Admin, Pharmacist, and Customer roles.",
          "Designed a normalized relational schema and removed N+1 query problems in JPA/Hibernate.",
        ],
        techStack: ["Spring Boot", "Java", "Spring Security", "React", "MySQL"],
        liveUrl: "https://apna-sk.vercel.app/",
        githubUrl: "https://github.com/prince2404/APNA_SK",
      },
      {
        id: "spring-microservices",
        galleryKey: "project-microservices",
        title: "Java Spring Microservices",
        subtitle: "Distributed Microservices Ecosystem",
        descriptionLines: [
  "Built a microservices system with five Spring Boot services (API Gateway, Auth, Patient, Billing, Analytics), each in its own Docker container, run together with Docker Compose.",
  "Implemented JWT authentication through a central API Gateway, and connected services using gRPC for synchronous calls and Kafka for asynchronous, event-driven communication.",
  "Wrote unit tests with JUnit and integration tests with REST Assured, and wrote AWS infrastructure as Java CDK code (VPC, RDS, ECS Fargate, ALB) for cloud deployment.",
],
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
    heading: "Contact",
    summary:
      "Available for entry-level Java Backend Developer roles and software engineering opportunities. Send a direct message using the form or connect on social platforms.",
  },
};
