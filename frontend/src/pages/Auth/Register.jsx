import React, { useState } from "react";
import Button from "../../components/ui/Button";
import Toast from "../../components/ui/Toast";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000/api";

export default function Register() {
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    password: "",
    telephone: "",
  });

  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) {
      setToast({ message: data.error || "Erreur", type: "error" });
      return;
    }

    setToast({ message: "Inscription réussie", type: "success" });
  };

  return (
    <>
      <Navbar />

      <div
        className="card p-4 shadow mx-auto mt-5"
        style={{ maxWidth: "28rem" }}
      >
        <h1 className="fs-2 fw-bold mb-4">Inscription</h1>

        <form onSubmit={handleSubmit}>
          <input
            name="prenom"
            placeholder="Prénom"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            name="nom"
            placeholder="Nom"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Mot de passe"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            name="telephone"
            placeholder="Téléphone"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <Button type="submit" className="btn btn-primary w-100">
            S'inscrire
          </Button>
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
