import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const services = [
  { number: "01", title: "Bridal Artistry", copy: "A considered bridal look built around your features, outfit, jewellery and the light of your celebration.", image: "/images/she-red-bride.webp", tag: "Brides" },
  { number: "02", title: "Hair Styling", copy: "Modern waves, elegant buns and occasion-ready styling designed to hold beautifully from ceremony to dance floor.", image: "/images/she-makeup-hair.webp", tag: "Hair" },
  { number: "03", title: "Soft Glam", copy: "Fresh skin, thoughtful definition and a polished finish for intimate events, parties and portraits.", image: "/images/she-makeup-skin.webp", tag: "Makeup" },
];

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="hero home-hero">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Signature beauty, made personal</p>
          <h1>Step into<br />your <em>glow.</em></h1>
          <p className="hero-intro">Bespoke makeup and hair artistry for brides, celebrations and every beautiful moment in between.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="/contact#booking">Reserve your date <span>→</span></a>
            <a className="text-link" href="/services">Explore services <span>↗</span></a>
          </div>
          <div className="hero-notes"><span>Bridal</span><i /><span>Occasion</span><i /><span>Editorial</span></div>
        </div>
        <div className="hero-visual">
          <img src="/images/she-makeup-hero.webp" alt="Signature bridal makeup by She Makeup Studio" />
          <div className="hero-stamp" aria-label="She — beauty in every detail">
            <strong>She</strong><span>Beauty in<br />every detail</span>
          </div>
          <div className="hero-caption"><span>01</span><p>Elegant artistry<br />for your story</p></div>
        </div>
      </section>

      <div className="service-strip"><span>Bridal Makeup</span><b>✦</b><span>HD Makeup</span><b>✦</b><span>Hair Styling</span><b>✦</b><span>Skin Prep</span><b>✦</b><span>Draping</span></div>

      <section className="intro-section">
        <p className="section-kicker">The She experience</p>
        <div className="intro-grid">
          <h2>Beauty that looks like <em>you,</em><br />only more luminous.</h2>
          <div>
            <p>Every appointment begins with listening. We shape your look around your features, outfit and the way you want to feel—never around a template.</p>
            <a className="text-link" href="/story">Meet the studio <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="services-section home-services">
        <div className="section-heading">
          <div><p className="section-kicker light">Made for your moments</p><h2>Our signature<br /><em>services</em></h2></div>
          <div className="section-aside"><p>Premium products, calm preparation and unrushed artistry from first brush to final touch.</p><a href="/services">View every service ↗</a></div>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-image"><img src={service.image} alt={service.title} /><span>{service.tag}</span></div>
              <div className="service-content"><span>{service.number}</span><h3>{service.title}</h3><p>{service.copy}</p><a href="/services">Discover <span>↗</span></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-story">
        <div className="home-story-image"><img src="/images/she-artist-at-work.webp" alt="She Makeup Studio artist creating a bridal look" /></div>
        <div className="home-story-copy">
          <p className="section-kicker">The ritual of getting ready</p>
          <h2>A little calm<br />before the <em>magic.</em></h2>
          <p>Your appointment is more than a service. It is the pause before a milestone—a space to settle in, feel understood and watch your vision come to life with intention.</p>
          <div className="detail-list"><span>Thoughtful consultation</span><span>Professional luxury products</span><span>Camera-ready, comfortable wear</span></div>
          <a className="button button-outline" href="/story">Our philosophy <span>↗</span></a>
        </div>
      </section>

      <section className="home-lookbook">
        <div className="lookbook-heading"><div><p className="section-kicker">The She edit</p><h2>Looks we <em>love.</em></h2></div><a className="text-link" href="/gallery">Open the lookbook <span>↗</span></a></div>
        <div className="home-gallery">
          <figure className="tall"><img src="/images/she-red-bride.webp" alt="Wine red bridal makeup look" /><figcaption>Bridal · The Maharani Edit</figcaption></figure>
          <figure><img src="/images/she-makeup-skin.webp" alt="Fresh luminous soft glam" /><figcaption>Soft Glam · Skin First</figcaption></figure>
          <figure><img src="/images/she-makeup-hair.webp" alt="Glossy salon waves" /><figcaption>Hair · Signature Waves</figcaption></figure>
        </div>
      </section>

      <section className="love-section">
        <div className="love-mark">“</div>
        <blockquote>The calmest part of getting ready was knowing every detail was understood. The final look felt polished, effortless and completely like me.</blockquote>
        <p>— A She bride</p>
      </section>

      <section className="home-cta">
        <img src="/images/she-salon-interior.webp" alt="She Makeup Studio interior" />
        <div><p className="section-kicker light">Your chair is waiting</p><h2>Let&apos;s make your<br />moment <em>beautiful.</em></h2><a className="button button-light" href="/contact#booking">Book an appointment <span>↗</span></a></div>
      </section>

      <SiteFooter />
      <a className="floating-book" href="/contact#booking"><span>Book</span><strong>↗</strong></a>
    </main>
  );
}
