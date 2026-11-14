import React from "react";

export default function AvisModeration({ avis, onModerer }) {
  if (!avis || avis.length === 0) {
    return <p className="text-muted">Aucun avis pour le moment.</p>;
  }

  return (
    <>
      {avis.map((a) => (
        <div key={a.id} className="card shadow-sm mb-3">
          <div className="card-body">
            <p className="fw-semibold mb-1">
              {a.user?.prenom} {a.user?.nom} : {a.note}/5
            </p>
            <p className="text-muted mb-2">{a.commentaire}</p>
            <p className="small mb-3">Statut : {a.statut}</p>
            <button
              type="button"
              className="btn btn-success btn-sm me-2"
              onClick={() => onModerer(a.id, "validé")}
            >
              Valider
            </button>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              onClick={() => onModerer(a.id, "refusé")}
            >
              Refuser
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
