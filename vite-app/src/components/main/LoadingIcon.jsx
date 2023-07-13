import { CircularProgress } from "@mui/material";
import React from "react";

const LoadingIcon = () => {
  return (
    <CircularProgress
      size={20}
      sx={{
        color: "#000",
      }}
    />
  );
};

export default LoadingIcon;
