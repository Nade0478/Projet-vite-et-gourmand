import { useState, useCallback } from "react";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000/api";

export default function useFetch(baseUrl = API_URL) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("auth_token");

  const request = useCallback(
    async (endpoint, method = "GET", body = null) => {
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

        let result = null;
        try {
          result = await response.json();
        } catch {
          result = null;
        }

        if (!response.ok) {
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
    },
    [baseUrl, token]
  );

  const get = useCallback((endpoint) => request(endpoint, "GET"), [request]);
  const post = useCallback(
    (endpoint, body) => request(endpoint, "POST", body),
    [request]
  );
  const put = useCallback(
    (endpoint, body) => request(endpoint, "PUT", body),
    [request]
  );
  const remove = useCallback(
    (endpoint) => request(endpoint, "DELETE"),
    [request]
  );

  return { data, loading, error, get, post, put, remove };
}
