import HomeIcon from "@mui/icons-material/Home";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";
import Person2Icon from "@mui/icons-material/Person2";
import InfoIcon from "@mui/icons-material/Info";
import PhoneIcon from "@mui/icons-material/Phone";
const routes = (lang) => {
  let data = [
    {
      path: "/",
      title: lang === "en" ? "Home page" : "الرئيسية",
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
      title: lang === "en" ? "About Us" : "من نحن",
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
      title: lang === "en" ? "Contact Us" : "تواصل معنا",
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
      title: lang === "en" ? "Register" : "إنشاء حساب",
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
      title: lang === "en" ? "Login" : "تسجيل دخول",
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
      title: lang === "en" ? "Profile" : "الصفحة الشخصية",
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
export default routes;
