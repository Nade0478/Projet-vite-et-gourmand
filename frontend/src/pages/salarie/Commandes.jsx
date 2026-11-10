import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/ui/Loader";
import Footer from "../../components/layout/Footer";

const STATUTS = [
  "accepté",
  "en préparation",
  "en cours de livraison",
  "livré",
  "en attente du retour de matériel",
  "terminée",
];

export default function Commandes() {
  const { data: commandes, loading, error, get } = useFetch();
  const [statut, setStatut] = useState("");
  const [client, setClient] = useState("");

  useEffect(() => {
    const params = new URLSearchParams();
    if (statut) params.append("statut", statut);
    if (client) params.append("client", client);
    get(`/salarie/commandes?${params.toString()}`);
  }, [get, statut, client]);

  if (loading) return <Loader />;

  return (
    <div className="container mt-4">
      <h1 className="fw-bold mb-4">Commandes</h1>

      {error && (
        <div className="alert alert-danger">
          Impossible de récupérer les commandes.
        </div>
      )}

      <div className="row g-3 mb-4">
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
      </div>

      {commandes?.length === 0 && (
        <p className="text-muted">Aucune commande.</p>
      )}

      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>N°</th>
              <th>Client</th>
              <th>Date prestation</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            {commandes?.map((c) => (
              <tr key={c.id}>
                <td>{c.numero_commande}</td>
                <td>
                  {c.user?.prenom} {c.user?.nom}
                </td>
                <td>{c.date_prestation}</td>
                <td>{c.statut}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}
