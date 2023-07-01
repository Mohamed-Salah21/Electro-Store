import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/main/Router";
import Navbar from "./components/main/nav/Navbar";
// import { theme } from "./ui-core/theme";
// import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer theme="colored" />
      {/* <ThemeProvider theme={theme}>
      </ThemeProvider> */}
        <Navbar />
        <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
