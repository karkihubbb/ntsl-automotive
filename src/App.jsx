import { useState } from 'react'
import {
  ArrowUpRight, Menu, X, MapPin, Phone, ChevronRight,
  Tractor, Wrench, Settings2, MessageCircle, ShieldCheck, Clock3
} from 'lucide-react'

const copy = {
  en: {
    top: 'POWERTRAC TRACTORS', location: 'BIRATNAGAR · NEPAL',
    nav: [['Tractors', '#tractors'], ['Our support', '#support'], ['About NTSL', '#about'], ['Contact', '#contact']],
    enquire: 'Make an enquiry', eyebrow: 'YOUR LOCAL POWERTRAC CONNECTION',
    titleA: 'Ready for', titleB: 'the work', titleC: 'ahead.',
    intro: 'Explore Powertrac tractors through NTSL Automotive, Biratnagar. Get straightforward information and speak with the team about the machine that fits your work.',
    explore: 'Explore the range', talk: 'Talk to our team',
    note: 'Munalpath, Biratnagar', rangeLabel: 'THE POWERTRAC RANGE',
    rangeTitle: 'Find a tractor that', rangeAccent: 'fits your work.',
    rangeText: 'Tell us what you need. Our team can help you enquire about Powertrac models and their availability in the Biratnagar area.',
    rangeCta: 'Ask about available models',
    supportEyebrow: 'HELP WHEN YOU NEED IT',
    supportTitle: 'More than a', supportAccent: 'showroom visit.',
    supportText: 'Get in touch with NTSL Automotive for guidance on your tractor enquiry and information about available support.',
    supportItems: [
      ['Product guidance', 'Discuss your requirements and ask about suitable Powertrac models.'],
      ['Service enquiries', 'Contact the team for information about service and maintenance support.'],
      ['Parts enquiries', 'Ask about parts availability and the right way to get support.']
    ],
    aboutEyebrow: 'ABOUT NTSL AUTOMOTIVE',
    aboutTitle: 'A local team. A', aboutAccent: 'clear connection.',
    aboutText: 'NTSL Automotive Pvt. Ltd. is presenting its Powertrac tractor enquiry point for customers in Biratnagar. This website is being prepared with verified company information.',
    aboutPlace: 'Our Biratnagar location', aboutAddress: 'Munalpath, Biratnagar, Koshi Province, Nepal',
    contactEyebrow: 'START A CONVERSATION', contactTitle: 'What are you', contactAccent: 'looking for?',
    contactText: 'Send a demo enquiry below. This preview does not transmit or save your details. Official contact channels will be added after confirmation by the company.',
    name: 'Your name', phone: 'Phone number', interest: 'What can we help you with?', choose: 'Choose an enquiry',
    options: ['Powertrac tractor information', 'Model availability', 'Service and maintenance', 'Parts enquiry', 'Other'],
    message: 'Your message', messagePlaceholder: 'Tell us briefly what you need',
    submit: 'Preview enquiry', demo: 'Demo only: your details have not been sent or stored.',
    privacy: 'Privacy information', footerLine: 'POWERTRAC TRACTORS · BIRATNAGAR, NEPAL',
    footerNote: 'Company details and contact information subject to NTSL approval.',
    legal: 'Privacy', terms: 'Terms', back: 'Back to top ↑',
    formRequired: 'Please complete the required fields.'
  },
  ne: {
    top: 'पावरट्र्याक ट्र्याक्टर', location: 'विराटनगर · नेपाल',
    nav: [['ट्र्याक्टर', '#tractors'], ['हाम्रो सहयोग', '#support'], ['NTSL बारे', '#about'], ['सम्पर्क', '#contact']],
    enquire: 'जानकारी लिनुहोस्', eyebrow: 'तपाईंको स्थानीय पावरट्र्याक सम्पर्क',
    titleA: 'कामका लागि', titleB: 'भरपर्दो', titleC: 'साथी।',
    intro: 'NTSL Automotive, विराटनगरमार्फत पावरट्र्याक ट्र्याक्टरबारे जानकारी लिनुहोस्। आफ्नो कामअनुसार उपयुक्त ट्र्याक्टरबारे हाम्रो टोलीसँग कुरा गर्नुहोस्।',
    explore: 'ट्र्याक्टर हेर्नुहोस्', talk: 'हाम्रो टोलीसँग कुरा गर्नुहोस्',
    note: 'मुनालपथ, विराटनगर', rangeLabel: 'पावरट्र्याक ट्र्याक्टर',
    rangeTitle: 'तपाईंको कामका लागि', rangeAccent: 'उपयुक्त ट्र्याक्टर।',
    rangeText: 'तपाईंलाई कस्तो ट्र्याक्टर चाहिएको हो बताउनुहोस्। उपलब्ध मोडेल र जानकारीबारे हाम्रो टोलीसँग सोधपुछ गर्न सक्नुहुन्छ।',
    rangeCta: 'उपलब्ध मोडेलबारे सोध्नुहोस्',
    supportEyebrow: 'आवश्यक पर्दा सहयोग',
    supportTitle: 'शोरुमभन्दा', supportAccent: 'अझ बढी।',
    supportText: 'ट्र्याक्टरसम्बन्धी जानकारी तथा उपलब्ध सहयोगबारे NTSL Automotive सँग सम्पर्क गर्नुहोस्।',
    supportItems: [
      ['उत्पादनसम्बन्धी जानकारी', 'आफ्नो आवश्यकता बताउनुहोस् र उपयुक्त मोडेलबारे सोध्नुहोस्।'],
      ['सर्भिससम्बन्धी सोधपुछ', 'मर्मत तथा सर्भिस सहयोगबारे जानकारी लिनुहोस्।'],
      ['पार्ट्ससम्बन्धी सोधपुछ', 'पार्ट्सको उपलब्धता र सहयोगबारे सोध्नुहोस्।']
    ],
    aboutEyebrow: 'NTSL AUTOMOTIVE बारे',
    aboutTitle: 'स्थानीय टोली।', aboutAccent: 'सजिलो सम्पर्क।',
    aboutText: 'NTSL Automotive Pvt. Ltd. ले विराटनगरका ग्राहकका लागि पावरट्र्याक ट्र्याक्टरसम्बन्धी जानकारी र सोधपुछको सुविधा प्रस्तुत गर्दैछ। कम्पनीबाट पुष्टि भएका विवरण मात्र यहाँ राखिनेछन्।',
    aboutPlace: 'विराटनगर शाखा', aboutAddress: 'मुनालपथ, विराटनगर, कोशी प्रदेश, नेपाल',
    contactEyebrow: 'कुरा सुरु गरौँ', contactTitle: 'तपाईंलाई के', contactAccent: 'चाहिएको छ?',
    contactText: 'तलको फारम डेमोका लागि मात्र हो। यसबाट तपाईंको विवरण पठाइँदैन वा सुरक्षित गरिँदैन। कम्पनीबाट पुष्टि भएपछि आधिकारिक सम्पर्क विवरण राखिनेछ।',
    name: 'तपाईंको नाम', phone: 'फोन नम्बर', interest: 'कुन विषयमा सहयोग चाहिन्छ?', choose: 'विषय छान्नुहोस्',
    options: ['पावरट्र्याक ट्र्याक्टर जानकारी', 'मोडेल उपलब्धता', 'सर्भिस तथा मर्मत', 'पार्ट्ससम्बन्धी जानकारी', 'अन्य'],
    message: 'तपाईंको सन्देश', messagePlaceholder: 'आफ्नो आवश्यकता छोटकरीमा लेख्नुहोस्',
    submit: 'डेमो फारम जाँच गर्नुहोस्', demo: 'डेमो मात्र: तपाईंको विवरण पठाइएको वा सुरक्षित गरिएको छैन।',
    privacy: 'गोपनीयता जानकारी', footerLine: 'पावरट्र्याक ट्र्याक्टर · विराटनगर, नेपाल',
    footerNote: 'कम्पनीका विवरण तथा सम्पर्क जानकारी NTSL बाट पुष्टि हुन बाँकी।',
    legal: 'गोपनीयता', terms: 'सर्तहरू', back: 'माथि जानुहोस् ↑',
    formRequired: 'कृपया आवश्यक विवरण भर्नुहोस्।'
  }
}

function Brand() {
  return <a className="brand" href="#top" aria-label="NTSL Automotive home">
    <span className="brand-symbol">N</span>
    <span className="brand-name"><strong>NTSL</strong><small>AUTOMOTIVE PVT. LTD.</small></span>
  </a>
}

function App() {
  const [language, setLanguage] = useState('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const t = copy[language]

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return <div className={`site-shell ${language === 'ne' ? 'nepali' : ''}`}>
    <div className="utility-bar">
      <span>{t.top}</span>
      <span className="utility-location"><MapPin size={12}/>{t.location}</span>
      <div className="language-switch" aria-label="Choose language">
        <button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>EN</button>
        <span>/</span>
        <button className={language === 'ne' ? 'active' : ''} onClick={() => setLanguage('ne')}>नेपाली</button>
      </div>
    </div>

    <header className="site-header">
      <Brand/>
      <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
        {t.nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-action" href="#contact" onClick={() => setMenuOpen(false)}>{t.enquire}<ArrowUpRight size={15}/></a>
      </nav>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span/> {t.eyebrow}</div>
          <h1>{t.titleA}<br/><span>{t.titleB}</span><br/>{t.titleC}</h1>
          <p>{t.intro}</p>
          <div className="hero-buttons">
            <a className="button button-blue" href="#tractors">{t.explore}<ArrowUpRight size={17}/></a>
            <a className="button-link" href="#contact">{t.talk}<ChevronRight size={16}/></a>
          </div>
          <div className="hero-location"><MapPin size={15}/>{t.note}</div>
        </div>
        <div className="hero-visual" aria-label="Powertrac tractor brand feature">
          <div className="visual-top"><span>NTSL / 01</span><span>POWERTRAC</span></div>
          <div className="visual-center">
            <div className="visual-orbit orbit-one"/><div className="visual-orbit orbit-two"/>
            <div className="visual-letter">P<span>.</span></div>
            <div className="visual-caption">POWERTRAC<br/>TRACTORS</div>
          </div>
          <div className="visual-bottom"><span>BUILT FOR THE WORK AHEAD</span><span>BIRATNAGAR, NEPAL</span></div>
          <div className="visual-side">NTSL AUTOMOTIVE</div>
        </div>
        <div className="hero-vertical">LOCAL ENQUIRIES · MUNALPATH</div>
      </section>

      <section className="quick-facts" aria-label="NTSL information">
        <div><span className="fact-index">01</span><div><strong>Powertrac</strong><small>Tractor enquiries</small></div></div>
        <div><span className="fact-index">02</span><div><strong>Biratnagar</strong><small>Local point of contact</small></div></div>
        <div><span className="fact-index">03</span><div><strong>NTSL Automotive</strong><small>Munalpath, Nepal</small></div></div>
      </section>

      <section className="range-section section-pad" id="tractors">
        <div className="section-overline"><span>01 / {t.rangeLabel}</span><span>PRODUCT ENQUIRIES</span></div>
        <div className="range-layout">
          <div><div className="eyebrow"><span/>{t.rangeLabel}</div><h2>{t.rangeTitle}<br/><em>{t.rangeAccent}</em></h2></div>
          <div className="range-detail"><p>{t.rangeText}</p><a className="button button-dark" href="#contact">{t.rangeCta}<ArrowUpRight size={16}/></a></div>
        </div>
        <div className="range-feature">
          <div className="range-art">
            <div className="range-art-grid"/>
            <div className="range-art-mark">PT<span>/</span></div>
            <div className="range-art-note">POWERTRAC<br/>TRACTOR RANGE</div>
            <div className="range-art-foot">MODEL DETAILS AVAILABLE ON ENQUIRY</div>
          </div>
          <div className="range-aside">
            <span className="aside-number">NTSL / POWERTRAC</span>
            <h3>One conversation<br/>starts the search.</h3>
            <p>Ask about model details, specifications and availability. Information will be confirmed by the NTSL team before being published here.</p>
            <a href="#contact" className="inline-arrow">Make an enquiry <ArrowUpRight size={16}/></a>
          </div>
        </div>
      </section>

      <section className="support-section section-pad" id="support">
        <div className="support-heading">
          <div><div className="eyebrow"><span/>{t.supportEyebrow}</div><h2>{t.supportTitle}<br/><em>{t.supportAccent}</em></h2></div>
          <p>{t.supportText}</p>
        </div>
        <div className="support-grid">
          {t.supportItems.map(([title, description], index) => {
            const Icon = [Tractor, Wrench, Settings2][index]
            return <article className="support-card" key={title}>
              <div className="support-card-top"><span>0{index + 1}</span><Icon size={22}/></div>
              <h3>{title}</h3><p>{description}</p><a href="#contact" aria-label={title}><ArrowUpRight size={17}/></a>
            </article>
          })}
        </div>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="about-stamp">NTSL<br/><span>EST.</span><br/>AUTO</div>
        <div className="about-main">
          <div className="eyebrow"><span/>{t.aboutEyebrow}</div>
          <h2>{t.aboutTitle}<br/><em>{t.aboutAccent}</em></h2>
        </div>
        <div className="about-description"><p>{t.aboutText}</p><div className="address-card"><MapPin size={19}/><div><strong>{t.aboutPlace}</strong><span>{t.aboutAddress}</span></div></div></div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="contact-intro">
          <div className="eyebrow inverse"><span/>{t.contactEyebrow}</div>
          <h2>{t.contactTitle}<br/><em>{t.contactAccent}</em></h2>
          <p>{t.contactText}</p>
          <div className="contact-location"><MapPin size={17}/><span>Munalpath, Biratnagar<br/><small>Koshi Province, Nepal</small></span></div>
          <div className="contact-location"><ShieldCheck size={17}/><span>Company contact details<br/><small>To be confirmed before launch</small></span></div>
        </div>
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="form-top"><span>ENQUIRY FORM</span><span>PREVIEW / 01</span></div>
          <label>{t.name}<input name="name" autoComplete="name" required placeholder={t.name}/></label>
          <label>{t.phone}<input name="phone" type="tel" autoComplete="tel" required placeholder="98XXXXXXXX"/></label>
          <label>{t.interest}<select name="interest" defaultValue="" required><option value="" disabled>{t.choose}</option>{t.options.map(option => <option key={option}>{option}</option>)}</select></label>
          <label>{t.message}<textarea name="message" rows="3" placeholder={t.messagePlaceholder}/></label>
          <button className="button button-blue submit-button" type="submit">{t.submit}<ArrowUpRight size={16}/></button>
          {submitted && <p className="demo-confirmation" role="status">{t.demo}</p>}
          <small className="form-privacy">{t.privacy}: <a href="/privacy.html">read here</a></small>
        </form>
      </section>
    </main>

    <footer className="site-footer">
      <Brand/>
      <div className="footer-center">{t.footerLine}</div>
      <div className="footer-links"><a href="/privacy.html">{t.legal}</a><a href="/terms.html">{t.terms}</a><a href="#top">{t.back}</a></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} NTSL Automotive Pvt. Ltd.</span><span>{t.footerNote}</span></div>
    </footer>
  </div>
}

export default App
