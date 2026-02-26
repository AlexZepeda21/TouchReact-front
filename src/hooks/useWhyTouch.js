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
                    headers: { Authorization: `Bearer ${API_TOKEN}` }
                });
                setWhyTouch(response.data.data || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWhyTouch();
    }, []);

    return { whyTouch: whyTouch, loading, error };
}