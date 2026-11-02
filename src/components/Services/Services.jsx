"use client";

import "./Services.css";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  ArrowUpRight,
  ArrowRight,
  Zap,
  Wrench,
  Settings,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "New Generator Sales",
    description:
      "Explore diesel generator options for commercial, industrial and backup power requirements. Contact us for available brands and specifications.",
    icon: Zap,
    keywords: "Generator sales",
  },
  {
    number: "02",
    title: "Complete Generator Repair",
    description:
      "Generator troubleshooting, inspection and repair to help identify faults and restore dependable equipment operation.",
    icon: Wrench,
    keywords: "Generator repair",
  },
  {
    number: "03",
    title: "Diesel Engine Overhauling",
    description:
      "Detailed diesel engine inspection, dismantling, component assessment and complete overhauling services.",
    icon: Settings,
    keywords: "Engine overhauling",
  },
  {
    number: "04",
    title: "Generator Maintenance",
    description:
      "Generator servicing and maintenance to support reliable operation and help maintain equipment performance.",
    icon: ShieldCheck,
    keywords: "Generator maintenance",
  },
];

const WHATSAPP_NUMBER = "923001234567";

export default function Services() {
  const getWhatsAppLink = (service) => {
    const message = encodeURIComponent(
      `Assalam-o-Alaikum! I want to enquire about ${service}. Please share the details.`,
    );

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        {/* SECTION HEADING */}

        <motion.div
          className="services-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="services-heading-content">
            <span className="services-eyebrow">WHAT WE DO</span>

            <h2>
              Complete Generator
              <span> & Engine Solutions</span>
            </h2>

            <p>
              From supplying new generators to complete diesel engine
              overhauling, Sultan Brothers Power Engineering provides practical
              solutions for your power equipment.
            </p>
          </div>

          <div className="services-heading-badge">
            <Wrench size={20} />
            <span>POWER ENGINEERING</span>
          </div>
        </motion.div>

        {/* SERVICES GRID */}

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                className="service-card"
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className="service-card-top">
                  <span className="service-number">{service.number}</span>

                  <div className="service-icon">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a
                  href={getWhatsAppLink(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-link"
                  aria-label={`Enquire about ${service.title} on WhatsApp`}
                >
                  Enquire About Service
                  <ArrowUpRight size={17} />
                </a>

                <div className="service-card-line" />
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM CTA */}

        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="services-cta-content">
            <span>NEED PROFESSIONAL ASSISTANCE?</span>

            <h3>Let's Get Your Generator Running.</h3>

            <p>
              Tell us about your generator or engine problem. Our team is ready
              to discuss your requirements.
            </p>
          </div>

          <Link href="/contact" className="services-cta-button">
            Discuss Your Requirements
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
