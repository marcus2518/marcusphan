import React from "react";
import "./Contact.css";

interface ContactProps {
  info: {
    name: string;
    email: string;
    phone: string;
    github: string;
  };
}

const Contact: React.FC<ContactProps> = ({ info }) => {
  return (
    <div className="contact-container">
      <h1>Contact Information</h1>
      <p>
        <strong>Name:</strong> {info.name}
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href={`mailto:${info.email}`}>{info.email}</a>
      </p>
      <p>
        <strong>Phone:</strong> <a href={`tel:${info.phone}`}>{info.phone}</a>
      </p>
      <p>
        <strong>GitHub:</strong>{" "}
        <a href={info.github} target="_blank" rel="noopener noreferrer">
          {info.github}
        </a>
      </p>
    </div>
  );
};

export default Contact;
