import React, { useEffect, useState } from "react";
import CardPlat from "./CardPlat";
import PlatEditor from "./PlatEditor";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000/api";

export default function PlatList() {
  const [plats, setPlats] = useState([]);
  const [allergenes, setAllergenes] = useState([]);
  const [regimes, setRegimes] = useState([]);
  const [editingPlat, setEditingPlat] = useState(null);

  const token = localStorage.getItem("auth_token");

  const fetchPlats = async () => {
    const response = await fetch(`${API_URL}/plats`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setPlats(await response.json());
  };

  const fetchAllergenes = async () => {
    const response = await fetch(`${API_URL}/allergenes`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setAllergenes(await response.json());
  };

  const fetchRegimes = async () => {
    const response = await fetch(`${API_URL}/regimes`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setRegimes(await response.json());
  };

  const handleDelete = async (id) => {
    await fetch(`${API_URL}/plats/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchPlats();
  };

  const handleUpdate = async (form) => {
    await fetch(`${API_URL}/plats/${editingPlat.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });

    setEditingPlat(null);
    fetchPlats();
  };

  useEffect(() => {
    fetchPlats();
    fetchAllergenes();
    fetchRegimes();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Liste des plats</h2>

      {editingPlat && (
        <PlatEditor
          initialData={editingPlat}
          allergenes={allergenes}
          regimes={regimes}
          onSubmit={handleUpdate}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {plats.map((plat) => (
          <CardPlat
            key={plat.id}
            plat={plat}
            onEdit={setEditingPlat}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
