import { AppBar, Box, Stack, Badge, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavDrawer from "./NavDrawer";
import LinkElelment from "../LinkElement";
import CategoriesMenu from "./CategoriesMenu";
import { useTranslation } from "react-i18next";
import { useFetchCartItemsHook } from "../../../hooks/useCartHooks";
import { useFetchFavouritesItems } from "../../../hooks/useFavItemsHooks";
const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [_, { language }] = useTranslation();
  const { cartItems } = useFetchCartItemsHook();
  const { favourites } = useFetchFavouritesItems();
  return (
    <Box
      sx={{
        position: "absolute",
        width: 1,
        zIndex: "2",
        border: "1px solid red",
      }}
    >
      {" "}
      <Box
        sx={{
          width: 0.8,
          bgcolor: "#000",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          py: "10px",
          mx: "auto",
          clipPath: {
            md: "polygon(0 0, 100% 1%, 99% 100%, 1% 100%)",
            xs: 0,
          },
        }}
      >
        <LinkElelment path={"/"} text={"Home"} color={"#fff"} />
        <LinkElelment path={"/about-us"} text={"About Us"} color={"#fff"} />
        <LinkElelment path={"/about-us"} text={"About Us"} color={"#fff"} />
        <LinkElelment path={"/contact-us"} text={"Contact Us"} color={"#fff"} />
        <LinkElelment path={"/cart"} text={"Cart"} color={"#fff"} />
        <LinkElelment path={"/favourites"} text={"Favourites"} color={"#fff"} />
        {!sessionStorage?.userToken ? (
          <>
            <LinkElelment path={"/login"} text={"Login"} color={"#fff"} />
            <LinkElelment path={"/register"} text={"Register"} color={"#fff"} />
          </>
        ) : null}
      </Box>
      <Box
        sx={{
          display:
            pathname === "/login" || pathname === "/register" ? "none" : "flex",
          justifyContent: "center",
        }}
        my={"30px"}
      >
        <Typography
          variant="h4"
          sx={{
            color: pathname === "/" ? "#fff" : "#000",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onClick={() => navigate("/")}
        >
          ELECTRO STORE
        </Typography>
      </Box>
      <Box
        sx={{
          display:
            pathname === "/login" || pathname === "/register" ? "none" : "flex",
          justifyContent: "space-between",
          width: 0.8,
          mx: "auto",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justiyContent="center"
          sx={{
            gap: "20px",
          }}
        >
          <NavDrawer />
          {!pathname.includes("/categories") ? <CategoriesMenu /> : undefined}
        </Stack>

        <Stack direction="row" alignItems="center" gap="20px">
          <Badge
            badgeContent={
              cartItems.data[0] && !cartItems.error ? cartItems.data.length : 0
            }
            color="primary"
          >
            <ShoppingCartIcon
              sx={{ color: pathname === "/" ? "#fff" : "#000" }}
            />
          </Badge>
          <Badge
            badgeContent={
              favourites.data[0] && !favourites.error
                ? favourites.data.length
                : 0
            }
            color="primary"
          >
            <FavoriteIcon sx={{ color: pathname === "/" ? "#fff" : "#000" }} />
          </Badge>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
