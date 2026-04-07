import axios from "axios";
import { useEffect, useState } from "react";
import { apiRoute } from "../lib/api";

export default function useAboutus() {
    const [aboutInfo, setAboutInfo] = useState(null);
    const [error, setError] = useState(null); 
    const [loading, setLoading] = useState(true);


    const API_TOKEN = import.meta.env.VITE_API_TOKEN;

    useEffect(() => {
        const fetchAbout = async () => {
            try {
                const response = await axios.get(apiRoute.about, {
                    headers: {
                        Authorization: `Bearer ${API_TOKEN}`
                    }
                });
                setAboutInfo(response.data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAbout();
    }, []);

    return {
        title: aboutInfo?.title,
        subtitle: aboutInfo?.subtitle,
        description: aboutInfo?.description,
        mission: aboutInfo?.mission,
        vision: aboutInfo?.vision,
        story: aboutInfo?.story,
        loading,
        error
    };
}