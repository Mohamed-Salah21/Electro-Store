import React from "react";
import { Box, Typography, styled } from "@mui/material";
import CustomSlider from "../../components/slider/Slider";
import { useGetAllProductsQuery } from "../../rtkQuery/api/prodcuctsApi";
const HomePage = () => {
  const data = useGetAllProductsQuery();
  console.log("QQQQQQQQ",data)
  return (
    <Box>
      <Box
        sx={{
          // border: "1px solid red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "40vh",
        }}
      >
        <Typography variant="h1">hero section</Typography>
      </Box>
      <CustomSlider title={"Cats"} />
      <CustomSlider title={"Cats"} />
      <CustomSlider title={"Cats"} />
    </Box>
  );
};

export default HomePage;
