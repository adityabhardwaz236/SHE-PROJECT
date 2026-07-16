import GalleryGrid from "../components/GalleryGrid";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export default function GalleryPage() {
  return (
    <main id="top">
      <SiteHeader />
      <section className="gallery-page-hero">
        <div><p className="eyebrow"><span /> The She lookbook</p><h1>Every face,<br />its own <em>story.</em></h1></div>
        <p>Bridal artistry, skin-led soft glam, modern hair and quiet moments from inside the studio.</p>
      </section>
      <section className="gallery-page-section"><GalleryGrid /></section>
      <section className="gallery-quote"><img src="/images/she-artist-at-work.webp" alt="Artist at work behind the scenes" /><div><p className="section-kicker light">Behind every look</p><h2>Time. Trust.<br /><em>And tiny details.</em></h2><p>The finished image is only one moment. Behind it are conversations, careful choices, a well-prepared canvas and the calm that lets someone feel entirely themselves.</p><a className="text-link light-link" href="/story">Discover our process <span>↗</span></a></div></section>
      <section className="simple-cta"><p>Your look belongs here.</p><h2>Ready to create<br /><em>something beautiful?</em></h2><a className="button button-dark" href="/contact#booking">Reserve your date <span>↗</span></a></section>
      <SiteFooter />
    </main>
  );
}
