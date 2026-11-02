"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Zap, MessageCircle, ChevronDown } from "lucide-react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Generators", href: "#generators", dropdown: true },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const WHATSAPP_NUMBER = "923010002987"; // Replace with real number

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Assalam-o-Alaikum! I would like to inquire about your generators and repair services.",
  )}`;

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      {/* Top information bar */}
      <div className="topbar">
        <div className="nav-container topbar-inner">
          <p>
            <Zap size={14} />
            Reliable Power. Professional Engineering.
          </p>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={14} />
            Get a Quick Quote
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="navbar">
        <div className="nav-container navbar-inner">
          {/* Brand logo */}
          <Link href="#home" className="brand" onClick={closeMenu}>
            <span className="brand-icon">
              <Zap size={27} fill="currentColor" />
            </span>

            <span className="brand-text">
              <strong>SULTAN BROTHERS</strong>
              <small>POWER ENGINEERING</small>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="desktop-nav">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="nav-link">
                {item.name}
                {item.dropdown && <ChevronDown size={14} />}
              </Link>
            ))}
          </div>

          {/* Desktop WhatsApp button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            <MessageCircle size={18} />
            <span>WhatsApp Us</span>
          </a>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={27} /> : <Menu size={27} />}
          </button>
        </div>

        {/* Mobile navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={closeMenu}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown size={15} />}
                  </Link>
                </motion.div>
              ))}

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-whatsapp"
                onClick={closeMenu}
              >
                <MessageCircle size={19} />
                Contact on WhatsApp
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
