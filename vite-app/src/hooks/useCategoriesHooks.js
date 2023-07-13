import { useEffect, useState } from "react";
import { useGetCategoriesQuery } from "../redux/api/categoriesApi";

export const useFetchAllProducts = () => {
  const { data, error, isLoading } = useGetCategoriesQuery();
  const [categories, setCategories] = useState();
  useEffect(() => {
    if (data && !error) {
      setCategories(data.categories);
    }
  }, [data]);
  return { categories, isLoading };
};
