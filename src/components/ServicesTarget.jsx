export default function ServicesTarget({
  name,
  description,
  icon,
  image,
  long_description,
}) {
  return (
    <div className="max-w-7xl mx-auto text-center">
      <div className="flex flex-col items-center text-center bg-white">

        <div className="flex items-center justify-center gap-3 mb-4">

          {icon && (
            <img
              src={icon}
              alt={name || "service icon"}
              className="w-16 h-auto object-contain"
            />
          )}

          {icon && image && (
            <div className="w-px h-10 bg-blue-500 mx-1" />
          )}

          {image ? (
            <img
              src={image}
              alt={name || "service image"}
              className="w-16 h-auto object-contain"
            />
          ) : !icon ? (
            <span className="text-sm font-semibold text-gray-900">
              {name}
            </span>
          ) : null}
        </div>

        <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-2">
          {name}
        </h3>

        {description && (
          <p className="text-gray-700 text-sm md:text-base mb-4">
            {description}
          </p>
        )}

        {long_description && (
          <p className="text-gray-700 text-sm md:text-base mb-4">
            {long_description}
          </p>
        )}

      </div>
    </div>
  );
}