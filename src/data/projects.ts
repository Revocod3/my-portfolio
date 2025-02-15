export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with Next.js and Node.js",
    image: "/images/projects/ecommerce.jpg",
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    link: "#",
  },
  // Add more projects
];
