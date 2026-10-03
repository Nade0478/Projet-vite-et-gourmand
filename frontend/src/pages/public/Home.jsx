import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import SavoirFaire from "../../components/accueil/SavoirFaire";
import AvisAccueil from "../../components/accueil/AvisAccueil";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="container text-center mt-5">
        <h1 className="fw-bold mb-4">Vite & Gourmand</h1>

        <p className="text-muted mx-auto mb-4" style={{ maxWidth: "800px" }}>
          Découvrez nos menus savoureux, préparés avec soin et adaptés à tous
          les régimes.
        </p>

        <Link to="/menus">
          <Button variant="primary">Voir les menus</Button>
        </Link>
      </div>
      <SavoirFaire />

      <AvisAccueil />

      <Footer />
    </>
  );
}
