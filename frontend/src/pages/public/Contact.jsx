import React, { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Toast from "../../components/ui/Toast";
import "../../components/forms/Form.css";
import "../../styles/Accueil.css";

export default function Contact() {
  const [form, setForm] = useState({
    email: "",
    titre: "",
    message: "",
  });

  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast({ message: "Message envoyé !", type: "success" });
  };

  return (
    <>
      <Navbar />

      <div className="contact-wrapper">
        <h1 className="contact-title">Contactez-nous</h1>
        <p className="contact-subtitle">
          Une question ? Un projet ? Nous sommes à votre écoute.
        </p>

        <form className="form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            required
            onChange={handleChange}
          />

          <label>Titre du message</label>
          <input
            type="text"
            name="titre"
            placeholder="Sujet"
            required
            onChange={handleChange}
          />

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Votre message..."
            rows="5"
            required
            onChange={handleChange}
          />

          <button type="submit" className="form-btn">
            Envoyer le message
          </button>
        </form>

        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </div>

      <Footer />
    </>
  );
}
