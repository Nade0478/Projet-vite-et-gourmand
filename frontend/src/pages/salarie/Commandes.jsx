import React, { useCallback, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/ui/Loader";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import CommandeFilters from "../../components/commandes/CommandeFilters";
import CommandesTable from "../../components/commandes/CommandesTable";
import CommandeAnnulationModal from "../../components/commandes/CommandeAnnulationModal";

export default function Commandes() {
  const { data: commandes, loading, error, get, put, post } = useFetch();
  const [filtres, setFiltres] = useState({ statut: "", client: "" });
  const [aAnnuler, setAAnnuler] = useState(null);

  const charger = useCallback(() => {
    const params = new URLSearchParams();
    if (filtres.statut) params.append("statut", filtres.statut);
    if (filtres.client) params.append("client", filtres.client);
    get(`/salarie/commandes?${params.toString()}`);
  }, [get, filtres]);

  useEffect(() => {
    charger();
  }, [charger]);

  const changerStatut = async (id, statut) => {
    await put(`/salarie/commandes/${id}/statut`, { statut });
    charger();
  };

  const annuler = async (id, donnees) => {
    await post(`/salarie/commandes/${id}/annulation`, donnees);
    setAAnnuler(null);
    charger();
  };

  return (
    <>
      <Navbar />
      <div className="container my-4">
        <h1 className="fw-bold mb-4">Commandes</h1>

        {error && (
          <div className="alert alert-danger">
            Impossible de récupérer les commandes.
          </div>
        )}

        <CommandeFilters onFilter={setFiltres} />

        {loading ? (
          <Loader />
        ) : (
          <CommandesTable
            commandes={commandes}
            onStatutChange={changerStatut}
            onAnnuler={setAAnnuler}
          />
        )}

        {aAnnuler && (
          <CommandeAnnulationModal
            commande={aAnnuler}
            onConfirm={annuler}
            onClose={() => setAAnnuler(null)}
          />
        )}
      </div>
      <Footer />
    </>
  );
}
