const API_URL = import.meta.env.VITE_API_URL;

export const apiRoute = {
    home: `${API_URL}/home`,
    services: `${API_URL}/services?populate=*`,
    about: `${API_URL}/about?populate=*`,
};

export const resource = {
    banner: `${API_URL}/resources/`
}
