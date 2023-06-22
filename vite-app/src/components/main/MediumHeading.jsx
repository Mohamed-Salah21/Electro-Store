import { Typography } from "@mui/material";
import React from "react";

const MediumHeading = ({ content, style }) => {
  return (
    <Typography
      sx={{
        ...style,
        fontSize: {
          lg: "35px",
          xs: "30px",
        },
        textAlign: "center",
        fontWeight: 600,
      }}
    >
      {content}
    </Typography>
  );
};

export default MediumHeading;
