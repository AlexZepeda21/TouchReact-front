import { useEffect, useState } from "react";
import { apiRoute } from "../lib/api";
import axios from "axios";

export default function useEmployment() {
  const [employment, setEmployment] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_TOKEN = import.meta.env.VITE_API_TOKEN;

  useEffect(() => {
    const fetchEmployments = async () => {
      try {
        const response = await axios.get(apiRoute.employments, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        });

        const raw = response.data?.data || [];

        const normalized = raw.map((job) => ({
          id: job?.id,
          title: job?.title ?? "",
          description: job?.description ?? "",
          author: job?.author ?? "",
          position: job?.position ?? "",
          available: job?.available ?? 0,
          salary: job?.salary ?? 0,
          state: job?.state ?? false,
          date: job?.date ?? null,
          image: job?.image?.[0]?.formats?.thumbnail?.url ?? null,
        }));

        setEmployment(normalized);
      } catch (err) {
        setError(err.message || "Error loading employment");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployments();
  }, []);

  return {
    employment,
    loading,
    error,
  };
}