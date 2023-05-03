import React from "react";
import Navbar from "./components/navbar/Navbar";
import AppRoutes from "./components/Router/Routes";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["'Tajawal', sans-serif"],
    },
  });
  const lang = "ar";
  const selector = useSelector((state) => state);
  console.log("selector", selector);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            direction: lang === "en" ? "ltr" : "rtl",
          }}
        >
          <Navbar />
          <AppRoutes />
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
