import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageCircle, ArrowLeft, CheckCircle } from "lucide-react";
import { generators } from "@/data/generators";
import "./generator-detail.css";
const WHATSAPP_NUMBER = "923001234567";

export function generateStaticParams() {
  return generators.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const item = generators.find((generator) => generator.slug === slug);

  if (!item) return { title: "Generator Not Found" };

  return {
    title: `${item.name} Generators in Pakistan | Sultan Brothers`,
    description: item.description,
    alternates: {
      canonical: `/generators/${item.slug}`,
    },
    openGraph: {
      title: `${item.name} Generator Solutions | Sultan Brothers`,
      description: item.shortDescription,
      images: [item.image],
      type: "website",
    },
  };
}

export default async function GeneratorDetailPage({ params }) {
  const { slug } = await params;

  const item = generators.find((generator) => generator.slug === slug);

  if (!item) notFound();

  const whatsappMessage = encodeURIComponent(
    `Assalam-o-Alaikum! I am interested in ${item.name} generator solutions. Please share availability and specifications.`,
  );

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <main className="generator-detail-page">
      <div className="detail-breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/generators">Generators</Link>
        <span>/</span>
        <span>{item.name}</span>
      </div>

      <section className="detail-hero">
        <div className="detail-image">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            priority
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </div>

        <div className="detail-content">
          <span className="detail-eyebrow">{item.category}</span>

          <h1>{item.name} Generators</h1>

          <p>{item.description}</p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="detail-whatsapp"
          >
            <MessageCircle size={19} />
            Enquire on WhatsApp
          </a>
        </div>
      </section>

      <section className="detail-features">
        <h2>Generator Solutions & Services</h2>

        <p>
          Contact Sultan Brothers Power Engineering to discuss your generator
          requirements and maintenance needs.
        </p>

        <div className="detail-feature-grid">
          {item.features.map((feature) => (
            <div key={feature} className="detail-feature">
              <CheckCircle size={20} />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="detail-back">
        <Link href="/generators">
          <ArrowLeft size={17} />
          Explore Other Generator Brands
        </Link>
      </div>
    </main>
  );
}
