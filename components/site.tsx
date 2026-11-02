'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, ArrowUpRight, BadgeCheck, Check, ChevronDown, Cog, Facebook, Gauge, Instagram, MapPin, Menu, MessageCircle, Phone, ShieldCheck, Wrench, X, Zap } from 'lucide-react';

const WA_NUMBER = '923010002987';
const MAP_URL = 'https://www.google.com/maps/place/Sultan+brothers+power+engineering+repairing+and+parts/@30.966625,71.0647534,151m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3925a916b4749c93:0x10ccabdcb0296dda!8m2!3d30.966625!4d71.0653971!16s%2Fg%2F11q8w2_4kl';
const waLink = (message: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

const services = [
  { no: '01', title: 'Generator Sales', desc: 'Explore generator options for homes, businesses, workshops and industrial applications.', icon: Zap, tag: 'NEW & QUALITY UNITS' },
  { no: '02', title: 'Complete Generator Repair', desc: 'Inspection, fault diagnosis, maintenance and complete generator repair services.', icon: Wrench, tag: 'REPAIR & MAINTENANCE' },
  { no: '03', title: 'Engine Overhauling', desc: 'Engine inspection, mechanical repairs and overhaul work with attention to detail.', icon: Cog, tag: 'ENGINE SPECIALISTS' },
  { no: '04', title: 'Spare Parts', desc: 'Ask us about generator engine parts, service components and replacement options.', icon: Gauge, tag: 'PARTS & COMPONENTS' },
];
const brands = ['CUMMINS', 'PERKINS', 'ISUZU', 'YANGDONG'];
const rise = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: .65, ease: [0.22, 1, 0.36, 1] } } };

export default function Site() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', service: 'Generator repair', details: '' });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Assalam-o-Alaikum Sultan Brothers!\n\nName: ${form.name}\nPhone: ${form.phone}\nRequired service: ${form.service}\nDetails: ${form.details || 'Please contact me to discuss.'}`;
    window.open(waLink(message), '_blank', 'noopener,noreferrer');
  };
  const closeMenu = () => setMenuOpen(false);

  return <>
    <div className="topbar"><div className="wrap topbar-inner"><span><span className="live-dot" /> POWERING WORK. RESTORING PERFORMANCE.</span><a href={waLink('Assalam-o-Alaikum, I would like to contact Sultan Brothers.')} target="_blank" rel="noreferrer"><MessageCircle size={14}/> Chat with our team <ArrowUpRight size={13}/></a></div></div>
    <header className="header"><div className="wrap nav-wrap">
      <a className="brand" href="#home" aria-label="Sultan Brothers home"><span className="brand-mark"><Zap size={23} fill="currentColor"/></span><span className="brand-copy"><strong>SULTAN <i>BROTHERS</i></strong><small>POWER ENGINEERING</small></span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}><a href="#services" onClick={closeMenu}>Services</a><a href="#about" onClick={closeMenu}>About us</a><a href="#brands" onClick={closeMenu}>Brands</a><a href="#contact" onClick={closeMenu}>Contact</a><a className="nav-cta" href="#contact" onClick={closeMenu}>Get a quote <ArrowUpRight size={15}/></a></nav>
    </div></header>

    <main>
      <section className="hero" id="home"><div className="hero-grid"/><div className="wrap hero-inner">
        <motion.div className="hero-copy" initial="hidden" animate="visible" variants={rise}>
          <div className="eyebrow"><span/> POWER ENGINEERING • SALES • REPAIR</div>
          <h1>Power you can<br/><em>depend on.</em></h1>
          <p className="hero-lead">From finding the right generator to bringing an engine back to life — practical power solutions, backed by hands-on care.</p>
          <div className="hero-actions"><a className="btn btn-gold" href="#contact">Discuss your requirement <ArrowUpRight size={17}/></a><a className="text-link" href="#services">Explore our services <ArrowDownRight size={17}/></a></div>
          <div className="hero-proof"><div className="proof-icon"><ShieldCheck size={19}/></div><span><strong>Sales. Service. Support.</strong><small>Your generator partner, from start to repair.</small></span></div>
        </motion.div>
        <motion.div className="hero-art" initial={{ opacity: 0, scale: .94, x: 28 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: .9, delay: .15 }}>
          <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-glow"/>
          <div className="engine-card"><div className="engine-top"><span>ENGINEERING / 01</span><span className="engine-status"><i/> POWER SYSTEMS</span></div>
            <div className="engine-visual"><div className="engine-shadow"/><div className="engine-block"><div className="engine-head"><div className="engine-cap cap-one"/><div className="engine-cap cap-two"/><div className="engine-cap cap-three"/></div><div className="engine-face"><div className="engine-panel"><b/><b/><b/><b/></div><div className="engine-wheel"><span/></div><div className="engine-filter"><i/></div></div><div className="engine-base"/><div className="engine-pipe pipe-one"/><div className="engine-pipe pipe-two"/><div className="engine-hose"/></div><div className="engine-label label-left"><span>01 / POWER</span><b>Built to perform</b></div><div className="engine-label label-right"><span>02 / CARE</span><b>Expert attention</b></div></div>
            <div className="engine-bottom"><span>INDUSTRIAL DIESEL SYSTEM</span><span>SB—001</span></div>
          </div>
          <div className="floating-chip"><span className="chip-icon"><Wrench size={16}/></span><span><b>Complete care</b><small>From generator to engine</small></span></div>
          <div className="hero-index">01 <span/> 04</div>
        </motion.div>
      </div><div className="hero-bottom wrap"><span>DEPENDABLE POWER STARTS HERE</span><a href="#services">SCROLL TO EXPLORE <ChevronDown size={14}/></a></div></section>

      <section className="trust-strip"><div className="wrap trust-inner"><div><span className="trust-icon"><BadgeCheck/></span><p><b>Sales & supply</b><small>Generator options for your needs</small></p></div><div><span className="trust-icon"><Wrench/></span><p><b>Repair & overhauling</b><small>Care for the complete machine</small></p></div><div><span className="trust-icon"><Cog/></span><p><b>Parts & components</b><small>Ask about availability</small></p></div><div><span className="trust-icon"><MessageCircle/></span><p><b>Direct contact</b><small>Talk to us on WhatsApp</small></p></div></div></section>

      <section className="section services-section" id="services"><div className="wrap"><motion.div className="section-head" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={rise}><div><div className="eyebrow dark"><span/> WHAT WE DO</div><h2>One partner.<br/><em>Every power need.</em></h2></div><p>Whether you need a generator, a repair or help with an engine problem, start with a conversation. We’ll help you understand the next step.</p></motion.div>
        <div className="service-grid">{services.map((s, i) => <motion.a href="#contact" className="service-card" key={s.no} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={rise} transition={{ delay: i * .07 }}><div className="service-top"><span>{s.no} / SERVICE</span><s.icon size={22}/></div><div className="service-icon"><s.icon size={27}/></div><h3>{s.title}</h3><p>{s.desc}</p><div className="service-foot"><span>{s.tag}</span><span className="round-arrow"><ArrowUpRight size={17}/></span></div></motion.a>)}</div>
      </div></section>

      <section className="about-section" id="about"><div className="wrap about-grid"><motion.div className="about-visual" initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .7 }}><div className="about-photo"><div className="photo-lines"/><div className="photo-caption"><span>POWER ENGINEERING</span><b>Precision in every detail.</b></div><div className="gear gear-a"><Cog size={100}/></div><div className="gear gear-b"><Cog size={65}/></div><div className="about-stamp"><Zap size={20}/><span>SALES<br/>& SERVICE</span></div></div><div className="about-number">SB<span> / EST. WITH PURPOSE</span></div></motion.div>
        <motion.div className="about-copy" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={rise}><div className="eyebrow"><span/> THE SULTAN BROTHERS APPROACH</div><h2>Good power is<br/><em>never an accident.</em></h2><p className="about-intro">A generator is more than a machine. It keeps a business moving, a workshop running and a home connected.</p><p>At Sultan Brothers Power Engineering Repairing and Parts, our focus is straightforward: help customers with generator sales, repair work, engine overhauling and parts enquiries — with clear communication at every step.</p><div className="about-points"><div><Check size={16}/> Practical guidance</div><div><Check size={16}/> Repair-focused support</div><div><Check size={16}/> Direct WhatsApp contact</div></div><a href="#contact" className="btn btn-outline-light">Talk to Sultan Brothers <ArrowUpRight size={16}/></a></motion.div></div></section>

      <section className="brands-section" id="brands"><div className="wrap"><div className="brands-head"><div><div className="eyebrow dark"><span/> GENERATOR BRANDS</div><h2>Power from names<br/><em>you recognise.</em></h2></div><p>Looking for a particular make? Contact us to discuss generator availability, parts and service requirements.</p></div><div className="brand-list">{brands.map((b, i) => <div className="brand-tile" key={b}><span>0{i+1}</span><strong>{b}</strong><ArrowUpRight size={18}/></div>)}</div><p className="brand-note">Brand names are shown for enquiry purposes. Availability and service support can be confirmed directly.</p></div></section>

      <section className="process-section"><div className="wrap process-grid"><div><div className="eyebrow"><span/> SIMPLE. DIRECT. HELPFUL.</div><h2>Let’s get your<br/><em>power sorted.</em></h2><p>Tell us what you need. Share your generator make, model or issue, and our team can take it from there.</p><a className="btn btn-gold" href={waLink('Assalam-o-Alaikum! I need help with a generator.')} target="_blank" rel="noreferrer">Start a WhatsApp chat <ArrowUpRight size={17}/></a></div><div className="steps"><div className="step"><span>01</span><div><b>Tell us the requirement</b><p>New generator, repair, engine work or spare parts.</p></div></div><div className="step"><span>02</span><div><b>Share the details</b><p>Send the make, model, photos or a short description.</p></div></div><div className="step"><span>03</span><div><b>Discuss the next step</b><p>Connect with us directly to discuss your enquiry.</p></div></div></div></div></section>

      <section className="contact-section" id="contact"><div className="wrap contact-grid"><div className="contact-copy"><div className="eyebrow"><span/> GET IN TOUCH</div><h2>Let’s talk<br/><em>power.</em></h2><p>Have a generator to repair, an engine to overhaul or a new unit in mind? Send us a message and tell us what you need.</p><a className="contact-line" href="tel:+923010002987"><span><Phone size={18}/></span><div><small>CALL / WHATSAPP</small><b>+92 301 0002987</b></div><ArrowUpRight size={17}/></a><a className="contact-line" href={MAP_URL} target="_blank" rel="noreferrer"><span><MapPin size={18}/></span><div><small>FIND OUR BUSINESS</small><b>Open Google Maps location</b></div><ArrowUpRight size={17}/></a></div>
        <form className="contact-form" onSubmit={submit}><div className="form-head"><div><span>WHATSAPP ENQUIRY</span><h3>How can we help?</h3></div><MessageCircle size={24}/></div><label>Your name<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Enter your name"/></label><div className="form-row"><label>Phone number<input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="03XX XXXXXXX" inputMode="tel"/></label><label>I'm interested in<select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}><option>Generator repair</option><option>New generator</option><option>Engine overhauling</option><option>Spare parts</option><option>General enquiry</option></select></label></div><label>Tell us a little more<textarea rows={3} value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} placeholder="Generator make, model or issue..."/></label><button className="btn btn-gold submit-btn" type="submit">Send enquiry on WhatsApp <ArrowUpRight size={17}/></button><p className="form-note"><ShieldCheck size={14}/> Your message opens directly in WhatsApp. No account or website signup needed.</p></form>
      </div></section>
      <section className="map-section"><div className="wrap map-wrap"><div><div className="eyebrow dark"><span/> VISIT / DIRECTIONS</div><h2>Find <em>Sultan Brothers.</em></h2><p>Use the Google Maps listing to view the business location and plan your visit.</p></div><a className="btn btn-dark" href={MAP_URL} target="_blank" rel="noreferrer">Open Google Maps <ArrowUpRight size={16}/></a></div><div className="map-frame"><iframe title="Sultan Brothers business location map" src="https://maps.google.com/maps?q=30.966625,71.0653971&z=16&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></section>
    </main>
    <footer className="footer"><div className="wrap footer-main"><a className="brand footer-brand" href="#home"><span className="brand-mark"><Zap size={23} fill="currentColor"/></span><span className="brand-copy"><strong>SULTAN <i>BROTHERS</i></strong><small>POWER ENGINEERING</small></span></a><p>Power solutions, generator care<br/>and parts support.</p><div className="footer-links"><a href="#services">Services</a><a href="#about">About</a><a href="#brands">Brands</a><a href="#contact">Contact</a></div><a className="footer-wa" href={waLink('Assalam-o-Alaikum Sultan Brothers!')} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp us <ArrowUpRight size={15}/></a></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Sultan Brothers Power Engineering Repairing and Parts.</span><span>BUILT WITH CARE <span className="gold-dot">●</span></span></div></footer>
    <a className="whatsapp-float" href={waLink('Assalam-o-Alaikum Sultan Brothers! I would like to enquire about your services.')} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={25}/><span>Chat with us</span></a>
  </>;
}
