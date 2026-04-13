import axios from "axios";
import { useEffect, useState } from "react";


export default function useCallResource() {
    const [banner, setBanner] = useState(null);
    const [error, setError] = useState(null);
    const API_TOKEN = import.meta.env.VITE_API_TOKEN;

    useEffect(() => {
        const fetchBanner = async () => {
            try {
                const response = await axios.get(
                    `${resource.banner}v6qs186qvey04066d0esk9ep?populate=*`,
                    {
                        headers: {
                            Authorization: `Bearer ${API_TOKEN}`
                        }
                    });
                setBanner(response.data.data);
            }
            catch (err) {
                setError(err)
            }
        }
        fetchBanner();
    }, [])

    return {
        error,
        resource_name: banner?.resource_name,
        banner: banner?.resource?.[0]?.url
    }
}
