export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white">
      
      {/* Spinner */}
      <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin mb-4" />

      {/* Texto */}
      <h1 className="text-lg font-medium">
        Cargando, por favor espera...
      </h1>

      {/* Accesibilidad */}
      <span className="sr-only">Cargando contenido</span>
    </div>
  );
}