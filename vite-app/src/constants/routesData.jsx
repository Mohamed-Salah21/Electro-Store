import HomeIcon from "@mui/icons-material/Home";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";
import Person2Icon from "@mui/icons-material/Person2";
import InfoIcon from "@mui/icons-material/Info";
import PhoneIcon from "@mui/icons-material/Phone";
import { useFetchAllProducts } from "../hooks/useCategoriesHooks";
export const routesData = () => {
  const { categories } = useFetchAllProducts();
  let data = [
    {
      path: "/",
      title: "Home",
      icon: (
        <HomeIcon
          sx={{
            mx: "5px",
          }}
        />
      ),
    },
    {
      path: "/about-us",
      title: "About Us",
      icon: (
        <InfoIcon
          sx={{
            mx: "5px",
          }}
        />
      ),
    },
    {
      title: "products",
      nestedLinks: categories,
    },
    {
      path: "/facourites",
      title: "Contact Us",
      icon: (
        <PhoneIcon
          sx={{
            mx: "5px",
          }}
        />
      ),
    },
    // {
    //   path: "/register",
    //   title: "Register",
    //   icon: (
    //     <AppRegistrationIcon
    //       sx={{
    //         mx: "5px",
    //       }}
    //     />
    //   ),
    // },
    // {
    //   path: "/login",
    //   title: "Login",
    //   icon: (
    //     <LoginIcon
    //       sx={{
    //         mx: "5px",
    //       }}
    //     />
    //   ),
    // },

    // {
    //   path: "/profile",
    //   title: "Profile",
    //   icon: (
    //     <Person2Icon
    //       sx={{
    //         mx: "5px",
    //       }}
    //     />
    //   ),
    // },
  ];
  return data;
};

export const authRoutes = ["login", "register", "profile", "logout"];
