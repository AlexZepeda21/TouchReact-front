import { useEffect, useState } from "react";
import axios from "axios";
import { apiRoute } from "../lib/api";
import { getMediaUrl } from "../lib/media";

export default function useMain() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_TOKEN = import.meta.env.VITE_API_TOKEN;

  useEffect(() => {
    const fetchHome = async () => {
      try {
        const res = await axios.get(
          `${apiRoute.home}?populate=*`,
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
            },
          }
        );

        const raw = res.data?.data;

        const normalized = {
          enterprise_name: raw?.enterprise_name ?? "",
          description: raw?.description ?? "",
          icon: getMediaUrl(raw?.icon),
        };

        setData(normalized);
      } catch (err) {
        setError(err?.message || "Error loading home");
      } finally {
        setLoading(false);
      }
    };

    fetchHome();
  }, []);

  return { data, loading, error };
}