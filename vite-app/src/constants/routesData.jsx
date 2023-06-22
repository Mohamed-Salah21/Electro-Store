import HomeIcon from "@mui/icons-material/Home";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";
import Person2Icon from "@mui/icons-material/Person2";
import InfoIcon from "@mui/icons-material/Info";
import PhoneIcon from "@mui/icons-material/Phone";
export const routesData = () => {
  let data = [
    {
      path: "/",
      title: "Home page",
      icon: (
        <HomeIcon
          sx={{
            mx: "5px",
          }}
        />
      ),
    },
    {
      path: "/cart",
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
    {
      path: "/register",
      title: "Register",
      icon: (
        <AppRegistrationIcon
          sx={{
            mx: "5px",
          }}
        />
      ),
    },
    {
      path: "/login",
      title: "Login",
      icon: (
        <LoginIcon
          sx={{
            mx: "5px",
          }}
        />
      ),
    },

    {
      path: "/profile",
      title: "Profile",
      icon: (
        <Person2Icon
          sx={{
            mx: "5px",
          }}
        />
      ),
    },
  ];
  return data;
};

