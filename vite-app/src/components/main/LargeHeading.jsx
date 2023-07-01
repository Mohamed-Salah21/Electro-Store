import { Typography } from "@mui/material";
import React from "react";

const LargeHeading = ({ context, style }) => {
  return (
    <Typography
      sx={{
        ...style,
        fontSize: {
          lg: "60px",
          md: "50px",
          xs: "40px",
        },
        textAlign: "center",
        fontWeight: 600,
      }}
    >
      {context}
    </Typography>
  );
};

export default LargeHeading;
