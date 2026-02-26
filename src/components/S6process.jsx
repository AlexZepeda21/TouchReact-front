import Loading from "../components/Loading";
import Error from "../components/Error";
import useS6process from "../hooks/useS6Process";

export default function S6process() {
  const { steps, loading, error } = useS6process();

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our 6-D Process</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.step_number} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="text-indigo-600 text-2xl font-bold mb-4">
                Paso {step.step_number}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}