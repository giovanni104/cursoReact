import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { MenuContext } from "../context/MenuContext";
import { styled, useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { red } from "@mui/material/colors";
import { Bolt } from "@mui/icons-material";

export function SubSidenav() {
  const theme = useTheme();
  const stateSubmenu = React.useContext(MenuContext);
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    stateSubmenu.setSubMenu(!stateSubmenu.subMenu);
  };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const ControlDrawerHeader = () => {
    stateSubmenu.setSubMenu(false);


  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          "Historial de operaciones",
          "Mis productos",
          "Estatus de solicitudes",
          "Operaciones programadas",
           
        ].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{
              width: "300px",
              height: "80px",
              left: "12px",
              right: "16%",
              top: "12px",
            }}
          >
            <ListItemButton
              sx={{
                ":hover": {
                  backgroundColor: "#FFFFFF",
                  borderRadius: "8px",
                },
              }}
            >
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  fontSize: "22px",
                  fontFamily: "Nunito",
                  fontWeight: "550",
                  lineHeight: "22px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#000000",
                 
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <SwipeableDrawer
          anchor="left"
          open={stateSubmenu.subMenu}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
          ModalProps={{
            slotProps: { backdrop: { invisible: true } },
          }}
          PaperProps={{
            sx: {
              borderTopRightRadius: "24px",
              backgroundColor: "#F5F5F5",
              boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <DrawerHeader
            sx={{
              backgroundColor: "#FFFFFF",
              borderBottomLeftRadius: "8px",
              borderBottomRightRadius: "8px",
              height:"80px"
            }}
          >
            <IconButton onClick={ControlDrawerHeader}>
              <ChevronLeftIcon
                style={{
                  color: "#4A96D2",
                  width: "34px",
                  height: "34px",
                }}
              />
            </IconButton>
            <ListItemText
              primary="Consultas"
              primaryTypographyProps={{
                fontSize: "24px",
                fontFamily: "Nunito",
                fontWeight: "800",
                lineHeight: "27px",
                letterSpacing: "0em",
                textAlign: "center",
                color: "#373737",
              }}
            />
          </DrawerHeader>

          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
