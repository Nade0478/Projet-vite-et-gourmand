import React, { useEffect, useState, useCallback } from "react";
import CardMenu from "./CardMenu";
import MenuEditor from "./MenuEditor";

const API_URL = "https://vite-gourmand-back-tfgw.onrender.com/api"; // ← change ici

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
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Liste des menus</h2>

      {editingMenu && (
        <MenuEditor
          initialData={editingMenu}
          regimes={regimes}
          onSubmit={handleUpdate}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {menus.map((menu) => (
          <CardMenu
            key={menu.id}
            menu={menu}
            onEdit={setEditingMenu}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
