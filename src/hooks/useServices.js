import axios from "axios";
import { useEffect, useState } from "react";
import { apiRoute } from "../lib/api";
import { getMediaUrl } from "../lib/media";

export default function useServices() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_TOKEN = import.meta.env.VITE_API_TOKEN;

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(apiRoute.services, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        });

        const raw = response.data?.data || [];

        const normalized = raw.map((service) => ({
          id: service?.id,
          name: service?.name ?? "",
          description: service?.description ?? "",
          long_description: service?.long_description ?? "",
          icon: getMediaUrl(service?.icon),
          image: getMediaUrl(service?.image),
        }));

        setServices(normalized);
      } catch (err) {
        setError(
          err?.response?.data?.error?.message ||
          "Error loading services"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, error, loading };
}