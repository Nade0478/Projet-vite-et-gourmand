import React, { useState, useEffect } from "react";

export default function PlatEditor({
  initialData = null,
  allergenes = [],
  regimes = [],
  onSubmit,
}) {
  const [form, setForm] = useState({
    nom: "",
    description: "",
    prix: "",
    regime_id: "",
    allergenes_ids: [],
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        nom: initialData.nom,
        description: initialData.description,
        prix: initialData.prix,
        regime_id: initialData.regime_id,
        allergenes_ids: initialData.allergenes?.map((a) => a.id) || [],
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAllergeneChange = (e) => {
    const id = parseInt(e.target.value);
    const updated = form.allergenes_ids.includes(id)
      ? form.allergenes_ids.filter((a) => a !== id)
      : [...form.allergenes_ids, id];

    setForm({ ...form, allergenes_ids: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
      {/* Nom */}
      <div className="mb-3">
        <label className="form-label">Nom du plat</label>
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

      {/* Allergènes */}
      <div className="mb-3">
        <label className="form-label">Allergènes</label>

        <div className="row">
          {allergenes.map((a) => (
            <div key={a.id} className="col-6">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={a.id}
                  checked={form.allergenes_ids.includes(a.id)}
                  onChange={handleAllergeneChange}
                  id={`allergene-${a.id}`}
                />
                <label
                  className="form-check-label"
                  htmlFor={`allergene-${a.id}`}
                >
                  {a.nom}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bouton */}
      <button type="submit" className="btn btn-success w-100 mt-3">
        {initialData ? "Mettre à jour" : "Créer le plat"}
      </button>
    </form>
  );
}
