import { useContext } from "react";
import { ShoppingCart } from "../contexts/ShoppingCartContext";

import { ButtonsPages } from "./ButtonsPages";

export const CartItemCard = ({
  id,
  name,
  price,
  image,
  category,
  quantity,
}) => {
  const { cartProducts, setCartProducts, removeProduct } =
    useContext(ShoppingCart);

  const findProduct = cartProducts.find((product) => product.id === id);
  const sumUni = findProduct ? findProduct.price * findProduct.quantity : 0;

  const handleClickRemove = () => {
    removeProduct(id);
  };

  // sumar cantidad por bottom
  const sumQuantity = () => {
    const undateList = cartProducts.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );

    setCartProducts(undateList);
  };
  // restar cantidad por bottom
  const restQuantity = () => {
    const updatedList = cartProducts.map((product) =>
      product.id === id
        ? {
            ...product,
            quantity: product.quantity > 1 ? product.quantity - 1 : 1,
          }
        : product
    );

    setCartProducts(updatedList);
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

      <div className=" w-full flex justify-between items-center gap-2 flex-col md:flex-row">
        <div className="information flex-flex-col">
          <h3 className="font-bold">{name}</h3>
        </div>

        <div className="flex justify-center items-center flex-col gap-2 md:flex-row md:gap-6">
          <p className="font-bold min-w-16">$ {price.toFixed(2)}</p>
          <div className="quantity flex items-center justify-between w-max gap-2">
            <ButtonsPages variant="quantity" handleClickAction={restQuantity}>
              ➖
            </ButtonsPages>
            <span className="font-bold px-2">{quantity}</span>
            <ButtonsPages variant="quantity" handleClickAction={sumQuantity}>
              ➕
            </ButtonsPages>
          </div>
          <p className="font-bold min-w-16 p-3">$ {sumUni.toFixed(2)}</p>
          <button
            className="cursor-pointer md:p-3 md:pr-4"
            onClick={handleClickRemove}
          >
            ❌
          </button>
        </div>
      </div>
    </article>
  );
};
