import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/ui/Loader";
import Footer from "../../components/layout/Footer";

export default function Horaires() {
  const { data: horaires, loading, get } = useFetch();

  useEffect(() => {
    get("/salarie/horaires");
  }, [get]);

  if (loading) return <Loader />;

  return (
    <div className="container mt-4">
      <h1 className="fw-bold mb-4">Mes horaires</h1>

      {horaires?.map((h) => (
        <div key={h.id} className="card shadow-sm mb-3">
          <div className="card-body">
            <p>
              <strong>Jour :</strong> {h.jour}
            </p>
            <p>
              <strong>Début :</strong> {h.debut}
            </p>
            <p>
              <strong>Fin :</strong> {h.fin}
            </p>
          </div>
        </div>
      ))}

      <Footer />
    </div>
  );
}
