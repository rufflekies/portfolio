import Hero from "@/components/Hero";
import About from "@/components/About";
import Skill from "@/components/Skills";
import Projects from "@/components/Project";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Contact
        supportHeading = "Need more support?"
        supportDescription = "I am here to help you with any questions or concerns you may have. Don't hesitate to reach out."
        supportButtonText = "Contact Me"
        supportButtonUrl = "mailto:muhrafli.pribadi@gmail.com"
      />
    </main>
  );
}