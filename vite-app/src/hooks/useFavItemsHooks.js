import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import {
  useGetFavouritesQuery,
  useAddToFavouritesMutation,
  useRemoveFromFavouritesMutation,
} from "../redux/api/favouritesApi";
export const useFetchFavouritesItems = () => {
  const { data, error, isLoading } = useGetFavouritesQuery();
  const [favourites, setFavourites] = useState({ data: [], error: "" });
  useEffect(() => {
    if (data && !error) {
      setFavourites({
        data: [...data.res.favourites],
        error: "",
      });
    } else {
      setFavourites({
        data: [],
        error: error.data.error,
      });
    }
  }, [data, error]);
  return { favourites, loadingFetchingFavs: isLoading };
};
export const useAddToFavourites = () => {
  const [addToFavourites, { isLoading: addFavLoading }] =
    useAddToFavouritesMutation();
  const addToFavouritesItems = (payload) => {
    addToFavourites(payload._id).then(({ data, error }) => {
      if (data) toast.success(data.message);
      else toast.error(error.data.error);
    });
  };
  return [addToFavouritesItems, { addFavLoading }];
};
export const useRemoveFromFavourites = () => {
  const [removeFromFavourites, { isLoading: removeLoading }] =
    useRemoveFromFavouritesMutation();
  const deleteItemFromFavourites = (payload) => {
    removeFromFavourites(payload.product._id).then(({ data }) =>
      toast.success(data.message)
    );
  };
  return [deleteItemFromFavourites, { removeLoading }];
};
