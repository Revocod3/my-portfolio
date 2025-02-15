"use client";

import { Project } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="relative h-64">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent p-6 flex flex-col justify-end">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-white/10 backdrop-blur-sm rounded-full text-white"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={project.link}
          className="inline-flex items-center text-white hover:text-blue-400 transition-colors"
        >
          View Project →
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
