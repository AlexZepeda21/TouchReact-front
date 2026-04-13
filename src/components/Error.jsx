export default function Error({ message }) {
  const safeMessage = message || "Ha ocurrido un error inesperado";

  return (
    <div className="p-6 border border-red-300 rounded-xl bg-red-50 text-red-700 shadow-sm">
      
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">⚠️</span>
        <h2 className="font-bold text-lg">
          Ocurrió un error
        </h2>
      </div>

      <p className="text-sm leading-relaxed">
        {safeMessage}
      </p>

      {/* Debug solo en desarrollo */}
      {import.meta.env.DEV && (
        <pre className="mt-4 text-xs bg-red-100 p-2 rounded overflow-auto">
          {JSON.stringify(message, null, 2)}
        </pre>
      )}
    </div>
  );
}