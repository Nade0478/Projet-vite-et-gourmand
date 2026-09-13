import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import CardMenu from "../../components/menus/CardMenu";
import Loader from "../../components/ui/Loader";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function Menus() {
  const { data: menus, loading, get } = useFetch();

  useEffect(() => {
    get("/menus");
  }, [get]);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h1 className="fw-bold mb-4">Nos menus</h1>

        <div className="row g-4">
          {menus?.map((menu) => (
            <div key={menu.id} className="col-12 col-md-6 col-lg-4">
              <CardMenu menu={menu} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
