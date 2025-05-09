// useContext
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";

// components
import { ProductCatalogPage } from "./pages/ProductCatalogPage";

// rutas
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShoppingCartPage } from "./pages/ShoppingCartPage";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductCatalogPage />} />
            <Route path="/ShoppingCartPage" element={<ShoppingCartPage />} />
          </Routes>
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
