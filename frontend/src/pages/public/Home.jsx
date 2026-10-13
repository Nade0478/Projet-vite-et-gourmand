import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import SavoirFaire from "../../components/accueil/SavoirFaire";
import AvisAccueil from "../../components/accueil/AvisAccueil";
import joseEtJulie from "../../assets/images/Jose-et-julie.mp4";
import "../../styles/Accueil.css";

export default function Home() {
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);

  // Nettoie le minuteur si on quitte la page
  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const handleEnded = () => {
    timeoutRef.current = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }, 15000); // pause de 30 secondes
  };

  return (
    <>
      <Navbar />

      <div className="container text-center mt-5">
        <h1 className="fw-bold mb-8">Vite et Gourmand</h1>

        <p className="text-muted mx-auto mb-12" style={{ maxWidth: "2000px" }}>
          Découvrez nos menus savoureux, préparés avec soin et adaptés à tous
          les régimes.
        </p>

        <video
          ref={videoRef}
          src={joseEtJulie}
          className="img-fluid rounded mb-2"
          style={{ maxWidth: "1500px" }}
          autoPlay
          controls
          playsInline
          onEnded={handleEnded}
        >
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>

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
