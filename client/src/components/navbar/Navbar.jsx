import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Badge, Popover, Stack } from "@mui/material";
import NavDrawer from "./NavDrawer";
import { useLocation, useNavigate } from "react-router";
import LInks from "./NavLinks";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = 5;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Box
      sx={{
        flexGrow: 1,
        display:
          pathname === "/login" || pathname === "/register" ? "none" : "block",
      }}
    >
      <AppBar
        position="static"
        sx={{
          width: "80%",
          bgcolor: "#000",
          position: "fixed",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: "100",
          clipPath: {
            md: "polygon(0 0, 100% 1%, 99% 100%, 1% 100%)",
            xs: 0,
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justiyContent="space-between"
            sx={{
              gap: "10px",
            }}
          >
            <NavDrawer />
            <Typography
              sx={{ color: "#fff", cursor: "pointer", fontWeight: "bold" }}
              onClick={() => navigate("/")}
            >
              ELECTRO STORE
            </Typography>
          </Stack>
          <LInks />
          <Stack direction="row" alignItems="center" gap="20px">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon sx={{ color: "#fff" }} />
            </Badge>
            <Badge badgeContent={4} color="primary">
              <FavoriteIcon sx={{ color: "#fff" }} />
            </Badge>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
