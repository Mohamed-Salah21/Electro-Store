import { Route, Routes } from "react-router";

import HomePage from "../../pages/home/HomePage";
import FavouritesitemsPage from "../../pages/favourites/FavouritesitemsPage";
import CartItemsPage from "../../pages/cart/CartItemsPage";
// import CategoriesPage from "../../pages/categories/CategoriesPage";
import LoginPage from "../../pages/login/LoginPage";
import RegistrationPage from "../../pages/registeration/RegisterPage";
import ProfilePage from "../../pages/profile/ProfilePage";
import ProtectedRoutes from "./ProtectedRoutes";
import ContactUsPage from "../../pages/contactUs/ContactUsPage";
import { useSelector } from "react-redux";
const AppRoutes = () => {
  const { currentUser } = useSelector((state) => state);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favourites" element={<FavouritesitemsPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/cart" element={<CartItemsPage />} />
      {/* <Route path="/categories" element={<CategoriesPage />} /> */}
      {/* <Route path="/categories/:categoryId" element={<CategoriesPage />} /> */}
      <Route element={<ProtectedRoutes condition={!currentUser} path={"/"} />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Route>
      <Route element={<ProtectedRoutes condition={currentUser} path={"/"} />}>
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
