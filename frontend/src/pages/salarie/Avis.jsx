import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/ui/Loader";
import Footer from "../../components/layout/Footer";

export default function Avis() {
  const { data: avis, loading, get, put } = useFetch();

  useEffect(() => {
    get("/avis");
  }, [get]);

  if (loading) return <Loader />;

  // Avis en attente
  const avisEnAttente = avis?.filter((a) => a.statut === "en_attente") || [];

  // Avis approuvés
  const avisApprouves = avis?.filter((a) => a.statut === "approuve") || [];

  // Confirmation + validation
  const validerAvis = (id) => {
    const confirm = window.confirm("Confirmer la validation de cet avis ?");
    if (!confirm) return;
    put(`/avis/${id}`, { statut: "approuve" });
  };

  // Confirmation + rejet
  const rejeterAvis = (id) => {
    const confirm = window.confirm("Confirmer le rejet de cet avis ?");
    if (!confirm) return;
    put(`/avis/${id}`, { statut: "rejete" });
  };

  return (
    <div className="container mt-4">
      {/* SECTION : Avis en attente */}
      <h1 className="fw-bold mb-4">Avis à valider</h1>

      {avisEnAttente.length === 0 && (
        <p className="text-muted">Aucun avis en attente.</p>
      )}

      {avisEnAttente.map((a) => (
        <div key={a.id} className="card shadow-sm mb-3">
          <div className="card-body">
            <p className="fw-semibold mb-1">
              {a.user?.prenom} {a.user?.nom}
            </p>

            <p className="text-muted mb-2">{a.description}</p>

            <p className="text-secondary small">{a.created_at}</p>

            <div className="d-flex gap-2 mt-3">
              <button
                className="btn btn-success"
                onClick={() => validerAvis(a.id)}
              >
                Valider
              </button>

              <button
                className="btn btn-danger"
                onClick={() => rejeterAvis(a.id)}
              >
                Rejeter
              </button>
            </div>
          </div>
        </div>
      ))}

      <hr className="my-5" />

      {/* SECTION : Avis approuvés */}
      <h2 className="fw-bold mb-4">Avis approuvés</h2>

      {avisApprouves.length === 0 && (
        <p className="text-muted">Aucun avis approuvé pour le moment.</p>
      )}

      {avisApprouves.map((a) => (
        <div key={a.id} className="card shadow-sm mb-3">
          <div className="card-body">
            <p className="fw-semibold mb-1">
              {a.user?.prenom} {a.user?.nom}
            </p>

            <p className="text-muted mb-2">{a.description}</p>

            <p className="text-secondary small">{a.created_at}</p>
          </div>
        </div>
      ))}

      <Footer />
    </div>
  );
}
