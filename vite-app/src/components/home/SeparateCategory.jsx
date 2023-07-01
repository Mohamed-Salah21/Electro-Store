import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import useFetchProductsByCategory from "../../hooks/useFetchProductsByCategory";
import { middleContainer } from "../../ui-core/globalStyles";
const SeparateCategory = ({ category }) => {
  const { response } = useFetchProductsByCategory(category._id);

  return (
    <Box key={category._id}>
      {category?.name && response.products?.length > 0 && (
        <>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontSize: "30px",
              fontWeight: "bold",
              my: "40px",
            }}
          >
            {category?.name}
          </Typography>
          <Stack
            flexWrap="wrap"
            sx={{
              ...middleContainer,
              flexDirection: "row",
              justifyContent: "center",
              gap: "50px",
            }}
          >
            {response.products?.map((product) => (
              <Box
                sx={{
                  mt: "10px",
                }}
                key={product._id}
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
