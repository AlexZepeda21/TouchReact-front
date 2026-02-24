import { useEffect, useState } from "react";
import axios from "axios";
import { apiRoute } from "../lib/api";

export default function useMain() {
  const [home, setHome] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_TOKEN = import.meta.env.VITE_API_TOKEN;

  useEffect(() => {
    const fetchObjectHome = async () => {
      try {
        const response = await axios.get(
          `${apiRoute.home}?populate[icon]=true`,
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
            },
          }
        );

        setHome(response.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchObjectHome();
  }, []);

  return {
    error,
    enterprise_name: home?.enterprise_name,
    description: home?.description,
    icon: home?.icon?.url,
    loading,
  };
}