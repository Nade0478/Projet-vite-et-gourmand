import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("auth_token");

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        {/* Logo / Titre */}
        <Link className="navbar-brand fw-bold" to="/">
          Vite & Gourmand
        </Link>

        {/* Burger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#headerNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation */}
        <div className="collapse navbar-collapse" id="headerNav">
          <ul className="navbar-nav ms-auto">
            {/* Si NON connecté */}
            {!token && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Connexion
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Inscription
                  </Link>
                </li>
              </>
            )}

            {/* Si connecté */}
            {token && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/menus">
                    Menus
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/plats">
                    Plats
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/commandes">
                    Commandes
                  </Link>
                </li>

                <li className="nav-item">
                  <button
                    onClick={handleLogout}
                    className="btn btn-danger ms-lg-3"
                  >
                    Déconnexion
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
