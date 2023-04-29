import React from "react";
import { Badge, Stack, Typography } from "@mui/material";
import NavDrawer from "./NavDrawer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
export const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        px: "20px",
        width: "80%",
        bgcolor: "#000",
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        py: "15px",
        clipPath: {
          md: "polygon(0 0, 100% 1%, 99% 100%, 1% 100%)",
          xs: 0,
        },
      }}
    >
      <Stack direction="row" alignItems="center" justiyContent="space-between">
        <NavDrawer />
        <Typography sx={{ color: "#fff" }}>ELECTRO STORE</Typography>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justiyContent="space-between"
        px="20px"
        gap="20px"
      >
        <Badge badgeContent={4} color="primary">
          <ShoppingCartIcon sx={{ color: "#fff" }} />
        </Badge>
        <Badge badgeContent={4} color="primary">
          <FavoriteIcon sx={{ color: "#fff" }} />
        </Badge>
      </Stack>
    </Stack>
  );
};
