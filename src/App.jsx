import { useEffect, useState } from "react";
import axios from "axios";
import { apiRoute } from "./lib/api";

function App() {
  const [homeObject, setHomeObject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_TOKEN = import.meta.env.VITE_API_TOKEN;

  useEffect(() => {
    const fetchObjectHome = async () => {
      try {
        const response = await axios.get(apiRoute.home, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        });

        // 👇 aquí el cambio clave
        setHomeObject(response.data.data);
      } catch (err) {
        setError("Ha ocurrido un error: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchObjectHome();
  }, [API_TOKEN]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <h1 className="text-xl text-white">
          Cargando, por favor espere...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <h1 className="text-xl text-red-500">{error}</h1>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">
        {homeObject?.enterprise_name}
      </h1>
    </div>
  );
}

export default App;