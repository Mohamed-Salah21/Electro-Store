import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTranslation } from "react-i18next";
import { colors, publicFontFamily } from "../../../ui-core/globalStyles";
import { Box } from "@mui/material";
const LinkDropDown = ({
  item,
  pathname,
  extraColor,
  moreStyle,
  justifyContenValue,
}) => {
  const [_, { language: lang }] = useTranslation();

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
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        disableRipple
        sx={{
          ...moreStyle,
          color: extraColor,
          borderBottom:
            open || pathname.includes("/department")
              ? ` 1px solid ${colors.newMainColor} !important`
              : extraColor,
          fontWeight: "bolder",
          textTransform: "capitalize",
          fontSize: "16px",
          backgroundColor: "transparent !important",
          borderRadius: 0,
          p: 0,
          m: 0,
          fontFamily: publicFontFamily,
          "&:hover": {
            borderBottom: `1px solid ${colors.newMainColor}`,
          },
        }}
      >
        {item.title}
        <ArrowDropDownIcon
          sx={{
            transition: "transform 0.4s",
            transform: open ? "rotate(180deg)" : undefined,
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
                navigate(`departments/${nested?._id}`);
                handleClose();
              }}
              sx={{
                fontFamily: publicFontFamily,
                bgcolor:
                  pathname === `/departments/${nested?._id}`
                    ? `${colors.newMainColor} !important`
                    : undefined,
                color:
                  pathname === `/departments/${nested?._id}`
                    ? `${colors.main} !important`
                    : undefined,
              }}
            >
              {nested.name}
            </MenuItem>
          );
        })}
        <MenuItem
          onClick={() => {
            navigate(`departments`);
            handleClose();
          }}
          sx={{
            fontFamily: publicFontFamily,
            bgcolor:
              pathname === `/departments`
                ? `${colors.newMainColor} !important`
                : undefined,
            color: pathname === `/departments` ? `${colors.main } !important` : undefined,
          }}
        >
          All Products
        </MenuItem>
      </Menu>
    </Box>
  );
};
export default LinkDropDown;
