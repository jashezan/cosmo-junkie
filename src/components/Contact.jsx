import React from "react";

const Contact = () => {
  return (
    <section id="contact" name="contact" className="container">
      <h2>Get in Touch</h2>
      <p className="leading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quo,
        cum voluptas harum corrupti dicta expedita exercitationem modi soluta.
        Molestias!
      </p>
      <form>
        <input type="text" name="cosmo-junkie-name" placeholder="" />
        <input type="email" name="cosmo-junkie-email" placeholder="" />
        <textarea name="cosmo-junkie-name" placeholder=""></textarea>
        <button type="submit">Send Flare</button>
      </form>
    </section>
  );
};

export default Contact;
