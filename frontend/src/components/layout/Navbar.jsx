import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../components/layout/Navbar.css";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        {/* LOGO */}
        <Link className="navbar-brand" to="/" onClick={() => setOpen(false)}>
          <img src={logo} alt="Vite & Gourmand" className="logo-img" />
        </Link>

        {/* BURGER */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAVIGATION */}
        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          {/* CENTRE */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setOpen(false)}>
                Accueil
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/menus"
                onClick={() => setOpen(false)}
              >
                Menu
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/apropos"
                onClick={() => setOpen(false)}
              >
                À propos
              </Link>
            </li>
          </ul>

          {/* DROITE : bouton Réserver */}
          <div className="ms-lg-3 mt-3 mt-lg-0">
            <Link to="/reservation" className="btn btn-reserver">
              Réserver
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
