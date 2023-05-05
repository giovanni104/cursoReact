import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import ListItemIcon from "@mui/material/ListItemIcon";

import { SubSidenav } from "./SubSidenav";
import { MenuContext } from "../../context/MenuContextVertical";
import { MenuContextType, Menu } from "../../context/typesMenuVertical";
import { navData } from "./dataMenu";
import { Drawer } from "./menuControles";

const logo = "/LOGO-BDV-1.svg";
const logoFull = "/LOGO-BDV-2.svg";

export function Sidenav() {
  const { menuContext, setMenuContext } = React.useContext(
    MenuContext
  ) as MenuContextType;

  const ControlDrawerItem = () => {
    setStateMenu(true,1);
  };

  const ControlDrawerItemClose = () => {
    setStateMenu(false,1);
  };

  const ControlSubmenu = () => {
    setStateMenu(true,2);
  };

  const setStateMenu = (state: boolean, type: number) => {
    const copy = JSON.parse(JSON.stringify(menuContext)) as Menu;

    if (type == 1) {
      copy.menu = state;
    } else {
      copy.submenu = state;    }

    setMenuContext(copy);
  };

  interface DataMenu {
    id: number;
    text: string;
    link: string;
    icon: string;
  }

  const mapStructure = (nodes: DataMenu[]) => {
    if (nodes) {
      return nodes.map(({ id, text, link, icon }) => (
        <ListItem
          key={id}
          disablePadding
          sx={{ marginTop: id == 1 ? "90px" : "0px" }}
          onClick={() => {
            //navigate(link);
          }}
        >
          <ListItemButton
            sx={{
              minHeight: 80,
              left: "16%",
              right: "16%",
              top: "30%",
              bottom: "21.33%",
              ":hover": {
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
              },
              position: "static",
              width: "200px",
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: menuContext.menu ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {(() => {
                switch (icon) {
                  case "logo":
                    return (
                      <img
                        src={menuContext.menu ? logoFull : logo}
                        style={{
                          width: menuContext.menu ? "266px" : "50px",
                          height: menuContext.menu ? "80px" : "80px",
                          left: "28px",
                          top: "14px",
                          borderRadius: "0px",
                        }}
                      />
                    );

                  default:
                    return (
                      <img
                        src={icon}
                        style={{
                          color: "#4A96D2",
                          width: "34px",
                          height: "34px",
                          left: "8px",
                          top: "10px",
                        }}
                      />
                    );
                }
              })()}
            </ListItemIcon>

            <ListItemText
              primary={text != "logo" ? text : ""}
              sx={{ opacity: menuContext.menu ? 1 : 0 }}
              onClick={ControlSubmenu}
              primaryTypographyProps={{
                fontSize: "24px",
                fontFamily: "Nunito",
                fontWeight: "400",
                lineHeight: "33px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#2C2C2C",
              }}
            />
          </ListItemButton>
        </ListItem>
      ));
    }
  };

  const DynamicNestedItems = (RootObject: DataMenu[]) => {
    return <List sx={{ width: "310px" }}>{mapStructure(RootObject)}</List>;
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/*onMouseOut={ControlDrawerItemClose} */}
      <Drawer
        variant="permanent"
        open={menuContext.menu}
        onMouseOut={ControlDrawerItemClose}
        onMouseOver={ControlDrawerItem}
        PaperProps={{
          sx: {
            borderTopRightRadius: "24px",
            backgroundColor: "#F5F5F5",
            boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1)",
            padding: "10px",
          },
        }}
      >
        {DynamicNestedItems(navData)}
      </Drawer>
      <SubSidenav />
    </Box>
  );
}
