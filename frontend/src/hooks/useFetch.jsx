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

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || "Erreur inconnue");
        setLoading(false);
        return null;
      }

      setData(result);
      setLoading(false);
      return result;
    } catch (err) {
      setError("Erreur réseau");
      setLoading(false);
      return null;
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
