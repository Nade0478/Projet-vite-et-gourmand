import React, { useState, useEffect } from "react";

export default function MenuEditor({
  initialData = null,
  regimes = [],
  onSubmit,
}) {
  const [form, setForm] = useState({
    nom: "",
    description: "",
    prix: "",
    regime_id: "",
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        nom: initialData.nom,
        description: initialData.description,
        prix: initialData.prix,
        regime_id: initialData.regime_id,
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
      {/* Nom */}
      <div className="mb-3">
        <label className="form-label">Nom du menu</label>
        <input
          type="text"
          name="nom"
          className="form-control"
          value={form.nom}
          onChange={handleChange}
        />
      </div>

      {/* Description */}
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          name="description"
          className="form-control"
          rows="3"
          value={form.description}
          onChange={handleChange}
        ></textarea>
      </div>

      {/* Prix */}
      <div className="mb-3">
        <label className="form-label">Prix (€)</label>
        <input
          type="number"
          name="prix"
          className="form-control"
          value={form.prix}
          onChange={handleChange}
        />
      </div>

      {/* Régime */}
      <div className="mb-3">
        <label className="form-label">Régime</label>
        <select
          name="regime_id"
          className="form-select"
          value={form.regime_id}
          onChange={handleChange}
        >
          <option value="">Sélectionner un régime</option>
          {regimes.map((r) => (
            <option key={r.id} value={r.id}>
              {r.nom}
            </option>
          ))}
        </select>
      </div>

      {/* Bouton */}
      <button type="submit" className="btn btn-success w-100 mt-3">
        {initialData ? "Mettre à jour" : "Créer le menu"}
      </button>
    </form>
  );
}
