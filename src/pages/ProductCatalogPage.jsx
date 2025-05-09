import { NavigationHeader } from "../sections/NavegationHeader";
import { ProductCatalogContainer } from "../sections/ProductCatalogContainer";
import { PageFooter } from "../sections/PageFooter";

export const ProductCatalogPage = () => {
  return (
    <section>
      <NavigationHeader />
      <ProductCatalogContainer />
      <PageFooter />
    </section>
  );
};
