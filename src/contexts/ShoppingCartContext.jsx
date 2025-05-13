import { useEffect } from "react";
// import { products as PRODUCTS } from "../data/products.json";
import { getProducts } from "../api/getProducts";
import { createContext, useState } from "react";

export const ShoppingCart = createContext();

// creo ek provider
export const ShoppingCartProvider = ({ children }) => {
  // dentro del provider es donde se crean las funciones de acciones
  const [cartProducts, setCartProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProducts();
      if (result.length === 0) {
        console.log("Lista de productos vacía");
      } else {
        setAllProducts(result);
        setFilteredProducts(result);
      }
    };
    fetchData();
  }, []);

  // añadir
  const addProduct = (newProduct) => {
    // some devuelve un boleano si esta o no esta dentro
    const isProductInCart = cartProducts.some(
      (product) => product.id === newProduct.id
    );

    if (isProductInCart) {
      setCartProducts((prev) =>
        prev.map((product) =>
          product.id === newProduct.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    } else {
      setCartProducts((prev) => [...prev, { ...newProduct, quantity: 1 }]);
    }
  };

  // eliminar un elemento
  const removeProduct = (id) => {
    setCartProducts((prev) => prev.filter((product) => product.id !== id));
  };

  // eliminar todos los productos
  const clearCart = () => {
    setCartProducts([]);
  };
  return (
    <ShoppingCart.Provider
      value={{
        cartProducts,
        setCartProducts,
        addProduct,
        removeProduct,
        clearCart,
        filteredProducts,
        setFilteredProducts,
        allProducts,
        setAllProducts,
      }}
    >
      {children}
    </ShoppingCart.Provider>
  );
};
