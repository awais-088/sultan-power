import Hero from "@/components/Hero/Hero";
import GeneratorShowcase from "@/components/GeneratorShowcase/GeneratorShowcase";
import Services from "@/components/Services/Services";
import About from "@/components/About/About";

export default function Home() {
  return (
    <main>
      <Hero />

      <GeneratorShowcase />

      <Services />

      <About />

      <Gallery />

      <section id="contact">
        <h2>Contact Us</h2>
      </section>
    </main>
  );
}
