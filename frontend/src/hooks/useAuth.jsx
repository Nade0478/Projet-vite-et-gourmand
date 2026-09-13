import { useState, useEffect, useCallback } from "react";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000/api";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("auth_token");

  const fetchUser = useCallback(async () => {
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        localStorage.removeItem("auth_token");
        setUser(null);
      }
    } catch (error) {
      console.error("Erreur récupération user :", error);
      localStorage.removeItem("auth_token");
      setUser(null);
    }

    setLoading(false);
  }, [token]);

  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("auth_token", data.token);
        setUser(data.user);
        return { success: true };
      }

      return { success: false, error: data.error || "Identifiants incorrects" };
    } catch (error) {
      console.error("Erreur login :", error);
      return { success: false, error: "Erreur réseau" };
    }
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    setUser(null);
  };

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
  };
}
