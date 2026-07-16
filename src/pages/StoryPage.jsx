import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export default function StoryPage() {
  return (
    <main id="top">
      <SiteHeader />
      <section className="page-hero story-hero">
        <div className="page-hero-copy">
          <p className="eyebrow light"><span /> Our story</p>
          <h1>Beauty with<br /><em>intention.</em></h1>
          <p>She was created for women who want to feel seen, never styled into someone else.</p>
        </div>
        <div className="page-hero-image"><img src="/images/she-salon-interior.webp" alt="The warm, elegant interior of She Makeup Studio" /><span>Inside the studio · A calm space for transformation</span></div>
      </section>

      <section className="manifesto-section">
        <p className="section-kicker">What “She” means</p>
        <div className="manifesto-grid">
          <h2>Not a trend.<br />Not a template.<br /><em>A feeling.</em></h2>
          <div>
            <p className="lead">To us, beauty begins before the first brush touches skin. It begins in the conversation—in understanding how you dress, what makes you comfortable and how you want to remember the moment.</p>
            <p>Our approach is refined but never rigid. We work with your natural features, build skin in light layers and choose details that belong to your face. The result is polished, expressive and beautifully familiar.</p>
          </div>
        </div>
      </section>

      <section className="story-editorial">
        <div className="story-editorial-main"><img src="/images/she-artist-at-work.webp" alt="Makeup artist working carefully with a bride" /></div>
        <div className="story-editorial-side"><img src="/images/she-makeup-skin.webp" alt="Fresh luminous makeup finish" /><p>Every face has its own rhythm. Our work is to find it, honour it and let it glow.</p></div>
      </section>

      <section className="values-section">
        <div className="values-heading"><p className="section-kicker light">Our point of view</p><h2>The She<br /><em>standard.</em></h2></div>
        <div className="values-grid">
          <article><span>01</span><h3>Personal over prescribed</h3><p>We create with you, not simply for you. Every reference is translated through your features and personality.</p></article>
          <article><span>02</span><h3>Skin should look alive</h3><p>Breathable preparation, thoughtful coverage and luminosity in the right places are at the centre of our work.</p></article>
          <article><span>03</span><h3>Calm is part of the service</h3><p>Clear planning, organised kits and unhurried appointments let you enjoy the ritual of getting ready.</p></article>
          <article><span>04</span><h3>Details make the difference</h3><p>From the balance of an eyeliner to the placement of a pin, the smallest choices complete the whole look.</p></article>
        </div>
      </section>

      <section className="ritual-page">
        <div className="ritual-page-image"><img src="/images/she-red-bride.webp" alt="Indian bride with refined wine and gold styling" /></div>
        <div className="ritual-page-copy">
          <p className="section-kicker">The She ritual</p>
          <h2>How your look<br />comes <em>together.</em></h2>
          <ol>
            <li><span>01</span><div><h3>Listen</h3><p>We begin with your event, wardrobe, references, comfort and the feeling you want to carry.</p></div></li>
            <li><span>02</span><div><h3>Curate</h3><p>Texture, tones, hair and finishing details are brought into one considered direction.</p></div></li>
            <li><span>03</span><div><h3>Create</h3><p>Your look is built patiently, checked in every light and adjusted until it feels right.</p></div></li>
            <li><span>04</span><div><h3>Reveal</h3><p>The final touch: comfortable, confident and ready to become part of your memory.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="simple-cta"><p>Have a celebration in mind?</p><h2>Tell us your vision.<br /><em>We&apos;ll shape the look.</em></h2><a className="button button-dark" href="/contact#booking">Start your enquiry <span>↗</span></a></section>
      <SiteFooter />
    </main>
  );
}
