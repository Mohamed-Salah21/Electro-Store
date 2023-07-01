import React from "react";
import AppRoutes from "./components/Router/Routes";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar"
const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["'Tajawal', sans-serif"],
    },
  });
  const lang = "en";
<<<<<<< HEAD:client/src/App.jsx

=======
>>>>>>> 3ca415e112c4ab9490ea5772f7b718ebd6075152:client/src/App.js

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
