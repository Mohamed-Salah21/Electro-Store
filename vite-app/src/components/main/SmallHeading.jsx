import { Typography } from "@mui/material";

const SmallHeading = ({ content, style }) => {
  return (
    <Typography
      sx={{
        fontSize: {
          lg: "27px",
          xs: "23px",
        },
        textAlign: "center",
        fontWeight: 600,
        ...style,
      }}
    >
      {content}
    </Typography>
  );
};

export default SmallHeading;
