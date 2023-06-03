import { CircularProgress, Stack } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <Stack
      height={"80vh"}
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress />
    </Stack>
  );
};

export default Loader;
