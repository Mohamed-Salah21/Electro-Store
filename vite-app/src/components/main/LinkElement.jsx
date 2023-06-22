import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { sizeNormal } from "../../ui-core/globalStyles";
const LinkElelment = ({ path, text, color }) => {
  return (
    <Typography
      component={Link}
      to={path}
      sx={{
        color: color ? color : "#000",
        textDecoration: "none",
        fontSize: sizeNormal,
      }}
    >
      {text}
    </Typography>
  );
};

export default LinkElelment;
