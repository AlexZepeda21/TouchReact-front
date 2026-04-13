import { useEffect, useState } from "react";
import axios from "axios";
import { apiRoute } from "../lib/api";

export default function useAboutus() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_TOKEN = import.meta.env.VITE_API_TOKEN;

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await axios.get(apiRoute.about, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        });

        const raw = res.data?.data;

        
        const normalized = {
          title: raw?.title ?? "",
          subtitle: raw?.subtitle ?? "",
          description: raw?.description ?? "",
          mission: raw?.mission ?? "",
          vision: raw?.vision ?? "",
          story: raw?.story ?? "",
        };

        setData(normalized);
      } catch (err) {
        setError(err.message || "Error loading about");
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  return { data, loading, error };
}