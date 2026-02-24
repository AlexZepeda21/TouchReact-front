import useMain from "../hooks/useMain";
import Error from "../components/Error";
import Loading from "../components/Loading";
const ASSETS_URL = import.meta.env.VITE_ASSETS_URL;

export default function Home() {
    const { enterprise_name, icon, description, loading, error } = useMain();

    if (loading) return <Loading />;
    if (error) return <Error message={error} />;

    return (
        <div className="container mt-3">
            <h1 className="text-2xl font-bold">
                {enterprise_name}
            </h1>

            <p className="mt-2">{description}</p>

            {icon && (
                <img
                    src={`${ASSETS_URL}${icon}`}
                    alt={enterprise_name || "icon"}
                    className="mt-4 w-64"
                />
            )}
        </div>
    );
}