"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Wrench,
  Zap,
  Settings,
} from "lucide-react";

const WHATSAPP_NUMBER = "923010002987";

export default function Hero() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Assalam-o-Alaikum! I am interested in your generator sales and repair services.",
  )}`;

  return (
    <section className="hero" id="home">
      <div className="hero-background" />

      <div className="hero-container">
        {/* LEFT CONTENT */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-tag">
            <span className="hero-tag-dot" />
            POWER ENGINEERING & GENERATOR SOLUTIONS
          </div>

          <h1>
            Reliable Power.
            <br />
            <span>Powerful Performance.</span>
            <br />
            Trusted Engineering.
          </h1>

          <p className="hero-description">
            From supplying quality new generators to complete engine overhauling
            and professional repairs, Sultan Brothers is here to keep your power
            running.
          </p>

          <div className="hero-buttons">
            <Link href="#generators" className="hero-primary-btn">
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

          <div className="hero-trust">
            <div className="trust-item">
              <span className="trust-icon">
                <ShieldCheck size={19} />
              </span>
              <span>Quality Equipment</span>
            </div>

            <div className="trust-item">
              <span className="trust-icon">
                <Wrench size={19} />
              </span>
              <span>Expert Repairing</span>
            </div>

            <div className="trust-item">
              <span className="trust-icon">
                <Settings size={19} />
              </span>
              <span>Complete Overhauling</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="hero-image-frame">
            <Image
              src="/images/generator-hero.jpg"
              alt="Diesel power generator for industrial and backup power applications"
              fill
              priority
              sizes="(max-width: 850px) 100vw, 50vw"
              className="hero-image"
            />

            <div className="image-label">
              <Zap size={16} fill="currentColor" />
              ENGINEERED FOR POWER
            </div>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -9, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="floating-icon">
              <Wrench size={23} />
            </div>

            <div>
              <strong>Complete Engine Care</strong>
              <p>Sales, Service & Repair</p>
            </div>
          </motion.div>

          <div className="hero-decoration hero-decoration-one" />
          <div className="hero-decoration hero-decoration-two" />
        </motion.div>
      </div>

      <div className="hero-bottom-line">
        <span>POWERING YOUR BUSINESS</span>
        <span className="hero-line" />
        <span>ENGINEERING YOUR TRUST</span>
      </div>
    </section>
  );
}
