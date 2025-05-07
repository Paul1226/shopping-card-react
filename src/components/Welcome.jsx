export const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-neutral-200 py-15 relative overflow-hidden">
      <span className="shop-text absolute -bottom-3 text-white font-bold text-[clamp(10rem,20vw,17rem)] bg-red-00 text-center leading-none">
        Shop
      </span>
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
