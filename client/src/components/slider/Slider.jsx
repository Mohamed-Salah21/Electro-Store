import React, { useEffect, useState } from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { Box, Typography, styled } from "@mui/material";
import { useLazyGetProductsByCategoryQuery } from "../../rtkQuery/api/prodcuctsApi";
import ProductCard from "../ProductCard/ProductCard";

const CustomSlider = ({ cetegory }) => {
  const [GetProductsByCategory] = useLazyGetProductsByCategoryQuery();
  const [products, setProducts] = useState();

  useEffect(() => {
    GetProductsByCategory(cetegory?._id).then(({ data }) => {
      if (data) {
        setProducts([...data?.products]);
      }
    });
  }, []);
  return (
    <Box
      sx={{
        width: {
          xl: 1500,
          lg: 1200,
          md: 1,
          xs: 1,
        },
        mx: "auto",
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
      <Splide
        hasTrack={false}
        options={{
          // rewind: true,
          // gap: "1rem",
          // direction: "rtl",
          // width: "100%",
          // type: "loop",
          // perPage: { lg: 3, md: 2, sm: 1 },
          // perMove: 1,
          type: "loop",
          perPage: 3,
          width: "100%",
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
          // focus: "center",
          pagination: true,
          gap: "20px",
        }}
      >
        <SplideTrack>
          {products &&
            products.map((product) => (
              <SplideSlide>
                <ProductCard item={product} />
              </SplideSlide>
            ))}
        </SplideTrack>
      </Splide>
    </Box>
  );
};

export default CustomSlider;
