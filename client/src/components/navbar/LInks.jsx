import { Box, Button } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router";
import { useGetCategoriesQuery } from "../../rtkQuery/api/categoriesApi";
import LinkDropDown from "./LinkDropDown";
import { colors } from "../publicStyles/publicStyles";

const LInks = () => {
  const navigate = useNavigate();
  const { data } = useGetCategoriesQuery();
  const { pathname } = useLocation();
  const NavLinksData = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About us",
      link: "/about",
    },
    {
      title: "departments",
      nestedLinks: data?.categories,
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];
  return (
    <Box
      sx={{
        display: {
          md: "flex",
          xs: "none",
        },
        gap: 2,
      }}
    >
      {NavLinksData.map((item, index) => {
        return item.nestedLinks ? (
          <Box key={index}>
            <LinkDropDown item={item} pathname={pathname} />
          </Box>
        ) : (
          <Button
            key={item.link}
            disableRipple
            onClick={() => navigate(item.link)}
            sx={{
              color: pathname === item.link ? colors.main : "#fff",

              fontSize: {
                lg: "16px",
                md: "13px",
              },
              textTransform: "capitalize",
              backgroundColor: "transparent !important",
              //   fontFamily: publicFontFamily,
              fontWeight: "bolder !important",
            }}
          >
            {item[`title`]}
          </Button>
        );
      })}
    </Box>
  );
};

export default LInks;
