import React, { useState } from "react";

export default function HorairesForm({ horaire, onSave }) {
  const [ouverture, setOuverture] = useState(horaire.heure_ouverture || "");
  const [fermeture, setFermeture] = useState(horaire.heure_fermeture || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(horaire.id, {
      heure_ouverture: ouverture,
      heure_fermeture: fermeture,
    });
  };

  return (
    <form className="row g-2 align-items-end mb-3" onSubmit={handleSubmit}>
      <div className="col-md-3 fw-semibold">{horaire.jour}</div>
      <div className="col-md-3">
        <label htmlFor={`ouv-${horaire.id}`} className="form-label">
          Ouverture
        </label>
        <input
          id={`ouv-${horaire.id}`}
          type="time"
          className="form-control"
          value={ouverture}
          onChange={(e) => setOuverture(e.target.value)}
        />
      </div>
      <div className="col-md-3">
        <label htmlFor={`fer-${horaire.id}`} className="form-label">
          Fermeture
        </label>
        <input
          id={`fer-${horaire.id}`}
          type="time"
          className="form-control"
          value={fermeture}
          onChange={(e) => setFermeture(e.target.value)}
        />
      </div>
      <div className="col-md-3">
        <button type="submit" className="btn btn-primary">
          Enregistrer
        </button>
      </div>
    </form>
  );
}
