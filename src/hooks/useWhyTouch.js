import axios from "axios";
import { useEffect, useState } from "react";
import { apiRoute } from "../lib/api";

export default function useWhyTouch() {
  const [whyTouch, setWhyTouch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_TOKEN = import.meta.env.VITE_API_TOKEN;

  useEffect(() => {
    const fetchWhyTouch = async () => {
      try {
        const response = await axios.get(apiRoute.whyTouches, {
          headers: { Authorization: `Bearer ${API_TOKEN}` },
        });

        const data = response?.data?.data;

        if (!Array.isArray(data)) {
          setWhyTouch([]);
          return;
        }

        // normalización defensiva
        const cleanData = data.map((item) => ({
          reason: item?.reason ?? "Sin título",
          description: item?.description ?? "",
        }));

        setWhyTouch(cleanData);
      } catch (err) {
        setError(
          err?.response?.data?.error?.message ||
          err?.message ||
          "Error desconocido"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchWhyTouch();
  }, []);

  return { whyTouch, loading, error };
}