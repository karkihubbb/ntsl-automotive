import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X, MapPin, Phone, Wrench, Settings, Tractor, ChevronRight, Zap, Truck } from 'lucide-react'

const content = {
  en: {
    top: 'NTSL AUTOMOTIVE PRIVATE LIMITED',
    location: 'BIRATNAGAR, NEPAL',
    nav: [['Home', '#home'], ['Company', '#company'], ['Tractors', '/tractors'], ['Electric Scooters', '/electric-scooters'], ['Electric Tempos', '/electric-tempos'], ['After-sales', '#support'], ['Contact', '#contact']],
    contact: 'Contact us',
    topAction: 'View location',
    kicker: 'NTSL AUTOMOTIVE · BIRATNAGAR BRANCH',
    headline: <>Tractors and electric vehicles<br/>at <i>NTSL Automotive.</i></>,
    intro: 'Explore tractors, electric scooters and electric tempos. Contact our Biratnagar branch for product details and availability.',
    primary: 'Explore vehicles', secondary: 'Contact the branch',
    address: 'Munalpath, Biratnagar, Koshi Province',
    aboutLabel: 'COMPANY PROFILE',
    aboutTitle: <>A local presence<br/>in <i>Biratnagar.</i></>,
    aboutText: 'NTSL Automotive Pvt. Ltd. serves customers from its Biratnagar location at Munalpath. We are preparing this website to make company information, vehicle enquiries and customer support easier to access.',
    aboutNote: 'Company profile and operating details will be published after confirmation by NTSL Automotive.',
    tractorLabel: 'TRACTOR ENQUIRIES',
    tractorTitle: <>Find the right machine<br/>for your <i>requirements.</i></>,
    tractorText: 'Speak with our team about available tractors, specifications and product information. Model details and availability will be confirmed directly by the company.',
    tractorButton: 'Ask about tractors',
    supportLabel: 'CUSTOMER SUPPORT',
    supportTitle: <>Support beyond<br/>the <i>purchase.</i></>,
    supportText: 'Contact our team for information about the support options available through the Biratnagar location.',
    services: [
      ['Vehicle information', 'Ask about tractors, electric scooters and electric tempos.', '01'],
      ['Service enquiries', 'Ask the team about service, maintenance and support arrangements.', '02'],
      ['Parts enquiries', 'Contact us to enquire about parts and availability.', '03']
    ],
    contactLabel: 'GET IN TOUCH',
    contactTitle: <>How can we<br/><i>assist you?</i></>,
    contactText: 'Send an enquiry using the preview form. It does not transmit or store personal information. Official phone and email details will be added after company confirmation.',
    formTitle: 'SEND AN ENQUIRY',
    name: 'Full name', phone: 'Phone number', subject: 'Enquiry type', select: 'Select a subject',
    subjects: ['Tractor information', 'Electric scooter information', 'Electric tempo information', 'Model availability', 'Service and maintenance', 'Spare parts', 'Other'],
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
    nav: [['गृहपृष्ठ', '#home'], ['कम्पनी', '#company'], ['ट्र्याक्टर', '/tractors'], ['इलेक्ट्रिक स्कुटर', '/electric-scooters'], ['इलेक्ट्रिक टेम्पो', '/electric-tempos'], ['सेवा सहयोग', '#support'], ['सम्पर्क', '#contact']],
    contact: 'Contact us',
    topAction: 'नक्सामा हेर्नुहोस्',
    kicker: 'NTSL अटोमोटिभ · विराटनगर शाखा',
    headline: <>कृषि तथा यातायातका लागि <i>सवारी साधन</i></>,
    intro: 'ट्र्याक्टर, इलेक्ट्रिक स्कुटर तथा इलेक्ट्रिक टेम्पोसम्बन्धी जानकारीका लागि NTSL Automotive, विराटनगर शाखामा सम्पर्क गर्नुहोस्।',
    primary: 'सवारी साधन हेर्नुहोस्', secondary: 'शाखामा सम्पर्क गर्नुहोस्',
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
      ['सवारी साधनको जानकारी', 'ट्र्याक्टर, इलेक्ट्रिक स्कुटर तथा इलेक्ट्रिक टेम्पोबारे जानकारी लिनुहोस्।', '०१'],
      ['सर्भिससम्बन्धी सोधपुछ', 'सर्भिस, मर्मत तथा सहयोग व्यवस्थाबारे जानकारी लिनुहोस्।', '०२'],
      ['पार्ट्ससम्बन्धी सोधपुछ', 'पार्ट्स र उपलब्धताबारे जानकारीका लागि सम्पर्क गर्नुहोस्।', '०३']
    ],
    contactLabel: 'सम्पर्क',
    contactTitle: <>हामी तपाईंलाई कसरी<br/><i>सहयोग गर्न सक्छौँ?</i></>,
    contactText: 'तलको फारम वेबसाइटको पूर्वावलोकनका लागि मात्र हो। यसले व्यक्तिगत विवरण पठाउँदैन वा सुरक्षित गर्दैन। कम्पनीबाट पुष्टि भएपछि आधिकारिक फोन र इमेल राखिनेछ।',
    formTitle: 'सोधपुछ पठाउनुहोस्',
    name: 'पूरा नाम', phone: 'फोन नम्बर', subject: 'सोधपुछको विषय', select: 'विषय छान्नुहोस्',
    subjects: ['ट्र्याक्टरसम्बन्धी जानकारी', 'इलेक्ट्रिक स्कुटरसम्बन्धी जानकारी', 'इलेक्ट्रिक टेम्पोसम्बन्धी जानकारी', 'मोडेल उपलब्धता', 'सर्भिस तथा मर्मत', 'स्पेयर पार्ट्स', 'अन्य'],
    message: 'सन्देश', messageHint: 'आफ्नो जिज्ञासा लेख्नुहोस्',
    send: 'Submit enquiry', demo: 'पूर्वावलोकन मात्र। तपाईंको विवरण पठाइएको वा सुरक्षित गरिएको छैन।',
    branch: 'विराटनगर शाखा',
    branchAddress: 'मुनालपथ, विराटनगर, कोशी प्रदेश, नेपाल',
    directions: 'स्थान हेर्नुहोस्',
    footer: 'NTSL Automotive Pvt. Ltd. · विराटनगर, नेपाल',
    footerNote: 'वेबसाइट पूर्वावलोकन। कम्पनीका विवरण पुष्टि हुन बाँकी।',
    privacy: 'गोपनीयता नीति', terms: 'प्रयोगका सर्तहरू', topLink: 'माथि जानुहोस् ↑'
  }
}

const branchMapUrl = 'https://www.google.com/maps/search/?api=1&query=N.T.S.L+Automotive+Pvt.+Ltd+Munal+Path+Biratnagar'

const vehicleImages = {
  tractors: 'https://pngpix.com/images/hd/tractor-with-disc-harrow-png-51-1m87auxxy6g09l74.jpg',
  scooters: 'https://bike.zigcdn.com/processedimages/yakuza-electric/rubie/source/rubie689067a76b314.jpg',
  tempos: 'https://images.livemint.com/img/2022/06/10/original/OSM_STREAM_1654853237834.jpeg'
}


function Logo() {
  return <a className="logo" href="#home" aria-label="NTSL Automotive home">
    <span className="logo-mark">N</span>
    <span><strong>NTSL</strong><small>AUTOMOTIVE PVT. LTD.</small></span>
  </a>
}


const vehiclePages = {
  '/tractors': {
    en: { title: 'Tractors', kicker: 'TRACTOR RANGE', intro: 'Explore tractor models available through NTSL Automotive. Confirm specifications, prices and stock with the Biratnagar branch.', note: 'The tractor catalogue is being prepared. Verified model names, photographs, specifications and prices will appear here after company confirmation.', cta: 'Enquire about tractors', category: 'Agricultural and utility tractors' },
    ne: { title: 'ट्र्याक्टर', kicker: 'ट्र्याक्टर दायरा', intro: 'NTSL Automotive मार्फत उपलब्ध ट्र्याक्टरका मोडेलबारे जानकारी लिनुहोस्। विशेषता, मूल्य तथा मौज्दात विराटनगर शाखाबाट पुष्टि गर्नुहोस्।', note: 'ट्र्याक्टरको सूची तयार हुँदैछ। कम्पनीबाट पुष्टि भएपछि वास्तविक मोडेल, तस्बिर, विशेषता तथा मूल्य यहाँ राखिनेछ।', cta: 'ट्र्याक्टरबारे सोध्नुहोस्', category: 'कृषि तथा उपयोगी ट्र्याक्टर' }
  },
  '/electric-scooters': {
    en: { title: 'Electric Scooters', kicker: 'TWO-WHEELER ELECTRIC SCOOTERS', intro: 'Browse the two-wheeler electric scooter range and contact the Biratnagar branch for product information.', note: 'Verified scooter models, real product photos, specifications, prices and availability will be added after confirmation by NTSL Automotive.', cta: 'Enquire about electric scooters', category: 'Two-wheel electric scooters' },
    ne: { title: 'इलेक्ट्रिक स्कुटर', kicker: 'दुई पाङ्ग्रे इलेक्ट्रिक स्कुटर', intro: 'दुई पाङ्ग्रे इलेक्ट्रिक स्कुटरबारे जानकारी लिनुहोस् र विराटनगर शाखामा सम्पर्क गर्नुहोस्।', note: 'NTSL Automotive बाट पुष्टि भएपछि वास्तविक स्कुटर मोडेल, तस्बिर, विशेषता, मूल्य तथा उपलब्धता यहाँ राखिनेछ।', cta: 'इलेक्ट्रिक स्कुटरबारे सोध्नुहोस्', category: 'दुई पाङ्ग्रे इलेक्ट्रिक स्कुटर' }
  },
  '/electric-tempos': {
    en: { title: 'Electric Tempos', kicker: 'ELECTRIC THREE-WHEELERS', intro: 'Find information about electric tempos and contact the Biratnagar branch for current product details.', note: 'Verified tempo models, passenger or cargo configurations, specifications, prices and availability will be added after company confirmation.', cta: 'Enquire about electric tempos', category: 'Electric three-wheelers' },
    ne: { title: 'इलेक्ट्रिक टेम्पो', kicker: 'इलेक्ट्रिक तीन पाङ्ग्रे सवारी', intro: 'इलेक्ट्रिक टेम्पोसम्बन्धी जानकारीका लागि विराटनगर शाखामा सम्पर्क गर्नुहोस्।', note: 'कम्पनीबाट पुष्टि भएपछि वास्तविक टेम्पो मोडेल, यात्रु वा सामान बोक्ने प्रकार, विशेषता, मूल्य तथा उपलब्धता यहाँ राखिनेछ।', cta: 'इलेक्ट्रिक टेम्पोबारे सोध्नुहोस्', category: 'इलेक्ट्रिक तीन पाङ्ग्रे सवारी' }
  }
}

function VehiclePage({ path }) {
  const [lang, setLang] = useState('en')
  const [menu, setMenu] = useState(false)
  const page = vehiclePages[path][lang]
  const mapUrl = branchMapUrl
  const nav = lang === 'en'
    ? [['Home','/'],['Tractors','/tractors'],['Electric Scooters','/electric-scooters'],['Electric Tempos','/electric-tempos'],['Contact','/#contact']]
    : [['गृहपृष्ठ','/'],['ट्र्याक्टर','/tractors'],['इलेक्ट्रिक स्कुटर','/electric-scooters'],['इलेक्ट्रिक टेम्पो','/electric-tempos'],['सम्पर्क','/#contact']]
  const subject = lang === 'en'
    ? (path === '/tractors' ? 'Tractor information' : path === '/electric-scooters' ? 'Electric scooter information' : 'Electric tempo information')
    : (path === '/tractors' ? 'ट्र्याक्टरसम्बन्धी जानकारी' : path === '/electric-scooters' ? 'इलेक्ट्रिक स्कुटरसम्बन्धी जानकारी' : 'इलेक्ट्रिक टेम्पोसम्बन्धी जानकारी')
  return <div className={lang === 'ne' ? 'site nepali' : 'site'}>
    <div className="topline"><span>NTSL AUTOMOTIVE PRIVATE LIMITED</span><span className="top-location"><MapPin size={12}/>BIRATNAGAR, NEPAL</span><div className="lang"><button className={lang === 'en' ? 'selected' : ''} onClick={() => setLang('en')}>EN</button><span>/</span><button className={lang === 'ne' ? 'selected' : ''} onClick={() => setLang('ne')}>नेपाली</button></div></div>
    <header className="header"><a className="logo" href="/" aria-label="NTSL Automotive home"><span className="logo-mark">N</span><span><strong>NTSL</strong><small>AUTOMOTIVE PVT. LTD.</small></span></a><nav id="primary-navigation" className={menu ? 'nav nav-open' : 'nav'}>{nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenu(false)}>{label}</a>)}</nav><button className="menu-button" onClick={() => setMenu(!menu)} aria-label={menu ? 'Close navigation' : 'Open navigation'} aria-expanded={menu} aria-controls="primary-navigation">{menu ? <X/> : <Menu/>}</button></header>
    <main>
      <section className="category-hero">
        <div className="category-copy"><div className="eyebrow"><span/>{page.kicker}</div><h1>{page.title}</h1><p>{page.intro}</p><a className="primary-button" href={'/#contact'}>{page.cta}<ArrowUpRight size={16}/></a><div className="category-location"><MapPin size={16}/>Munalpath, Biratnagar, Koshi Province</div></div>
        <div className="category-visual"><img src={vehicleImages[path === '/tractors' ? 'tractors' : path === '/electric-scooters' ? 'scooters' : 'tempos']} alt={page.title + ' illustrative photo'} /></div>
      </section>
      <section className="category-catalogue"><div className="section-label">{lang === 'en' ? 'PRODUCT CATALOGUE' : 'उत्पादन सूची'}<span>01 — 01</span></div><div className="catalogue-empty"><span>{lang === 'en' ? 'CATALOGUE IN PREPARATION' : 'उत्पादन सूची तयार हुँदैछ'}</span><h2>{page.category}</h2><p>{page.note}</p><a className="underlined-link" href={'/#contact'}>{lang === 'en' ? 'Ask the Biratnagar branch' : 'विराटनगर शाखामा सोध्नुहोस्'}<ArrowUpRight size={15}/></a></div></section>
    </main>
    <footer className="footer"><a className="logo" href="/"><span className="logo-mark">N</span><span><strong>NTSL</strong><small>AUTOMOTIVE PVT. LTD.</small></span></a><span className="footer-center">NTSL Automotive Pvt. Ltd. · Biratnagar, Nepal</span><div className="footer-links"><a href="/">Home</a><a href={mapUrl} target="_blank" rel="noreferrer">View location</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} NTSL Automotive Pvt. Ltd.</span><span>Website preview. Company details subject to verification.</span></div></footer>
  </div>
}


const legalPages={'/privacy':'privacy','/privacy.html':'privacy','/terms':'terms','/terms.html':'terms','/cookies':'cookies','/cookies.html':'cookies','/accessibility':'accessibility','/accessibility.html':'accessibility','/legal':'legal'}
const legalCopy={
privacy:{title:'Privacy policy',intro:'How this website handles information and respects your privacy.',sections:[
['Who operates this website?','This website is presented for NTSL Automotive Pvt. Ltd. The location shown is its Biratnagar branch at Munalpath, Biratnagar, Koshi Province, Nepal. This is not confirmation of the company’s registered office.'],
['Information submitted through this website','The enquiry form currently displayed is a demonstration only. It does not send, transmit or store the information entered. Do not submit sensitive or confidential information through it. If a live enquiry service is introduced, this policy must be updated before collection begins to identify the information collected, purposes, legal basis, recipients, retention period and privacy contact.'],
['Technical information','The website is hosted online. Hosting and security infrastructure may process limited technical information such as IP address, browser type, device information, request time and security logs to deliver and protect the website. Such processing is subject to the provider’s terms and privacy documentation.'],
['Use, sharing and retention','This website does not currently operate customer accounts, online payments, advertising profiles or analytics tools. The website does not sell personal information. Technical logs may be retained by hosting and security providers for operational periods set by those providers. Any future enquiry system must state its retention schedule and processors.'],
['Your choices and privacy requests','You may choose not to use the demonstration form. For a privacy question or request, contact NTSL Automotive through a verified official company contact channel. The company should publish a dedicated privacy contact before launch.'],
['Policy changes','Review this notice whenever the website adds a live form, analytics, advertising, embedded media, maps, chat, payment or other third-party services. Update the effective date after company approval.']]},
terms:{title:'Terms of use',intro:'Conditions for using the NTSL Automotive website.',sections:[
['Website information','This website provides general information about NTSL Automotive and vehicle categories. Unless a specific offer is expressly published and confirmed by the company, website content is informational and is not an offer to sell or a binding quotation.'],
['Models, prices and availability','Vehicle models, specifications, images, prices, stock, delivery timing, warranty and service arrangements may change and must be confirmed directly with the company or relevant authorised seller before a purchase decision. Illustrative images may not represent the exact product, variant or equipment available in Nepal.'],
['Enquiries and transactions','Sending an enquiry does not create a purchase contract, reservation, financing agreement or guarantee of availability. No online payment or vehicle purchase is currently offered through this website. Any purchase is subject to separate written terms and applicable law.'],
['Product and manufacturer information','Product names, marks and manufacturer materials belong to their respective owners. Publish only product claims, specifications and brand relationships that NTSL Automotive has verified and is authorised to use.'],
['External websites','Links to maps, manufacturers, suppliers or other third-party websites are provided for convenience. NTSL Automotive does not control their content, availability or privacy practices. Review their terms before using them.'],
['Acceptable use','Do not misuse the website, attempt unauthorised access, interfere with its operation, upload harmful code or use its content in a way that infringes another person’s rights.'],
['Consumer rights and applicable law','Nothing in these terms is intended to remove rights that cannot lawfully be excluded. Consumer transactions and disputes remain subject to applicable laws of Nepal, including consumer-protection requirements. Have these terms reviewed by a Nepal-qualified legal professional before publication.']]},
cookies:{title:'Cookie policy',intro:'A clear explanation of cookies and browser storage used by this website.',sections:[
['Current use','This website is not currently configured with advertising or analytics cookies. The notice preference may be saved in your browser’s local storage so the notice does not appear on every visit. Local storage is browser storage and is not itself a cookie.'],
['Essential technologies','The website and its hosting provider may use strictly necessary technical mechanisms for security, delivery and basic functionality. This site does not use them to build advertising profiles.'],
['Third-party services','If maps, video embeds, analytics, chat, social widgets or other third-party services are added, those services may set or read their own cookies or similar technologies. Update this policy and the consent experience before optional services are enabled, where consent is required.'],
['Managing browser storage','You can clear local storage and cookies through your browser settings. Clearing the saved notice preference may cause the notice to appear again. Blocking all storage may affect some website functions.']]},
accessibility:{title:'Accessibility statement',intro:'NTSL Automotive aims to make this website clear and usable across devices.',sections:[
['Our approach','We aim to provide readable text, clear navigation, descriptive image alternatives, keyboard-accessible controls, visible focus states, responsive layouts and reduced-motion support.'],
['Ongoing improvements','Accessibility is an ongoing process. Some content or third-party services may not yet provide the same experience for every visitor. We do not claim formal conformance with a particular accessibility standard at this time.'],
['Report a barrier','If you have difficulty using this website, contact NTSL Automotive through a verified official company contact channel and describe the page and issue. A dedicated accessibility contact should be added before launch.']]},
legal:{title:'Legal information',intro:'Website operator information and important notices.',sections:[
['Website operator','NTSL Automotive Pvt. Ltd. This website currently identifies a Biratnagar branch at Munalpath, Biratnagar, Koshi Province, Nepal. The registered company address, registration number, PAN/VAT details and authorised representative have not been verified for publication here.'],
['Intellectual property','NTSL names, logos and materials may be used only with company authorisation. Third-party product names, photographs, logos and trademarks remain the property of their respective owners.'],
['Before publication','Verify the company’s legal identity, registered address, official contact details, business registrations, product claims, image rights and applicable e-commerce obligations before launching this website as an official commercial channel.']]}}
function CookieNotice(){
 const [visible,setVisible]=useState(false),[details,setDetails]=useState(false)
 useEffect(()=>{try{setVisible(window.localStorage.getItem('ntsl-cookie-notice')!=='dismissed')}catch{setVisible(false)}},[])
 function dismiss(){try{window.localStorage.setItem('ntsl-cookie-notice','dismissed')}catch{}setVisible(false)}
 if(!visible)return null
 return <aside className="cookie-notice" aria-label="Cookie and storage notice"><div className="cookie-copy"><span className="cookie-eyebrow">YOUR PRIVACY</span><strong>Simple by design.</strong><p>This website currently uses essential site technology only. No advertising or analytics cookies are enabled. Your choice to dismiss this notice is saved in this browser.</p>{details&&<p className="cookie-detail">Read our <a href="/cookies">Cookie Policy</a> and <a href="/privacy">Privacy Policy</a>. If optional services are added later, this notice must be updated before they are enabled.</p>}</div><div className="cookie-actions"><button type="button" className="cookie-secondary" onClick={()=>setDetails(!details)}>{details?'Hide details':'Cookie details'}</button><button type="button" className="cookie-primary" onClick={dismiss}>Continue</button></div></aside>
}
function LegalPage({path}){
 const type=legalPages[path],page=legalCopy[type],[lang,setLang]=useState('en')
 return <div className={lang==='ne'?'site nepali legal-site':'site legal-site'}><div className="topline"><span>NTSL AUTOMOTIVE PRIVATE LIMITED</span><span className="top-location"><MapPin size={12}/>BIRATNAGAR, NEPAL</span><div className="lang"><button className={lang==='en'?'selected':''} onClick={()=>setLang('en')}>EN</button><span>/</span><button className={lang==='ne'?'selected':''} onClick={()=>setLang('ne')}>नेपाली</button></div></div><header className="header"><Logo/><nav className="nav legal-nav"><a href="/">Home</a><a href="/#tractors">Vehicles</a><a href="/#contact">Contact</a></nav><a className="legal-back" href="/">Back to NTSL <ArrowUpRight size={15}/></a></header><main className="legal-main"><div className="legal-breadcrumb"><a href="/">NTSL AUTOMOTIVE</a><span>/</span>{type.toUpperCase()}</div><div className="legal-heading"><span className="legal-kicker">INFORMATION & TRANSPARENCY</span><h1>{page.title}</h1><p>{page.intro}</p><small>Website notice · Review date: 24 November 2026</small></div><div className="legal-layout"><aside className="legal-index"><span>ON THIS PAGE</span>{Object.entries(legalCopy).map(([key,value])=><a key={key} className={key===type?'active':''} href={'/'+key}>{value.title}</a>)}</aside><article className="legal-content">{page.sections.map(([heading,body],i)=><section key={heading}><span>{String(i+1).padStart(2,'0')}</span><div><h2>{heading}</h2><p>{body}</p></div></section>)}<div className="legal-review-note"><strong>Publication review required</strong><p>This is a website-content draft, not a legal opinion or a certification of compliance. NTSL Automotive should verify the facts and have the final wording reviewed by a qualified Nepal legal professional before publishing.</p></div><div className="legal-related"><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/cookies">Cookies</a><a href="/accessibility">Accessibility</a><a href="/legal">Legal information</a></div></article></div></main><footer className="footer legal-footer"><Logo/><span className="footer-center">NTSL Automotive Pvt. Ltd. · Biratnagar, Nepal</span><div className="footer-links"><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/cookies">Cookies</a><a href="/legal">Legal</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} NTSL Automotive Pvt. Ltd.</span><a href="/">Return to homepage</a></div></footer><CookieNotice/></div>
}

export default function App() {
  const currentPath = window.location.pathname
  if (legalPages[currentPath]) return <LegalPage path={currentPath} />
  if (vehiclePages[currentPath]) return <VehiclePage path={currentPath} />
  const [lang, setLang] = useState('en')
  const [menu, setMenu] = useState(false)
  const [sent, setSent] = useState(false)
  const [selectedSubject, setSelectedSubject] = useState('')
  const [activeService, setActiveService] = useState(null)
  const t = content[lang]
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window)) { nodes.forEach(node => node.classList.add('is-visible')); return }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12 })
    nodes.forEach(node => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === 'ne' ? 'ne' : 'en'
  }, [lang])

  function submit(event) {
    event.preventDefault()
    setSent(true)
  }

  return <div className={lang === 'ne' ? 'site nepali' : 'site'}>
    <div className="topline"><span>{t.top}</span><span className="top-location"><MapPin size={12}/>{t.location}</span><div className="lang"><button className={lang === 'en' ? 'selected' : ''} onClick={() => setLang('en')}>EN</button><span>/</span><button className={lang === 'ne' ? 'selected' : ''} onClick={() => setLang('ne')}>नेपाली</button></div></div>
    <header className="header"><Logo/><nav id="primary-navigation" className={menu ? 'nav nav-open' : 'nav'}>{t.nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenu(false)}>{label}</a>)}<a className="nav-contact" href={branchMapUrl} target="_blank" rel="noreferrer" onClick={() => setMenu(false)}>{t.topAction}<MapPin size={15}/></a></nav><button className="menu-button" onClick={() => setMenu(!menu)} aria-label={menu ? "Close navigation" : "Open navigation"} aria-expanded={menu} aria-controls="primary-navigation">{menu ? <X/> : <Menu/>}</button></header>
    <main>
      <section className="cinematic-hero" id="home">
        <video className="cinematic-video" autoPlay muted loop playsInline preload="metadata" poster={vehicleImages.tractors} aria-hidden="true">
          <source src="https://videos.pexels.com/video-files/33971961/14413067_1920_1080_50fps.mp4" type="video/mp4" />
        </video>
        <div className="cinematic-shade" />
        <div className="cinematic-content" data-reveal>
          <div className="cinematic-kicker"><span />{t.kicker}</div>
          <p className="cinematic-overline">AGRICULTURE <b>·</b> MOBILITY <b>·</b> ELECTRIC</p>
          <h1 className="cinematic-title">{lang === 'en' ? <><span className="title-line"><span>Built for the</span></span><span className="title-line"><span>way you <em>move.</em></span></span></> : <><span className="title-line"><span>तपाईंको यात्राका</span></span><span className="title-line"><span>लागि <em>उपयुक्त।</em></span></span></>}</h1>
          <p className="cinematic-intro">{t.intro}</p>
          <div className="cinematic-actions">
            <a className="cinematic-primary" href="#tractors">{t.primary}<ArrowUpRight size={17} /></a>
            <a className="cinematic-secondary" href="#contact">{t.secondary}<ChevronRight size={16} /></a>
          </div>
          <div className="cinematic-footnote"><MapPin size={15} />{t.address}</div>
        </div>
        <div className="cinematic-index"><span>01</span><i />NTSL AUTOMOTIVE · BIRATNAGAR</div>
        <div className="cinematic-scroll">SCROLL TO EXPLORE <span>↓</span></div>
      </section>
      <div className="category-marquee" aria-label="Vehicle categories"><div className="marquee-track">{Array.from({length:2}).map((_,i)=><span key={i}>TRACTORS <b>✳</b> ELECTRIC SCOOTERS <b>✳</b> ELECTRIC TEMPOS <b>✳</b> NTSL AUTOMOTIVE <b>✳</b> कृषि तथा यातायात <b>✳</b></span>)}</div></div>
      <div className="trust-strip"><div><span>०१</span><strong>विराटनगर शाखा</strong><small>मुनालपथ, कोशी प्रदेश</small></div><div><span>०२</span><strong>तीन सवारी श्रेणी</strong><small>ट्र्याक्टर · इलेक्ट्रिक स्कुटर · इलेक्ट्रिक टेम्पो</small></div><div><span>०३</span><strong>सिधा सोधपुछ</strong><small>मोडेल, मूल्य र उपलब्धता पुष्टि गर्न</small></div></div>
      <section className="company section" id="company"><div className="section-label">हाम्रो परिचय<span>०१ — ०३</span></div><div className="company-grid"><h2>{t.aboutTitle}</h2><div className="company-copy"><p>{t.aboutText}</p><p className="muted-note">{t.aboutNote}</p><a className="underlined-link" href="#contact">{t.contact}<ArrowUpRight size={15}/></a></div></div></section>
      <section className="vehicle-section section" id="tractors"><div className="section-label">{lang === 'ne' ? 'हाम्रा सवारी साधन' : 'OUR VEHICLES'}<span>02 — 03</span></div><div className="vehicle-intro"><h2>{lang === 'ne' ? 'आफ्नो आवश्यकता अनुसार छान्नुहोस्।' : 'Explore our vehicle categories.'}</h2><p>{lang === 'ne' ? 'मोडेल, मूल्य र उपलब्धता कम्पनीबाट पुष्टि भएपछि थपिनेछ।' : 'Model details, prices and availability will be added after confirmation by the company.'}</p></div><div className="vehicle-categories"><article className="vehicle-card tractor-card"><div className="vehicle-card-image"><img src={vehicleImages.tractors} alt="Agricultural tractor illustrative photo" loading="lazy" /></div><div className="vehicle-card-copy"><span>01</span><h3>{lang === 'ne' ? 'ट्र्याक्टर' : 'Tractors'}</h3><p>{lang === 'ne' ? 'कृषि तथा अन्य कामका लागि।' : 'Agricultural and utility tractors.'}</p><a href="/tractors">{lang === 'ne' ? 'विवरण हेर्नुहोस्' : 'View category'} <ArrowUpRight size={15}/></a></div></article><article className="vehicle-card"><div className="vehicle-card-image"><img src={vehicleImages.scooters} alt="Two-wheel electric scooter illustrative photo" loading="lazy" /></div><div className="vehicle-card-copy"><span>02</span><h3>{lang === 'ne' ? 'इलेक्ट्रिक स्कुटर' : 'Electric scooters'}</h3><p>{lang === 'ne' ? 'मोडेल तथा विशेषता छिट्टै थपिनेछ।' : 'Models and specifications coming soon.'}</p><a href="/electric-scooters">{lang === 'ne' ? 'विवरण हेर्नुहोस्' : 'View category'} <ArrowUpRight size={15}/></a></div></article><article className="vehicle-card"><div className="vehicle-card-image"><img src={vehicleImages.tempos} alt="Electric passenger tempo illustrative photo" loading="lazy" /></div><div className="vehicle-card-copy"><span>03</span><h3>{lang === 'ne' ? 'इलेक्ट्रिक टेम्पो' : 'Electric tempos'}</h3><p>{lang === 'ne' ? 'मोडेल तथा विशेषता छिट्टै थपिनेछ।' : 'Models and specifications coming soon.'}</p><a href="/electric-tempos">{lang === 'ne' ? 'विवरण हेर्नुहोस्' : 'View category'} <ArrowUpRight size={15}/></a></div></article></div></section>
      <section className="showroom-services section" data-reveal>
        <div className="section-label">{lang === 'en' ? 'THE NTSL SHOWROOM' : 'NTSL शोरुम'}<span>03 — 04</span></div>
        <div className="showroom-services-head"><h2>{lang === 'en' ? <>A clearer way to<br/><i>explore your options.</i></> : <>आफ्ना विकल्पहरू<br/><i>सजिलै बुझ्नुहोस्।</i></>}</h2><p>{lang === 'en' ? 'Start with the vehicle category, get the details that matter, then speak with the Biratnagar branch.' : 'सवारीको श्रेणी छान्नुहोस्, आवश्यक जानकारी लिनुहोस् र विराटनगर शाखासँग सम्पर्क गर्नुहोस्।'}</p></div>
        <div className="showroom-service-grid">
          <article><span>01 / DISCOVER</span><div className="showroom-service-icon"><Tractor/></div><h3>{lang === 'en' ? 'Explore vehicle categories' : 'सवारीका श्रेणी हेर्नुहोस्'}</h3><p>{lang === 'en' ? 'Browse tractors, electric scooters and electric tempos in one place.' : 'ट्र्याक्टर, इलेक्ट्रिक स्कुटर र इलेक्ट्रिक टेम्पो एउटै ठाउँमा हेर्नुहोस्।'}</p><a href="#tractors">{lang === 'en' ? 'Browse categories' : 'श्रेणी हेर्नुहोस्'} <ArrowUpRight size={15}/></a></article>
          <article><span>02 / UNDERSTAND</span><div className="showroom-service-icon"><Settings/></div><h3>{lang === 'en' ? 'Ask for product details' : 'उत्पादनको विवरण बुझ्नुहोस्'}</h3><p>{lang === 'en' ? 'Ask the team to confirm model information, specifications and availability.' : 'मोडेल, विशेषता र उपलब्धताबारे टोलीसँग पुष्टि गर्नुहोस्।'}</p><a href="#contact">{lang === 'en' ? 'Make an enquiry' : 'सोधपुछ गर्नुहोस्'} <ArrowUpRight size={15}/></a></article>
          <article><span>03 / CONNECT</span><div className="showroom-service-icon"><MapPin/></div><h3>{lang === 'en' ? 'Visit the Biratnagar branch' : 'विराटनगर शाखामा आउनुहोस्'}</h3><p>{lang === 'en' ? 'Find the Munalpath location and connect with the local branch.' : 'मुनालपथस्थित शाखाको स्थान हेर्नुहोस् र सम्पर्क गर्नुहोस्।'}</p><a href={branchMapUrl} target="_blank" rel="noreferrer">{lang === 'en' ? 'Get directions' : 'नक्सामा हेर्नुहोस्'} <ArrowUpRight size={15}/></a></article>
        </div>
      </section>
      <section className="support section" id="support"><div className="section-label">बिक्रीपछिको सेवा<span>०३ — ०३</span></div><div className="support-heading"><h2>{t.supportTitle}</h2><p>{t.supportText}</p></div><div className="service-list">{t.services.map(([title, desc, num], i) => {const Icon = [Tractor, Wrench, Settings][i];const subject = t.subjects[i === 0 ? 0 : i === 1 ? 4 : 5];return <a className="service-row" href="#service-details" key={title} onClick={() => setActiveService(i)}><span className="service-num">{num}</span><div className="service-icon"><Icon size={21}/></div><div className="service-copy"><h3>{title}</h3><p>{desc}</p><span className="service-action">सोधपुछ गर्नुहोस् <ArrowUpRight size={13}/></span></div><ArrowUpRight className="service-arrow" size={19}/></a>})}</div>{activeService !== null && <div className="service-detail" id="service-details"><div><span className="eyebrow">{t.services[activeService][0]}</span><h3>{t.services[activeService][0]}</h3><p>{t.services[activeService][1]}</p></div><a className="primary-button" href="#contact" onClick={() => setSelectedSubject(t.subjects[activeService === 0 ? 0 : activeService === 1 ? 4 : 5])}>सोधपुछ गर्नुहोस् <ArrowUpRight size={16}/></a></div>}</section>
      <section className="contact-section" id="contact"><div className="contact-left"><div className="eyebrow light"><span/>सम्पर्क तथा जानकारी</div><h2>हामी तपाईंलाई कसरी<br/><i>सहयोग गर्न सक्छौँ?</i></h2><p>{t.contactText}</p><div className="branch-info"><MapPin size={18}/><div><strong>विराटनगर शाखा</strong><span>{t.branchAddress}</span><a href={branchMapUrl} target="_blank" rel="noreferrer">{t.directions}<ArrowUpRight size={13}/></a></div></div></div><form className="contact-form" onSubmit={submit}><div className="form-heading"><strong>सोधपुछ फारम</strong><span>अनलाइन सोधपुछ</span></div><label>{t.name}<input name="name" autoComplete="name" required /></label><label>{t.phone}<input name="phone" type="tel" autoComplete="tel" required placeholder="98XXXXXXXX"/></label><label>{t.subject}<select name="subject" required value={selectedSubject} onChange={event => setSelectedSubject(event.target.value)}><option value="" disabled>{t.select}</option>{t.subjects.map(s => <option key={s}>{s}</option>)}</select></label><label>{t.message}<textarea name="message" rows="3" placeholder={t.messageHint}/></label><button className="primary-button submit" type="submit">Submit enquiry<ArrowUpRight size={16}/></button>{sent && <p className="demo-message" role="status">{t.demo}</p>}<small className="privacy-link"><a href="/privacy.html">{t.privacy}</a></small></form></section>
    </main>
    <footer className="footer"><Logo/><span className="footer-center">{t.footer}</span><div className="footer-links"><a href="/privacy">{t.privacy}</a><a href="/terms">{t.terms}</a><a href="/cookies">Cookies</a><a href="/accessibility">Accessibility</a><a href="/legal">Legal</a><a href="#home">{t.topLink}</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} NTSL Automotive Pvt. Ltd.</span><span>{t.footerNote}</span></div></footer>
    <CookieNotice/>
  </div>
}
