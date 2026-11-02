import "./Footer.css";
import Image from "next/image";

import { ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "923010002987";
const PHONE_NUMBER = "03010002987";

const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=30.966625%2C71.0653971&travelmode=driving";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "Generators", href: "/#generators" },
  { label: "Services", href: "/#services" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

const services = [
  "New Generator Sales",
  "Generator Repair",
  "Complete Engine Overhauling",
  "Generator Maintenance",
  "Generator Spare Parts",
];

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-container footer-grid">
          {/* COMPANY */}
          <div className="footer-brand">
            <a
              href="/#home"
              className="footer-logo"
              aria-label="Sultan Brothers Power Engineering homepage"
            >
              <Image
                src="/images/sultan-brothers-logo.webp"
                alt="Sultan Brothers Power Engineering"
                width={700}
                height={180}
                className="footer-logo-image"
                sizes="(max-width: 600px) 85vw, 380px"
              />
            </a>

            <p className="footer-description">
              Your trusted destination for generator sales, diesel engine
              repair, complete overhauling and power engineering solutions.
            </p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp"
            >
              <MessageCircle size={18} />
              Contact Us on WhatsApp
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="footer-column">
            <h3>Our Services</h3>

            <ul>
              {services.map((service) => (
                <li key={service}>
                  <a href="/#services">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-column footer-contact">
            <h3>Get in Touch</h3>

            <a href={`tel:${PHONE_NUMBER}`}>
              <Phone size={17} />
              <span>{PHONE_NUMBER}</span>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={17} />
              <span>WhatsApp Enquiries</span>
            </a>

            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              <MapPin size={17} />
              <span>Find Our Workshop</span>
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <div className="footer-container footer-bottom-inner">
          <p>
            © {currentYear} Sultan Brothers Power Engineering. All rights
            reserved.
          </p>

          <p className="footer-developer">
            Designed & Developed by{" "}
            <a
              href="https://awais-port.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Muhammad Awais developer portfolio"
            >
              Muhammad Awais
              <ArrowUpRight size={14} />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
