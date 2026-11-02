import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { generators } from "@/data/generators";
import "./GeneratorShowcase.css";

export default function GeneratorShowcase() {
  return (
    <section className="generator-showcase" id="generators">
      <div className="generator-container">
        <div className="generator-heading">
          <div>
            <span className="section-eyebrow">OUR GENERATOR COLLECTION</span>

            <h2>
              Power Solutions from
              <span> Trusted Engine Brands</span>
            </h2>

            <p>
              Explore our generator brand categories and find suitable power
              solutions for your requirements.
            </p>
          </div>

          <Link href="/generators" className="view-all-generators">
            View All Brands
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="generator-grid">
          {generators.map((generator, index) => (
            <article className="generator-card" key={generator.slug}>
              <Link
                href={`/generators/${generator.slug}`}
                className="generator-image-link"
                aria-label={`Explore ${generator.name} generators`}
              >
                <div className="generator-image-wrap">
                  <Image
                    src={generator.image}
                    alt={generator.imageAlt}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw"
                    className="generator-image"
                  />

                  <span className="generator-number">0{index + 1}</span>

                  <span className="generator-image-arrow">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
              </Link>

              <div className="generator-card-content">
                <span className="generator-category">{generator.category}</span>

                <h3>{generator.name}</h3>

                <p>{generator.shortDescription}</p>

                <Link
                  href={`/generators/${generator.slug}`}
                  className="generator-explore"
                >
                  Explore {generator.name}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="generator-bottom-cta">
          <div>
            <h3>Looking for a specific generator?</h3>
            <p>Tell us your power requirements and let our team assist you.</p>
          </div>

          <Link href="/contact" className="generator-contact-btn">
            Discuss Your Requirements
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
