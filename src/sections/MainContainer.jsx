import { Welcome } from "../components/Welcome";
import { ProductList } from "../components/ProductList";

export const MainContainer = () => {
  return (
    <main className="main-container">
      <Welcome />
      <ProductList />
    </main>
  );
};
