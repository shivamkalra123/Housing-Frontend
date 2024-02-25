import React, { useState } from "react";
import axios from "axios";
import "./contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    senderEmail: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://backend-vbxp.onrender.com/send-email",
        formData
      );

      console.log(response.data);
      setFormData({ name: "", senderEmail: "", message: "" }); // Reset the form
      window.alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error.message);
      // Handle error, e.g., show an error message to the user
    }
  };

  // Customize your email and timings information here
  const emailHandle = "faithsolutions.info@gmail.com";
  const timings = "Monday to Friday, 8:30 AM - 3:00 PM";

  return (
    <div className="parentContact">
      <div className="contact-form-container">
        <div className="info-box">
          <p>
            For inquiries, please contact us at: <strong>{emailHandle}</strong>
          </p>
          <p>Office hours: {timings}</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="senderEmail">Your Email:</label>
          <input
            type="email"
            id="senderEmail"
            name="senderEmail"
            value={formData.senderEmail}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
