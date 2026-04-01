import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { Experience } from "@/components/experience/Experience";
import { Recommendations } from "@/components/recommendations/Recommendations";
import { Projects } from "@/components/projects/Projects";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Recommendations />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
