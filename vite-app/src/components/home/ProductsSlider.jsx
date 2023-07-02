import React from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { Box, Typography, styled } from "@mui/material";
import ProductCard from "./ProductCard";
import useFetchProductsByCategory from "../../hooks/useFetchProductsByCategory";
import ErrorMessage from "../main/ErrorMessage";
const CategoryProductsSlider = ({ cetegory }) => {
  const { response } = useFetchProductsByCategory(cetegory?._id);
  const { products, isLoading, error } = response;
  return (
    <Box
      key={cetegory._id}
      sx={{
        width: {
          xl: 1400,
          lg: 1200,
          md: 1,
          xs: 1,
        },
        mx: "auto",
        mt: "70px",
      }}
    >
      <Typography
        align="center"
        fontWeight={"bold"}
        variant="h3"
        textTransform={"capitalize"}
      >
        {cetegory?.name}
      </Typography>
      {isLoading ? (
        <Loader />
      ) : products?.length > 0 && !error ? (
        <Splide
          hasTrack={false}
          className="products-slider"
          options={{
            perPage: 3,
            width: "100%",
            pagination: false,
            breakpoints: {
              1900: {
                perPage: 3,
              },
              1200: {
                perPage: 3,
              },
              992: {
                perPage: 1,
              },
              768: {
                perPage: 1,
              },
              600: {
                perPage: 1,
              },
            },
            pagination: true,
            gap: "40px",
          }}
        >
          <SplideTrack>
            {products &&
              products.map((product) => (
                <SplideSlide key={product._id}>
                  <ProductCard item={product} />
                </SplideSlide>
              ))}
          </SplideTrack>
        </Splide>
      ) : (
        <ErrorMessage error={error} />
      )}
    </Box>
  );
};

export default CategoryProductsSlider;
