import { createContext, useState } from "react";

export const CartContext = createContext();

// creo ek provider
export const ProviderCartContext = ({ children }) => {
  // dentro del provider es donde se crean las funciones de acciones
  const [listAdditions, setListAdditions] = useState([]);

  // añadir
  const addProduct = (newProduct) => {
    // some devuelve un boleano si esta o no esta dentro
    const isProductInCart = listAdditions.some(
      (product) => product.id === newProduct.id
    );

    console.log(isProductInCart);

    if (isProductInCart) {
      setListAdditions((prev) =>
        prev.map((product) =>
          product.id === newProduct.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    } else {
      setListAdditions((prev) => [...prev, { ...newProduct, quantity: 1 }]);
    }
  };

  // eliminar un elemento
  const removeProduct = (id) => {
    setListAdditions((prev) => prev.filter((product) => product.id !== id));
  };

  // eliminar todos los productos
  const clearCart = () => {
    setListAdditions([]);
  };
  return (
    <CartContext.Provider
      value={{
        listAdditions,
        setListAdditions,
        addProduct,
        removeProduct,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
