"use client";

import "./Navbar.css";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import {
  Menu,
  X,
  Zap,
  MessageCircle,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

const WHATSAPP_NUMBER = "923001234567"; // Replace before launch

const navigation = [
  { name: "Home", href: "/#home" },
  { name: "About Us", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Contact", href: "/#contact" },
];

const generatorLinks = [
  {
    name: "All Generators",
    href: "/generators",
  },
  {
    name: "Cummins",
    href: "/generators/cummins-generators",
  },
  {
    name: "Perkins",
    href: "/generators/perkins-generators",
  },
  {
    name: "Isuzu",
    href: "/generators/isuzu-generators",
  },
  {
    name: "Yangdong",
    href: "/generators/yangdong-generators",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [generatorsOpen, setGeneratorsOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "Assalam-o-Alaikum! I would like to inquire about your generators and repair services.",
  );

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  const closeMenu = () => {
    setIsOpen(false);
    setGeneratorsOpen(false);
  };

  return (
    <header className="site-header">
      {/* TOP INFORMATION BAR */}

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

      {/* MAIN NAVIGATION */}

      <nav className="navbar">
        <div className="nav-container navbar-inner">
          {/* LOGO */}

          <Link
            href="/#home"
            className="brand"
            onClick={closeMenu}
            aria-label="Sultan Brothers homepage"
          >
            <span className="brand-icon">
              <Zap size={27} fill="currentColor" />
            </span>

            <span className="brand-text">
              <strong>SULTAN BROTHERS</strong>
              <small>POWER ENGINEERING</small>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}

          <div className="desktop-nav">
            {navigation.slice(0, 2).map((item) => (
              <Link key={item.name} href={item.href} className="nav-link">
                {item.name}
              </Link>
            ))}

            {/* GENERATOR DROPDOWN */}

            <div className="nav-dropdown">
              <Link
                href="/generators"
                className="nav-link nav-dropdown-trigger"
                aria-label="Explore generator brands"
              >
                Generators
                <ChevronDown size={14} />
              </Link>

              <div className="nav-dropdown-menu">
                {generatorLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="nav-dropdown-item"
                  >
                    {item.name}
                    <ArrowUpRight size={14} />
                  </Link>
                ))}
              </div>
            </div>

            {navigation.slice(2).map((item) => (
              <Link key={item.name} href={item.href} className="nav-link">
                {item.name}
              </Link>
            ))}
          </div>

          {/* WHATSAPP BUTTON */}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            <MessageCircle size={18} />
            <span>WhatsApp Us</span>
          </a>

          {/* MOBILE MENU BUTTON */}

          <button
            className="mobile-menu-btn"
            onClick={() => {
              setIsOpen((previous) => !previous);
              setGeneratorsOpen(false);
            }}
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={27} /> : <Menu size={27} />}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-navigation"
              className="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              {navigation.slice(0, 2).map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <Link
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* MOBILE GENERATOR DROPDOWN */}

              <div className="mobile-generator-dropdown">
                <button
                  className="mobile-nav-link mobile-generator-trigger"
                  onClick={() => setGeneratorsOpen((previous) => !previous)}
                  aria-expanded={generatorsOpen}
                >
                  Generators
                  <ChevronDown
                    size={17}
                    className={generatorsOpen ? "mobile-chevron-open" : ""}
                  />
                </button>

                <AnimatePresence>
                  {generatorsOpen && (
                    <motion.div
                      className="mobile-generator-menu"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      {generatorLinks.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="mobile-generator-link"
                          onClick={closeMenu}
                        >
                          {item.name}
                          <ArrowUpRight size={14} />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navigation.slice(2).map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index + 2) * 0.04 }}
                >
                  <Link
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* MOBILE WHATSAPP */}

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
