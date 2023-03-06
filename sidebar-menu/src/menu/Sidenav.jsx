import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { NavLink, useNavigate } from "react-router-dom";
import { SubSidenav } from "./SubSidenav";
import { MenuContext } from "../context/MenuContext";
 
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export function Sidenav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const stateSubmenu = React.useContext(MenuContext);

  const navigate = useNavigate();

  const ControlDrawerHeader = () => {
    setOpen(!open);
  };

  const ControlDrawerItem = () => {
    setOpen(true);
  };

  const ControlDrawerItemClose = () => {
    console.log("entro");
    setOpen(false);
  };

  const ControlSubmenu = () => {
    stateSubmenu.setSubMenu(true);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/*onMouseOut={ControlDrawerItemClose} */}
      <Drawer
        variant="permanent"
        open={open}
        onMouseOut={ControlDrawerItemClose}
        PaperProps={{
          sx: {
            borderTopRightRadius: "24px",
            backgroundColor: "#F5F5F5",
            boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={ControlDrawerHeader}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
       
       
        <List onMouseOver={ControlDrawerItem}>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon
                  style={{ color: "#4A96D2", width: "34px", height: "29.33px" }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Home"
                sx={{ opacity: open ? 1 : 0 }}
                onClick={ControlSubmenu}
                primaryTypographyProps={{
                  fontSize: "24px",
                  fontFamily: "Nunito",
                }}
              />
            </ListItemButton>
          </ListItem>








          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/about");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon
                  style={{ color: "#4A96D2", width: "34px", height: "29.33px" }}
                />
              </ListItemIcon>
              <ListItemText primary="About" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/settings");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon
                  style={{ color: "#4A96D2", width: "34px", height: "29.33px" }}
                />
              </ListItemIcon>
              <ListItemText primary="Settings" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <SubSidenav />
    </Box>
  );
}
