import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const submit = (e) => {
    e.preventDefault();
    const serviceId = "service_556cxac";
    const templateId = "template_pmppbv7";
    const publicKey = "mxIEVG7OuaXUUXTab";
    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    document.getElementById("message").value = "";
    document.getElementById("email").value = "";
    document.getElementById("username").value = "";
  };
  return (
    <form ref={form} onSubmit={submit}>
      <div className="form-group">
        <label for="username">Name:</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="user_name"
          required
          placeholder="Please enter yor name..."
        />
      </div>
      <div className="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="user_email"
          placeholder="Please enter yor email..."
          required
        />
      </div>
      <div className="form-group">
        <label for="exampleFormControlTextarea1">Message:</label>
        <textarea
          className="form-control"
          id="message"
          name="message"
          rows="3"
          placeholder="Please enter yor message..."
          required
        ></textarea>
      </div>
      <div className="float-end">
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
