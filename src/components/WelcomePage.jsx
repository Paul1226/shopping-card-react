export const WelcomePage = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 relative overflow-hidden">
      <img
        className="absolute object-cover"
        src="https://res.cloudinary.com/di2fo6cj8/image/upload/v1746829314/hero_c38yi3.webp"
        alt="Imagen hero de la página"
      />
      <span className="shop-text absolute -bottom-3 text-white font-bold text-[clamp(10rem,20vw,17rem)] bg-red-00 text-center leading-none">
        Shop
      </span>
      <div className="bg-white/50 rounded-xl shadow-lg shadow-bg-blue-950 max-w-md text-center backdrop-blur-xs py-5">
        {children}
      </div>
    </div>
  );
};
