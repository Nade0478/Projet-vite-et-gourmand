import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/ui/Loader";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import AvisModeration from "../../components/avis/AvisModeration";

export default function Avis() {
  const { data: avis, loading, error, get, put } = useFetch();

  useEffect(() => {
    get("/salarie/avis");
  }, [get]);

  const moderer = async (id, statut) => {
    await put(`/salarie/avis/${id}`, { statut });
    get("/salarie/avis");
  };

  return (
    <>
      <Navbar />
      <div className="container my-4">
        <h1 className="fw-bold mb-4">Modération des avis</h1>
        {error && (
          <div className="alert alert-danger">
            Impossible de récupérer les avis.
          </div>
        )}
        {loading ? (
          <Loader />
        ) : (
          <AvisModeration avis={avis} onModerer={moderer} />
        )}
      </div>
      <Footer />
    </>
  );
}
