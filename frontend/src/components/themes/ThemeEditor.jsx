import React, { useState } from "react";

export default function ThemeEditor({ onSubmit }) {
  const [nom, setNom] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nom });
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
      {/* Nom du thème */}
      <div className="mb-3">
        <label className="form-label">Nom du thème</label>
        <input
          type="text"
          className="form-control"
          placeholder="Ex : Noël, Pâques, Anniversaire..."
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
