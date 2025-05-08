import { Welcome } from "../components/Welcome";
import { ProductList } from "../components/ProductList";

export const MainContainer = () => {
  return (
    <main className="main-container">
      <Welcome>
        <h1 className="text-4xl font-bold text-primary">¡Bienvenido!</h1>
        <p className="text-lg text-gray-600">
          Gracias por visitar nuestra tienda online de productos. Explora y
          descubre todo lo que tenemos para ti.
        </p>
      </Welcome>
      <ProductList />
    </main>
  );
};
