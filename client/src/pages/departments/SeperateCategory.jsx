import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useLazyGetProductsByCategoryQuery } from "../../rtkQuery/api/prodcuctsApi";

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
            sx={{
              textAlign: "center",
              my: "50px",
              fontSize: {
                lg: "40px",
                md: "30px",
                xs: "25px",
              },
              //   fontFamily: `${publicFontFamily} !important`,
              fontWeight: "bold",
            }}
          >
            {category?.name}
          </Typography>
          <Stack
            sx={{
              flexWrap: "wrap",
              flexDirection: {
                lg: "row",
                xs: "column",
              },
              justifyContent: "center",
              gap: "40px",
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
                    lg: 350,
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
