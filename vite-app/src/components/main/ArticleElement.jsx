import { Typography } from "@mui/material";
import React from "react";

const ArticleElement = ({ style, context }) => {
  return (
    <Typography
      component="article"
      sx={{
        ...style,
        textAlign: "center",
      }}
    >
      {context}
    </Typography>
  );
};

export default ArticleElement;
