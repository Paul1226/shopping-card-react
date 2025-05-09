import { products as PRODUCTS } from "../data/products.json";

export const CategoryFilter = ({ setCategorySelect }) => {
  const categories = [
    "Todas",
    ...new Set(PRODUCTS.map((product) => product.category)),
  ];
  return (
    <div className="sticky top-16 z-10 bg-white header-page py-4">
      <nav className="w-full flex flex-col gap-3">
        <ul className="flex items-center gap-3 slider-scroll-x w-full max-w-7xl overflow-hidden overflow-x-auto pb-3">
          {categories.map((category) => (
            <li key={category} className="w-full">
              <button
                className="cursor-pointer bg-neutral-100 transition-colors duration-200 ease-in-out hover:bg-neutral-200 px-2 py-1 rounded-full scroll-"
                onClick={() => setCategorySelect(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
