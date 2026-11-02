import Image from "next/image";
import Link from "next/link";
import { generators } from "@/data/generators";
import { ArrowRight } from "lucide-react";
import "./generators.css";
export const metadata = {
  title: "Diesel Generators and Engine Brands",
  description:
    "Explore Cummins, Perkins, Isuzu and Yangdong generator categories at Sultan Brothers Power Engineering. Enquire about generator availability, specifications and repair services.",
  alternates: {
    canonical: "/generators",
  },
};

export default function GeneratorsPage() {
  return (
    <main className="all-generators-page">
      <section className="all-generators-heading">
        <span>OUR GENERATOR COLLECTION</span>
        <h1>Diesel Generators & Engine Brands</h1>
        <p>
          Explore generator brands and diesel engine solutions. Contact Sultan
          Brothers for availability, specifications and professional repair
          enquiries.
        </p>
      </section>

      <section className="all-generators-grid">
        {generators.map((item) => (
          <article key={item.slug} className="all-generator-card">
            <Link href={`/generators/${item.slug}`}>
              <div className="all-generator-image">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 700px) 100vw, 50vw"
                />
              </div>

              <div className="all-generator-content">
                <span>{item.category}</span>
                <h2>{item.name} Generators</h2>
                <p>{item.shortDescription}</p>
                <strong>
                  Explore Details <ArrowRight size={16} />
                </strong>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
