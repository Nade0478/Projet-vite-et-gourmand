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

  if (!menu) return <p>Menu introuvable.</p>;

  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
        {menu.image && (
          <img
            src={menu.image}
            alt={menu.nom}
            className="w-full h-60 object-cover rounded mb-4"
          />
        )}

        <h1 className="text-3xl font-bold mb-2">{menu.nom}</h1>

        <p className="text-gray-600 mb-4">{menu.description}</p>

        <p className="text-xl font-bold mb-4">{menu.prix} €</p>

        {menu.regime && (
          <p className="text-green-700 mb-4">
            Régime : <strong>{menu.regime.nom}</strong>
          </p>
        )}

        <h2 className="text-2xl font-semibold mt-6 mb-3">Plats inclus</h2>

        <ul className="list-disc pl-6">
          {menu.plats?.map((p) => (
            <li key={p.id}>{p.nom}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}
