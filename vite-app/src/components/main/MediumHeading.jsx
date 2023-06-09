import { Typography } from "@mui/material";

const MediumHeading = ({ content, style }) => {
  return (
    <Typography
      sx={{
        fontSize: {
          lg: "35px",
          xs: "30px",
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

export default MediumHeading;
