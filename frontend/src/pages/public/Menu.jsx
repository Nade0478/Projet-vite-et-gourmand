import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import CardMenu from "../../components/menus/CardMenu";
import Loader from "../../components/ui/Loader";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import MenuFilters from "../../components/forms/MenuFilters";

export default function Menu() {
  const { data: menus, loading, get } = useFetch();

  useEffect(() => {
    get("/menu");
  }, [get]);

  if (loading) return <Loader />;

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
            <MenuFilters />
          </div>

          <div className="col-12 col-md-9">
            <div className="row g-4">
              {menus?.map((menu) => (
                <div key={menu.id} className="col-12 col-lg-6">
                  <CardMenu menu={menu} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
