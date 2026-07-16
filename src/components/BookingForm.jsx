"use client";

import { useState } from "react";

export default function BookingForm() {
  const [ready, setReady] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Hello She Makeup Studio!",
      `I’m ${form.get("name")}.`,
      `I’d like to enquire about ${form.get("service")} for ${form.get("date")}.`,
      `My WhatsApp number is ${form.get("phone")}.`,
      form.get("message") ? `A little more: ${form.get("message")}` : "",
    ].filter(Boolean).join(" ");

    setReady(true);
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label><span>Your name</span><input type="text" name="name" placeholder="Enter your full name" required /></label>
      <label><span>Phone number</span><input type="tel" name="phone" placeholder="Your WhatsApp number" required /></label>
      <label>
        <span>Choose a service</span>
        <select name="service" defaultValue="" required>
          <option value="" disabled>Select a service</option>
          <option>Bridal Makeup</option>
          <option>Engagement / Reception</option>
          <option>Party & Occasion Makeup</option>
          <option>Hair Styling</option>
          <option>Editorial / Photoshoot</option>
        </select>
      </label>
      <label><span>Event date</span><input type="date" name="date" required /></label>
      <label className="field-wide"><span>Tell us more</span><textarea name="message" rows={3} placeholder="Event, venue, preferred look or any questions" /></label>
      <button className="button button-light field-wide" type="submit">Continue on WhatsApp <span>↗</span></button>
      {ready && <p className="form-note field-wide" role="status">Your enquiry is ready in WhatsApp. Send it there to complete your request.</p>}
    </form>
  );
}
