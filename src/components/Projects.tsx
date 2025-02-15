import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
