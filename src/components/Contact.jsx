// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import "./Contact.css";

const Contact = ({ item }) => {
  return (
    <>
      <div className="contact-wrapper">
        <figure>
          <img className="contact-image" src={ item.photo } alt="profilepicture" />
        </figure>

        <div className="contact-data">
          <h2 className="contact-name">{ item.name }</h2>
          <hr />
          <p className="contact-phone"><span>Phone Number : </span>{ item.phone }</p>
          <span className="contact-email"><span>Email : </span>{ item.email }</span>
        </div>
      </div>
    </>
  )
}

export default Contact;