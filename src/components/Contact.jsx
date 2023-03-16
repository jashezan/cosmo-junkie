import React from "react";

const Contact = () => {
  return (
    <section id="contact" name="contact" className="container">
      <h2>Get in Touch</h2>
      <p className="leading">
      Don't let yesterday take up too much of today.
      </p>
      <form>
        <label htmlFor="cosmo-junkie-name">Name</label>
        <input type="text" name="cosmo-junkie-name" placeholder="John Doe" required/>
        <label htmlFor="cosmo-junkie-email">Email</label>
        <input type="email" name="cosmo-junkie-email" placeholder="john@example.com" required/>
        <label htmlFor="cosmo-junkie-msg">Message</label>
        <textarea name="cosmo-junkie-msg" placeholder="Your Message" required></textarea>
        <button type="submit">Send Flare</button>
      </form>
    </section>
  );
};

export default Contact;
