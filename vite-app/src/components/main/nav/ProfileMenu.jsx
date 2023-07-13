import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { authRoutes } from "../../../constants/routesData";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { removeCurrentUser } from "../../../redux/slices/userSliice";
export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { currentUser } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleNavigate = (path) => {
    handleClose();
    navigate(path);
  };
  const handleLogout = () => {
    handleClose();
    sessionStorage.removeItem("userToken");
    dispatch(dispatch(removeCurrentUser()));
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          minWidth: 0,
        }}
      >
        <AccountCircleIcon
          sx={{
            color: "#fff",
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
      >
        {currentUser
          ? authRoutes
              .filter((item) => item === "profile" || item === "logout")
              .map((item) => (
                <MenuItem
                  onClick={() =>
                    item === "logout"
                      ? handleLogout()
                      : handleNavigate(`/${item}`)
                  }
                >
                  {item}
                </MenuItem>
              ))
          : authRoutes
              .filter((item) => item === "login" || item === "register")
              .map((item) => (
                <MenuItem onClick={() => handleNavigate(`/${item}`)}>
                  {item}
                </MenuItem>
              ))}
      </Menu>
    </div>
  );
}
