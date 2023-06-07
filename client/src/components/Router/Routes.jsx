import { Routes, Route } from "react-router";
import RegisterPage from "../../pages/register/RegisterPage";
import LoginPage from "../../pages/login/LoginPage";
import HomePage from "../../pages/home/HomePage";
import CartPage from "../../pages/cart/CartPage";
import FavouritesPage from "../../pages/favourites/FavouritesPage";
import ProfilePage from "../../pages/profile/ProfilePage";
import SingleProductPage from "../../pages/singleProduct/SingleProductPage";
import ContactPage from "../../pages/contact/ContactPage";
import CategoriesPage from "../../pages/categories/CategoriesPage"
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/favourites" element={<FavouritesPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/categories/:id" element={<CategoriesPage />} />
      <Route path="/product/:id" element={<SingleProductPage />} />
    </Routes>
  );
};

export default AppRoutes;
