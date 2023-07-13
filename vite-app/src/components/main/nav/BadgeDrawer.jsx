import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import { CardMedia, Stack, Typography, colors } from "@mui/material";
import { imageBaseUrl } from "../../../services/https";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ButtonELement from "../ButtonELement";
import { useRemoveOrderHook } from "../../../hooks/useCartHooks";
import { useNavigate } from "react-router";
import { useRemoveFromFavourites } from "../../../hooks/useFavItemsHooks";
const BadgeDrawer = ({ badge, items, path }) => {
  const [state, setState] = React.useState({
    left: false,
  });
  const navigate = useNavigate();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const [removeCartOrder] = useRemoveOrderHook();
  const [deleteItemFromFavourites] = useRemoveFromFavourites();
  const handleNavigate = (path) => {
    toggleDrawer(false);
    navigate(path);
  };
  return (
    <Box>
      <Button
        onClick={toggleDrawer("left", true)}
        sx={{
          minWidth: 0,
        }}
      >
        {badge}
      </Button>
      <Drawer
        anchor={"left"}
        open={state.left}
        onClose={toggleDrawer("left", false)}
        sx={{
          ".MuiPaper-root": {
            width: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "column",
            pb: "20px",
          },
        }}
      >
        <Box border={1} borderColor={"red"} width={1} p={"20px"}>
          <Typography
            variant="h5"
            align="center"
            my="20px"
            textTransform={"capitalize"}
          >
            {path.slice(1, path.length)}
          </Typography>
          {items?.map((item) => (
            <Stack
              sx={{
                flexDirection: "row",
                alignitems: "center",
                width: 1,
                border: 1,
                borderColor: "divider",
                mx: "auto",
                gap: "10px",
                mt: "15px",
              }}
            >
              <CardMedia
                component="img"
                src={`${imageBaseUrl}/${item.product.image}`}
                sx={{
                  height: 75,
                  width: 75,
                }}
              />
              <Box width={0.7} pr="5px">
                <Stack direction="row" justifyContent={"flex-end"} my="5px">
                  <ButtonELement
                    content={
                      <HighlightOffIcon
                        sx={{
                          color: "red",
                        }}
                      />
                    }
                    extraStyle={{
                      width: 20,
                      height: 20,
                      minWidth: 0,
                      bgcolor: "transparent",
                    }}
                    isLoading={false}
                    handleClick={() =>
                      path === "/cart"
                        ? removeCartOrder(item)
                        : deleteItemFromFavourites(item)
                    }
                  />
                </Stack>
                <Typography>{item.product.title}</Typography>
                <Typography>${item.product.price}</Typography>
              </Box>
            </Stack>
          ))}
        </Box>
        <Button
          sx={{
            bgcolor: "red !important",
            color: "#fff",
          }}
          onClick={() => handleNavigate(path)}
        >
          {path.slice(1, path.length)}
        </Button>
      </Drawer>
    </Box>
  );
};
export default BadgeDrawer;
