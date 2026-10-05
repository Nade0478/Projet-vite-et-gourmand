import React from "react";
import JulieJose from "../../assets/images/Julie-jose.png";
import "../../styles/Accueil.css";


export default function SavoirFaire() {
  return (
    <div className="container text-center mt-5">

      <h1 className="fw-bold mb-4">Notre Savoir-Faire</h1>

      <p className="text-muted mx-auto mb-4" style={{ maxWidth: "800px" }}>
        Depuis 25 ans, Julie et José mettent leur passion et leur expertise au
        service de vos événements. De Noël à Pâques, en passant par vos
        célébrations privées, nous créons des menus sur-mesure qui raviront vos
        convives. Notre engagement : des produits frais, locaux et de saison,
        travaillés avec soin pour vous offrir une expérience culinaire
        inoubliable.
      </p>

      <img
        src={JulieJose}
        alt="Julie et José, fondateurs de Vite & Gourmand"
        className="img-fluid rounded mb-2"
        style={{ maxWidth: "1500px" }}
      />
    </div>
  );
}
