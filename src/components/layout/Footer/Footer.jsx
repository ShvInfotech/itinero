import "./Footer.css";

const productLinks = ["Ask Vero", "Flights", "Hotels & Stays"];
const exploreLinks = ["Flights", "Hotels & Stays"];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* ── Top row ── */}
        <div className="footer__top">

          {/* Brand column */}
          <section className="footer__brand">
            <div className="footer__logo" aria-label="itinero">
              <span>itin</span><em>ero</em>
            </div>
            <p className="footer__tagline">
              Itinero Travels Private Limited is your intelligent travel
              companion. Discover unbeatable global deals, smart routing,
              and seamless booking all powered by advanced AI. Travel
              smarter, everywhere.
            </p>
            <div className="footer__socials">
              {/* Facebook */}
              <a href="#" className="footer__social" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="footer__social" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* TikTok */}
              <a href="#" className="footer__social" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.88a8.25 8.25 0 0 0 4.83 1.55V7a4.85 4.85 0 0 1-1.06-.31z"/>
                </svg>
              </a>
              {/* Medium */}
              <a href="#" className="footer__social" aria-label="Medium">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="footer__social" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                </svg>
              </a>
            </div>
          </section>

          {/* Product column */}
          <nav className="footer__col" aria-label="Product">
            <h3 className="footer__col-heading">Product</h3>
            {productLinks.map((l) => <a key={l} href="#" className="footer__col-link">{l}</a>)}
          </nav>

          {/* Explore column */}
          <nav className="footer__col" aria-label="Explore">
            <h3 className="footer__col-heading">Explore</h3>
            {exploreLinks.map((l) => <a key={l} href="#" className="footer__col-link">{l}</a>)}
          </nav>

          {/* Contact column */}
          <section className="footer__col footer__col--contact" aria-label="Contact">
            <h3 className="footer__col-heading">Contact</h3>
            <a href="https://maps.google.com" className="footer__contact-row">
              <span className="footer__contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#F97211" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </span>
              <span>123 AI Boulevard, Tech Park,<br/>San Francisco, CA 94107</span>
            </a>
            <a href="tel:+18005550199" className="footer__contact-row">
              <span className="footer__contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#F97211" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.31h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.1 6.1l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
              <span>+1 (800) 555-0199</span>
            </a>
            <a href="mailto:support@itinero.company" className="footer__contact-row">
              <span className="footer__contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#F97211" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              <span>support@itinero.company</span>
            </a>
          </section>
        </div>

        {/* ── Bottom bar ── */}
        <div className="footer__bottom">
          <span>© 2026 Itinero Travels Private Limited. All rights reserved.</span>
          <nav aria-label="Legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Do Not Sell or Share My Personal Information</a>
          </nav>
        </div>

      </div>
    </footer>
  );
}
