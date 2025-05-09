import { Navbar } from "../components/Navbar.jsx";
import { NumberAdditions } from "../components/NumberAdditions.jsx";
import { IconCart } from "../components/Icons.jsx";
import { LogoPage } from "../components/LogoPage.jsx";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 z-20 bg-white header-page">
      <div className="flex justify-between items-center w-full max-w-6xl mx-auto px-5 py-2">
        <LogoPage />

        {/* por ahora el contenido de navegacion no tiene enlaces */}
        <Navbar />
        <Link
          className="icon-carrito relative cursor-pointer"
          to="/MyCartShop"
          onClick={() => window.scrollTo(0, 0)}
        >
          <NumberAdditions />
          <IconCart />
        </Link>
      </div>
    </header>
  );
};
