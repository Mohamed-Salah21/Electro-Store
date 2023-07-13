import { Box, Button, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { useGetCategoriesQuery } from "../../redux/api/categoriesApi";
import SeparateCategory from "../../components/home/SeparateCategory";
import { colors, middleContainer } from "../../ui-core/globalStyles";
import ProductCard from "../../components/home/ProductCard";
import useFetchProductsByCategory from "../../hooks/useFetchProducts";

const CategoriesPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const { data } = useGetCategoriesQuery();
  const { response } = useFetchProductsByCategory(categoryId);
  const { pathname } = useLocation();
  return (
    <Box>
      <Box
        sx={{
          pt: "100px",
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            my: "100px",
          }}
        >
          {data?.categories &&
            data?.categories?.map((category) => (
              <Button
                key={category._id}
                variant="h1"
                border={1}
                borderColor={"red"}
                sx={{
                  bgcolor:
                    categoryId === category._id
                      ? `${colors.main} !important`
                      : "#F5F5F5 !important",
                  color:
                    categoryId === category._id
                      ? "#fff !important"
                      : "#000 !important",
                  // fontFamily: publicFontFamily,
                  fontSize: "17px",
                  fontWeight: "bold",
                }}
                onClick={() => navigate(`/categories/${category._id}`)}
              >
                {category?.name}
              </Button>
            ))}
          <Button
            variant="h1"
            border={1}
            borderColor={"red"}
            sx={{
              bgcolor:
                pathname === "/categories"
                  ? `${colors.main} !important`
                  : "#F5F5F5 !important",
              color:
                pathname === "/categories"
                  ? "#fff !important"
                  : "#000 !important",
              fontSize: "17px",
              fontWeight: "bold",
            }}
            onClick={() => navigate(`/categories`)}
          >
            all categories
          </Button>
        </Stack>
        {categoryId ? (
          <>
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
                <Box key={product._id}>
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
        ) : (
          <>
            {data?.categories.map((category) => (
              <SeparateCategory category={category} />
            ))}
          </>
        )}
      </Box>
    </Box>
  );
};

export default CategoriesPage;
