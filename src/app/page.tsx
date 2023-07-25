import Skills from "@/components/skills";
import Experience from "@/components/experiences";
import About from "@/components/about";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import ContactMe from "@/components/contactMe";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <ContactMe />
    </main>
  );
}
