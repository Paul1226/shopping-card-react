import { CardProduct } from "./CardProduct";
import { products as PRODUCTS } from "../data/products.json";
import { useState, useEffect } from "react";

export const ProductList = () => {
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    setProductsList(PRODUCTS);
  }, []);
  return (
    <div className="w-full max-w-6xl mx-auto py-8">
      <h2 className="pb-6 text-3xl font-bold text-secondary">
        Todos los Productos
      </h2>
      <div className="container-list grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] gap-3">
        {productsList.map((product) => (
          <CardProduct key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
