import { WelcomePage } from "../components/WelcomePage";
import { CartItemList } from "../components/CartItemList";

export const ShoppingCartContainer = () => {
  return (
    <main>
      <WelcomePage>
        <h1 className="text-4xl font-bold text-primary px-4">
          🛒 Mi carrito de compras
        </h1>
        <p className="text-gray-600 pt-3">
          Aquí aparecerán tus productos seleccionados.
        </p>
      </WelcomePage>
      <CartItemList />
    </main>
  );
};
