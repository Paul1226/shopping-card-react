import { products as PRODUCTS } from "../data/products.json";

export const CategoryFilter = ({ categorySelect, setCategorySelect }) => {
  const categories = [
    "Todas",
    ...new Set(PRODUCTS.map((product) => product.category)),
  ];
  return (
    <nav className="w-full flex flex-col gap-3">
      <ul className="flex items-center gap-3 slider-scroll-x w-full max-w-7xl overflow-hidden overflow-x-auto py-3">
        {categories.map((category) => (
          <li key={category} className="w-full">
            <button
              className={`${
                categorySelect === category ? "active" : ""
              } cursor-pointer bg-neutral-100 transition-all duration-300 ease-in-out hover:bg-neutral-200 px-2 py-1 rounded-full button-category`}
              onClick={() => setCategorySelect(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
