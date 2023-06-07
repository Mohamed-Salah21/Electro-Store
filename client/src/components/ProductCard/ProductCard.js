import {
  Box,
  Button,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { baseUrl } from "../urls";
import { colors, styledButton } from "../publicStyles/publicStyles";
import { useNavigate } from "react-router";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const ProductCard = ({ item, externalWidth }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: "relative",
        width: externalWidth ? externalWidth : "initial",
      }}
    >
      <Stack
        sx={{
          position: "absolute",
          top: "15px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <FavoriteBorderOutlinedIcon
          sx={{
            color: colors.main,
            cursor: "pointer",
            transition: "0.4s all",
            fontSize: "30px",
            "&:hover": {
              transform: "scale(1.2)",
            },
            "&:active": {
              transform: "scale(0.95)",
            },
          }}
        />
      </Stack>
      <CardMedia
        height={200}
        width={1}
        component="img"
        src={`${baseUrl}/uploads/${item.image}`}
        alt={item.title}
        sx={{
          borderRadius: "20px 20px 0 0",
        }}
      />
      <Box
        sx={{
          padding: "20px 10px 10px",
          border: `1px solid #a8a8a8`,
        }}
      >
        <Typography
          variant="h5"
          onClick={() => navigate(`/product/${item._id}`)}
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {item.title?.length > 20
            ? item.title.slice(0, 20) + "..."
            : item.title}
        </Typography>
        <Button
          sx={{
            ...styledButton,
            width: 1,
            mt: 2.5,
          }}
        >
          Add to cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
