import useEmployment from "../hooks/useEmployment";
import Error from "../components/Error";
import Loading from "../components/Loading";
import ApplicationForm from "../components/Application";
import { useState } from "react";

export default function Employment() {
  const { employment, loading, error } = useEmployment();
  const [modal, setModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const ASSETS_URL = import.meta.env.VITE_ASSETS_URL;

  const openModal = (job) => {
    setModal(true);
    setSelectedJob(job);
  };

  const closeModal = () => {
    setModal(false)
  }

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <main className="bg-gray-100 min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Vacantes disponibles
          </h1>
          <p className="text-gray-500 mt-4">
            Tal vez esta sea tu oportunidad de trabajar con nosotros
          </p>
        </div>

        {/* Lista */}
        <div className="space-y-8">
          {employment.map((job) => {

            const isActive = job.state;
            const formattedDate = new Date(job.date).toLocaleDateString();

            return (
              <article
                key={job.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col md:flex-row"
              >

                {/* Imagen */}
                {job.image?.[0]?.formats?.thumbnail?.url && (
                  <div className="md:w-1/3">
                    <img
                      src={`${ASSETS_URL}${job.image[0].formats.thumbnail.url}`}
                      alt={job.title}
                      className="h-60 w-full object-cover md:h-full"
                    />
                  </div>
                )}

                {/* Contenido */}
                <div className="p-8 flex flex-col flex-grow">

                  {/* Header fila */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">

                    <h2 className="text-2xl font-bold text-gray-900">
                      {job.title}
                    </h2>

                    {/* Estado */}
                    <span
                      className={`px-4 py-1 rounded-full text-sm font-semibold ${isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                        }`}
                    >
                      {isActive ? "Activa" : "Cerrada"}
                    </span>
                  </div>

                  {/* Info secundaria */}
                  <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-4">
                    <span>👤 {job.author}</span>
                    <span>💼 {job.position}</span>
                    <span>📅 {formattedDate}</span>
                    <span>📌 {job.available} vacantes</span>
                  </div>

                  {/* Salario */}
                  <div className="mb-4">
                    <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-semibold">
                      ${job.salary} USD
                    </span>
                  </div>

                  {/* Descripción corta */}
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {job.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-auto flex justify-end">
                    <button
                      disabled={!isActive}
                      onClick={() => openModal(job)}
                      className={`px-6 py-2 rounded-lg font-semibold transition ${isActive
                        ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                    >
                      {isActive ? "Postularme" : "No disponible"}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
      <div>
        {modal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center
               bg-black/40 backdrop-blur-sm
               animate-fadeIn"
          >
            <div
              className="relative w-[150%] 
                 bg-white rounded-2xl p-8 shadow-2xl
                 transform transition-all duration-300
                 animate-scaleIn"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-black
                   transition duration-200"
              >
                ✕
              </button>

              {/* Aquí le pasamos correctamente la vacante seleccionada */}
              <ApplicationForm job={selectedJob} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}