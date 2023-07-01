import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styledButton } from "../../../ui-core/globalStyles";
import { useGetCategoriesQuery } from "../../../redux/api/categoriesApi";
import { useNavigate } from "react-router";
export default function CategoriesMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { data } = useGetCategoriesQuery();

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          ...styledButton,
          bgcolor: "#000 !important",
        }}
      >
        Categories
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
          width: 1,
        }}
      >
        {data?.categories.map((category) => (
          <MenuItem
            key={category._id}
            onClick={() => {
              handleClose();
              navigate(`/categories/${category._id}`);
            }}
          >
            {category.name}
          </MenuItem>
        ))}
        <MenuItem
          onClick={() => {
            handleClose();
            navigate(`/categories`);
          }}
        >
          All Categories
        </MenuItem>
      </Menu>
    </div>
  );
}
