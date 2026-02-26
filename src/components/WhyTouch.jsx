import Loading from "../components/Loading";
import Error from "../components/Error";
import useWhyTouch from "../hooks/useWhyTouch";

export default function WhyTouch() {
  const { whyTouch, loading, error } = useWhyTouch();

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Por qué escogernos
        </h2>

        <ul className="space-y-8">
          {whyTouch.map((why, index) => (
            <li key={index} className="flex flex-col md:flex-row items-start md:items-center">
              
              {/* Número o ícono */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg md:mr-6 mb-4 md:mb-0">
                {index + 1}
              </div>

              {/* Contenido */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">{why.reason}</h3>
                <p className="text-gray-600 mt-2 leading-relaxed">{why.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}