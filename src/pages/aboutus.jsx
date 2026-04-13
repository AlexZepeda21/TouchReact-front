import useAboutus from "../hooks/useAboutus";
import Loading from "../components/Loading";
import Error from "../components/Error";
import S6process from "../components/S6process";
import WhyTouch from "../components/WhyTouch";

export default function Aboutus() {
  const { data, loading, error } = useAboutus();

  if (loading || !data) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <main className="bg-white text-gray-800">

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {data.title}
        </h1>

        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
          {data.subtitle}
        </p>
      </section>

      {/* DESCRIPCIÓN */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg leading-relaxed text-gray-600">
            {data.description}
          </p>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white shadow-md rounded-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-semibold mb-4">Misión</h3>
            <p className="text-gray-600 leading-relaxed">
              {data.mission}
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-semibold mb-4">Visión</h3>
            <p className="text-gray-600 leading-relaxed">
              {data.vision}
            </p>
          </div>

        </div>
      </section>

      {/* HISTORIA */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-8">
            Nuestra Historia
          </h3>

          <p className="text-gray-600 leading-relaxed">
            {data.story}
          </p>
        </div>
      </section>

      {/* COMPONENTES (IMPORTANTE) */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <S6process />
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <WhyTouch />
        </div>
      </section>

    </main>
  );
}