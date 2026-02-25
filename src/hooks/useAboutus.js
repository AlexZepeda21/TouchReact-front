import axios from "axios";
import { useEffect, useState, useSyncExternalStore } from "react";
import { apiRoute } from "../lib/api";
import { Subtitles } from "lucide-react";
/* http://localhost:1337/api/about */

export default function useAboutus() {
    const [aboutInfo, setAboutInfo] = useState(null);
    const [login, setLogin] = useState(null);
    const [error, setError] = useState(null);
    const API_TOKEN = import.meta.env.VITE_API_TOKEN;

    useEffect = () => {
        try {
            const fetchAbout = async () => {
                const response = await axios.get(
                    `${apiRoute.about}`, {
                    headers: {
                        Authorization: `Bearer ${API_TOKEN} `
                    }
                })
                setAboutInfo(response.data.data)
            }
        }
        catch (err) {
            setError(response.data.error)
        }
        finally {
            setLogin(false);
        }
        fetchAbout();
    }

    return {
        title: aboutInfo.title,
        Subtitle: aboutInfo.subtitle,
        description: aboutInfo.description,
        mission: aboutInfo.mission,
        vision: aboutInfo.vision,
        story: aboutInfo.story
    }
}
