import React from "react";

export default function CardPlat({ plat, onEdit, onDelete }) {
  return (
    <div className="card shadow-sm mb-4">
      {/* Image */}
      {plat.image && (
        <img
          src={plat.image}
          alt={plat.nom}
          className="card-img-top"
          style={{ height: "180px", objectFit: "cover" }}
        />
      )}

      <div className="card-body">
        {/* Nom */}
        <h3 className="card-title">{plat.nom}</h3>

        {/* Description */}
        <p className="card-text text-muted">{plat.description}</p>

        {/* Prix */}
        <p className="fw-bold fs-5">{plat.prix} €</p>

        {/* Allergènes */}
        {plat.allergenes?.length > 0 && (
          <p className="text-danger small">
            Allergènes : {plat.allergenes.map((a) => a.nom).join(", ")}
          </p>
        )}

        {/* Boutons */}
        <div className="d-flex justify-content-between mt-3">
          <button onClick={() => onEdit(plat)} className="btn btn-primary">
            Modifier
          </button>

          <button onClick={() => onDelete(plat.id)} className="btn btn-danger">
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}
