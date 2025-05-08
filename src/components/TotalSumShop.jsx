import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const TotalSumShop = () => {
  const { listAdditions } = useContext(CartContext);

  // reduce recorre por cada uno y los va sumando, necesita un acumulador y un valor inicial
  const totalSum = listAdditions.reduce(
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
