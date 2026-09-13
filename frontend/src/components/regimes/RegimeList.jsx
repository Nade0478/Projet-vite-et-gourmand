import React from "react";

export default function RegimeList({ regimes = [], onEdit, onDelete }) {
  return (
    <div className="container mt-4">
      {/* Titre */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Liste des régimes</h2>

        <button className="btn btn-success">Ajouter un régime</button>
      </div>

      {/* Si aucun régime */}
      {regimes.length === 0 && (
        <div className="alert alert-info">
          Aucun régime enregistré pour le moment.
        </div>
      )}

      {/* Liste */}
      <div className="row g-4">
        {regimes.map((regime) => (
          <div key={regime.id} className="col-12 col-md-6 col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{regime.nom}</h5>

                <div className="d-flex justify-content-between mt-3">
                  <button
                    className="btn btn-primary"
                    onClick={() => onEdit(regime)}
                  >
                    Modifier
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(regime.id)}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
