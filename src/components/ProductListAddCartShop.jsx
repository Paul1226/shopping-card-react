import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { CardProduct } from "./CardProduct";

export const ProductListAdd = () => {
  const { listAdditions } = useContext(CartContext);

  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-5">
      <div className="container-list grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] gap-5">
        {listAdditions && listAdditions.length > 0 ? (
          listAdditions.map((product) => (
            <CardProduct key={product.id} {...product} />
          ))
        ) : (
          <p>No hay productos en el carrito.</p>
        )}
      </div>
    </div>
  );
};
