import { NavigationHeader } from "../sections/NavegationHeader";
import { ShoppingCartContainer } from "../sections/ShoppingCartContainer";
import { PageFooter } from "../sections/PageFooter";

export const ShoppingCartPage = () => {
  return (
    <section>
      <NavigationHeader />
      <ShoppingCartContainer />
      <PageFooter />
    </section>
  );
};
