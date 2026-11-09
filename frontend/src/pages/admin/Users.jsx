import { useState, useEffect, useCallback } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import UserList from "../../components/users/UserList";
import UserEditor from "../../components/users/UserEditor";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000/api";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showEditor, setShowEditor] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const headers = () => ({
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
  });

  const charger = useCallback(async () => {
    try {
      const [resUsers, resRoles] = await Promise.all([
        fetch(`${API_URL}/users`, { headers: headers() }),
        fetch(`${API_URL}/roles`, { headers: headers() }),
      ]);

      if (!resUsers.ok || !resRoles.ok) {
        setError("Impossible de charger les données.");
      } else {
        setUsers(await resUsers.json());
        setRoles(await resRoles.json());
      }
    } catch (e) {
      setError("Erreur réseau.");
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    charger();
  }, [charger]);

  const ouvrirCreation = () => {
    setSelected(null);
    setShowEditor(true);
    setError("");
  };

  const ouvrirModification = (user) => {
    setSelected(user);
    setShowEditor(true);
    setError("");
  };

  const fermer = () => {
    setShowEditor(false);
    setSelected(null);
  };

  const enregistrer = async (data) => {
    const url = selected
      ? `${API_URL}/users/${selected.id}`
      : `${API_URL}/users`;
    const method = selected ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: headers(),
        body: JSON.stringify(data),
      });

      if (res.ok) {
        fermer();
        charger();
      } else {
        const err = await res.json();
        setError(err.message || "Erreur lors de l'enregistrement.");
      }
    } catch (e) {
      setError("Erreur réseau.");
    }
  };

  const supprimer = async (user) => {
    if (!window.confirm(`Supprimer ${user.prenom} ${user.nom} ?`)) return;

    try {
      const res = await fetch(`${API_URL}/users/${user.id}`, {
        method: "DELETE",
        headers: headers(),
      });

      if (res.ok) {
        charger();
      } else {
        setError("Suppression impossible.");
      }
    } catch (e) {
      setError("Erreur réseau.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="fw-bold mb-0">Gestion des utilisateurs</h1>
          {!showEditor && (
            <button className="btn btn-dark" onClick={ouvrirCreation}>
              Ajouter un utilisateur
            </button>
          )}
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        {showEditor && (
          <UserEditor
            key={selected?.id || "nouveau"}
            user={selected}
            roles={roles}
            onSave={enregistrer}
            onCancel={fermer}
          />
        )}

        {loading ? (
          <p>Chargement...</p>
        ) : (
          <UserList
            users={users}
            roles={roles}
            onEdit={ouvrirModification}
            onDelete={supprimer}
          />
        )}
      </div>
      <Footer />
    </>
  );
}
