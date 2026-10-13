import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function MentionsLegales() {
  return (
    <>
      <Navbar />

      <div className="container my-5" style={{ maxWidth: "900px" }}>
        <h1 className="fw-bold text-center mb-5">Mentions légales</h1>

        <section className="mb-4">
          <h2 className="h4 fw-bold">1. Éditeur du site</h2>
          <p>
            Le site <strong>Vite et Gourmand</strong> est édité par :
          </p>
          <ul className="list-unstyled">
            <li>Raison sociale : [À COMPLÉTER]</li>
            <li>Forme juridique : [À COMPLÉTER]</li>
            <li>Adresse : [À COMPLÉTER]</li>
            <li>SIRET : [À COMPLÉTER]</li>
            <li>Téléphone : [À COMPLÉTER]</li>
            <li>Email : [À COMPLÉTER]</li>
            <li>Directeurs de la publication : Julie et José</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="h4 fw-bold">2. Hébergement</h2>
          <ul className="list-unstyled">
            <li>Hébergeur : [À COMPLÉTER]</li>
            <li>Adresse : [À COMPLÉTER]</li>
            <li>Site web : [À COMPLÉTER]</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="h4 fw-bold">3. Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu du site (textes, images, vidéos, logo,
            graphismes) est la propriété de Vite et Gourmand, sauf mention
            contraire. Toute reproduction, représentation ou diffusion, totale
            ou partielle, sans autorisation écrite préalable est interdite.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h4 fw-bold">4. Données personnelles</h2>
          <p>
            Les données collectées (nom, email, adresse de livraison, etc.)
            servent uniquement à la gestion des commandes et de la relation
            client. Conformément au RGPD et à la loi Informatique et Libertés,
            vous disposez d'un droit d'accès, de rectification, d'effacement,
            d'opposition et de portabilité de vos données.
          </p>
          <p>
            Pour exercer ces droits, écrivez à : [À COMPLÉTER : email de
            contact].
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h4 fw-bold">5. Cookies</h2>
          <p>
            Le site peut utiliser des cookies nécessaires à son fonctionnement
            (connexion, panier). Vous pouvez les désactiver dans les paramètres
            de votre navigateur, mais certaines fonctionnalités risquent de ne
            plus fonctionner.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h4 fw-bold">6. Responsabilité</h2>
          <p>
            Vite et Gourmand s'efforce de fournir des informations exactes, mais
            ne peut garantir l'absence d'erreurs ou d'omissions. Les
            informations sur les allergènes sont données à titre indicatif : en
            cas d'allergie, contactez-nous avant de commander.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h4 fw-bold">7. Droit applicable</h2>
          <p>
            Les présentes mentions légales sont soumises au droit français. En
            cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
}
