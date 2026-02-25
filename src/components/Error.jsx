export default function Error({ message }) {
  return (
    <div className="text-red-600 p-4 border border-red-300 rounded">
      <h2 className="font-bold">Ocurrió un error</h2>
      <p>{message}</p>
      {console.log("Este es el error", message)}
    </div>
  );
}