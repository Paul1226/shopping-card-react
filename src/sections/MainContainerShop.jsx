import { Welcome } from "../components/Welcome";
import { ProductListAdd } from "../components/ProductListAddCartShop";

export const MainContainerShop = () => {
  return (
    <main>
      <Welcome>
        <h1 className="text-4xl font-bold text-primary px-4">
          🛒 Mi carrito de compras
        </h1>
        <p className="text-gray-600 pt-3">
          Aquí aparecerán tus productos seleccionados.
        </p>
      </Welcome>
      <ProductListAdd />
    </main>
  );
};
