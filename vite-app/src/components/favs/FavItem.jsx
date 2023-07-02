import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { imageBaseUrl } from "../../services/https";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ButtonELement from "../main/ButtonELement";
import { colors } from "../../ui-core/globalStyles";
import { useRemoveFromFavourites } from "../../hooks/useFavItemsHooks";
import { addToCart } from "../../hooks/useCartHooks";
const FavItem = ({ item }) => {
  const [deleteItemFromFavourites, { removeLoading }] =
    useRemoveFromFavourites();
  const [useAddToCartHook, { addOrderLoading }] = addToCart();

  const handleRemoveFromFavourites = () => {
    deleteItemFromFavourites(item);
  };
  const handleAddToCart = () => {
    useAddToCartHook(item.product._id);
  };
  return (
    <Box
      sx={{
        width: {
          lg: 350,
          md: 0.45,
          xs: 1,
        },
        border: 1,
        borderColor: "divider",
        p: "20px",
        position: "relative",
        mt: "30px",
      }}
    >
      <ButtonELement
        content={<DeleteForeverIcon />}
        extraStyle={{
          bgcolor: `${colors.error} !important`,
          position: "absolute",
          top: "-35px",
          right: 0,
          minWidth: 0,
        }}
        isLoading={removeLoading}
        handleClick={handleRemoveFromFavourites}
      />
      <CardMedia
        component="img"
        src={`${imageBaseUrl}/${item.product.image}`}
        sx={{
          height: 200,
          width: 1,
        }}
      />
      <Typography
        variant="h4"
        sx={{
          fontSize: {
            lg: "25px",
            md: "22px",
            xs: "18px",
          },
          my: "15px",
          textAlign: "center",
        }}
      >
        {item.product.title}
      </Typography>
      <ButtonELement
        content={"Add To Cart"}
        isLoading={addOrderLoading}
        extraStyle={{
          width: 1,
        }}
        handleClick={() => handleAddToCart()}
      />
    </Box>
  );
};

export default FavItem;
