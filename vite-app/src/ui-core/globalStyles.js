export const colors = {
  main: "#FEBB00",
  lighter: "#f5e8c3",
  error: "#F1431B",
};
export const styledButton = {
  bgcolor: `${colors.main} !important`,
  color: "#fff",
  padding: "5px 0",
  fontSize: "16px",
  fontWeight: "bold",
  p: "5px 10px",
  textTransform: "none",
  transition: "0.3s all",
  "&:active": {
    transform: "scale(0.9)",
  },
};
export const middleContainer = {
  width: {
    xl: 1500,
    lg: 1200,
    md: 0.85,
    xs: 0.95,
  },
  mx: "auto",
  gap: "10px",
};
export const sizeNormal = {
  md: "18px",
  xs: "16px",
};
