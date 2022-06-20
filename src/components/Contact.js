// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import "./Contact.css";

const Contact = ({ contact }) => {
  return (
    <>
      <div className="contact-wrapper">
        <figure>
          <img className="contact-image" src={ contact.photo } alt="profilepicture" />
        </figure>

        <div className="contact-data">
          <h2 className="contact-name">{ contact.name }</h2>
          <hr />
          <p className="contact-phone">{ contact.phone }</p>
          <span className="contact-email">{ contact.email }</span>
        </div>
      </div>
    </>
  )
}

export default Contact;