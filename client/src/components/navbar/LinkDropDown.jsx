import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box } from "@mui/material";
import { colors } from "../publicStyles/publicStyles";
const LinkDropDown = ({ item, pathname }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        display: "flex",
        // justifyContent: justifyContenValue && justifyContenValue,
      }}
    >
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        disableRipple
        sx={{
          //   ...moreStyle,
          //   color: footerTextColor ? footerTextColor : "#000",
          fontWeight: "bolder",
          textTransform: "capitalize",
          fontSize: "17px",
          backgroundColor: "transparent !important",
          //   fontFamily: publicFontFamily,
          color: pathname.includes("/categories") ? colors.main : "#fff",
        }}
      >
        {item.title}
        <ArrowDropDownIcon
          sx={{
            transition: "transform 0.4s",
            transform: open ? "rotate(180deg)" : undefined,
            color: pathname.includes("/categories") ? colors.main : "#fff",
          }}
        />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          ".MuiList-root": {
            width: "in",
          },
        }}
      >
        {item?.nestedLinks.map((nested) => {
          return (
            <MenuItem
              key={nested.name}
              onClick={() => {
                navigate(`/categories/${nested?._id}`);
                handleClose();
              }}
              sx={{
                fontWeight: "bold",
                bgcolor:
                  pathname === `/categories/${nested?._id}`
                    ? `${colors?.main} !important`
                    : undefined,
                color:
                  pathname === `/categories/${nested?._id}`
                    ? `#fff !important`
                    : undefined,
              }}
            >
              {nested?.name}
            </MenuItem>
          );
        })}
        <MenuItem
          onClick={() => {
            navigate(`/categories`);
            handleClose();
          }}
          sx={{
            fontWeight: "bold",
            bgcolor:
              pathname === `/categories`
                ? `${colors?.main} !important`
                : undefined,
            color: pathname === `/categories` ? `#fff !important` : undefined,
          }}
        >
          All Products
        </MenuItem>
      </Menu>
    </Box>
  );
};
export default LinkDropDown;
