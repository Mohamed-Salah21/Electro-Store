import { Container } from "@mui/material";
import React from "react";

const SmallContainer = ({ children }) => {
  return <Container maxWidth="sm">{children}</Container>;
};

export default SmallContainer;
