import React from "react";
import ClientSatisfait from "../../assets/images/ClientSatisfait.jpg";
import "../../styles/Accueil.css";


const avis = [
  {
    id: 1,
    nom: "Sophie M.",
    note: 5,
    commentaire:
      "Un menu de Noël délicieux, livré à l'heure. Nos invités ont adoré !",
  },
  {
    id: 2,
    nom: "Marc L.",
    note: 4,
    commentaire:
      "Très bon repas pour notre mariage, produits frais et service soigné.",
  },
  {
    id: 3,
    nom: "Claire D.",
    note: 5,
    commentaire:
      "Julie et José sont à l'écoute et s'adaptent à tous les régimes. Je recommande.",
  },
];

export default function AvisAccueil() {
  return (
    <section className="container text-center my-5">
      <h2 className="fw-bold mb-4">Ils nous font confiance</h2>

      <img
        src={ClientSatisfait}
        alt="JulAvis clients"
        className="img-fluid rounded mb-2"
        style={{ maxWidth: "200px" }}
      />

      <div className="row justify-content-center">
        {avis.map((a) => (
          <div className="col-12 col-md-4 mb-4" key={a.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <p className="text-warning fs-5 mb-2">
                  {"★".repeat(a.note)}
                  {"☆".repeat(5 - a.note)}
                </p>
                <p className="text-muted">« {a.commentaire} »</p>
                <p className="fw-bold mb-0">{a.nom}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
