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
          headers: { Authorization: `Bearer ${API_TOKEN}` }
        });
        setS6process(response.data.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProcess();
  }, []);

  return { steps: s6process, loading, error };
}