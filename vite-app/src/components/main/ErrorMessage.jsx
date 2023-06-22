import { Box, Typography } from "@mui/material";

export default function ErrorMessage({ error }) {
  return (
    <Box
      sx={{
        display: "flex",
        height: "70vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          color: "red",
          fontSize: { xs: "30px", md: "50px", xs: "25px" },
        }}
      >
        {error}
      </Typography>
    </Box>
  );
}
