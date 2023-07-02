import React from "react";
import { Box, Button, CardMedia, Grid, Stack, Typography } from "@mui/material";
import SmallHeading from "../../components/main/SmallHeading";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { imageBaseUrl } from "../../services/https";
import ButtonELement from "../main/ButtonELement";
import { colors } from "../../ui-core/globalStyles";
import { useRemoveOrderHook } from "../../hooks/useCartHooks";
const CartItem = ({ item }) => {
  const [removeCartOrder, { removeLoading }] = useRemoveOrderHook();
  const handleRemoveFromCart = () => {
    removeCartOrder(item);
  };
  return (
    <Grid
      container
      //   key={item.product._id}
      sx={{
        mt: "20px",
        border: 1,
        borderColor: "divider",
        p: "15px",
      }}
    >
      <Grid md={5} xs={12}>
        <CardMedia
          component="img"
          src={`${imageBaseUrl}/${item.product.image}`}
          sx={{
            height: 300,
            width: 400,
          }}
        />
      </Grid>
      <Grid
        md={7}
        xs={12}
        sx={{
          px: "15px",
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="flex-end">
          <ButtonELement
            content="Remove"
            extraStyle={{
              bgcolor: `${colors.error} !important`,
            }}
            isLoading={removeLoading}
            handleClick={handleRemoveFromCart}
          />
        </Stack>
        <SmallHeading
          content={item.product.title}
          style={{
            textAlign: "initial",
          }}
        />
        <Typography
          variant="body2"
          sx={{
            my: "10px",
            fontSize: {
              md: "20px",
              xs: "18px",
            },
          }}
        >
          {item.product.price}$
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          gap="10px"
        >
          <Button
            disableRipple
            sx={{
              minWidth: 0,
              p: 0,
              "&:active > svg": {
                transform: "scale(0.6)",
              },
              "& > svg": {
                fontSize: {
                  md: "35px",
                  xs: "27px",
                },
                transition: "all 0.4s",
                color: colors.main,
              },
            }}
          >
            <AddCircleIcon />
          </Button>
          <Typography
            variant="body2"
            sx={{
              fontSize: {
                md: "20px",
                xs: "18px",
              },
            }}
          >
            {item.quantity}
          </Typography>
          <Button
            disableRipple
            sx={{
              minWidth: 0,
              p: 0,
              "&:active > svg": {
                transform: "scale(0.6)",
              },
              "& > svg": {
                fontSize: {
                  md: "35px",
                  xs: "27px",
                },
                transition: "all 0.4s",
                color: colors.main,
              },
            }}
          >
            <RemoveCircleIcon />
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default CartItem;
