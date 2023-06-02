import React from "react";
import { Box, Typography } from "@mui/material";
import CustomSlider from "../../components/slider/Slider";
import { useGetCategoriesQuery } from "../../rtkQuery/api/categoriesApi.jsx";
const HomePage = () => {
  const { data: dataCategories } = useGetCategoriesQuery();
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
      {dataCategories?.categories &&
        dataCategories?.categories?.map((category) => (
          <CustomSlider cetegory={category} />
        ))}
    </Box>
  );
};

export default HomePage;
