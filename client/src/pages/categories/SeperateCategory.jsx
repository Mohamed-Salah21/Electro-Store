import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useLazyGetProductsByCategoryQuery } from "../../rtkQuery/api/prodcuctsApi";
import { middleContainer } from "../../components/publicStyles/publicStyles";

const SeparateCategory = ({ category }) => {
  const [GetProductsByCategory] = useLazyGetProductsByCategoryQuery();
  const [products, setProducts] = useState();

  useEffect(() => {
    GetProductsByCategory(category?._id).then(({ data }) => {
      if (data) {
        setProducts([...data?.products]);
      }
    });
  }, []);

  return (
    <Box>
      {category?.name && products?.length > 0 && (
        <>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontSize: "30px",
              //   fontFamily: `${publicFontFamily} !important`,
              fontWeight: "bold",
              my: "40px",
            }}
          >
            {category?.name}
          </Typography>
          <Stack
            // sx={{
            //   flexWrap: "wrap",
            //   flexDirection: {
            //     lg: "row",
            //     xs: "column",
            //   },
            //   justifyContent: "space-evenly",
            //   gap: "15px",
            // }}
            flexWrap="wrap"
            sx={{
              ...middleContainer,
              flexDirection: "row",
              justifyContent: "center",
              gap: "50px",
            }}
          >
            {products?.map((product) => (
              <Box
                sx={{
                  mt: "10px",
                }}
              >
                <ProductCard
                  item={product}
                  externalWidth={{
                    lg: 300,
                    md: 0.6,
                    xs: 1,
                  }}
                />
              </Box>
            ))}
          </Stack>
        </>
      )}
    </Box>
  );
};

export default SeparateCategory;
