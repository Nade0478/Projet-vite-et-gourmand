import { useEffect } from "react";
import useFetch from "../hooks/useFetch";

export default function AvisClients() {
  const { data: avis, loading, error, get } = useFetch();

  useEffect(() => {
    get("/avis?statut=approuve");
  }, [get]);

  if (loading) return <p className="text-center my-4">Chargement...</p>;

  if (error) {
    return (
      <div className="alert alert-danger text-center my-4">
        Impossible de récupérer les avis pour le moment.
      </div>
    );
  }

  const avisValides = Array.isArray(avis)
    ? avis.filter((a) => a.statut === "approuve")
    : [];

  return (
    <section className="container my-4">
      <h2 className="fw-bold mb-4">Avis clients</h2>

      {avisValides.length === 0 && (
        <p className="text-muted">Aucun avis validé pour le moment.</p>
      )}

      <div className="row g-3">
        {avisValides.map((item) => (
          <div key={item.id} className="col-12 col-md-6 col-lg-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <p className="mb-2" aria-label={`Note : ${item.note} sur 5`}>
                  {"★".repeat(Number(item.note))}
                  {"☆".repeat(5 - Number(item.note))}
                </p>
                <p className="mb-2">{item.description}</p>
                <small className="text-muted">
                  {new Date(item.created_at).toLocaleDateString("fr-FR")}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
