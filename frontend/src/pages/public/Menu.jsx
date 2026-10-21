import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import CardMenu from "../../components/menus/CardMenu";
import Loader from "../../components/ui/Loader";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import MenuFilters from "../../components/forms/MenuFilters";

const emptyFilters = { prixMax: "", theme: "", regime: "", nbMin: "" };

export default function Menu() {
  const { data: menus, loading, error, get } = useFetch();
  const [filters, setFilters] = useState(emptyFilters);
  const [applied, setApplied] = useState(emptyFilters);

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

  const filteredMenus = (menus || []).filter((m) => {
    if (
      applied.prixMax &&
      Number(m.prix_par_personne) > Number(applied.prixMax)
    )
      return false;
    if (applied.theme && String(m.theme_id) !== applied.theme) return false;
    if (applied.regime && String(m.regime_id) !== applied.regime) return false;
    if (applied.nbMin && Number(m.nombre_personne_min) > Number(applied.nbMin))
      return false;
    return true;
  });

  return (
    <>
      <Navbar />

      <div className="container my-4">
        <h1 className="fw-bold text-center mb-1">Nos Menus</h1>
        <p className="text-muted text-center mb-4">
          Découvrez notre sélection de menus raffinés
        </p>

        <div className="row g-0">
          <div className="col-12 col-md-4 col-lg-3">
            <MenuFilters
              menus={menus || []}
              filters={filters}
              setFilters={setFilters}
              onSubmit={() => setApplied(filters)}
            />
          </div>

          <div className="col-12 col-md-8 col-lg-9 menu-list">
            {filteredMenus.length > 0 ? (
              filteredMenus.map((menu) => (
                <CardMenu key={menu.id} menu={menu} />
              ))
            ) : (
              <div className="alert alert-info m-3">Aucun menu disponible.</div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
