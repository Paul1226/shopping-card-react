export const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-100 py-8">
      <div className="bg-white/50 rounded-xl shadow-lg shadow-bg-blue-950 max-w-md text-center backdrop-blur-xs py-5">
        <h1 className="text-4xl font-bold text-primary">¡Bienvenido!</h1>
        <p className="text-lg text-gray-600">
          Gracias por visitar nuestra tienda online de productos. Explora y
          descubre todo lo que tenemos para ti.
        </p>
      </div>
    </div>
  );
};
