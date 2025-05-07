import { useState, useEffect, useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const NumberAdditions = () => {
  const { listAdditions } = useContext(CartContext);
  const [numberAdditions, setNumberAdditions] = useState(0);

  useEffect(() => {
    setNumberAdditions([...listAdditions].length);
  }, [listAdditions]);

  return (
    <div className="absolute bg-red-500 p-1 rounded-full -top-1 -right-1 size-5 aspect-square text-white text-xs flex justify-center items-center font-bold text-center">
      {numberAdditions}
    </div>
  );
};
