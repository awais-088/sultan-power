import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />

      {[
        ["about", "About Sultan Brothers"],
        ["generators", "Our Generators"],
        ["services", "Our Services"],
        ["gallery", "Our Gallery"],
        ["contact", "Contact Us"],
      ].map(([id, title]) => (
        <section
          key={id}
          id={id}
          style={{
            minHeight: "300px",
            padding: "90px 20px",
            textAlign: "center",
          }}
        >
          <h2>{title}</h2>
          <p style={{ marginTop: "15px", color: "#687586" }}>
            This section will be developed in the next stages.
          </p>
        </section>
      ))}
    </main>
  );
}
