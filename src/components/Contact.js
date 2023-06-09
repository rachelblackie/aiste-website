import React from "react";
import "../styles/Contact.css";

function Contact(props) {
  let content = {
    English: {
      title: "Contact",
    },
    Español: {
      title: "Contacto",
    },
  };
  props.language === "Español"
    ? (content = content.Español)
    : (content = content.English);
  return (
    <div className="text-center m-5" id="contact-section">
      <h1>{content.title}</h1>
      <h4 className="contact-info">
        <a
          href="#contact-section"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-links"
        >
          <i class="fa-brands fa-whatsapp"></i> +34 555 55 55 55
        </a>{" "}
      </h4>
      <h4 className="contact-info">
        <a
          href="#contact-section"
          target="_blank"
          rel="noopenener noreferrer"
          className="contact-links"
        >
          <i class="fa-solid fa-square-envelope"></i> placeholder@gmail.com
        </a>
      </h4>
    </div>
  );
}
export default Contact;
