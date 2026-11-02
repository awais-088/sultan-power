"use client";

import "./Contact.css";

import { useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  MessageCircle,
  Send,
  Zap,
  CheckCircle2,
  Wrench,
} from "lucide-react";

// Sultan Brothers official WhatsApp number
const WHATSAPP_NUMBER = "923010002987";
const PHONE_NUMBER = "03010002987";

// Opens Google Maps navigation with the business as destination.
// Google Maps will use the customer's current location as the starting point.
const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=30.966625%2C71.0653971&travelmode=driving";

// Embedded map showing the business location
const MAP_EMBED_URL =
  "https://www.google.com/maps?q=30.966625,71.0653971&z=16&output=embed";

const enquiryTypes = [
  "New Generator Purchase",
  "Generator Repair",
  "Complete Engine Overhauling",
  "Generator Maintenance",
  "Spare Parts Enquiry",
  "Other Enquiry",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    enquiry: "New Generator Purchase",
    brand: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (error) setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!formData.name.trim() || !formData.phone.trim()) {
      setError("Please enter your name and phone number.");
      return;
    }

    if (!/^[+\d\s()-]{7,20}$/.test(formData.phone.trim())) {
      setError("Please enter a valid phone number.");
      return;
    }

    const message = `
Assalam-o-Alaikum Sultan Brothers!

I would like to make an enquiry.

Customer Name: ${formData.name}
Phone Number: ${formData.phone}
Enquiry Type: ${formData.enquiry}
Generator Brand: ${formData.brand || "Not specified"}

Requirements:
${formData.message || "Please contact me for further details."}

Thank you.
    `.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* SECTION HEADING */}

        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="contact-eyebrow">
            <span />
            LET'S TALK POWER
          </span>

          <h2>
            Get in Touch with
            <span> Sultan Brothers</span>
          </h2>

          <p>
            Looking for a new generator, professional engine repair or complete
            overhauling? Tell us what you need.
          </p>
        </motion.div>

        {/* CONTACT GRID */}

        <div className="contact-grid">
          {/* LEFT: CONTACT INFORMATION */}

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-info-top">
              <span>CONTACT OUR TEAM</span>

              <h3>Let's find the right power solution for you.</h3>

              <p>
                Contact us for generator sales, diesel engine repairs,
                maintenance and mechanical overhauling.
              </p>
            </div>

            <div className="contact-info-list">
              {/* WHATSAPP */}

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-item"
              >
                <span className="contact-info-icon">
                  <MessageCircle size={21} />
                </span>

                <span>
                  <small>WHATSAPP ENQUIRIES</small>
                  <strong>0301 0002987</strong>
                </span>

                <ArrowUpRight size={17} />
              </a>

              {/* PHONE */}

              <a href={`tel:${PHONE_NUMBER}`} className="contact-info-item">
                <span className="contact-info-icon">
                  <MapPin size={21} />
                </span>

                <span>
                  <small>CALL OUR BUSINESS</small>
                  <strong>{PHONE_NUMBER}</strong>
                </span>

                <ArrowUpRight size={17} />
              </a>

              {/* GOOGLE MAPS DIRECTIONS */}

              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-item"
              >
                <span className="contact-info-icon">
                  <MapPin size={21} />
                </span>

                <span>
                  <small>OUR LOCATION</small>
                  <strong>Get Directions to Our Workshop</strong>
                </span>

                <ArrowUpRight size={17} />
              </a>

              {/* SPECIALITY */}

              <div className="contact-info-item">
                <span className="contact-info-icon">
                  <Wrench size={21} />
                </span>

                <span>
                  <small>OUR SPECIALITY</small>
                  <strong>Generator Sales & Engine Repair</strong>
                </span>
              </div>
            </div>

            <div className="contact-trust-note">
              <Zap size={20} fill="currentColor" />

              <div>
                <strong>Power Engineering Solutions</strong>
                <p>Generator sales, repair and complete diesel engine care.</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: ENQUIRY FORM */}

          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-form-heading">
              <div>
                <span>WHATSAPP ENQUIRY</span>
                <h3>Tell Us What You Need</h3>
              </div>

              <div className="contact-form-icon">
                <Send size={22} />
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Your Name *</label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    maxLength={80}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-phone">Phone Number *</label>

                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="e.g. 03XX XXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    maxLength={20}
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-enquiry">What do you need? *</label>

                <select
                  id="contact-enquiry"
                  name="enquiry"
                  value={formData.enquiry}
                  onChange={handleChange}
                  required
                >
                  {enquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-brand">Generator Brand</label>

                <select
                  id="contact-brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                >
                  <option value="">Select a brand (optional)</option>
                  <option value="Cummins">Cummins</option>
                  <option value="Perkins">Perkins</option>
                  <option value="Isuzu">Isuzu</option>
                  <option value="Yangdong">Yangdong</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Your Requirements</label>

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about your generator, engine or requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  maxLength={1000}
                />
              </div>

              {error && (
                <p className="contact-error" role="alert">
                  {error}
                </p>
              )}

              <button type="submit" className="contact-submit-btn">
                <MessageCircle size={19} />
                Send Enquiry on WhatsApp
                <ArrowRight size={18} />
              </button>

              <p className="contact-form-note">
                <CheckCircle2 size={14} />
                Your enquiry will open in WhatsApp for you to send.
              </p>
            </form>
          </motion.div>
        </div>

        {/* GOOGLE MAPS */}

        <motion.div
          className="contact-map-section"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-map-heading">
            <div>
              <span>FIND US</span>
              <h3>Visit Sultan Brothers</h3>

              <p>
                Find our workshop and get driving directions through Google
                Maps.
              </p>
            </div>

            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="map-directions-btn"
            >
              <MapPin size={18} />
              Get Driving Directions
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="contact-map-frame">
            <iframe
              src={MAP_EMBED_URL}
              title="Sultan Brothers Power Engineering location on Google Maps"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
