import { motion } from "framer-motion";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const skills = [
  { name: "Next.js", icon: <SiNextdotjs className="w-12 h-12" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-12 h-12" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-12 h-12" /> },
  // Add more skills
];

const SkillsSection = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {skill.icon}
              </div>
              <h3 className="text-lg font-medium">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
