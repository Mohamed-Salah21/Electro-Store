import React from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { Box, Typography, styled } from "@mui/material";

const CustomSlider = (props) => {
  const StyledBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "40vh",
  });
  const names = [
    "ahmed",
    "khaled",
    "alaa",
    "mohamed",
    "lamaa",
    "yehya",
    "hassan",
    "nabel",
    "hamsa",
    "ali",
    "mahmoud",
    "khaled",
    "bassam",
    "ali",
  ];
  return (
    <Box
      sx={{
        width: {
          xl: "1200px",
          lg: "992px",
          xs: 0.9,
        },
        mx: "auto",
        // border: "1px solid red",
      }}
    >
      <Typography align="center" fontWeight={"bold"} variant="h3">
        {props.title}
      </Typography>
      <Splide
        hasTrack={false}
        options={{
          // rewind: true,
          // gap: "1rem",
          // direction: "rtl",
          // width: "100%",
          // type: "loop",
          // perPage: { lg: 3, md: 2, sm: 1 },
          // perMove: 1,
          type: "loop",
          perPage: 3,
          width: "100%",
          breakpoints: {
            1900: {
              perPage: 3,
            },
            1200: {
              perPage: 3,
            },
            992: {
              perPage: 1,
            },
            768: {
              perPage: 1,
            },
            600: {
              perPage: 1,
            },
          },
          focus: "center",
          pagination: true,
          gap: "20px",
        }}
      >
        <SplideTrack>
          {names?.map((name) => (
            <SplideSlide>
              <StyledBox>
                <Typography variant="h3">{name}</Typography>
              </StyledBox>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </Box>
  );
};

export default CustomSlider;
