import useBlog from "../hooks/useBlog";
import Error from "../components/Error";
import Loading from "../components/Loading";

export default function Blog() {
  const { blog, loading, error } = useBlog();

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <main className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Título sección */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Nuestro Blog
          </h1>
          <p className="text-gray-500 mt-4">
            Ideas, noticias y contenido sobre tecnología y negocio.
          </p>
        </div>

        {/* Grid de publicaciones */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blog.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
            >
              {/* Imagen opcional */}
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
              )}

              <div className="p-6 flex flex-col flex-grow">
                {/* Fecha */}
                <p className="text-sm text-gray-400 mb-2">
                  {post.date}
                </p>

                {/* Título */}
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {post.title}
                </h2>

                {/* Autor */}
                <p className="text-sm text-gray-500 mb-4">
                  {post.author} — {post.position}
                </p>

                {/* Descripción */}
                <p className="text-gray-600 mb-6 flex-grow">
                  {post.description}
                </p>

                {/* Botón */}
                <button className="mt-auto bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
                  Ver más
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </main>
  );
}