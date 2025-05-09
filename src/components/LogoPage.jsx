import { Link } from "react-router-dom";
export const LogoPage = () => {
  return (
    <Link
      to={"/"}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <div className="logo flex gap-1 items-center justify-center w-max">
        <figure>
          <img
            className="w-full max-w-12"
            src="/logo.svg"
            alt="Logo de la cursor marquer"
          />
        </figure>
        <p className="font-bold text-primary flex flex-col items-center leading-4">
          <span>Cursor</span>
          <span className="text-secondary">Market</span>
        </p>
      </div>
    </Link>
  );
};
