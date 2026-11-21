import { useState } from 'react'
import { ArrowUpRight, Menu, X, Tractor, Wrench, MapPin, Phone, ShieldCheck, ChevronRight } from 'lucide-react'

const nav = [
  ['Tractors', '#tractors'],
  ['Services', '#services'],
  ['About', '#about'],
  ['Contact', '#contact'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    // Demo only: no customer information is transmitted or stored yet.
    setSubmitted(true)
  }

  return (
    <div className="site-shell">
      <div className="topline"><span>POWERTRAC TRACTORS</span><span> BIRATNAGAR, NEPAL <i /> MUNALPATH</span></div>
      <header className="header">
        <a className="brand" href="#top" aria-label="NTSL Automotive home">
          <span className="brand-mark">N</span>
          <span className="brand-copy"><strong>NTSL</strong><small>AUTOMOTIVE PVT. LTD.</small></span>
        </a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
          {nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="#contact">Make an enquiry <ArrowUpRight size={15}/></a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line"/> BUILT FOR THE WORK AHEAD</div>
            <h1>Power that<br/><em>moves you</em><span className="period">.</span></h1>
            <p className="hero-lede">Explore Powertrac tractors with NTSL Automotive in Biratnagar. Get clear product information and speak with our team about your requirements.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#tractors">Explore tractors <ArrowUpRight size={17}/></a>
              <a className="text-link" href="#contact">Talk to our team <ChevronRight size={16}/></a>
            </div>
            <div className="hero-meta"><span><MapPin size={15}/> Munalpath, Biratnagar</span><span><ShieldCheck size={15}/> Local enquiries</span></div>
          </div>
          <div className="hero-art" aria-label="Powertrac tractor image to be added after company approval">
            <div className="art-grid"/>
            <div className="art-label"><span>01 / POWERTRAC</span><span>TRACTOR RANGE</span></div>
            <div className="tractor-placeholder"><Tractor strokeWidth={0.8}/><span>OFFICIAL TRACTOR PHOTOGRAPH</span><small>To be supplied or approved by NTSL</small></div>
            <div className="art-bottom"><strong>READY FOR<br/>THE FIELD.</strong><span>NTSL / BIRATNAGAR</span></div>
          </div>
          <div className="hero-index"><span>01</span><span className="index-rule"/><span>03</span></div>
        </section>

        <section className="trust-strip" aria-label="Key information">
          <div><span className="strip-number">01</span><span><strong>Powertrac range</strong><small>Explore available models</small></span></div>
          <div><span className="strip-number">02</span><span><strong>Local assistance</strong><small>Connect with the Biratnagar team</small></span></div>
          <div><span className="strip-number">03</span><span><strong>Direct enquiries</strong><small>Ask about your requirements</small></span></div>
        </section>

        <section className="section products" id="tractors">
          <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> FIND YOUR MACHINE</div><h2>Explore the <em>range.</em></h2></div><p>Looking for a tractor? Start with an enquiry and our team can help you find information about the available Powertrac models.</p></div>
          <div className="product-panel">
            <div className="product-visual"><Tractor strokeWidth={0.8}/><span>PRODUCT PHOTOGRAPH PENDING APPROVAL</span></div>
            <div className="product-info"><span className="product-kicker">POWERTRAC / TRACTOR COLLECTION</span><h3>Find the right<br/><em>tractor for the job.</em></h3><p>Model names, specifications and availability will be added after confirmation from NTSL Automotive.</p><a href="#contact" className="button button-dark">Ask about tractors <ArrowUpRight size={16}/></a></div>
          </div>
        </section>

        <section className="service-band" id="services"><div className="service-icon"><Wrench size={27}/></div><div><div className="eyebrow light"><span className="eyebrow-line"/> HERE TO HELP</div><h2>Support beyond<br/><em>the showroom.</em></h2><p>Contact the NTSL Automotive team for information about product support and services. Confirmed service offerings will be listed here.</p></div><a className="button button-outline" href="#contact">Contact the team <ArrowUpRight size={16}/></a></section>

        <section className="section about" id="about"><div className="about-number">N / 01</div><div><div className="eyebrow"><span className="eyebrow-line"/> NTSL AUTOMOTIVE</div><h2>A local point<br/>of <em>connection.</em></h2></div><div className="about-copy"><p>This website is being prepared for NTSL Automotive Pvt. Ltd., with a focus on Powertrac tractor enquiries from Biratnagar and the surrounding area.</p><p>Company history, branch details and verified business information will be published once approved by NTSL.</p><div className="location-line"><MapPin size={18}/><span><strong>Munalpath, Biratnagar</strong><small>Koshi Province, Nepal</small></span></div></div></section>

        <section className="contact-section" id="contact"><div className="contact-copy"><div className="eyebrow light"><span className="eyebrow-line"/> LET'S TALK</div><h2>Have a tractor<br/><em>in mind?</em></h2><p>Send an enquiry and let us know what you're looking for. Contact details and secure form delivery will be configured with the company before launch.</p><div className="contact-detail"><MapPin size={17}/><span>Munalpath, Biratnagar, Nepal</span></div><div className="contact-detail"><Phone size={17}/><span>Official phone number to be confirmed</span></div></div>
          <form className="enquiry-form" onSubmit={handleSubmit}><div className="form-heading"><span>ENQUIRY / 01</span><span>ALL FIELDS REQUIRED</span></div><label>Your name<input name="name" autoComplete="name" required placeholder="Enter your name"/></label><label>Phone number<input name="phone" type="tel" autoComplete="tel" required placeholder="98XXXXXXXX"/></label><label>What are you interested in?<select name="interest" defaultValue="" required><option value="" disabled>Select an option</option><option>Powertrac tractor information</option><option>Product availability</option><option>Service and support</option><option>Other enquiry</option></select></label><label>Message<textarea name="message" rows="3" placeholder="Tell us what you need (optional)"/></label><button className="button button-primary submit-button" type="submit">Send enquiry <ArrowUpRight size={17}/></button>{submitted && <p className="demo-note" role="status">Demo form only — your details have not been sent or saved. Live submission will be enabled after secure company-approved setup.</p>}<small className="privacy-note">By continuing, you acknowledge that this is a demonstration form. Read the <a href="/privacy.html">privacy information</a>.</small></form>
        </section>
      </main>
      <footer className="footer" id="footer"><a className="brand brand-footer" href="#top"><span className="brand-mark">N</span><span className="brand-copy"><strong>NTSL</strong><small>AUTOMOTIVE PVT. LTD.</small></span></a><span>POWERTRAC TRACTORS / BIRATNAGAR, NEPAL</span><div><a href="/privacy.html">Privacy</a><a href="/terms.html">Terms</a><a href="#top">Back to top ↑</a></div><small className="footer-bottom">© {new Date().getFullYear()} NTSL Automotive Pvt. Ltd. Company details pending approval.</small></footer>
    </div>
  )
}

export default App