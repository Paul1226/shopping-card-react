import { createContext, useState } from "react";

export const CartContext = createContext();

// creo ek provider
export const ProviderCartContext = ({ children }) => {
  // dentro del provider es donde se crean las funciones de acciones
  const [listAdditions, setListAdditions] = useState([]);

  // añadir
  const addProduct = (newProduct) => {
    setListAdditions([...listAdditions, newProduct]);
  };

  return (
    <CartContext.Provider value={{ listAdditions, addProduct }}>
      {children}
    </CartContext.Provider>
  );
};
