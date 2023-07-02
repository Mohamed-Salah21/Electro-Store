import { Route, Routes } from "react-router";

import HomePage from "../../pages/home/HomePage";
import FavouritesitemsPage from "../../pages/favourites/FavouritesitemsPage";
import CartItemsPage from "../../pages/cart/CartItemsPage";
import CategoriesPage from "../../pages/categories/CategoriesPage";
import LoginPage from "../../pages/login/LoginPage";
import RegistrationPage from "../../pages/registeration/RegisterPage";
import ProtectedRoutes from "./ProtectedRoutes";
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/favourites" element={<FavouritesitemsPage />} />
    <Route path="/cart" element={<CartItemsPage />} />
    <Route path="/categories" element={<CategoriesPage />} />
    <Route path="/categories/:categoryId" element={<CategoriesPage />} />
    <Route
      element={
        <ProtectedRoutes condition={!sessionStorage?.userToken} path={"/"} />
      }
    >
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
    </Route>
  </Routes>
);
export default AppRoutes;
