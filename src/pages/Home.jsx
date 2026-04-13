import Error from "../components/Error";
import Loading from "../components/Loading";
import useCallResource from "../hooks/useCallResources";
import useMain from "../hooks/useMain";
import Services from "./Services";
import { getMediaUrl } from "../lib/media";

export default function Home() {
  const { data, loading, error } = useMain();
  const { banner } = useCallResource();

  const bannerUrl = getMediaUrl(banner);

  if (loading || !data) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div className="flex flex-col">

      {/* BANNER */}
      {bannerUrl && (
        <section
          className="relative h-75 md:h-100 rounded-xl bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bannerUrl})`,
          }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-black/20" />

          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {data.enterprise_name || "Bienvenido"}
              </h2>

              <p className="mt-4 text-white/90 max-w-xl">
                {data.description}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* SECCIÓN */}
      <section className="py-16">
        <Services />
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold">
            ¿Listo para empezar?
          </h2>

          <p className="mt-4 text-blue-100">
            Podemos añadir aquí un mensaje final potente.
          </p>

          <button className="mt-8 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">
            Contactar
          </button>
        </div>
      </section>

    </div>
  );
}