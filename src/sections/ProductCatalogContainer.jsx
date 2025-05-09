import { WelcomePage } from "../components/WelcomePage";
import { ProductCatalog } from "../components/ProductCatalog";

export const ProductCatalogContainer = () => {
  return (
    <main className="main-container">
      <WelcomePage>
        <h1 className="text-4xl font-bold text-primary">¡Bienvenido!</h1>
        <p className="text-lg text-gray-600">
          Gracias por visitar nuestra tienda online de productos. Explora y
          descubre todo lo que tenemos para ti.
        </p>
      </WelcomePage>
      <ProductCatalog />
    </main>
  );
};
