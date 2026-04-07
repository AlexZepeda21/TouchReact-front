/* import { useState } from "react";

export default function ApplicationForm({ job }) {
    const [status, setStatus] = useState("");
    const [statusColor, setStatusColor] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        setStatus("Enviando...");
        setStatusColor("text-yellow-500");

        try {
            const response = await fetch("https://ac24126.getform.com/w048r", {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });

            if (response.ok) {
                setStatus("Postulación enviada correctamente ✅");
                setStatusColor("text-green-600");
                form.reset();
            } else {
                const data = await response.json();
                if (data.errors) {
                    setStatus(data.errors.map((err) => err.message).join(", "));
                } else {
                    setStatus("Hubo un problema al enviar el formulario ❌");
                }
                setStatusColor("text-red-600");
            }
        } catch (error) {
            setStatus("Error de conexión. Intenta nuevamente ❌");
            setStatusColor("text-red-600");
        }
    };

    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Postulación
            </h2>

            <p className="text-gray-500 mb-6 text-center">
                Completa el formulario para aplicar a esta vacante.
            </p>

            <form
                onSubmit={handleSubmit}
                className="space-y-4 bg-gray-50 p-6 rounded-xl shadow-lg"
                encType="multipart/form-data"
            >
                <input type="hidden" name="jobTitle" value={job.title} />
                <input type="hidden" name="jobId" value={job.documentId} />

                <div className="flex flex-col">
                    <label className="mb-1 font-semibold text-gray-700">Nombre completo</label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Ingresa tu nombre"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-semibold text-gray-700">Correo electrónico</label>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="ejemplo@correo.com"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-semibold text-gray-700">Sube tu CV (PDF)</label>
                    <input
                        type="file"
                        name="cv"
                        accept=".pdf"
                        required
                        className="w-full border border-gray-300 rounded-lg p-3 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-indigo-600 file:text-white file:font-semibold file:hover:bg-indigo-700 transition"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
                >
                    Enviar Postulación
                </button>

                {status && (
                    <p className={`mt-3 text-center font-medium ${statusColor}`}>
                        {status}
                    </p>
                )}
            </form>
        </div>
    );
} */


export default function ApplicationFormDemo() {
    return (
        <div className="w-full max-w-3xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Postulación</h2>
            <p className="text-gray-500 mb-6 text-center">
                Completa el formulario para aplicar a esta vacante.
            </p>

            <div className="w-full h-screen">
                <iframe
                    src="https://o63csww0.forms.app/postulacion"
                    title="Formulario de Postulación"
                    className="w-full h-full border-0 rounded-xl shadow-lg"
                ></iframe>
            </div>
        </div>
    );
}




/*  
    return (
        <div className="w-full max-w-md mx-auto">
            <form
                action="https://ac24126.getform.com/w048r"
                method="POST"
                encType="multipart/form-data"
                target="hidden_iframe"
                onSubmit={handleSubmit}
                className="space-y-4 bg-gray-50 p-6 rounded-xl shadow-lg"
            >
                <input type="hidden" name="jobTitle" value={job.title} />
                <input type="hidden" name="jobId" value={job.documentId} />

                
                <div className="flex flex-col">
                    <label className="mb-1 font-semibold text-gray-700">Nombre completo</label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Ingresa tu nombre"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

               
                <div className="flex flex-col">
                    <label className="mb-1 font-semibold text-gray-700">Correo electrónico</label>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="ejemplo@correo.com"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

               
                <div className="flex flex-col">
                    <label className="mb-1 font-semibold text-gray-700">Sube tu CV (PDF)</label>
                    <input
                        type="file"
                        name="cv"
                        accept=".pdf"
                        required
                        className="w-full border border-gray-300 rounded-lg p-3 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-indigo-600 file:text-white file:font-semibold file:hover:bg-indigo-700 transition"
                    />
                </div>

              
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
                >
                    Enviar Postulación
                </button>

               
                {status && (
                    <p className={`mt-3 text-center font-medium ${statusColor}`}>
                        {status}
                    </p>
                )}
            </form>

           
            <iframe
                name="hidden_iframe"
                style={{ display: "none" }}
                onLoad={handleIframeLoad}
            ></iframe>
        </div>
    );
} */