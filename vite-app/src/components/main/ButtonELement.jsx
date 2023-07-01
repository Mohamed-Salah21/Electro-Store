import React from "react";
import { colors, styledButton } from "../../ui-core/globalStyles";
import LoadingIcon from "./LoadingIcon";
import { Button } from "@mui/material";

const ButtonELement = ({
  content,
  extraStyle,
  handleClick,
  isLoading,
}) => {
  return (
    <Button
      type="button"
      sx={{ ...styledButton, ...extraStyle }}
      onClick={handleClick}
    >
      {isLoading ? <LoadingIcon /> : content}
    </Button>
  );
};

export default ButtonELement;
