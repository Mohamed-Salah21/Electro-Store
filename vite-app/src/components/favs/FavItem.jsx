import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { imageBaseUrl } from "../../services/https";
import ButtonELement from "../main/ButtonELement";
import { colors } from "../../ui-core/globalStyles";
import { useRemoveFromFavourites } from "../../hooks/useFavItemsHooks";
const FavItem = ({ item }) => {
  const [deleteItemFromFavourites, { removeLoading }] =
    useRemoveFromFavourites();
  const handleRemoveFromFavourites = () => {
    deleteItemFromFavourites(item);
  };
  return (
    <Box
      sx={{
        width: 0.9,
        border: 1,
        borderColor: "divider",
        p: "20px",
        mx: "auto",
      }}
    >
      <CardMedia
        component="img"
        src={`${imageBaseUrl}/${item.product.image}`}
        sx={{
          height: 200,
          width: 200,
        }}
      />
      <Typography variant="h4">{item.product.title}</Typography>
      <ButtonELement
        content="Remove"
        extraStyle={{
          bgcolor: `${colors.error} !important`,
        }}
        isLoading={removeLoading}
        handleClick={handleRemoveFromFavourites}
      />
    </Box>
  );
};

export default FavItem;
