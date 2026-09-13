import React, { useEffect, useState, useCallback } from "react";
import CardMenu from "./CardMenu";
import MenuEditor from "./MenuEditor";

const API_URL = "https://vite-gourmand-back-tfgw.onrender.com/api";

export default function MenuList() {
  const [menus, setMenus] = useState([]);
  const [regimes, setRegimes] = useState([]);
  const [editingMenu, setEditingMenu] = useState(null);

  const token = localStorage.getItem("auth_token");

  const fetchMenus = useCallback(async () => {
    const response = await fetch(`${API_URL}/menus`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setMenus(data);
  }, [token]);

  const fetchRegimes = useCallback(async () => {
    const response = await fetch(`${API_URL}/regimes`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setRegimes(data);
  }, [token]);

  const handleDelete = async (id) => {
    await fetch(`${API_URL}/menus/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchMenus();
  };

  const handleUpdate = async (form) => {
    await fetch(`${API_URL}/menus/${editingMenu.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });

    setEditingMenu(null);
    fetchMenus();
  };

  useEffect(() => {
    fetchMenus();
    fetchRegimes();
  }, [fetchMenus, fetchRegimes]);

  return (
    <div className="container mt-4">
      {/* Titre */}
      <h2 className="mb-4 fw-bold">Liste des menus</h2>

      {/* Formulaire d’édition */}
      {editingMenu && (
        <div className="mb-4">
          <MenuEditor
            initialData={editingMenu}
            regimes={regimes}
            onSubmit={handleUpdate}
          />
        </div>
      )}

      {/* Grille Bootstrap */}
      <div className="row g-4">
        {menus.map((menu) => (
          <div key={menu.id} className="col-12 col-md-6 col-lg-4">
            <CardMenu
              menu={menu}
              onEdit={setEditingMenu}
              onDelete={handleDelete}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
