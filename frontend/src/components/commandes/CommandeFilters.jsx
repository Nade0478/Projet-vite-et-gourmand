import React, { useState } from "react";

const STATUTS = [
  "accepté",
  "en préparation",
  "en cours de livraison",
  "livré",
  "en attente du retour de matériel",
  "terminée",
];

export default function CommandeFilters({ onFilter }) {
  const [statut, setStatut] = useState("");
  const [client, setClient] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ statut, client });
  };

  return (
    <form className="row g-3 mb-4" onSubmit={handleSubmit}>
      <div className="col-md-4">
        <label htmlFor="filtre-statut" className="form-label">
          Statut
        </label>
        <select
          id="filtre-statut"
          className="form-select"
          value={statut}
          onChange={(e) => setStatut(e.target.value)}
        >
          <option value="">Tous</option>
          {STATUTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div className="col-md-4">
        <label htmlFor="filtre-client" className="form-label">
          Client
        </label>
        <input
          id="filtre-client"
          className="form-control"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          placeholder="Nom ou email"
        />
      </div>
      <div className="col-md-4 d-flex align-items-end">
        <button type="submit" className="btn btn-primary">
          Filtrer
        </button>
      </div>
    </form>
  );
}
