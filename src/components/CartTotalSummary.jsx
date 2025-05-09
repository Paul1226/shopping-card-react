import { useContext } from "react";
import { ShoppingCart } from "../contexts/ShoppingCartContext";

export const CartTotalSummary = () => {
  const { cartProducts } = useContext(ShoppingCart);

  // reduce recorre por cada uno y los va sumando, necesita un acumulador y un valor inicial
  const totalSum = cartProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  return (
    <div className="container-sum w-full flex justify-end">
      <div className="w-max flex items-center gap-4 pr-16">
        <span>Total de los productos</span>
        <strong className="font-bold">$ {totalSum.toFixed(2)}</strong>
      </div>
    </div>
  );
};
