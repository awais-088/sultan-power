import Hero from "@/components/Hero/Hero";
import GeneratorShowcase from "@/components/GeneratorShowcase/GeneratorShowcase";
import Services from "@/components/Services/Services";
import About from "@/components/About/About";
import Gallery from "@/components/Gallery/Gallery";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />

      <GeneratorShowcase />

      <Services />

      <About />

      <Gallery />

      <Contact />
    </main>
  );
}
