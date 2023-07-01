import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { routesData } from "../../../constants/routesData";
export default function NavDrawer() {
  const [state, setState] = React.useState({
    left: false,
    right: false,
  });
  const navigate = useNavigate();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const lang = "ar";
  const dirDrawer = lang === "en" ? "left" : "right";
  return (
    <div>
      <Button sx={{ minWidth: 0 }} onClick={toggleDrawer(dirDrawer, true)}>
        {!state[dirDrawer] ? (
          <DehazeIcon sx={{ color: "#fff" }} />
        ) : (
          <CloseIcon sx={{ color: "#fff" }} />
        )}
      </Button>
      <Drawer
        anchor={dirDrawer}
        open={state[dirDrawer]}
        onClose={toggleDrawer(dirDrawer, false)}
      >
        <Box
          sx={{
            width: 250,
            p: 2,
            pt: 5,
          }}
          role="presentation"
          onClick={toggleDrawer(dirDrawer, false)}
          onKeyDown={toggleDrawer(dirDrawer, false)}
        >
          {routesData().map((route) => (
            <Stack
              key={route.path}
              direction="row"
              alignItems="center"
              sx={{
                width: 0.75,
                mx: "auto",
                py: 1,
                border: 1,
                borderColor: "divider",
                cursor: "pointer",
                mt: "20px",
              }}
              onClick={() => navigate(route.path)}
            >
              {route.icon}
              <Typography component="span" fontWeight={"bold"}>
                {route.title}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Drawer>
    </div>
  );
}
