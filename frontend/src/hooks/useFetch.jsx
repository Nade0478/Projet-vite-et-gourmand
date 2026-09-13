import { useState } from "react";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000/api";

export default function useFetch(baseUrl = API_URL) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("auth_token");

  const request = async (endpoint, method = "GET", body = null) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${baseUrl}${endpoint}`, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: body ? JSON.stringify(body) : null,
      });

      const isJson = response.headers
        .get("content-type")
        ?.includes("application/json");

      const result = isJson ? await response.json() : null;

      if (!response.ok) {
        // Token expiré → on le supprime
        if (response.status === 401) {
          localStorage.removeItem("auth_token");
        }

        setError(result?.error || "Erreur inconnue");
        setLoading(false);
        return { success: false, error: result?.error || "Erreur inconnue" };
      }

      setData(result);
      setLoading(false);

      return { success: true, data: result };
    } catch (err) {
      console.error("Erreur réseau :", err);
      setError("Erreur réseau");
      setLoading(false);

      return { success: false, error: "Erreur réseau" };
    }
  };

  return {
    data,
    loading,
    error,
    get: (endpoint) => request(endpoint, "GET"),
    post: (endpoint, body) => request(endpoint, "POST", body),
    put: (endpoint, body) => request(endpoint, "PUT", body),
    remove: (endpoint) => request(endpoint, "DELETE"),
  };
}
