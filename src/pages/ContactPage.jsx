import BookingForm from "../components/BookingForm";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const faqs = [
  ["How early should I book my bridal appointment?", "Popular wedding dates fill quickly, so reaching out as soon as your date and venue are confirmed is recommended."],
  ["Do you offer on-location makeup?", "Yes. Studio, local on-location and selected outstation appointments can be discussed based on date and schedule."],
  ["Is a bridal trial available?", "Yes. Trials are especially helpful when you want to explore complexion, eye shape, lip tone and hair direction before the event."],
  ["What should I share in my enquiry?", "Your date, occasion, venue, getting-ready time, outfit colours and a few references help us guide you accurately."],
  ["Can I book makeup and hair together?", "Yes. Complete makeup and hair bookings can be planned as one coordinated appointment."],
  ["When is my booking confirmed?", "Your slot is confirmed after availability, timing, location and booking terms have been agreed with the studio."],
];

export default function ContactPage() {
  return (
    <main id="top">
      <SiteHeader />
      <section className="contact-hero">
        <div><p className="eyebrow light"><span /> Contact & bookings</p><h1>Let&apos;s begin<br />with your <em>vision.</em></h1><p>Share the date, the celebration and how you want to feel. We&apos;ll help shape the rest.</p></div>
        <img src="/images/she-red-bride.webp" alt="Signature bridal makeup by She Makeup Studio" />
      </section>

      <section className="booking-section" id="booking">
        <div className="booking-copy"><p className="section-kicker light">Reserve your date</p><h2>Your moment,<br /><em>beautifully planned.</em></h2><p>Complete the form and your details will open as a ready-to-send WhatsApp enquiry.</p><div className="booking-details"><div><span>Appointments</span><strong>Studio & on-location</strong></div><div><span>Availability</span><strong>By prior booking</strong></div><div><span>Location</span><strong>Shared on confirmation</strong></div></div></div>
        <BookingForm />
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-image"><img src="/images/she-salon-interior.webp" alt="Inside She Makeup Studio" /></div>
        <div className="visit-copy"><p className="section-kicker">Visit the studio</p><h2>A quiet space<br />made for <em>you.</em></h2><p>Our private studio works by appointment so every client receives dedicated time, a prepared station and an unrushed experience.</p><div className="visit-details"><div><span>Studio visits</span><strong>Appointment required</strong></div><div><span>Working hours</span><strong>Confirmed with your booking</strong></div><div><span>Bridal travel</span><strong>Local & selected outstation</strong></div></div></div>
      </section>

      <section className="faq-section" id="faq">
        <div className="faq-heading"><p className="section-kicker">Before you book</p><h2>A few helpful<br /><em>answers.</em></h2></div>
        <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<b>+</b></summary><p>{answer}</p></details>)}</div>
      </section>
      <SiteFooter />
    </main>
  );
}
