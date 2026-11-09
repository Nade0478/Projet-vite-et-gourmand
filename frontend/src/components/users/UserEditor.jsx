import { useState } from "react";

export default function UserEditor({ user, roles, onSave, onCancel }) {
  const estModification = !!user;

  const [form, setForm] = useState({
    prenom: user?.prenom || "",
    nom: user?.nom || "",
    email: user?.email || "",
    telephone: user?.telephone || "",
    password: "",
    role_id: user?.role_id || roles[0]?.id || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...form, role_id: Number(form.role_id) };

    // En modification, un mot de passe vide = on ne le change pas
    if (estModification && !data.password) {
      delete data.password;
    }

    onSave(data);
  };

  return (
    <form onSubmit={handleSubmit} className="card shadow-sm p-4 mb-4">
      <h2 className="h5 fw-bold mb-3">
        {estModification ? "Modifier l'utilisateur" : "Nouvel utilisateur"}
      </h2>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Prénom</label>
          <input
            className="form-control"
            name="prenom"
            value={form.prenom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">Nom</label>
          <input
            className="form-control"
            name="nom"
            value={form.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">Téléphone</label>
          <input
            className="form-control"
            name="telephone"
            value={form.telephone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">
            Mot de passe
            {estModification && " (laisser vide pour ne pas changer)"}
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={form.password}
            onChange={handleChange}
            minLength={6}
            required={!estModification}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">Rôle</label>
          <select
            className="form-select"
            name="role_id"
            value={form.role_id}
            onChange={handleChange}
          >
            {roles.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-dark">
          Enregistrer
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={onCancel}
        >
          Annuler
        </button>
      </div>
    </form>
  );
}
