import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Our Story", to: "/our-story" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

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
      <Link to="/" className="brand" aria-label="SHE Makeup Studio home">
        <span className="brand-emblem">
          <img src="/she-logo.jpeg" alt="SHE Makeup Studio logo" />
        </span>

        <span className="brand-copy">
          <strong>SHE</strong>
          <small>Makeup Studio</small>
        </span>
      </Link>

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
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <Link to="/contact#booking" className="header-cta">
        Book now <span aria-hidden="true">→</span>
      </Link>
    </header>
  );
}