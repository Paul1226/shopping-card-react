import { Header } from "../sections/Header";
export const MyCartShop = () => {
  return (
    <section>
      <Header />
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold">🛒 Mi carrito de compras</h1>
        <p className="text-gray-600 mt-4">
          Aquí aparecerán tus productos seleccionados.
        </p>
      </div>
    </section>
  );
};
