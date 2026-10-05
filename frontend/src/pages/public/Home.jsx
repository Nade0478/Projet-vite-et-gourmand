import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import SavoirFaire from "../../components/accueil/SavoirFaire";
import AvisAccueil from "../../components/accueil/AvisAccueil";
import PageAccueilResto from "../../assets/images/PageAccueilResto.jpg";
import "../../styles/Accueil.css";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="container text-center mt-5">
        <h1 className="fw-bold mb-8">Vite et Gourmand</h1>

        <p className="text-muted mx-auto mb-12" style={{ maxWidth: "2000px" }}>
          Découvrez nos menus savoureux, préparés avec soin et adaptés à tous
          les régimes.
        </p>
        <img
          src={PageAccueilResto}
          alt="Resto Vite & Gourmand"
          className="img-fluid rounded mb-2"
          style={{ maxWidth: "1500px" }}
        />

        <Link to="/menus">
          <Button variant="black">Voir les menus</Button>
        </Link>
      </div>
      <SavoirFaire />

      <AvisAccueil />

      <Footer />
    </>
  );
}
