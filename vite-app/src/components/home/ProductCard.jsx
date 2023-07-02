import {
  Box,
  Button,
  CardMedia,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { colors, styledButton } from "../../ui-core/globalStyles";
import { useNavigate } from "react-router";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { imageBaseUrl } from "../../services/https";
import ButtonEL from "../main/ButtonELement";
import { addToCart } from "../../hooks/useCartHooks";
import { useAddToFavourites } from "../../hooks/useFavItemsHooks";
const ProductCard = ({ item, externalWidth }) => {
  const [useAddToCartHook, { addOrderLoading }] = addToCart();
  const [addToFavouritesItems] = useAddToFavourites();
  const navigate = useNavigate();
  const handleAddToCart = () => {
    useAddToCartHook(item._id);
  };
  const handleAddToFavourites = () => {
    addToFavouritesItems(item);
  };
  return (
    <Box
      sx={{
        position: "relative",
        width: externalWidth ? externalWidth : undefined,
        height: 500,
      }}
    >
      {" "}
      <CardMedia
        sx={{
          width: 1,
          height: 350,
          objectFit: "cover",
        }}
        component="img"
        src={`${imageBaseUrl}/${item?.image}`}
        alt={item?.title}
      />
      <Typography
        variant="h5"
        onClick={() => navigate(`/product/${item._id}`)}
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          cursor: "pointer",
          my: "10px",
        }}
      >
        {item.title?.length > 20 ? item.title.slice(0, 20) + "..." : item.title}
      </Typography>
      <Box sx={{}}>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 0.75,
          }}
        >
          <FavoriteBorderOutlinedIcon
            sx={{
              color: colors.main,
              cursor: "pointer",
              transition: "all 0.3s",
              "&:active": {
                transform: "scale(0.6)",
              },
            }}
            onClick={handleAddToFavourites}
          />
          <ButtonEL
            content={"add to cart"}
            isLoading={addOrderLoading}
            extraStyle={{
              width: 0.8,
            }}
            handleClick={() => handleAddToCart()}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductCard;
