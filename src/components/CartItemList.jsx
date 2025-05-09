import { useContext } from "react";
import { ShoppingCart } from "../contexts/ShoppingCartContext";
import { CartItemCard } from "./CartItemCard";
import { ButtonsPages } from "./ButtonsPages";
import { CartTotalSummary } from "./CartTotalSummary";

export const CartItemList = () => {
  const { cartProducts, clearCart } = useContext(ShoppingCart);

  const handleClickRemoveAll = () => {
    clearCart();
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-5 flex flex-col gap-4">
      <header className="w-full flex justify-between items-center">
        <nav>Navegacion</nav>
        <ButtonsPages
          variant="removeAll"
          handleClickAction={handleClickRemoveAll}
        >
          Vaciar Carrito
        </ButtonsPages>
      </header>
      <div className="container-list grid gap-3">
        {cartProducts && cartProducts.length > 0 ? (
          cartProducts.map((product) => (
            <CartItemCard key={product.id} {...product} />
          ))
        ) : (
          <p>No hay productos en el carrito.</p>
        )}
        {cartProducts.length > 0 && <CartTotalSummary />}
      </div>
    </div>
  );
};
