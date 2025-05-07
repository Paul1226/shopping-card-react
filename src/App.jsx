// useContext
import { ProviderCartContext } from "./contexts/CartContext";

// components
import { HomePage } from "./pages/HomePage";

// rutas
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyCartShop } from "./pages/MyCartShop";

function App() {
  return (
    <>
      <ProviderCartContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/MyCartShop" element={<MyCartShop />} />
          </Routes>
        </BrowserRouter>
      </ProviderCartContext>
    </>
  );
}

export default App;
