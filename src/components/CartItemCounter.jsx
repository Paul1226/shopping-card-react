import { useState, useEffect, useContext } from "react";
import { ShoppingCart } from "../contexts/ShoppingCartContext";

export const CartItemCounter = () => {
  const { cartProducts } = useContext(ShoppingCart);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter([...cartProducts].length);
  }, [cartProducts]);

  return (
    <div className="absolute bg-red-500 p-1 rounded-full -top-1 -right-1 size-5 aspect-square text-white text-xs flex justify-center items-center font-bold text-center">
      {counter}
    </div>
  );
};
