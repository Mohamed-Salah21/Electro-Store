import React from "react";
import { Box, CardMedia, Typography, Avatar, Stack } from "@mui/material";
import CustomSlider from "../../components/slider/Slider";
import { useGetCategoriesQuery } from "../../rtkQuery/api/categoriesApi.jsx";
import { colors } from "../../components/publicStyles/publicStyles";
import { Splide, SplideSlide } from "@splidejs/react-splide";
const HomePage = () => {
  const { data: dataCategories } = useGetCategoriesQuery();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "70vh",
          mb: "40px",
          bgcolor: colors.main,
          position: "relative",
        }}
      >
        <CardMedia
          component="img"
          src="https://purepng.com/public/uploads/large/purepng.com-women-shoppingwomenpeoplepersonsfemaleshopping-11215250879289tvzj.png"
          sx={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            height: 600,
            width: "auto",
          }}
        />
        <Box
          sx={{
            width: {
              xl: 0.6,
              lg: 0.7,
              md: 0.8,
              xs: 0.9,
            },
          }}
        >
          <Splide
            options={{
              fixedWidth: "100%",
              autoplay: true,
              interval: 2000,
              type: "loop",
              cover: true,
            }}
          >
            {[...Array(4)].map((_, index) => (
              <SplideSlide key={index}>
                <Box sx={{ position: "relative" }}>
                  <Stack
                    direction="column"
                    sx={{
                      color: "white",
                      width: {
                        md: 0.8,
                        xs: 0.97,
                      },
                      mx: "auto",
                    }}
                  >
                    <Typography variant="h2" align="center" fontWeight={"bold"}>
                      GET START
                    </Typography>
                    <Typography variant="h3" align="center" fontWeight={"bold"}>
                      YOUR FAVRIOT SHOPING
                    </Typography>
                  </Stack>
                </Box>
              </SplideSlide>
            ))}
          </Splide>
        </Box>
      </Box>
      {dataCategories?.categories &&
        dataCategories?.categories?.map((category) => (
          <CustomSlider cetegory={category} />
        ))}
    </Box>
  );
};

export default HomePage;
