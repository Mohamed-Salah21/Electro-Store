import React from "react";
import { Stack, Typography } from "@mui/material";
export const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justiyContent="space-between"
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
        <Typography sx={{ color: "#fff" }}>EGY STORE</Typography>
      </Stack>
    </Stack>
  );
};
