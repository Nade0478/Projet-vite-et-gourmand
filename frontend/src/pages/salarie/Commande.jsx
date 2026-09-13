import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/ui/Loader";
import Footer from "../../components/layout/Footer";

export default function Avis() {
  const { data: avis, loading, get } = useFetch();

  useEffect(() => {
    get("/avis");
  }, [get]);

  if (loading) return <Loader />;

  return (
    <div className="container mt-4">
      <h1 className="fw-bold mb-4">Avis des clients</h1>

      {avis?.length === 0 && (
        <p className="text-muted">Aucun avis pour le moment.</p>
      )}

      {avis?.map((a) => (
        <div key={a.id} className="card shadow-sm mb-3">
          <div className="card-body">
            <p className="fw-semibold mb-1">
              {a.user?.prenom} {a.user?.nom}
            </p>

            <p className="text-muted mb-2">{a.commentaire}</p>

            <p className="text-secondary small">{a.created_at}</p>
          </div>
        </div>
      ))}

      <Footer />
    </div>
  );
}
