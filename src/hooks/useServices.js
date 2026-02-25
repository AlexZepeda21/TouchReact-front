import axios from "axios";
import { useEffect, useState } from "react";
import { apiRoute } from "../lib/api";

export default function useServices() {
    const [services, setServices] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const API_TOKEN = import.meta.env.VITE_API_TOKEN;

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get(
                    `${apiRoute.services}`,
                    {
                        headers: {
                            Authorization: `Bearer ${API_TOKEN}`,
                        },
                    }
                );
                setServices(response.data.data || []);
            } catch (err) {
                setError(
                    err.response?.data?.error?.message 
                );
            } finally {
                setLoading(false);
            }
        };
        fetchServices();
    }, []);

    return {
        services,
        error,
        loading,
    };
}