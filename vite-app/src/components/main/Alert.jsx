import { Stack, Typography } from "@mui/material";
import React from "react";
import ErrorIcon from "@mui/icons-material/Error";
const ErrorAlert = ({ error }) => {
  return (
    <Stack
      sx={{
        bgcolor: "#FDEDED",
        mb: "30px",
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <ErrorIcon
        sx={{
          color: "#8C5C5C",
        }}
      />
      {/* <Typography sx={{ color: "#8C5C5C" }}>{error}</Typography> */}
    </Stack>
  );
};

export default ErrorAlert;
