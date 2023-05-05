import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { MenuContext } from "../../context/MenuContextVertical";
import { MenuContextType, Menu } from "../../context/typesMenuVertical";
import { styled, useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";


export function SubSidenav() {
  const theme = useTheme();
  const { menuContext, setMenuContext } = React.useContext(
    MenuContext
  ) as MenuContextType;
  type Anchor = 'top' | 'left' | 'bottom' | 'right';


  const toggleDrawer =  (anchor: Anchor, open: boolean) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      (event as React.KeyboardEvent).type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    
     
    setStateMenu(!menuContext.submenu,2);
    
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
    //stateSubmenu.setSubMenu(false);
    setStateMenu(false,2);

  };

  const setStateMenu = (state: boolean, type: number) => {
    const copy = JSON.parse(JSON.stringify(menuContext)) as Menu;

    if (type == 1) {
      copy.menu = state;
    } else {
      copy.submenu = state;    }

    setMenuContext(copy);
  };



  const list = (anchor:Anchor) => (
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
          open={menuContext.submenu}
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
