import React from "react";

export default function ThemeList({ themes = [], onEdit, onDelete, onCreate }) {
  return (
    <div className="container mt-4">
      {/* Titre + bouton */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Liste des thèmes</h2>

        <button className="btn btn-success" onClick={onCreate}>
          Ajouter un thème
        </button>
      </div>

      {/* Aucun thème */}
      {themes.length === 0 && (
        <div className="alert alert-info">
          Aucun thème enregistré pour le moment.
        </div>
      )}

      {/* Grille Bootstrap */}
      <div className="row g-4">
        {themes.map((theme) => (
          <div key={theme.id} className="col-12 col-md-6 col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{theme.nom}</h5>

                <div className="d-flex justify-content-between mt-3">
                  <button
                    className="btn btn-primary"
                    onClick={() => onEdit(theme)}
                  >
                    Modifier
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(theme.id)}
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
