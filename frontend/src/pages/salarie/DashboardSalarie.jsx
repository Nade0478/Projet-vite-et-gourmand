import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/ui/Loader";
import Footer from "../../components/layout/Footer";

export default function DashboardSalarie() {
  const { data, loading, get } = useFetch();

  useEffect(() => {
    get("/salarie/dashboard");
  }, [get]);

  if (loading) return <Loader />;

  return (
    <div className="container mt-4">
      <h1 className="fw-bold mb-4">Tableau de bord salarié</h1>

      <div className="row g-4">
        {/* Commandes du jour */}
        <div className="col-12 col-md-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h2 className="fs-5 fw-semibold">Commandes du jour</h2>
              <p className="fs-2 fw-bold mt-2">{data?.commandes_du_jour}</p>
            </div>
          </div>
        </div>

        {/* Menus préparés */}
        <div className="col-12 col-md-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h2 className="fs-5 fw-semibold">Menus préparés</h2>
              <p className="fs-2 fw-bold mt-2">{data?.menus_prepares}</p>
            </div>
          </div>
        </div>

        {/* Heures travaillées */}
        <div className="col-12 col-md-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h2 className="fs-5 fw-semibold">Heures travaillées</h2>
              <p className="fs-2 fw-bold mt-2">{data?.heures_travaillees}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
