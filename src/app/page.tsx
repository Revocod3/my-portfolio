import ContactSection from "@/components/Contact";
import HeroSection from "@/components/Hero";
import FeaturedProjects from "@/components/Projects";
import SkillsSection from "@/components/Skills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
