import { useContext, useState } from "react";
import { ShoppingCart } from "../contexts/ShoppingCartContext";

import { Skeleton } from "./Skeleton";
import { ButtonsPages } from "./ButtonsPages";

export const ProductCard = ({
  id,
  title,
  description,
  price,
  category_id,
  url_image,
}) => {
  const { addProduct } = useContext(ShoppingCart);
  const [isLoading, setIsLoading] = useState(true);

  const handleClickAdd = () => {
    addProduct({ id, title, price, url_image, description, category_id });
  };
  return (
    <article className="card-product rounded-lg relative flex flex-col gap-2 group">
      <span className="absolute top-2 right-2 bg-white rounded-full p-1 px-2 border border-neutral-200 text-[10px] shadow-lg shadow-neutral-900/20 font-bold">
        {category_id}
      </span>
      <div className="image overflow-hidden rounded-lg bg-neutral-200 transition-shadow duration-200 ease-in-out group-hover:shadow-xl group-hover:shadow-neutral-900/20">
        <figure className="aspect-square ">
          {isLoading && <Skeleton />}
          <img
            className="w-full h-full object-cover"
            src={url_image}
            alt={`Imagen producto de ${title}`}
            onLoad={() => setIsLoading(false)}
            style={{ display: isLoading ? "none" : "block" }}
          />
        </figure>
      </div>
      <div className="info">
        <h3 className="font-bold truncate">{title}</h3>
        <p className="text-sm truncate-2-lines">{description}</p>
      </div>
      <div className="price-button flex justify-between items-center gap-2">
        <span className="font-bold text-sm">${price}</span>
        <ButtonsPages handleClickAction={handleClickAdd}>
          Añadir al carrito
        </ButtonsPages>
      </div>
    </article>
  );
};
