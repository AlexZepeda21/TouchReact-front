
export default function ServicesTarget({ name, description, icon, image, long_description }) {
    const ASSETS_URL = import.meta.env.VITE_ASSETS_URL;

    return (
        <div className="max-w-7xl mx-auto text-center">
            <div className="flex flex-col items-center text-center bg-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
                    Nuestros Servicios
                </h2>
                {/* Iconos compactos */}
                <div className="flex items-center justify-center gap-3 mb-4">

                    <img
                        src={`${ASSETS_URL}${icon}`}
                        alt={name}
                        className="w-16 h-auto object-contain"
                    />

                    {icon && image && (
                        <div className="w-px h-10 bg-blue-500 mx-1" />
                    )}
                    {image ? (
                        <img
                            src={`${ASSETS_URL}${image}`}
                            alt={name}
                            className="w-16 h-auto object-contain"
                        />
                    ) : !icon ? (
                        <span className="text-sm font-semibold text-gray-900">
                            {name}
                        </span>
                    ) : null}
                </div>

                {/* Nombre */}
                <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-2">
                    {name}
                </h3>

                {/* Descripción */}
                <p className="text-gray-700 text-sm md:text-base mb-4 ">
                    {description}
                </p>
                {/* Descripción larga */}
                <p className="text-gray-700 text-sm md:text-base mb-4 ">
                    {long_description}
                </p>
            </div>
        </div>
    )
}