import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [statusColor, setStatusColor] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    setStatus("Enviando...");
    setStatusColor("text-yellow-500");

    try {
      const response = await fetch("https://formspree.io/f/xzdadyjb", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("¡Gracias! Tu mensaje ha sido enviado.");
        setStatusColor("text-green-600");
        form.reset();
      } else {
        const data = await response.json();

        if (data.errors) {
          setStatus(data.errors.map((error) => error.message).join(", "));
        } else {
          setStatus("Hubo un problema al enviar el formulario.");
        }

        setStatusColor("text-red-600");
      }
    } catch (error) {
      setStatus("Error de conexión. Intenta nuevamente.");
      setStatusColor("text-red-600");
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* Encabezado */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contáctanos
          </h1>
          <p className="text-gray-500 mt-4">
            Estamos listos para ayudarte. Envíanos un mensaje.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white shadow-xl rounded-3xl p-10 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Grid para nombre y email */}
            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Tu nombre"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="ejemplo@correo.com"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>

            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Número telefónico
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Opcional"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>

            {/* Mensaje */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Motivo
              </label>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Escribe tu mensaje aquí..."
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>

            {/* Botón */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg"
            >
              Enviar mensaje
            </button>

            {/* Estado */}
            {status && (
              <p className={`mt-4 text-center font-medium ${statusColor}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}