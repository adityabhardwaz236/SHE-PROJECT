import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const serviceMenus = [
  { number: "01", category: "Bridal", title: "Your day, unmistakably you", image: "/images/she-red-bride.webp", items: [
    ["Signature Bridal Makeup", "Complete makeup, skin preparation, lashes and finishing"],
    ["Engagement & Reception", "Polished event artistry adapted to your outfit and setting"],
    ["Bridal Trial", "A collaborative preview of complexion, eyes, lips and overall direction"],
    ["Bridal Party", "Cohesive makeup for mothers, sisters and the people beside you"],
  ]},
  { number: "02", category: "Occasion", title: "Elevated for every celebration", image: "/images/she-makeup-skin.webp", items: [
    ["Soft Glam", "Luminous skin, softly sculpted features and refined definition"],
    ["HD Occasion Makeup", "Long-wearing, camera-ready artistry for evening events"],
    ["Editorial Beauty", "Concept-led makeup for campaigns, portraits and creative shoots"],
    ["Guest Makeup", "Fresh, elegant styling for wedding and festive guests"],
  ]},
  { number: "03", category: "Hair", title: "The finish that frames everything", image: "/images/she-makeup-hair.webp", items: [
    ["Signature Waves", "Glossy, touchable movement with secure event-ready hold"],
    ["Bridal Buns & Updos", "Balanced structure designed around jewellery and draping"],
    ["Contemporary Styling", "Ponytails, textured knots and clean modern silhouettes"],
    ["Hair Preparation", "Blow-dry, extension placement and styling foundation"],
  ]},
];

export default function ServicesPage() {
  return (
    <main id="top">
      <SiteHeader />
      <section className="page-hero services-hero">
        <div className="page-hero-copy"><p className="eyebrow light"><span /> Signature services</p><h1>Artistry for<br /><em>every moment.</em></h1><p>Considered beauty services created around your face, your style and the way your celebration unfolds.</p></div>
        <div className="page-hero-image"><img src="/images/she-makeup-hero.webp" alt="Elegant bridal artistry" /><span>Bridal · Occasion · Hair · Editorial</span></div>
      </section>

      <section className="service-intro"><p className="section-kicker">Our approach</p><h2>Every service includes thoughtful consultation, professional skin preparation and finishing designed to last beautifully.</h2></section>

      <section className="service-menu-section">
        {serviceMenus.map((service, index) => (
          <article className={`service-menu ${index % 2 ? "reverse" : ""}`} key={service.category}>
            <div className="service-menu-image"><img src={service.image} alt={`${service.category} services`} /></div>
            <div className="service-menu-copy">
              <div className="service-menu-label"><span>{service.number}</span><p>{service.category}</p></div>
              <h2>{service.title}</h2>
              <div className="service-list">
                {service.items.map(([name, description]) => <div key={name}><h3>{name}</h3><p>{description}</p><span>↗</span></div>)}
              </div>
              <a className="button button-outline" href="/contact#booking">Enquire about {service.category} <span>↗</span></a>
            </div>
          </article>
        ))}
      </section>

      <section className="add-ons-section">
        <div><p className="section-kicker light">Complete the look</p><h2>Finishing<br /><em>touches.</em></h2></div>
        <div className="add-ons-grid">
          <article><span>01</span><h3>Saree & Dupatta Draping</h3><p>Clean, secure draping tailored to your outfit, jewellery and desired silhouette.</p></article>
          <article><span>02</span><h3>Hair Accessories</h3><p>Thoughtful placement of fresh flowers, pins, veils and traditional bridal pieces.</p></article>
          <article><span>03</span><h3>Lashes & Skin Prep</h3><p>Professional preparation and individual lash choices included where the look calls for them.</p></article>
        </div>
      </section>

      <section className="service-note"><div><p>Good to know</p><h2>Your booking is reserved only after availability is confirmed. Early-morning, on-location and outstation appointments can be discussed during your enquiry.</h2></div><a className="button button-dark" href="/contact#booking">Check availability <span>↗</span></a></section>
      <SiteFooter />
    </main>
  );
}
