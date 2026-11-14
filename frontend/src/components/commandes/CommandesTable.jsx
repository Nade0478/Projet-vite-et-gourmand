import React from "react";
import CommandeStatutSelect from "./CommandeStatutSelect";

export default function CommandesTable({
  commandes,
  onStatutChange,
  onAnnuler,
}) {
  if (!commandes || commandes.length === 0) {
    return <p className="text-muted">Aucune commande.</p>;
  }

  return (
    <div className="table-responsive">
      <table className="table align-middle">
        <thead>
          <tr>
            <th>N°</th>
            <th>Client</th>
            <th>Date prestation</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {commandes.map((c) => (
            <tr key={c.id}>
              <td>{c.numero_commande}</td>
              <td>
                {c.user?.prenom} {c.user?.nom}
              </td>
              <td>{c.date_prestation}</td>
              <td>
                <CommandeStatutSelect
                  commandeId={c.id}
                  value={c.statut}
                  onChange={onStatutChange}
                />
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => onAnnuler(c)}
                >
                  Annuler
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
