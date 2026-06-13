import React, { useState } from "react";
import Button from "../../components/ui/Button";
import Toast from "../../components/ui/Toast";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";

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

    const response = await fetch(
      "https://vite-gourmand-back-tfgw.onrender.com/api/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );

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

      <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Inscription</h1>

        <form onSubmit={handleSubmit}>
          <input
            name="prenom"
            placeholder="Prénom"
            className="w-full border p-2 rounded mb-3"
            onChange={handleChange}
          />

          <input
            name="nom"
            placeholder="Nom"
            className="w-full border p-2 rounded mb-3"
            onChange={handleChange}
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded mb-3"
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Mot de passe"
            className="w-full border p-2 rounded mb-3"
            onChange={handleChange}
          />

          <input
            name="telephone"
            placeholder="Téléphone"
            className="w-full border p-2 rounded mb-3"
            onChange={handleChange}
          />

          <Button type="submit" className="w-full">
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
