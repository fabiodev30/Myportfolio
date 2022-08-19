import React, { useRef } from "react";
import ContactForm from "./ContactForm";
import Divider from "./UI/Divider";

const Contact = () => {
  return (
    <div className="container text-white">
      <h1 className="text-center pt-5">CONTACT</h1>
      <div>
        <Divider />
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
