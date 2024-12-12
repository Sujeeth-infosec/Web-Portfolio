import { Code, Cloud, Shield, Database, Terminal, Globe } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface SkillCategory {
  icon: LucideIcon;
  title: string;
  items: string[];
}

export const skillsData: SkillCategory[] = [
  {
    icon: Code,
    title: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS"]
  },
  {
    icon: Globe,
    title: "Web Technologies",
    items: ["React.js", "Node.js", "Express.js", "RESTful APIs", "GraphQL"]
  },
  {
    icon: Cloud,
    title: "AWS Cloud",
    items: [
      "EC2 Instance",
      "S3 Bucket",
      "VPC",
      "Lambda",
      "IAM",
      "Cloud Watch"
    ]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    items: [
      "Web Penetration Testing",
      "Vulnerability Assessment",
      "Digital Forensics",
      "Security Hardening"
    ]
  },
  {
    icon: Terminal,
    title: "Development Tools",
    items: ["Git", "Docker", "VS Code", "Postman", "Linux"]
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MySQL", "MongoDB", "PostgreSQL", "Database Security"]
  }
];