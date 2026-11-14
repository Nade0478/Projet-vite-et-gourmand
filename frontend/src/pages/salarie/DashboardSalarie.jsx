import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/ui/Loader";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function DashboardSalarie() {
  const { data, loading, error, get } = useFetch();

  useEffect(() => {
    get("/salarie/dashboard");
  }, [get]);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />

      <div className="container my-4">
        <h1 className="fw-bold mb-4">Tableau de bord salarié</h1>

        {error && (
          <div className="alert alert-danger">
            Impossible de récupérer les statistiques.
          </div>
        )}

        <div className="row g-4 mb-4">
          <div className="col-12 col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h2 className="fs-5 fw-semibold">Commandes du jour</h2>
                <p className="fs-2 fw-bold mt-2">
                  {data?.commandes_du_jour ?? "-"}
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h2 className="fs-5 fw-semibold">Menus préparés</h2>
                <p className="fs-2 fw-bold mt-2">
                  {data?.menus_prepares ?? "-"}
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h2 className="fs-5 fw-semibold">Heures travaillées</h2>
                <p className="fs-2 fw-bold mt-2">
                  {data?.heures_travaillees ?? "-"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap gap-2">
          <Link to="/salarie/commandes" className="btn btn-dark">
            Commandes
          </Link>
          <Link to="/salarie/avis" className="btn btn-dark">
            Avis
          </Link>
          <Link to="/salarie/horaires" className="btn btn-dark">
            Horaires
          </Link>
          <Link to="/salarie/menus" className="btn btn-dark">
            Menus
          </Link>
          <Link to="/salarie/plats" className="btn btn-dark">
            Plats
          </Link>
          <Link to="/salarie/allergenes" className="btn btn-dark">
            Allergenes
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
