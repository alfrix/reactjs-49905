import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "../components/NavBar/NavBar";
import { Home } from "../pages/Home";
import { Category } from "../pages/Category";
import { ItemDetailContainer } from "../pages/ItemDetailContainer";
import { Cart } from "../pages/Cart";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};
