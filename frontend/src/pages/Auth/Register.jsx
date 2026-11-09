import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import Toast from "../../components/ui/Toast";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000/api";

export default function Register() {
  const navigate = useNavigate();

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

    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        // Laravel renvoie les erreurs de validation dans data.errors
        const firstError = data.errors
          ? Object.values(data.errors)[0][0]
          : null;

        setToast({
          message: firstError || data.error || data.message || "Erreur",
          type: "error",
        });
        return;
      }

      setToast({
        message: "Inscription réussie. Redirection vers la connexion...",
        type: "success",
      });

      setTimeout(() => navigate("/login"), 1500);
    } catch (error) {
      setToast({ message: "Erreur réseau", type: "error" });
    }
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
            value={form.prenom}
            onChange={handleChange}
            required
          />

          <input
            name="nom"
            placeholder="Nom"
            className="form-control mb-3"
            value={form.nom}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="form-control mb-3"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Mot de passe (6 caractères minimum)"
            className="form-control mb-3"
            value={form.password}
            onChange={handleChange}
            minLength={6}
            required
          />

          <input
            name="telephone"
            placeholder="Téléphone"
            className="form-control mb-3"
            value={form.telephone}
            onChange={handleChange}
            required
          />

          <Button type="submit" className="btn btn-dark w-100">
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
