import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="bg-system-grid min-h-screen bg-midnight text-primaryText">
      {/* Sticky header navigation with logo */}
      <Navbar />

      {/* Main content centered with clean, even padding */}
      <main className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
