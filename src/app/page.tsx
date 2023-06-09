import Skills from "@/components/skills";
import Experience from "@/components/experiences";
import About from "@/components/about";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import ContactMe from "@/components/contactMe";

export default function Home() {
  return (
    <main className="">
      <div>This is just empty for now, will add more later</div>
      <Hero/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <ContactMe/>
    </main>
  );
}
