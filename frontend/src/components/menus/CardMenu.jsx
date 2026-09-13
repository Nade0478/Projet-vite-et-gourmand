import React from "react";

export default function CardMenu({ menu, onEdit, onDelete }) {
  return (
    <div className="card shadow-sm mb-4">
      {/* Image */}
      {menu.image && (
        <img
          src={menu.image}
          alt={menu.nom}
          className="card-img-top"
          style={{ height: "180px", objectFit: "cover" }}
        />
      )}

      <div className="card-body">
        {/* Nom */}
        <h3 className="card-title">{menu.nom}</h3>

        {/* Description */}
        <p className="card-text text-muted">{menu.description}</p>

        {/* Prix */}
        <p className="fw-bold fs-5">{menu.prix} €</p>

        {/* Régime */}
        {menu.regime && (
          <span className="badge bg-success mb-2">
            Régime : {menu.regime.nom}
          </span>
        )}

        {/* Boutons */}
        <div className="d-flex justify-content-between mt-3">
          <button onClick={() => onEdit(menu)} className="btn btn-primary">
            Modifier
          </button>

          <button onClick={() => onDelete(menu.id)} className="btn btn-danger">
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}
