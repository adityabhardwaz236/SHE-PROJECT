import { useEffect, useState } from "react";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Our Story", to: "/story" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeWithEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeWithEscape);

    return () => {
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, []);

  return (
    <header className={`site-header ${menuOpen ? "menu-is-open" : ""}`}>
      <a href="/" className="brand" aria-label="SHE Makeup Studio home">
        <span className="brand-emblem">
          <img src="/she-logo.jpeg" alt="SHE Makeup Studio logo" />
        </span>

        <span className="brand-copy">
          <strong>SHE</strong>
          <small>Salon & Make-up Studio</small>
        </span>
      </a>

      <button
        type="button"
        className="menu-toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((current) => !current)}
      >
        <span />
        <span />
      </button>

      <nav
        id="mobile-navigation"
        className={`nav-links ${menuOpen ? "open" : ""}`}
        aria-label="Main navigation"
      >
        {navigation.map((item) => (
          <a
            key={item.to}
            href={item.to}
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a href="/contact#booking" className="header-cta">
        Book now <span aria-hidden="true">→</span>
      </a>
    </header>
  );
}