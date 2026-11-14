import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/ui/Loader";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import HorairesForm from "../../components/horaires/HorairesForm";

export default function Horaires() {
  const { data: horaires, loading, error, get, put } = useFetch();

  useEffect(() => {
    get("/horaires");
  }, [get]);

  const enregistrer = async (id, donnees) => {
    await put(`/salarie/horaires/${id}`, donnees);
    get("/horaires");
  };

  return (
    <>
      <Navbar />
      <div className="container my-4">
        <h1 className="fw-bold mb-4">Horaires</h1>
        {error && (
          <div className="alert alert-danger">
            Impossible de récupérer les horaires.
          </div>
        )}
        {loading ? (
          <Loader />
        ) : (
          horaires?.map((h) => (
            <HorairesForm key={h.id} horaire={h} onSave={enregistrer} />
          ))
        )}
      </div>
      <Footer />
    </>
  );
}
