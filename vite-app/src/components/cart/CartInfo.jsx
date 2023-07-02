import { Box, Typography, styled } from "@mui/material";
const CartInfo = ({ cartItems }) => {
  const totalPrice = cartItems.data.reduce(
    (price, item) => price + item.quantity * item.product.price,
    0
  );
  const StyledFLex = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "20px 0",
    p: {
      fontWeight: "bold",
      "&:last-of-type": {
        color: "#888",
      },
    },
  });
  return (
    <Box
      sx={{
        p: "15px",
        border: 1,
        borderColor: "divider",
        mt: "20px",
      }}
    >
      <StyledFLex>
        <Typography component="p">Total Price</Typography>
        <Typography component="p">{totalPrice}$</Typography>
      </StyledFLex>
      <StyledFLex>
        <Typography component="p">Number of items</Typography>
        <Typography component="p">{cartItems.data.length}</Typography>
      </StyledFLex>
    </Box>
  );
};

export default CartInfo;
