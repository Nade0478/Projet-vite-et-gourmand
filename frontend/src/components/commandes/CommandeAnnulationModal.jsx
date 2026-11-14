import React, { useState } from "react";

export default function CommandeAnnulationModal({
  commande,
  onConfirm,
  onClose,
}) {
  const [modeContact, setModeContact] = useState("");
  const [motif, setMotif] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(commande.id, { mode_contact: modeContact, motif });
  };

  return (
    <div
      className="modal d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="titre-annulation"
    >
      <div className="modal-dialog">
        <form className="modal-content" onSubmit={handleSubmit}>
          <div className="modal-header">
            <h2 className="modal-title fs-5" id="titre-annulation">
              Annuler la commande {commande.numero_commande}
            </h2>
            <button
              type="button"
              className="btn-close"
              aria-label="Fermer"
              onClick={onClose}
            />
          </div>
          <div className="modal-body">
            <p className="text-muted">
              Le client doit avoir été contacté avant l'annulation.
            </p>
            <div className="mb-3">
              <label htmlFor="mode-contact" className="form-label">
                Mode de contact
              </label>
              <select
                id="mode-contact"
                className="form-select"
                value={modeContact}
                onChange={(e) => setModeContact(e.target.value)}
                required
              >
                <option value="">Choisir...</option>
                <option value="gsm">Appel GSM</option>
                <option value="mail">Mail</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="motif" className="form-label">
                Motif
              </label>
              <textarea
                id="motif"
                className="form-control"
                rows="3"
                value={motif}
                onChange={(e) => setMotif(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Retour
            </button>
            <button type="submit" className="btn btn-danger">
              Confirmer l'annulation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
