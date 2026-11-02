import Hero from "@/components/Hero/Hero";
import GeneratorShowcase from "@/components/GeneratorShowcase/GeneratorShowcase";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <main>
      <Hero />

      <GeneratorShowcase />

      <Services />

      <section id="about">
        <h2>About Sultan Brothers</h2>
      </section>

      <section id="gallery">
        <h2>Our Gallery</h2>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
      </section>
    </main>
  );
}
