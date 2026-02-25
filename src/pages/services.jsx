import { useState } from "react";
import useServices from "../hooks/useServices";
import Loading from "../components/Loading";
import Error from "../components/Error";
import ServicesTarget from "../components/ServicesTarget";

export default function ServicesSection() {
    const [modal, setModal] = useState(null)
    const [modalService, setModalService] = useState(null);
    const { services, loading, error } = useServices();
    const ASSETS_URL = import.meta.env.VITE_ASSETS_URL;

    const openModal = (id, icon, image, name, description, long_description) => {
        setModal(true);
        setModalService({
            id,
            icon,
            image,
            name,
            description,
            long_description
        });
    }
    const closeModal = () => {
        setModalService(null);
    };

    if (loading) return <Loading />;
    if (error) return <Error message={error} />;
    return (
        <section className="flex flex-col bg-white py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
                    Nuestros Servicios
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-200 shadow-sm
                                       hover:shadow-md transition hover:scale-105 bg-white"
                        >
                            {/* Iconos compactos */}
                            <div className="flex items-center justify-center gap-3 mb-4">
                                {service.icon && (
                                    <img
                                        src={`${ASSETS_URL}${service.icon.url}`}
                                        alt={service.name}
                                        className="w-16 h-auto object-contain"
                                    />
                                )}
                                {service.icon && service.image && (
                                    <div className="w-px h-10 bg-blue-500 mx-1" />
                                )}
                                {service.image ? (
                                    <img
                                        src={`${ASSETS_URL}${service.image[0]?.url}`}
                                        alt={service.name}
                                        className="w-16 h-auto object-contain"
                                    />
                                ) : !service.icon ? (
                                    <span className="text-sm font-semibold text-gray-900">
                                        {service.name}
                                    </span>
                                ) : null}
                            </div>

                            {/* Nombre */}
                            <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-2">
                                {service.name}
                            </h3>

                            {/* Descripción recortada */}
                            <p className="text-gray-700 text-sm md:text-base mb-4 line-clamp-3">
                                {service.description}
                            </p>

                            {/* Botón */}
                            <button
                                onClick={() =>
                                    openModal(
                                        service.id,
                                        service.icon?.url,
                                        service.image?.[0]?.url,
                                        service.name,
                                        service.description,
                                        service.long_description
                                    )
                                }
                                className="mt-auto px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
                            >
                                Ver más
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            {modalService && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center
               bg-black/40 backdrop-blur-sm
               animate-fadeIn"
                >
                    <div
                        className="relative w-[90%] max-w-md
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

                        <ServicesTarget
                            name={modalService.name}
                            description={modalService.description}
                            icon={modalService.icon}
                            image={modalService.image}
                            long_description={modalService.long_description}
                        />
                    </div>
                </div>
            )}
        </section>
    );
}