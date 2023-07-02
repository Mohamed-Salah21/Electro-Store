import React from "react";
import { useFetchCartItemsHook } from "../../hooks/useCartHooks";
import { Box, Container } from "@mui/material";
import Loader from "../../components/main/Loader";
import ErrorMessage from "../../components/main/ErrorMessage";
import CartItem from "../../components/cart/CartItem";
import CartInfo from "../../components/cart/CartInfo";
const CartItemsPage = () => {
  const { cartItems, loadingFetch } = useFetchCartItemsHook();
  return (
    <Box
      sx={{
        pt: "200px",
      }}
    >
      {loadingFetch ? (
        <Loader />
      ) : (
        <Box
          sx={{
            py: "70px",
          }}
        >
          {cartItems.data[0] && !cartItems.error ? (
            <Container>
              {cartItems.data.map((item) => (
                <CartItem item={item} key={item._id} />
              ))}
              <CartInfo cartItems={cartItems} />
            </Container>
          ) : (
            <ErrorMessage error={cartItems.error} />
          )}
        </Box>
      )}
    </Box>
  );
};

export default CartItemsPage;
