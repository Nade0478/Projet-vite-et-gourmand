import React, { useState } from "react";

export default function RegimeEditor({ onSubmit }) {
  const [nom, setNom] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nom });
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
      {/* Nom du régime */}
      <div className="mb-3">
        <label className="form-label">Nom du régime</label>
        <input
          type="text"
          className="form-control"
          placeholder="Ex : Végétarien, Vegan, Sans gluten..."
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
      </div>

      {/* Bouton */}
      <button type="submit" className="btn btn-success w-100">
        Valider
      </button>
    </form>
  );
}
