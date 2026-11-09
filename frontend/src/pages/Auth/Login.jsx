import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";

const PAGE_PAR_ROLE = {
  administrateur: "/admin",
  salarie: "/salarie",
  client: "/profile",
};

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setToast(null);

    try {
      const res = await login(email, password);

      console.log("Réponse login :", res); // TEMPORAIRE : à supprimer après le test

      if (!res.success) {
        setToast({ message: res.error, type: "error" });
        return;
      }

      const role = res.user?.role?.name;
      navigate(PAGE_PAR_ROLE[role] || "/", { replace: true });
    } catch (error) {
      console.error(error);
      setToast({
        message: "Impossible de contacter le serveur.",
        type: "error",
      });
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card shadow-lg p-4">
              <h1 className="text-center mb-4">Connexion</h1>

              <form onSubmit={handleSubmit}>
                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Votre email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label">Mot de passe</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Votre mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-dark w-100">
                  Se connecter
                </button>
              </form>

              {/* Toast */}
              {toast && (
                <div className="alert alert-danger mt-3" role="alert">
                  {toast.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
