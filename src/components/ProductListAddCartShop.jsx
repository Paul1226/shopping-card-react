import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { CardAdditionShop } from "./CardAdditionShop";
import { Button } from "./ButtonAddOrBuy";
import { TotalSumShop } from "./TotalSumShop";

export const ProductListAdd = () => {
  const { listAdditions, clearCart } = useContext(CartContext);

  const handleClickRemoveAll = () => {
    clearCart();
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-5 flex flex-col gap-4">
      <header className="w-full flex justify-between items-center">
        <nav>Navegacion</nav>
        <Button variant="removeAll" handleClickAction={handleClickRemoveAll}>
          Vaciar Carrito
        </Button>
      </header>
      <div className="container-list grid gap-3">
        {listAdditions && listAdditions.length > 0 ? (
          listAdditions.map((product) => (
            <CardAdditionShop key={product.id} {...product} />
          ))
        ) : (
          <p>No hay productos en el carrito.</p>
        )}
        {listAdditions.length > 0 && <TotalSumShop />}
      </div>
    </div>
  );
};
