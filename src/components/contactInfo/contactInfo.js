/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import "./contactInfo.css";
import phoneIcon from "../../images/phone.png";
import checkIcon from "../../images/checkmark.svg";
import ContactForm from "../contactForm/contactForm";
import { useState } from "react";

const ContactInfo = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="contact-container">
      <div className="contact-contentContainer">
        <div className="contact-leftColumn">
          {submitted ? (
            <div style={{ textAlign: "center" }}>
              <img
                src={checkIcon}
                style={{ width: "40px", marginBottom: "20px" }}
              />
              <h2>Your request has been sent.</h2>
              <p style={{ fontSize: "18px" }}>
                One of our team members will reach out to you shortly.
              </p>
            </div>
          ) : (
            <ContactForm submitted={() => setSubmitted(true)} />
          )}
        </div>
        <div className="contact-rightColumn">
          <h1>Talk to Sales.</h1>
          <p style={{ fontSize: "18px" }}>
            Give us some info so the right person can get back to you.
          </p>
          <span className="contact-phoneSection">
            <div className="contact-phoneIcon">
              <img src={phoneIcon} />
            </div>
            Need help now? Call{" "}
            <a style={{ marginLeft: "4px" }} href="tel:18006649073">
              1-800-664-9073.
            </a>
          </span>
          <p>
            <b>More questions?</b>
          </p>
          <span>
            For billing and tech support, visit <a href="#">Salesforce Help.</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
