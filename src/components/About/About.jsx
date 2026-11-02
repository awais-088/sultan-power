"use client";

import "./About.css";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cog,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";

const WHATSAPP_NUMBER = "923001234567";

const highlights = [
  {
    icon: Zap,
    title: "Generator Sales",
    description: "Power solutions for different requirements.",
  },
  {
    icon: Wrench,
    title: "Engine Repair",
    description: "Hands-on generator and diesel engine repair.",
  },
  {
    icon: Cog,
    title: "Complete Overhauling",
    description: "Detailed engine inspection and rebuilding.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Care",
    description: "Attention to equipment quality and performance.",
  },
];

export default function About() {
  const whatsappMessage = encodeURIComponent(
    "Assalam-o-Alaikum! I would like to know more about Sultan Brothers Power Engineering and your services.",
  );

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* SECTION INTRODUCTION */}

        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-eyebrow">
            <span />
            GET TO KNOW US
          </span>

          <h2>
            Engineering Power.
            <span> Building Trust.</span>
          </h2>

          <p>
            Discover the people, practical experience and commitment behind
            Sultan Brothers Power Engineering.
          </p>
        </motion.div>

        {/* MAIN ABOUT CONTENT */}

        <div className="about-main-grid">
          {/* IMAGE AREA */}

          <motion.div
            className="about-image-area"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-main-image">
              <Image
                src="/images/about/mamu-workshop.webp"
                alt="Sultan Brothers workshop owner standing beside diesel generator equipment"
                fill
                priority={false}
                sizes="(max-width: 850px) 100vw, 50vw"
                className="about-owner-image"
              />

              <div className="about-image-overlay">
                <span>POWER ENGINEERING</span>
                <strong>Driven by Practical Expertise</strong>
              </div>
            </div>

            {/* SMALL OVERLAPPING IMAGE */}

            <motion.div
              className="about-small-image"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Image
                src="/images/about/mamu-engine-repair.webp"
                alt="Diesel generator engine inspection and repair work at Sultan Brothers"
                fill
                sizes="(max-width: 850px) 65vw, 260px"
              />
            </motion.div>

            <div className="about-image-decoration" />
          </motion.div>

          {/* TEXT CONTENT */}

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <span className="about-subtitle">WHO WE ARE</span>

            <h3>
              Your Trusted Partner for
              <span> Generator & Engine Solutions</span>
            </h3>

            <p className="about-description">
              Sultan Brothers Power Engineering is focused on generator sales,
              diesel engine repair and complete power engineering solutions.
            </p>

            <p className="about-description">
              From helping customers explore new generators to inspecting,
              repairing and overhauling diesel engines, our aim is to provide
              practical solutions based on the equipment and requirements
              involved.
            </p>

            <p className="about-description">
              We believe that dependable power starts with proper equipment,
              careful workmanship and professional attention to every mechanical
              detail.
            </p>

            {/* HIGHLIGHTS */}

            <div className="about-highlights">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    className="about-highlight"
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                  >
                    <div className="about-highlight-icon">
                      <Icon size={19} />
                    </div>

                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.description}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}

            <div className="about-actions">
              <Link href="/#contact" className="about-primary-btn">
                Contact Our Team
                <ArrowRight size={18} />
              </Link>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="about-secondary-btn"
              >
                WhatsApp Us
                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ABOUT BOTTOM STATEMENT */}

        <motion.div
          className="about-bottom-banner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-banner-icon">
            <CheckCircle2 size={25} />
          </div>

          <div>
            <strong>Every Engine Deserves Professional Attention.</strong>

            <p>
              Talk to Sultan Brothers about your generator, diesel engine and
              power equipment requirements.
            </p>
          </div>

          <Link href="/generators">
            Explore Generators
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
