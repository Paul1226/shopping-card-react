import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

import { Button } from "./ButtonAddOrBuy";

export const CardAdditionShop = ({
  id,
  name,
  price,
  image,
  category,
  quantity,
}) => {
  const { listAdditions, setListAdditions, removeProduct } =
    useContext(CartContext);

  const findProduct = listAdditions.find((product) => product.id === id);
  const sumUni = findProduct ? findProduct.price * findProduct.quantity : 0;

  const handleClickRemove = () => {
    removeProduct(id);
  };

  // sumar cantidad por bottom
  const sumQuantity = () => {
    const undateList = listAdditions.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );

    setListAdditions(undateList);
  };
  // restar cantidad por bottom
  const restQuantity = () => {
    const updatedList = listAdditions.map((product) =>
      product.id === id
        ? {
            ...product,
            quantity: product.quantity > 1 ? product.quantity - 1 : 1,
          }
        : product
    );

    setListAdditions(updatedList);
  };
  return (
    <article className="flex items-center justify-between gap-3 bg-neutral-200 p-2 rounded-lg relative">
      <span className="absolute top-2 left-2 bg-white rounded-full p-1 px-2 border border-neutral-200 text-[10px] shadow-lg shadow-neutral-900/20 font-bold">
        {category}
      </span>
      <div className="image">
        <figure className="aspect-square min-w-24 w-ful h-full max-w-36">
          <img
            className="w-full object-cover h-full"
            src={image}
            alt={`Imagen de ${name}`}
          />
        </figure>
      </div>

      <div className=" w-full flex justify-between items-center gap-2">
        <div className="information flex-flex-col">
          <h3 className="font-bold">{name}</h3>
        </div>

        <div className="flex justify-between items-center gap-10">
          <p className="font-bold">$ {price.toFixed(2)}</p>
          <div className="quantity flex items-center justify-between w-max gap-2">
            <Button variant="quantity" handleClickAction={restQuantity}>
              ➖
            </Button>
            <span className="font-bold px-3">{quantity}</span>
            <Button variant="quantity" handleClickAction={sumQuantity}>
              ➕
            </Button>
          </div>
          <p className="font-bold min-w-16">$ {sumUni.toFixed(2)}</p>
          <button
            className="cursor-pointer px-2 py-6"
            onClick={handleClickRemove}
          >
            ❌
          </button>
        </div>
      </div>
    </article>
  );
};
