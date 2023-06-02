import { Box, Button, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  colors,
  middleContainer,
} from "../../components/publicStyles/publicStyles";
import { useGetCategoriesQuery } from "../../rtkQuery/api/categoriesApi";
import { useLazyGetProductsByCategoryQuery } from "../../rtkQuery/api/prodcuctsApi";
import ProductCard from "../../components/ProductCard/ProductCard";
const Departments = () => {
  const { id: categoryId } = useParams();
  const navigate = useNavigate();
  const { data } = useGetCategoriesQuery();
  const [GetProductsByCategory] = useLazyGetProductsByCategoryQuery();
  const [products, setProducts] = useState();

  useEffect(() => {
    if (categoryId) {
      GetProductsByCategory(categoryId).then(({ data }) => {
        if (data) {
          setProducts([...data?.products]);
        }
      });
    }
  }, [categoryId]);

  return (
    <Box>
      <Box
        sx={{
          pt: "100px",
        }}
      >
        {categoryId ? (
          <>
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
                    onClick={() => navigate(`/departments/${category._id}`)}
                  >
                    {category?.name}
                  </Button>
                ))}
            </Stack>
            <Stack
              flexWrap="wrap"
              sx={{
                ...middleContainer,
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              {products?.map((product) => (
                <Box>
                  <ProductCard item={product} />
                </Box>
              ))}
            </Stack>
          </>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default Departments;
