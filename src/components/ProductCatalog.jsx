import { useState, useContext } from "react";
import { ProductCard } from "./ProductCard";
import { ShoppingCart } from "../contexts/ShoppingCartContext";
import { ProductSearch } from "./ProductSearch";
import { CategoryFilter } from "./CategoryFilter";

export const ProductCatalog = () => {
  const { filteredProducts } = useContext(ShoppingCart);
  const [categorySelect, setCategorySelect] = useState("Todas");
  const filterProduct =
    categorySelect === "Todas"
      ? filteredProducts
      : filteredProducts.filter((prod) => prod.category === categorySelect);

  return (
    <section className="w-full max-w-6xl mx-auto py-8 px-5 flex flex-col gap-6">
      <div className="flex justify-between items-center gap-2">
        <h2 className="text-3xl font-bold text-secondary text-balance">
          Para todas tus necesidades
        </h2>
        <ProductSearch />
      </div>
      <div className="sticky top-16 z-10 bg-white">
        <p className="font-bold text-xl">Categorías</p>
        <CategoryFilter
          categorySelect={categorySelect}
          setCategorySelect={setCategorySelect}
        />
      </div>
      <div className="container-list grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] gap-5">
        {filterProduct.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};
