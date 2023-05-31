import React from "react";
import { Box, Typography } from "@mui/material";
import CustomSlider from "../../components/slider/Slider";
const HomePage = () => {
  const lang = "en";
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "40vh",
        }}
      >
        <Typography variant="h1">hero section</Typography>
      </Box>
      <CustomSlider title={ lang === "en" ? "Phones" : "هواتف" } cetegory={"phones"} />
      <CustomSlider title={ lang === "en" ? "Headphones" : "سماعات" } category={"headphones"} />
      <CustomSlider title={ lang === "en" ? "Shoes" : "أحذية" } category={"shoes"} />
    </Box>
  );
};

export default HomePage;
