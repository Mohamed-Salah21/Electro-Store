import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/main/Router";
import Navbar from "./components/main/nav/Navbar";
// import { theme } from "./ui-core/theme";
// import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useLazyGetUserInfoQuery } from "./redux/api/authApi";
import { setCurrentUser } from "./redux/slices/userSliice";
const App = () => {
  const { currentUser } = useSelector((state) => state);
  console.log("currentUser", currentUser);
  const dispatch = useDispatch();
  const [getUserInfo] = useLazyGetUserInfoQuery();
  useEffect(() => {
    getUserInfo().then(({ data }) => {
      if (data) {
        dispatch(setCurrentUser(data.data.user));
      }
    });
  }, []);
  console.log("currentUser", currentUser);
  return (
    <BrowserRouter>
      <ToastContainer theme="colored" />
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
