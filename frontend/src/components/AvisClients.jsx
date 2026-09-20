import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

export default function AvisClients() {
  const { data: avis, loading, get } = useFetch();

  useEffect(() => {
    get("/avis"); // Appel API vers AvisController@index
  }, []);

  if (loading) return <p>Chargement...</p>;

  // Filtrer uniquement les avis approuvés
  const avisValides = avis?.filter((a) => a.statut === "approuve") || [];

  return (
    <section className="avis-clients p-6">
      <h2 className="text-2xl font-bold mb-4">Avis clients validés</h2>

      {avisValides.length === 0 && <p>Aucun avis validé pour le moment.</p>}

      <div className="avis-list">
        {avisValides.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow mb-3">
            <p>
              <strong>Note :</strong> {item.note}/5
            </p>
            <p className="mt-2">{item.description}</p>
            <small className="text-gray-500">{item.created_at}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
