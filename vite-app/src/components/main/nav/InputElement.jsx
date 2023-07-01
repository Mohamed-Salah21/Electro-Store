import { Box, InputBase, Stack, Typography } from "@mui/material";
import React from "react";
const InputElement = ({
  icon,
  placeholder,
  value,
  name,
  error,
  type,
  touched,
  handleChange,
  handleBlur,
  mt,
}) => {
  return (
    <Box
      sx={{
        mt: mt ? mt : 0,
        position: "relative",
        pb: "20px",
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#E5E5E5",
          borderRadius: "10px",
          border: 1,
          borderColor: error && touched ? "red" : "transparent",
        }}
      >
        {icon}
        <InputBase
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onBlur={handleBlur}
          onChange={handleChange}
          sx={{
            width: 0.9,
            p: "15px 10px",
          }}
        />
        {error && touched ? (
          <Typography
            sx={{
              position: "absolute",
              bottom: 0,
              color: "red",
              fontSize: "12px",
              fontWeight: "bold",
              left: "10px",
            }}
          >
            {error}
          </Typography>
        ) : undefined}
      </Stack>
    </Box>
  );
};

export default InputElement;
