export const Welcome = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-neutral-200 py-15 relative overflow-hidden">
      <span className="shop-text absolute -bottom-3 text-white font-bold text-[clamp(10rem,20vw,17rem)] bg-red-00 text-center leading-none">
        Shop
      </span>
      <div className="bg-white/50 rounded-xl shadow-lg shadow-bg-blue-950 max-w-md text-center backdrop-blur-xs py-5">
        {children}
      </div>
    </div>
  );
};
