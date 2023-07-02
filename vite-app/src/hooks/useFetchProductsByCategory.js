


import React, { useState, useEffect } from "react";
import { useLazyGetProductsByCategoryQuery } from "../redux/api/productsApi";

const useFetchProductsByCategory = (categoryId) => {
  const [GetProductsByCategory, { isLoading }] =
    useLazyGetProductsByCategoryQuery();
  const [response, setResponse] = useState({
    products: [],
    error: "",
    isLoading,
  });
  useEffect(() => {
    GetProductsByCategory(categoryId).then(({ data, error }) => {
      if (data && !error) {
        setResponse({
          ...response,
          products: [...data.products],
          error: "",
        });
      } else {
        setResponse({
          ...response,
          products: [],
          error: "products are not found!",
        });
      }
    });
  }, [categoryId]);
  return { response };
};

export default useFetchProductsByCategory;
