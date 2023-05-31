import React, { useEffect, useState } from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { Box, Typography, styled } from "@mui/material";
import { useLazyFetchProductsQuery } from "../../rtkQuery/api/prodcuctsApi";

const CustomSlider = ({ title, cetegory }) => {
  const StyledBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "40vh",
  });

  const [products, setProducts] = useState([]);
  const [fetchProducts] = useLazyFetchProductsQuery();
  useEffect(() => {
    fetchProducts(cetegory).then(({ data }) =>
      data ? setProducts(data?.products) : undefined
    );
  }, []);

  return (
    <Box
      sx={{
        width: {
          xl: "1200px",
          lg: "992px",
          xs: 0.9,
        },
        mx: "auto",
        // border: "1px solid red",
      }}
    >
      <Typography align="center" fontWeight={"bold"} variant="h3">
        {title}
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
          focus: "center",
          pagination: true,
          gap: "20px",
        }}
      >
        <SplideTrack>
          {products?.map((product) => (
            <SplideSlide>
              <StyledBox>
                <Typography variant="h3">{product.title}</Typography>
              </StyledBox>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </Box>
  );
};

export default CustomSlider;
