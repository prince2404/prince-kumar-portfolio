import Navbar from "@/components/Navbar";
import PacketSpine from "@/components/PacketSpine";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <div className="bg-system-grid min-h-screen bg-midnight text-primaryText">
      {/* Visual scroll line and glowing Acid Lime dot */}
      <PacketSpine />

      {/* Sticky header navigation with logo */}
      <Navbar />

      {/* Main content with only Hero, Skills, Experience, Projects, and Contact */}
      <main className="mx-auto max-w-5xl px-4 pl-10 sm:pl-14 md:px-8 md:pl-20 lg:pl-24">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
