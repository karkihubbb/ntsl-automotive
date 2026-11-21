import { useState } from 'react'
import { ArrowUpRight, Menu, X, MapPin, Phone, Wrench, Settings, Tractor, ChevronRight } from 'lucide-react'

const content = {
  en: {
    top: 'NTSL AUTOMOTIVE PRIVATE LIMITED',
    location: 'BIRATNAGAR, NEPAL',
    nav: [['Home', '#home'], ['Company', '#company'], ['Tractors', '#tractors'], ['After-sales', '#support'], ['Contact', '#contact']],
    contact: 'Contact us',
    kicker: 'AGRICULTURAL MACHINERY & CUSTOMER SUPPORT',
    headline: <>Supporting work<br/>that moves <i>you forward.</i></>,
    intro: 'A local point of contact for tractor enquiries, product information and customer support in Biratnagar.',
    primary: 'Enquire now', secondary: 'Explore our services',
    address: 'Munalpath, Biratnagar, Koshi Province',
    aboutLabel: 'COMPANY PROFILE',
    aboutTitle: <>A local presence<br/>in <i>Biratnagar.</i></>,
    aboutText: 'NTSL Automotive Pvt. Ltd. serves customers from its Biratnagar location at Munalpath. We are preparing this website to make company information, tractor enquiries and customer support easier to access.',
    aboutNote: 'Company profile and operating details will be published after confirmation by NTSL Automotive.',
    tractorLabel: 'TRACTOR ENQUIRIES',
    tractorTitle: <>Find the right machine<br/>for your <i>requirements.</i></>,
    tractorText: 'Speak with our team about available tractors, specifications and product information. Model details and availability will be confirmed directly by the company.',
    tractorButton: 'Ask about tractors',
    supportLabel: 'CUSTOMER SUPPORT',
    supportTitle: <>Support beyond<br/>the <i>purchase.</i></>,
    supportText: 'Contact our team for information about the support options available through the Biratnagar location.',
    services: [
      ['Product information', 'Discuss your requirements and request details about available tractors.', '01'],
      ['Service enquiries', 'Ask the team about service, maintenance and support arrangements.', '02'],
      ['Parts enquiries', 'Contact us to enquire about parts and availability.', '03']
    ],
    contactLabel: 'GET IN TOUCH',
    contactTitle: <>How can we<br/><i>assist you?</i></>,
    contactText: 'Send an enquiry using the preview form. It does not transmit or store personal information. Official phone and email details will be added after company confirmation.',
    formTitle: 'SEND AN ENQUIRY',
    name: 'Full name', phone: 'Phone number', subject: 'Enquiry type', select: 'Select a subject',
    subjects: ['Tractor information', 'Model availability', 'Service and maintenance', 'Spare parts', 'Other'],
    message: 'Message', messageHint: 'Write your enquiry here',
    send: 'Submit enquiry', demo: 'Preview only. Your information has not been sent or saved.',
    branch: 'BIRATNAGAR LOCATION',
    branchAddress: 'Munalpath, Biratnagar, Koshi Province, Nepal',
    directions: 'View location',
    footer: 'NTSL Automotive Pvt. Ltd. · Biratnagar, Nepal',
    footerNote: 'Website preview. Company details subject to verification.',
    privacy: 'Privacy policy', terms: 'Terms of use', topLink: 'Back to top ↑'
  },
  ne: {
    top: 'NTSL अटोमोटिभ प्रा. लि.',
    location: 'विराटनगर, नेपाल',
    nav: [['गृहपृष्ठ', '#home'], ['कम्पनी', '#company'], ['ट्र्याक्टर', '#tractors'], ['सेवा सहयोग', '#support'], ['सम्पर्क', '#contact']],
    contact: 'सम्पर्क गर्नुहोस्',
    kicker: 'कृषि यन्त्र तथा ग्राहक सहयोग',
    headline: <>कामलाई सहज<br/>बनाउने <i>सहयोग।</i></>,
    intro: 'विराटनगरमा ट्र्याक्टरसम्बन्धी जानकारी, सोधपुछ तथा ग्राहक सहयोगका लागि स्थानीय सम्पर्क।',
    primary: 'सोधपुछ गर्नुहोस्', secondary: 'हाम्रा सेवाहरू',
    address: 'मुनालपथ, विराटनगर, कोशी प्रदेश',
    aboutLabel: 'कम्पनी परिचय',
    aboutTitle: <>विराटनगरमा<br/><i>स्थानीय उपस्थिति।</i></>,
    aboutText: 'NTSL Automotive Pvt. Ltd. ले विराटनगरको मुनालपथस्थित कार्यालयबाट ग्राहकलाई सेवा प्रदान गर्दछ। कम्पनीको जानकारी, ट्र्याक्टरसम्बन्धी सोधपुछ र ग्राहक सहयोग सहज बनाउन यो वेबसाइट तयार गरिँदैछ।',
    aboutNote: 'कम्पनीबाट पुष्टि भएपछि मात्र विस्तृत परिचय तथा सञ्चालनसम्बन्धी जानकारी प्रकाशित गरिनेछ।',
    tractorLabel: 'ट्र्याक्टरसम्बन्धी सोधपुछ',
    tractorTitle: <>आफ्नो आवश्यकताअनुसार<br/><i>उपयुक्त मेसिन।</i></>,
    tractorText: 'उपलब्ध ट्र्याक्टर, विशेषता र उत्पादनसम्बन्धी जानकारीका लागि हाम्रो टोलीसँग कुरा गर्नुहोस्। मोडेल तथा उपलब्धता कम्पनीबाट पुष्टि गरिनेछ।',
    tractorButton: 'ट्र्याक्टरबारे सोध्नुहोस्',
    supportLabel: 'ग्राहक सहयोग',
    supportTitle: <>खरिदपछि पनि<br/><i>सहयोग।</i></>,
    supportText: 'विराटनगर शाखाबाट उपलब्ध सहयोगका विकल्पबारे जानकारी लिन हाम्रो टोलीसँग सम्पर्क गर्नुहोस्।',
    services: [
      ['उत्पादन जानकारी', 'आफ्नो आवश्यकता बताउनुहोस् र उपलब्ध ट्र्याक्टरबारे जानकारी लिनुहोस्।', '०१'],
      ['सर्भिससम्बन्धी सोधपुछ', 'सर्भिस, मर्मत तथा सहयोग व्यवस्थाबारे जानकारी लिनुहोस्।', '०२'],
      ['पार्ट्ससम्बन्धी सोधपुछ', 'पार्ट्स र उपलब्धताबारे जानकारीका लागि सम्पर्क गर्नुहोस्।', '०३']
    ],
    contactLabel: 'सम्पर्क',
    contactTitle: <>हामी कसरी<br/><i>सहयोग गर्न सक्छौँ?</i></>,
    contactText: 'तलको फारम वेबसाइटको पूर्वावलोकनका लागि मात्र हो। यसले व्यक्तिगत विवरण पठाउँदैन वा सुरक्षित गर्दैन। कम्पनीबाट पुष्टि भएपछि आधिकारिक फोन र इमेल राखिनेछ।',
    formTitle: 'सोधपुछ पठाउनुहोस्',
    name: 'पूरा नाम', phone: 'फोन नम्बर', subject: 'सोधपुछको विषय', select: 'विषय छान्नुहोस्',
    subjects: ['ट्र्याक्टरसम्बन्धी जानकारी', 'मोडेल उपलब्धता', 'सर्भिस तथा मर्मत', 'स्पेयर पार्ट्स', 'अन्य'],
    message: 'सन्देश', messageHint: 'आफ्नो जिज्ञासा लेख्नुहोस्',
    send: 'सोधपुछ फारम जाँच गर्नुहोस्', demo: 'पूर्वावलोकन मात्र। तपाईंको विवरण पठाइएको वा सुरक्षित गरिएको छैन।',
    branch: 'विराटनगर शाखा',
    branchAddress: 'मुनालपथ, विराटनगर, कोशी प्रदेश, नेपाल',
    directions: 'स्थान हेर्नुहोस्',
    footer: 'NTSL Automotive Pvt. Ltd. · विराटनगर, नेपाल',
    footerNote: 'वेबसाइट पूर्वावलोकन। कम्पनीका विवरण पुष्टि हुन बाँकी।',
    privacy: 'गोपनीयता नीति', terms: 'प्रयोगका सर्तहरू', topLink: 'माथि जानुहोस् ↑'
  }
}

const tractorImage = 'https://powertrac.escortskubota.com/_next/image?q=100&url=https%3A%2F%2Fcorpapi.escortskubota.com%2Fimages%2Fpowertrac%2Fproduct-series%2Fstar%2F30.webp&w=3840'

function Logo() {
  return <a className="logo" href="#home" aria-label="NTSL Automotive home">
    <span className="logo-mark">N</span>
    <span><strong>NTSL</strong><small>AUTOMOTIVE PVT. LTD.</small></span>
  </a>
}

export default function App() {
  const [lang, setLang] = useState('en')
  const [menu, setMenu] = useState(false)
  const [sent, setSent] = useState(false)
  const t = content[lang]

  function submit(event) {
    event.preventDefault()
    setSent(true)
  }

  return <div className={lang === 'ne' ? 'site nepali' : 'site'}>
    <div className="topline"><span>{t.top}</span><span className="top-location"><MapPin size={12}/>{t.location}</span><div className="lang"><button className={lang === 'en' ? 'selected' : ''} onClick={() => setLang('en')}>EN</button><span>/</span><button className={lang === 'ne' ? 'selected' : ''} onClick={() => setLang('ne')}>नेपाली</button></div></div>
    <header className="header"><Logo/><nav className={menu ? 'nav nav-open' : 'nav'}>{t.nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenu(false)}>{label}</a>)}<a className="nav-contact" href="#contact" onClick={() => setMenu(false)}>{t.contact}<ArrowUpRight size={15}/></a></nav><button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">{menu ? <X/> : <Menu/>}</button></header>
    <main>
      <section className="hero" id="home">
        <div className="hero-text"><div className="eyebrow"><span/>{t.kicker}</div><h1>{t.headline}</h1><p>{t.intro}</p><div className="hero-actions"><a className="primary-button" href="#contact">{t.primary}<ArrowUpRight size={16}/></a><a className="text-button" href="#support">{t.secondary}<ChevronRight size={16}/></a></div><div className="hero-address"><MapPin size={16}/>{t.address}</div></div>
        <div className="hero-photo"><div className="photo-heading"><span>NTSL AUTOMOTIVE</span><span>01 / PRODUCT</span></div><img src={tractorImage} alt="Blue agricultural tractor" /><div className="photo-caption"><span>AGRICULTURAL MACHINERY</span><span>BIRATNAGAR, NEPAL</span></div></div>
      </section>
      <div className="trust-strip"><div><span>01</span><strong>Local presence</strong><small>Biratnagar, Koshi Province</small></div><div><span>02</span><strong>Product enquiries</strong><small>Information from our team</small></div><div><span>03</span><strong>Customer support</strong><small>Service and parts enquiries</small></div></div>
      <section className="company section" id="company"><div className="section-label">{t.aboutLabel}<span>01 — 03</span></div><div className="company-grid"><h2>{t.aboutTitle}</h2><div className="company-copy"><p>{t.aboutText}</p><p className="muted-note">{t.aboutNote}</p><a className="underlined-link" href="#contact">{t.contact}<ArrowUpRight size={15}/></a></div></div></section>
      <section className="tractor-section section" id="tractors"><div className="section-label">{t.tractorLabel}<span>02 — 03</span></div><div className="tractor-grid"><div className="tractor-photo"><img src={tractorImage} alt="Agricultural tractor product photograph" /></div><div className="tractor-copy"><h2>{t.tractorTitle}</h2><p>{t.tractorText}</p><a className="primary-button" href="#contact">{t.tractorButton}<ArrowUpRight size={16}/></a></div></div></section>
      <section className="support section" id="support"><div className="section-label">{t.supportLabel}<span>03 — 03</span></div><div className="support-heading"><h2>{t.supportTitle}</h2><p>{t.supportText}</p></div><div className="service-list">{t.services.map(([title, desc, num], i) => {const Icon = [Tractor, Wrench, Settings][i];return <article className="service-row" key={title}><span className="service-num">{num}</span><div className="service-icon"><Icon size={21}/></div><div className="service-copy"><h3>{title}</h3><p>{desc}</p></div><ArrowUpRight className="service-arrow" size={19}/></article>})}</div></section>
      <section className="contact-section" id="contact"><div className="contact-left"><div className="eyebrow light"><span/>{t.contactLabel}</div><h2>{t.contactTitle}</h2><p>{t.contactText}</p><div className="branch-info"><MapPin size={18}/><div><strong>{t.branch}</strong><span>{t.branchAddress}</span><a href="https://www.google.com/maps/search/?api=1&query=Munalpath%2C+Biratnagar%2C+Nepal" target="_blank" rel="noreferrer">{t.directions}<ArrowUpRight size={13}/></a></div></div></div><form className="contact-form" onSubmit={submit}><div className="form-heading"><strong>{t.formTitle}</strong><span>ONLINE ENQUIRY</span></div><label>{t.name}<input name="name" autoComplete="name" required /></label><label>{t.phone}<input name="phone" type="tel" autoComplete="tel" required placeholder="98XXXXXXXX"/></label><label>{t.subject}<select name="subject" required defaultValue=""><option value="" disabled>{t.select}</option>{t.subjects.map(s => <option key={s}>{s}</option>)}</select></label><label>{t.message}<textarea name="message" rows="3" placeholder={t.messageHint}/></label><button className="primary-button submit" type="submit">{t.send}<ArrowUpRight size={16}/></button>{sent && <p className="demo-message" role="status">{t.demo}</p>}<small className="privacy-link"><a href="/privacy.html">{t.privacy}</a></small></form></section>
    </main>
    <footer className="footer"><Logo/><span className="footer-center">{t.footer}</span><div className="footer-links"><a href="/privacy.html">{t.privacy}</a><a href="/terms.html">{t.terms}</a><a href="#home">{t.topLink}</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} NTSL Automotive Pvt. Ltd.</span><span>{t.footerNote}</span></div></footer>
  </div>
}
