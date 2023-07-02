import { Box } from "@mui/material";
import React from "react";
import { useGetCategoriesQuery } from "../../redux/api/categoriesApi";
import CategoryProductsSlider from "../../components/home/ProductsSlider";
import HeroSlider from "../../components/home/HeroSlider";
const HomePage = () => {
  const { data } = useGetCategoriesQuery();
  return (
    <Box
      sx={{
        pb: "15vh",
      }}
    >
      <HeroSlider />
      {data?.categories &&
        data?.categories?.map((category) => (
          <CategoryProductsSlider  cetegory={category} />
        ))}
    </Box>
  );
};

export default HomePage;
