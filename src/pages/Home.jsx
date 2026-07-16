import "./Home.css";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Our Story", to: "/story" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const services = [
  {
    number: "01",
    title: "Bridal Makeup",
    text: "Radiant, camera-ready artistry designed around your features, outfit and wedding story.",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=88",
  },
  {
    number: "02",
    title: "Hair Artistry",
    text: "Polished blowouts, elegant updos and occasion styling with a modern editorial finish.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=88",
  },
  {
    number: "03",
    title: "Skin Rituals",
    text: "Thoughtful skin preparation and glow-focused rituals for a fresh, healthy-looking finish.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=88",
  },
  {
    number: "04",
    title: "Nail Studio",
    text: "Beautifully detailed manicures, gel finishes and minimal nail art for every mood.",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=88",
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=88",
    alt: "Luxury makeup products arranged for an appointment",
  },
  {
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=88",
    alt: "Professional makeup brushes and beauty products",
  },
  {
    src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=88",
    alt: "Editorial beauty portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=88",
    alt: "Elegant modern salon interior",
  },
  {
    src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=88",
    alt: "Natural glowing makeup look",
  },
  {
    src: "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=900&q=88",
    alt: "Beauty products in soft neutral colours",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 1c.6 9.2 5.8 14.4 15 15-9.2.6-14.4 5.8-15 15C15.4 21.8 10.2 16.6 1 16 10.2 15.4 15.4 10.2 16 1Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="she-home">
      <SiteHeader />

      <section className="hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow">The art of feeling like yourself</p>
          <h1 id="home-title">
            Beauty,
            <span>beautifully</span>
            yours.
          </h1>
          <p className="hero-intro">
            Elevated makeup, hair and beauty experiences created with calm,
            care and an eye for every detail.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="/contact">
              Book an appointment <ArrowIcon />
            </a>
            <a className="text-link" href="/gallery">
              Explore our work <ArrowIcon />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1600&q=90"
            alt="Woman wearing an elegant natural makeup look"
          />
          <div className="hero-stamp">
            <SparkIcon />
            <span>Beauty in every detail</span>
          </div>
          <p className="vertical-note">MAKEUP • HAIR • SKIN • NAILS</p>
        </div>
      </section>

      <section className="manifesto">
        <p className="eyebrow">Welcome to She</p>
        <h2>
          A modern beauty studio where artistry meets intention and every
          appointment feels entirely <em>your own.</em>
        </h2>
      </section>

      <section className="studio-values" aria-label="Our studio values">
        <article>
          <strong>04</strong>
          <span>Signature beauty categories</span>
        </article>
        <article>
          <strong>1:1</strong>
          <span>Personal consultation</span>
        </article>
        <article>
          <strong>100%</strong>
          <span>Tailored to you</span>
        </article>
        <article>
          <strong>Pro</strong>
          <span>Premium products & hygiene</span>
        </article>
      </section>

      <section className="story-section">
        <div className="story-image story-image-main">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=88"
            alt="Warm and elegant beauty studio interior"
            loading="lazy"
          />
        </div>
        <div className="story-copy">
          <p className="eyebrow">Our philosophy</p>
          <h2>More than makeup. A feeling you carry.</h2>
          <p className="lead">
            We believe the best beauty work never hides you—it brings forward
            the details that already make you unforgettable.
          </p>
          <p>
            From the first consultation to the final touch, every look is
            shaped around your features, comfort and personal style. The result
            is considered, effortless and unmistakably you.
          </p>
          <a className="text-link" href="/story">
            Discover our story <ArrowIcon />
          </a>
        </div>
      </section>

      <div className="marquee" aria-label="Our beauty categories">
        <div>
          <span>Makeup</span><i>✦</i><span>Hair</span><i>✦</i><span>Skin</span><i>✦</i><span>Nails</span><i>✦</i>
          <span>Makeup</span><i>✦</i><span>Hair</span><i>✦</i><span>Skin</span><i>✦</i><span>Nails</span><i>✦</i>
        </div>
      </div>

      <section className="services-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">What we do</p>
            <h2>Signature services</h2>
          </div>
          <p>
            Thoughtful beauty experiences, refined techniques and a finish that
            feels as good in person as it looks in photographs.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-image">
                <img src={service.image} alt={service.title} loading="lazy" />
                <span>{service.number}</span>
              </div>
              <div className="service-body">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="/services" aria-label={`Explore ${service.title}`}>
                  <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>

        <a className="button button-outline" href="/services">
          View all services <ArrowIcon />
        </a>
      </section>

      <section className="experience-section">
        <div className="experience-image">
          <img
            src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1500&q=88"
            alt="Stylist creating a polished salon look"
            loading="lazy"
          />
        </div>
        <div className="experience-copy">
          <p className="eyebrow">The She experience</p>
          <h2>Designed for calm. Styled for you.</h2>
          <p>
            Unhurried appointments, considered consultations and beautiful
            results—delivered in a space where you can settle in and enjoy the
            transformation.
          </p>
          <ul>
            <li><span>01</span> Personal style consultation</li>
            <li><span>02</span> Skin-first preparation</li>
            <li><span>03</span> High-performance professional products</li>
            <li><span>04</span> Finishing guidance for lasting wear</li>
          </ul>
          <a className="button button-light" href="/contact">
            Plan your visit <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="gallery-section">
        <div className="section-heading gallery-heading">
          <div>
            <p className="eyebrow">Inside our world</p>
            <h2>#SheStudio</h2>
          </div>
          <a className="text-link" href="/gallery">
            View the full gallery <ArrowIcon />
          </a>
        </div>

        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <figure key={image.src} className={`gallery-item gallery-item-${index + 1}`}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <figcaption>She Makeup Studio</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="promise-section">
        <div className="promise-mark"><SparkIcon /></div>
        <p className="eyebrow">Our promise</p>
        <blockquote>
          “A look that photographs beautifully, feels comfortable and still
          looks like you.”
        </blockquote>
        <p className="promise-note">Thoughtful artistry • Honest guidance • Beautiful details</p>
      </section>

      <section className="booking-section" id="book">
        <div className="booking-copy">
          <p className="eyebrow">Your moment, beautifully considered</p>
          <h2>Let’s create your look.</h2>
          <p>
            Tell us about your occasion, preferred style and date. Our team will
            help you choose the right service and appointment.
          </p>
          <a className="button button-light" href="/contact">
            Book a consultation <ArrowIcon />
          </a>
        </div>
        <div className="booking-image">
          <img
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=88"
            alt="Elegant finished beauty look"
            loading="lazy"
          />
        </div>
      </section>

      <SiteFooter />

      <a className="floating-book" href="/contact">
        <span>Book</span><ArrowIcon />
      </a>
    </main>
  );
}