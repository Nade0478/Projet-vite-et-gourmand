import React from "react";

const STATUTS = [
  "accepté",
  "en préparation",
  "en cours de livraison",
  "livré",
  "en attente du retour de matériel",
  "terminée",
];

export default function CommandeStatutSelect({ commandeId, value, onChange }) {
  return (
    <select
      className="form-select form-select-sm"
      aria-label={`Statut de la commande ${commandeId}`}
      value={value}
      onChange={(e) => onChange(commandeId, e.target.value)}
    >
      {STATUTS.map((s) => (
        <option key={s} value={s}>
          {s}
        </option>
      ))}
    </select>
  );
}
