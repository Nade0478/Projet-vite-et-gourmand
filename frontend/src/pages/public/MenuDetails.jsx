import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/ui/Loader";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function MenuDetails() {
  const { id } = useParams();
  const { data: menu, loading, get } = useFetch();

  useEffect(() => {
    get(`/menus/${id}`);
  }, [id, get]);

  if (loading) return <Loader />;

  if (!menu) return <p className="text-center mt-4">Menu introuvable.</p>;

  return (
    <>
      <Navbar />

      <div className="container my-5">
        <div className="card shadow-sm mx-auto" style={{ maxWidth: "800px" }}>
          {/* Image */}
          {menu.image && (
            <img
              src={menu.image}
              alt={menu.nom}
              className="card-img-top"
              style={{ height: "300px", objectFit: "cover" }}
            />
          )}

          <div className="card-body">
            {/* Nom */}
            <h1 className="card-title fw-bold mb-3">{menu.nom}</h1>

            {/* Description */}
            <p className="text-muted mb-3">{menu.description}</p>

            {/* Prix */}
            <p className="fs-4 fw-bold mb-3">{menu.prix} €</p>

            {/* Régime */}
            {menu.regime && (
              <p className="mb-3">
                <span className="badge bg-success">
                  Régime : {menu.regime.nom}
                </span>
              </p>
            )}

            {/* Plats inclus */}
            <h2 className="fw-semibold mt-4 mb-3">Plats inclus</h2>

            <ul className="list-group">
              {menu.plats?.map((p) => (
                <li key={p.id} className="list-group-item">
                  {p.nom}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
