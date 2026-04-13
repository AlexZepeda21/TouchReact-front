import axios from "axios";
import { useEffect, useState } from "react";
import { apiRoute } from "../lib/api";

export default function useS6process() {
  const [s6process, setS6process] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_TOKEN = import.meta.env.VITE_API_TOKEN;

  useEffect(() => {
    const fetchProcess = async () => {
      try {
        const response = await axios.get(apiRoute.ourProcess, {
          headers: { Authorization: `Bearer ${API_TOKEN}` },
        });

        const raw = response.data?.data || [];

        
        const normalized = raw.map((step) => ({
          id: step?.id,
          step_number: step?.step_number ?? 0,
          title: step?.title ?? "",
          description: step?.description ?? "",
        }));

        setS6process(normalized);
      } catch (err) {
        setError(err.message || "Error loading process");
      } finally {
        setLoading(false);
      }
    };

    fetchProcess();
  }, []);

  return {
    steps: s6process,
    loading,
    error,
  };
}