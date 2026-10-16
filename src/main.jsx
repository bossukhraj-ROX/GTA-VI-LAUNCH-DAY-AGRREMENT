import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const STRIPE_URL = 'https://buy.stripe.com/cNi00dgcGdfxdUdesJbMQ07';
const INSTAGRAM_URL = 'https://www.instagram.com/gtavi.contract/';

function InstagramIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="icon"><rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5"/><circle cx="12" cy="12" r="4.1"/><circle cx="17.5" cy="6.7" r="1" className="fill"/></svg>;
}
function SunIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24" className="toggle-icon"><circle cx="12" cy="12" r="3.6"/><path d="M12 2.25v2.1M12 19.65v2.1M21.75 12h-2.1M4.35 12h-2.1M18.9 5.1l-1.5 1.5M6.6 17.4l-1.5 1.5M18.9 18.9l-1.5-1.5M6.6 6.6L5.1 5.1"/></svg>; }
function MoonIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24" className="toggle-icon"><path d="M19.5 15.2A7.8 7.8 0 0 1 8.8 4.5 8.3 8.3 0 1 0 19.5 15.2Z"/></svg>; }
function BrandMark() { return <div className="brand-mark" aria-label="GTA VI inspired original brand mark"><span>VI</span><b>VI</b></div>; }

function Header({ dark, setDark }) {
  return <header className="site-header">
    <a href="#home" className="brand-lockup"><BrandMark /><span><strong>GTA VI</strong><small>LAUNCH DAY AGREEMENT</small></span></a>
    <nav className="main-nav" aria-label="Main navigation"><a href="#home">Home</a><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="instagram-link"><InstagramIcon /> <span>Instagram</span></a><button className="theme-toggle" type="button" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}><SunIcon /><span className={`switch ${dark ? 'is-dark' : ''}`}><i /></span><MoonIcon /></button></nav>
  </header>;
}

function PurchaseButton({ compact = false }) { return <a className={`purchase-button ${compact ? 'compact' : ''}`} href={STRIPE_URL} target="_blank" rel="noreferrer"><span className="lock">▣</span> Get the Agreement — £10 <span aria-hidden="true">→</span></a>; }

function AgreementPreview() {
  return <article className="agreement" aria-label="Preview of the Launch Day Agreement">
    <div className="agreement-inner">
      <div className="agreement-top"><span>INDEPENDENT NOVELTY AGREEMENT</span><span>NO. 13 / VI</span></div>
      <div className="agreement-brand"><span className="mini-mark">VI</span><p>GTA VI<br/><small>LAUNCH DAY EDITION</small></p></div>
      <p className="agreement-kicker">THE LAUNCH DAY AGREEMENT</p>
      <h2>Launch Day<br/><em>Agreement</em></h2>
      <div className="rule" />
      <section className="clause featured"><h3>CLAUSE 01 <span>THE 13-YEAR WAIT</span></h3><p>After thirteen years of anticipation, the undersigned hereby declares that GTA VI launch day is a priority event and shall be treated with the respect it deserves.</p></section>
      <div className="clause-grid"><section className="clause"><h3>CLAUSE 02</h3><p>Launch day priorities shall be respected.</p></section><section className="clause"><h3>CLAUSE 03</h3><p>No distractions shall interfere with the occasion.</p></section><section className="clause"><h3>CLAUSE 04</h3><p>Good vibes only.</p></section></div>
      <section className="clause"><h3>CLAUSE 05 <span>THE RULES</span></h3><ol><li>Protect the launch-day schedule.</li><li>Keep snacks within reasonable reach.</li><li>Celebrate responsibly and in style.</li></ol></section>
      <div className="signatures"><div><span>PLAYER SIGNATURE</span><i /></div><div><span>DATE</span><i /></div></div>
      <div className="agreement-foot">Independent fan-made novelty agreement. Not legal advice.</div>
    </div>
  </article>;
}

const benefits = [
  ['01', 'Mark the end of the long wait', 'Turn 13 years of anticipation into a proper launch-day occasion.'],
  ['02', 'The launch-day agreement', 'A finished novelty agreement with its own rules, clauses and signature section.'],
  ['03', 'Keep a personal copy for life', 'One purchase. A digital copy to keep and print. No subscription.']
];

function Benefits() { return <section className="benefits" aria-labelledby="benefits-title"><div className="sr-only" id="benefits-title">Product benefits</div>{benefits.map(([number, title, copy]) => <article className="benefit" key={number}><span className="benefit-number">{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</section>; }

const pageContent = {
  terms: { title: 'Draft terms', eyebrow: 'PLEASE REVIEW BEFORE LAUNCH', sections: [
    ['What this is', 'The GTA VI Launch Day Agreement is an independent, fan-made novelty product. It is designed as a humorous keepsake for fans and is not a Rockstar Games product.'],
    ['Purchase and delivery', 'The price is £10 for one purchase. Once the PDF is ready and digital delivery has been configured, the buyer will receive a downloadable copy of the agreement. Delivery is not live on this site yet.'],
    ['Personal use', 'The buyer may save and print their own copy for personal use. The agreement is prewritten and is not a customisation service.'],
    ['Important limits', 'This novelty agreement is not legal advice, does not guarantee time away from work or any other outcome, and is not intended to be legally enforceable.'],
    ['Intellectual property', 'GTA VI and related marks belong to their respective owners. This independent product is not affiliated with, endorsed by or sponsored by Rockstar Games.'],
    ['Your rights and contact', 'Nothing in these terms limits consumer rights that cannot legally be excluded. Before launch, add your customer support email and the missing business details needed for a final review.']
  ]},
  refunds: { title: 'Draft refund policy', eyebrow: 'FAIR, TRANSPARENT, UK-FACING', sections: [
    ['The digital product', 'This is a one-page novelty agreement intended to be supplied as a PDF. Digital delivery has not been configured yet, so this page does not claim that a download is currently available.'],
    ['Refunds and legal rights', 'You keep your statutory rights where digital content is faulty, misdescribed or not delivered. If something goes wrong with an order, contact us so we can investigate and put it right.'],
    ['Cancellation rights', 'For immediate digital delivery, cancellation rights can be affected only where the legal requirements are met, including express consent to begin supply and acknowledgement of the resulting effect. Payment alone does not mean those rights have been waived.'],
    ['How to contact us', 'For refund or delivery questions, use the customer support route shown on the Contact page. The support email must be added before launch.']
  ]},
  privacy: { title: 'Draft privacy notice', eyebrow: 'YOUR INFORMATION', sections: [
    ['What this website does', 'This website does not use analytics, advertising trackers or non-essential cookies. It presents one product and links to checkout.'],
    ['Checkout information', 'Stripe processes payment and checkout information when you choose to purchase. Stripe handles that information under its own applicable privacy terms. This website does not collect card details.'],
    ['Information we may receive', 'The site itself does not currently provide a customer account or contact form. Information submitted through Stripe or a future support route may be processed to provide the purchase or answer your question.'],
    ['Before launch', 'Add the correct data controller details, privacy contact and customer support email before publishing a final notice. Do not add tracking without an appropriate consent approach.']
  ]}
};

function InfoPage({ type }) { const content = pageContent[type]; return <main className="info-page"><div className="info-heading"><p className="eyebrow">{content.eyebrow}</p><h1>{content.title}</h1><p className="info-intro">A clear working draft for the GTA VI Launch Day Agreement. Complete the highlighted launch details before publishing as final legal information.</p></div><div className="info-body">{content.sections.map(([title, copy]) => <section key={title}><h2>{title}</h2><p>{copy}</p></section>)}</div><a href="#contact" className="contact-callout">Questions or launch details to add? <span>Visit Contact →</span></a></main>; }

function ContactPage() { return <main className="info-page contact-page"><div className="info-heading"><p className="eyebrow">GET IN TOUCH</p><h1>Contact</h1><p className="info-intro">For questions about the agreement, payment or digital delivery, use the support route below.</p></div><section className="contact-card"><span className="contact-icon">@</span><div><p className="eyebrow">CUSTOMER SUPPORT</p><h2>[ADD YOUR CUSTOMER SUPPORT EMAIL BEFORE LAUNCH]</h2><p>This placeholder must be replaced before launch. Do not publish it as a real contact address.</p></div></section><p className="launch-note"><strong>Launch checklist</strong><br/>Add a working support email to this page and the legal drafts. Also complete the missing business and privacy-controller details before treating these pages as final.</p></main>; }

function Footer() { return <footer className="site-footer"><a href="#home" className="footer-brand"><BrandMark /><span><strong>GTA VI</strong><small>LAUNCH DAY AGREEMENT</small></span></a><div className="footer-links"><a href="#terms">Terms</a><a href="#refunds">Refund Policy</a><a href="#privacy">Privacy</a><a href="#contact">Contact</a></div><p>Independent fan-made novelty product. Not affiliated with or endorsed by Rockstar Games.<br/>All trademarks belong to their respective owners.</p><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon /></a></footer>; }

function Home() { return <main><section className="hero"><div className="hero-copy"><p className="eyebrow">THE WAIT IS ALMOST OVER</p><h1>Your launch day.<br/><em>Your rules.</em></h1><h2>You’ve waited long enough.<br/>Make launch day yours.</h2><p className="hero-description">A premium, printable novelty agreement for GTA VI fans. Mark the end of the 13-year wait with a dedicated launch-day agreement designed to make the occasion memorable.</p><div className="purchase"><div className="price-row"><strong>£10</strong><span>One payment.<br/>Yours to keep.</span></div><PurchaseButton /><p>Lifetime access to your downloaded copy. No subscription.</p><small>Secure checkout via Stripe</small></div></div><div className="preview-wrap"><AgreementPreview /><div className="preview-note">PRODUCT PREVIEW<br/><span>PDF delivery is being prepared.</span></div></div></section><Benefits /></main>; }

function App() { const [dark, setDark] = useState(() => { const saved = localStorage.getItem('gta-theme'); return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches; }); const [route, setRoute] = useState(window.location.hash.replace('#', '') || 'home'); useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light'; localStorage.setItem('gta-theme', dark ? 'dark' : 'light'); }, [dark]); useEffect(() => { const onHash = () => setRoute(window.location.hash.replace('#', '') || 'home'); window.addEventListener('hashchange', onHash); return () => window.removeEventListener('hashchange', onHash); }, []); const page = route === 'terms' || route === 'refunds' || route === 'privacy' ? <InfoPage type={route} /> : route === 'contact' ? <ContactPage /> : <Home />; return <div className="app-shell"><Header dark={dark} setDark={setDark} />{page}<Footer /></div>; }

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
