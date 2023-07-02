import { Box, CircularProgress } from "@mui/material";
import { colors } from "../../ui-core/globalStyles";

export default function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "60vh",
      }}
    >
      <CircularProgress
        sx={{
          color: colors.main,
        }}
      />
    </Box>
  );
}
