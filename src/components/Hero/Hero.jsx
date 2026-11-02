"use client";

import "./Hero.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Wrench,
  Settings,
  Zap,
} from "lucide-react";

const WHATSAPP_NUMBER = "923010002987";

export default function Hero() {
  const whatsappMessage = encodeURIComponent(
    "Assalam-o-Alaikum! I would like to inquire about generator sales, diesel engine repair or overhauling services.",
  );

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <section className="hero" id="home">
      <div className="hero-background" />

      <div className="hero-container">
        {/* LEFT CONTENT */}

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <div className="hero-tag">
            <span className="hero-tag-dot" />
            GENERATOR SALES • DIESEL ENGINE REPAIR • POWER SOLUTIONS
          </div>

          <h1>
            Generator Sales &
            <br />
            <span>Diesel Engine Repair.</span>
            <br />
            Power You Can Rely On.
          </h1>

          <p className="hero-description">
            Looking for reliable generators or professional engine repair?
            Sultan Brothers Power Engineering provides new generator sales,
            diesel generator repairs, complete engine overhauling, maintenance
            and spare parts support to help keep your equipment running.
          </p>

          <div className="hero-buttons">
            <Link href="/generators" className="hero-primary-btn">
              Explore Generators
              <ArrowRight size={19} />
            </Link>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-secondary-btn"
            >
              <MessageCircle size={19} />
              Get a Free Quote
            </a>
          </div>

          {/* TRUST INDICATORS */}

          <div className="hero-trust">
            <div className="trust-item">
              <span className="trust-icon">
                <ShieldCheck size={19} />
              </span>
              <span>Generator Sales</span>
            </div>

            <div className="trust-item">
              <span className="trust-icon">
                <Wrench size={19} />
              </span>
              <span>Repair & Maintenance</span>
            </div>

            <div className="trust-item">
              <span className="trust-icon">
                <Settings size={19} />
              </span>
              <span>Engine Overhauling</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.15 }}
        >
          <div className="hero-image-frame">
            <Image
              src="/images/generator-hero.webp"
              alt="Diesel generator set for commercial and industrial backup power"
              fill
              priority
              sizes="(max-width: 850px) 100vw, 50vw"
              className="hero-image"
            />

            <div className="image-label">
              <Zap size={16} fill="currentColor" />
              POWERING PERFORMANCE
            </div>
          </div>

          <div className="hero-decoration hero-decoration-one" />
          <div className="hero-decoration hero-decoration-two" />
        </motion.div>
      </div>

      {/* BOTTOM BRAND STRIP */}

      <div className="hero-bottom-line">
        <span>GENERATOR SALES & SERVICE</span>
        <span className="hero-line" />
        <span>ENGINEERING YOU CAN TRUST</span>
      </div>
    </section>
  );
}
