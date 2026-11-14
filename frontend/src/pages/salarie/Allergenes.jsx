import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/ui/Loader";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function Allergenes() {
  const { data: allergenes, loading, error, get, post, del } = useFetch();
  const [libelle, setLibelle] = useState("");

  useEffect(() => {
    get("/allergenes");
  }, [get]);

  const ajouter = async (e) => {
    e.preventDefault();
    if (!libelle.trim()) return;
    await post("/allergenes", { libelle });
    setLibelle("");
    get("/allergenes");
  };

  const supprimer = async (id) => {
    if (!window.confirm("Supprimer cet allergène ?")) return;
    await del(`/allergenes/${id}`);
    get("/allergenes");
  };

  return (
    <>
      <Navbar />
      <div className="container my-4">
        <h1 className="fw-bold mb-4">Allergènes</h1>

        {error && (
          <div className="alert alert-danger">
            Une erreur est survenue avec les allergènes.
          </div>
        )}

        <form className="row g-2 mb-4" onSubmit={ajouter}>
          <div className="col-md-6">
            <label htmlFor="libelle-allergene" className="form-label">
              Nouvel allergène
            </label>
            <input
              id="libelle-allergene"
              className="form-control"
              value={libelle}
              onChange={(e) => setLibelle(e.target.value)}
              placeholder="Ex : gluten"
              required
            />
          </div>
          <div className="col-md-3 d-flex align-items-end">
            <button type="submit" className="btn btn-primary">
              Ajouter
            </button>
          </div>
        </form>

        {loading ? (
          <Loader />
        ) : allergenes?.length === 0 ? (
          <p className="text-muted">Aucun allergène.</p>
        ) : (
          <ul className="list-group">
            {allergenes?.map((a) => (
              <li
                key={a.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {a.libelle}
                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => supprimer(a.id)}
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </>
  );
}
