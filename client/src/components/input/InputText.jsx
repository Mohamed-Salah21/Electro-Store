import { Box, InputBase, Typography } from "@mui/material";
import React from "react";

const InputText = ({ ...props }) => {
  return (
    <Box pb={"17px"} position={"relative"}>
      <InputBase
        {...props}
        sx={{
          bgcolor: props.touched && props.error ? "#fff" : "#e5e5e5",
          width: 1,
          fontSize: "17px",
          p: "15px",
          border: 1,
          borderColor: props.touched && props.error ? "red" : "transparent",
        }}
      />
      {props.error && props.touched ? (
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "bold",
            color: "red",
            position: "absolute",
            bottom: 0,
          }}
        >
          {props.error}
        </Typography>
      ) : undefined}
    </Box>
  );
};

export default InputText;
