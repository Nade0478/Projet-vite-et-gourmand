import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function Conditions() {
  return (
    <>
      <Navbar />

      <div className="container my-5" style={{ maxWidth: "900px" }}>
        <h1 className="fw-bold text-center mb-5">
          Conditions générales de vente
        </h1>

        <section className="mb-4">
          <h2 className="h4 fw-bold">1. Objet</h2>
          <p>
            Les présentes conditions générales de vente (CGV) régissent les
            commandes de menus passées sur le site{" "}
            <strong>Vite et Gourmand</strong>. Toute commande implique
            l'acceptation sans réserve de ces conditions.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h4 fw-bold">2. Produits et prix</h2>
          <p>
            Les menus proposés sont décrits sur le site avec leur prix par
            personne, toutes taxes comprises. Un nombre minimum de personnes
            peut être exigé selon le menu. Les prix peuvent être modifiés à tout
            moment, mais le prix appliqué est celui affiché au moment de la
            commande.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h4 fw-bold">3. Commande</h2>
          <p>
            Pour commander, le client doit créer un compte, choisir un menu,
            indiquer le nombre de personnes, la date et l'adresse de livraison,
            puis valider sa commande. Un délai minimum de [À COMPLÉTER] jours
            est nécessaire entre la commande et la date de livraison.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h4 fw-bold">4. Paiement</h2>
          <p>
            Le paiement s'effectue selon les modalités suivantes : [À COMPLÉTER
            : paiement en ligne, acompte, paiement à la livraison…].
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h4 fw-bold">5. Livraison</h2>
          <p>
            Les livraisons sont effectuées dans la zone suivante : [À
            COMPLÉTER]. Les frais de livraison sont de [À COMPLÉTER]. Le client
            doit être présent à l'adresse indiquée au créneau convenu.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h4 fw-bold">6. Annulation et modification</h2>
          <p>
            Toute annulation ou modification doit être demandée au plus tard [À
            COMPLÉTER] jours avant la date de livraison. Passé ce délai, la
            commande est due en totalité : [À COMPLÉTER].
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h4 fw-bold">7. Droit de rétractation</h2>
          <p>
            Les repas préparés sur commande sont des produits périssables et
            personnalisés : le droit de rétractation de 14 jours ne s'applique
            généralement pas à ce type de produits. [À VÉRIFIER avec un
            professionnel du droit selon ta situation.]
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h4 fw-bold">8. Allergènes et régimes</h2>
          <p>
            Les informations sur les allergènes et les régimes alimentaires sont
            données à titre indicatif. En cas d'allergie, le client doit le
            signaler avant de commander. Nos produits peuvent contenir des
            traces d'allergènes.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h4 fw-bold">9. Réclamations</h2>
          <p>
            Toute réclamation doit être adressée à : [À COMPLÉTER : email ou
            téléphone] dans un délai de [À COMPLÉTER] heures après la
            livraison.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h4 fw-bold">10. Données personnelles</h2>
          <p>
            Les données personnelles sont traitées conformément à notre page
            « Mentions légales ».
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h4 fw-bold">11. Droit applicable</h2>
          <p>
            Les présentes CGV sont soumises au droit français. En cas de
            litige, les tribunaux français sont seuls compétents.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
}