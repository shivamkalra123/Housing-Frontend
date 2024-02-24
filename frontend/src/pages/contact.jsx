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
        "https://housing-frontend-hdiw.vercel.app/send-email",
        formData
      );
      console.log(response.data);
      // Handle success, e.g., show a success message to the user
    } catch (error) {
      console.error("Error sending email:", error.message);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
  );
};

export default ContactForm;
