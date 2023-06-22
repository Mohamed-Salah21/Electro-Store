import { Box, Stack } from "@mui/material";
import React from "react";
import { colors } from "../../ui-core/globalStyles";

const FormContainer = ({ children }) => {
  return (
    <Stack
      sx={{
        height: "100vh",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: colors.lighter,
      }}
    >
      <Box
        sx={{
          borderRadius: "20px",
          width: {
            xl: 1200,
            lg: 1000,
            md: 0.8,
            xs: 0.9,
          },
        }}
      >
        {children}
      </Box>
    </Stack>
  );
};

export default FormContainer;
