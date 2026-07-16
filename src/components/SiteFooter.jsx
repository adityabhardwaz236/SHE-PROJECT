import "./SiteFooter.css";
export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <section className="footer-column">
            <h3>Explore</h3>

            <nav className="footer-links" aria-label="Footer navigation">
              <a href="/">Home</a>
              <a href="/story">Our Story</a>
              <a href="/services">Services</a>
              <a href="/gallery">Gallery</a>
              <a href="/contact">Contact Us</a>
            </nav>
          </section>

          <section className="footer-column">
            <h3>Contact Us</h3>

            <div className="footer-links">
              <a href="/contact#booking">Book an Appointment</a>

              {/* Replace the number below with the studio WhatsApp number */}
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Us
              </a>

              {/* Replace these details with the actual salon information */}
             
           
            </div>
          </section>

          <section className="footer-column footer-connect">
            <h3>Stay Connected!</h3>

            <p>
              Be the first to know about new bridal looks, beauty services,
              exclusive offers and studio updates.
            </p>

            <div className="footer-socials">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle
                    className="social-dot"
                    cx="17.4"
                    cy="6.7"
                    r="1"
                  />
                </svg>
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5.2 8.4H2.1V21h3.1V8.4ZM3.65 2.8A1.85 1.85 0 1 0 3.65 6.5a1.85 1.85 0 0 0 0-3.7ZM21.9 13.8c0-3.8-2-5.6-4.7-5.6-2.15 0-3.1 1.2-3.65 2V8.4h-3.1V21h3.1v-6.25c0-1.65.3-3.25 2.35-3.25 2 0 2.05 1.9 2.05 3.35V21h3.1l.85-7.2Z" />
                </svg>
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.2 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.25-1.5 1.55-1.5h1.7V3.6c-.3-.04-1.3-.13-2.5-.13-2.45 0-4.15 1.5-4.15 4.25V9.9H8v3.1h2.8v8h3.4Z" />
                </svg>
              </a>
            </div>
          </section>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} <strong>SHE: Salon &amp; Make-up Studio.</strong> All
            Rights Reserved.
          </p>

          <div className="footer-legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <span aria-hidden="true">|</span>
            <a href="/terms">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>

      <a className="footer-top" href="#top" aria-label="Back to top">
        ↑
      </a>
    </footer>
  );
}