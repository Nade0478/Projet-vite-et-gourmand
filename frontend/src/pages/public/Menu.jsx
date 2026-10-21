import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import CardMenu from "../../components/menus/CardMenu";
import Loader from "../../components/ui/Loader";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import MenuFilters from "../../components/forms/MenuFilters";

export default function Menu() {
  const { data: menus, loading, error, get } = useFetch();

useEffect(() => {
  get("/menus");
}, [get]);
  
  if (loading) return <Loader />;

  if (error) {
    return (
      <>
        <Navbar />
        <div className="container mt-5">
          <div className="alert alert-danger text-center">
            <h4>Erreur de chargement</h4>
            <p>
              Impossible de récupérer les menus. Veuillez réessayer plus tard.
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h1 className="fw-bold text-center mb-1">Nos Menus</h1>
        <p className="text-muted text-center mb-4">
          Découvrez notre sélection de menus raffinés
        </p>

        <div className="row g-4">
          <div className="col-12 col-md-3">
            <div className="card shadow menu-filters p-3">
              <MenuFilters />
            </div>
          </div>

          <div
            className="col-12 col-md-9"
            style={{
              backgroundColor: "#007b75",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <div className="row g-4">
              {menus?.length > 0 ? (
                menus.map((menu) => (
                  <div key={menu.id} className="col-12 col-md-6 col-lg-4">
                    <CardMenu menu={menu} />
                  </div>
                ))
              ) : (
                <div className="col-12">
                  <div className="alert alert-info">Aucun menu disponible.</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
