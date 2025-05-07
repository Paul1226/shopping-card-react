import { Navbar } from "../components/Navbar.jsx";

export const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center w-full max-w-6xl mx-auto">
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

        {/* por ahora el contenido de navegacion no tiene enlaces */}
        <Navbar />
        {/* por solo se colocoara el icono para visualizar el carrito */}
        <div className="icon-carrito cursor-pointer">
          <svg
            className="w-9 h-9 fill-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" />
          </svg>
        </div>
      </div>
    </header>
  );
};
