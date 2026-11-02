export default function Home() {
  return (
    <main>
      <section
        id="home"
        style={{
          minHeight: "75vh",
          background: "#10243a",
          color: "white",
          display: "grid",
          placeItems: "center",
          textAlign: "center",
          padding: "50px 20px",
        }}
      >
        <div>
          <p style={{ color: "#f2a900", letterSpacing: "3px" }}>
            POWER ENGINEERING & GENERATOR SOLUTIONS
          </p>

          <h1 style={{ fontSize: "clamp(36px, 6vw, 65px)", margin: "20px 0" }}>
            Powering Your World.
            <br />
            Engineering Your Trust.
          </h1>

          <p style={{ color: "#cbd5e1" }}>
            Generator Sales, Complete Repairing & Engine Overhauling.
          </p>
        </div>
      </section>

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
