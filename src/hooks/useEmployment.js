import { useEffect, useState } from "react"
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
                const response = await axios.get(
                    `${apiRoute.employments}`, {
                    headers: {
                        Authorization: `Bearer ${API_TOKEN}`
                    }
                });
                setEmployment(response.data.data || []);
            }
            catch (err) {
                setError(err.message)
            }
            finally {
                setLoading(false);
            }
        }
        fetchEmployments();
    }, [])
    return {
        employment,
        loading,
        error
    }
}