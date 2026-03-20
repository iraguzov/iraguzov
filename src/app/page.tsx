import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { Experience } from "@/components/experience/Experience";
import { Projects } from "@/components/projects/Projects";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/layout/Footer";
import { ParticleField } from "@/components/ui/ParticleField";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParticleField />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
