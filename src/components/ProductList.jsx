import { useState, useContext } from "react";
import { CardProduct } from "./CardProduct";
import { CartContext } from "../contexts/CartContext";
import { SearchProduct } from "./SearchProduct";
import { NavFilter } from "./NavFilter";

export const ProductList = () => {
  const { filterList } = useContext(CartContext);
  const [categorySelect, setCategorySelect] = useState("Todas");
  const productsFilter =
    categorySelect === "Todas"
      ? filterList
      : filterList.filter((prod) => prod.category === categorySelect);

  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-5 flex flex-col gap-4">
      <div className="flex justify-between items-center gap-2">
        <h2 className="text-3xl font-bold text-secondary">
          Todos los Productos
        </h2>
        <SearchProduct />
      </div>
      <p className="font-bold text-xl">Categorías</p>
      <NavFilter setCategorySelect={setCategorySelect} />
      <div className="container-list grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] gap-5">
        {productsFilter.map((product) => (
          <CardProduct key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
