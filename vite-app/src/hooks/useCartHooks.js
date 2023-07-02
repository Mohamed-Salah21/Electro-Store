import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  useGetCartItemsQuery,
  useAddOrderMutation,
  useRemoveOrderMutation,
  // useUpdateQtyMutation,
} from "../redux/api/cartApi";
export const useFetchCartItemsHook = () => {
  const { data, error, isLoading } = useGetCartItemsQuery();
  const [cartItems, setCartItems] = useState({
    data: [],
    error: "",
  });
  useEffect(() => {
    if (data && !error) {
      setCartItems({
        data: [...data.cart],
        error: "",
      });
    } else {
      setCartItems({
        data: [],
        error: error?.data.error,
      });
    }
  }, [data, error]);
  return { cartItems, loadingFetch: isLoading };
};
export const addToCart = () => {
  const [addOrder, { isLoading }] = useAddOrderMutation();
  const useAddToCartHook = (payload) => {
    addOrder({ product: payload._id }).then(({ data, error }) => {
      if (data && !error) {
        toast.success(data.message);
      } else {
        toast.error(error?.data.error);
      }
    });
  };
  return [useAddToCartHook, { addOrderLoading: isLoading }];
};
export const useRemoveOrderHook = () => {
  const [removeOrder, { isLoading: removeLoading }] = useRemoveOrderMutation();
  const removeCartOrder = (payload) => {
    removeOrder(payload.product._id).then(({ data }) =>
      toast.success(data.message)
    );
  };
  return [removeCartOrder, { removeLoading }];
};
