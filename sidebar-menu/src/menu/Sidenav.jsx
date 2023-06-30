import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import WifiProtectedSetupOutlinedIcon from "@mui/icons-material/WifiProtectedSetupOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CleanHandsOutlinedIcon from "@mui/icons-material/CleanHandsOutlined";

import { SubSidenav } from "./SubSidenav";
import { MenuContext } from "../context/MenuContext";
import { navData } from "./dataMenu";
import { DrawerHeader, Drawer } from "./menuControles";
import { useNavigate } from "react-router-dom";

import logo from "../assets/LOGO-BDV-1.png";
import logo2 from "../assets/LOGO-BDV-2.png";
import logoFull from "../assets/logo.png"; 

import { display } from "@mui/system";




export function Sidenav() {
  const navigate = useNavigate();
  const theme = useTheme();

  const stateMenus = React.useContext(MenuContext);

  const ControlDrawerHeader = () => {
    stateMenus.setMenu(!stateMenus.menu);
  };

  const ControlDrawerItem = () => {
    stateMenus.setMenu(true);
  };

  const ControlDrawerItemClose = () => {
    stateMenus.setMenu(false);
  };

  const ControlSubmenu = () => {
    stateMenus.setSubMenu(true);
   
  };

  const mapStructure = (nodes) => {
    if (nodes) {
      return nodes.map(({ id, text, link, icon }) => (
        <ListItem
          key={id}
          disablePadding
          
          onClick={() => {
            navigate(link);
          }}
        >
          <ListItemButton
            sx={{
              minHeight: 80,              
              left: "16%",
              right: "16%",
              top: "20%",
              bottom: "21.33%",
               
                ":hover": {
                  backgroundColor: "#FFFFFF",
                  borderRadius: "8px",
                },
                position:"static",
                width:"200px"



            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: stateMenus.menu ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {(() => {
                switch (icon) {
                  case "AssessmentOutlinedIcon":
                    return (
                      <AssessmentOutlinedIcon
                        style={{
                          color: "#4A96D2",
                          width: "34px",
                          height: "34px",
                          left: "8px",
                          top: "10px",
                        }}
                      />
                    );
                  case "WifiProtectedSetupOutlinedIcon":
                    return (
                      <WifiProtectedSetupOutlinedIcon
                        style={{
                          color: "#4A96D2",
                          width: "34px",
                          height: "34px",
                          left: "8px",
                          top: "10px",
                        }}
                      />
                    );

                  case "DescriptionOutlinedIcon":
                    return (
                      <DescriptionOutlinedIcon
                        style={{
                          color: "#4A96D2",
                          width: "34px",
                          height: "34px",
                          left: "8px",
                          top: "10px",
                        }}
                      />
                    );

                  case "CleanHandsOutlinedIcon":
                    return (
                      <CleanHandsOutlinedIcon
                        style={{
                          color: "#4A96D2",
                          width: "34px",
                          height: "34px",
                          left: "8px",
                          top: "10px",
                        }}
                      />
                    );
                  default:
                    return (
                       <img
                        src={stateMenus.menu ? logoFull:logo}                        
                        style={{
                          width:stateMenus.menu ? "200px":"50px",
                          height: stateMenus.menu ? "40px":"70px",
                          left: "28px",
                          top: "14px",
                          borderRadius: "0px"
                                
                        }}
                      />  

 
 



                    );
                }
              })()}
            </ListItemIcon>

        


 
          <ListItemText
          primary={text!='logo'?text:''}
          sx={{ opacity: stateMenus.menu ? 1 : 0 }}
          onClick={ControlSubmenu}
          primaryTypographyProps={{
            fontSize: "24px",
            fontFamily: "Nunito",
            fontWeight:"400",
            lineHeight:"33px",
            letterSpacing:'0em',
            textAlign:'left'
          }}
        />
 
 


          </ListItemButton>
        </ListItem>
      ));
    }
  };

  const DynamicNestedItems = (RootObject) => {
    return (
      <List sx={{  width:"310px",  }}>{mapStructure(RootObject)}</List>
    );
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/*onMouseOut={ControlDrawerItemClose} */}
      <Drawer
        variant="permanent"
        open={stateMenus.menu}
        onMouseOut={ControlDrawerItemClose}
        onMouseOver={ControlDrawerItem}
        PaperProps={{
          sx: {
            borderTopRightRadius: "24px",
            backgroundColor: "#F5F5F5",
            boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1)",
            padding:"10px"
          },
        }}
      >
        {DynamicNestedItems(navData)}
      </Drawer>
      <SubSidenav />
    </Box>
  );
}
