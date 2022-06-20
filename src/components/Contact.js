// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import "./Contact.css";

const Contact = ({ data }) => {
  return (
    <>
      <div className="contact-wrapper">
        <figure>
          <img className="contact-image" src={ data.photo } alt="profilepicture" />
        </figure>

        <div className="contact-data">
          <h2 className="contact-name">{ data.name }</h2>
          <hr />
          <p className="contact-phone"><span>Phone Number : </span>{ data.phone }</p>
          <span className="contact-email"><span>Email : </span>{ data.email }</span>
        </div>
      </div>
    </>
  )
}

export default Contact;