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

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Nos menus</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menus?.map((menu) => (
            <CardMenu key={menu.id} menu={menu} />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}
