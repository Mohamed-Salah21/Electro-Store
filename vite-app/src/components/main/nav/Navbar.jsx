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
import { routesData } from "../../../constants/routesData";
import { colors } from "../../../ui-core/globalStyles";
import LinkDropDown from "./LinkDropDown";
import ProfileMenu from "./ProfileMenu";
import BadgeDrawer from "./BadgeDrawer";
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
        width: 0.8,
        zIndex: "2",
        top: "2vh",
        left: "50%",
        transform: "translateX(-50%)",
        bgcolor: "#1c1a1482",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: "10px",
      }}
    >
      <Typography>Site</Typography>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          gap: "50px",
        }}
      >
        <Stack direction="row" gap="20px">
          {routesData().map((item) =>
            !item.nestedLinks ? (
              <LinkElelment
                path={item.path}
                text={item.title}
                color={colors.main}
              />
            ) : (
              <LinkDropDown
                item={item}
                pathname={pathname}
                extraColor={colors.main}
              />
            )
          )}
        </Stack>
        <Stack direction="row" alignItems="center" gap="10px">
          <BadgeDrawer
            path="/cart"
            items={cartItems.data[0] && !cartItems.error ? cartItems.data : []}
            badge={
              <Badge
                badgeContent={
                  cartItems.data[0] && !cartItems.error
                    ? cartItems.data.length
                    : 0
                }
                color="primary"
              >
                <ShoppingCartIcon
                  sx={{ color: pathname === "/" ? "#fff" : "#000" }}
                />
              </Badge>
            }
          />

          <BadgeDrawer
            path="/favourites"
            items={
              favourites.data[0] && !favourites.error ? favourites.data : []
            }
            badge={
              <Badge
                badgeContent={
                  favourites.data[0] && !favourites.error
                    ? favourites.data.length
                    : 0
                }
                color="primary"
              >
                <FavoriteIcon
                  sx={{ color: pathname === "/" ? "#fff" : "#000" }}
                />
              </Badge>
            }
          />
          <ProfileMenu />
          {/* Mobile Nav Drawer */}
          <NavDrawer />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Navbar;
