import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./horizontal.css";
import logo from "./assets/Solicitudes.svg";

export function Horizontal() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


 
  
    const hover=(event ) => { 
      const button = document.getElementById(`${event.currentTarget.id}_img`);
      button.setAttribute('src','http://dummyimage.com/100x100/eb00eb/fff') 
    }
    
    const unhover=(event) => {     
      const button = document.getElementById(`${event.currentTarget.id}_img`);
      button.setAttribute('src','http://dummyimage.com/100x100/000/fff')  
    }
 

  return (
    <div className="div_menu">
      <List component={Stack} direction="row">
        <ListItem
          disablePadding
          sx={{ maxWidth: "180px", maxHeight: "50px" }}
          onClick={handleClick}
        >
          <ListItemButton
            sx={{
              height: "65px",
              ":hover": {
                backgroundColor: "#F5F5F5",
                borderRadius: "8px 8px 0px 0px",
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: "auto",
                justifyContent: "center",
              }}
            >
              <img
                src={logo}
                style={{
                  width: "24px",
                  height: "24px",
                  left: "8px",
                  top: "10px",
                  borderRadius: "0px",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary={"Transaciones"}
              primaryTypographyProps={{
                fontSize: "20px",
                fontFamily: "Nunito",
                fontWeight: "800",
                lineHeight: "27px",
                letterSpacing: "0em",
                textAlign: "center",
              }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          sx={{ maxWidth: "180px", maxHeight: "50px" }}
          onClick={handleClick}
        >
          <ListItemButton
            sx={{
              height: "65px",
              ":hover": {
                backgroundColor: "#F5F5F5",
                borderRadius: "8px 8px 0px 0px",
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: "auto",
                justifyContent: "center",
              }}
            >
              <img
                src={logo}
                style={{
                  width: "24px",
                  height: "24px",
                  left: "8px",
                  top: "10px",
                  borderRadius: "0px",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary={"Transaciones"}
              primaryTypographyProps={{
                fontSize: "20px",
                fontFamily: "Nunito",
                fontWeight: "800",
                lineHeight: "27px",
                letterSpacing: "0em",
                textAlign: "center",
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>

      <Menu
        id="demo-positioned-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <List component={Stack} direction="row">
          <ListItem
            disablePadding
            sx={{ maxWidth: "180px", maxHeight: "50px" }}
            onClick={handleClose}
          >
            <ListItemButton
              sx={{
                height: "65px",
                ":hover": {
                  backgroundColor: "#F5F5F5",
                  borderRadius: "8px 8px 0px 0px",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: "auto",
                  justifyContent: "center",
                }}
              >
                <img
                  src={logo}
                  style={{
                    width: "20px",
                    height: "20px",
                    left: "8px",
                    top: "10px",
                    borderRadius: "0px",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Transaciones"}
                primaryTypographyProps={{
                  fontSize: "16px",
                  fontFamily: "Nunito",
                  fontWeight: "400",
                  lineHeight: "22px",
                  letterSpacing: "0em",
                  textAlign: "center",
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem id="prueba"
          onMouseOver={hover}
          onMouseOut={unhover}
            disablePadding
            sx={{
              maxWidth: "180px",
              maxHeight: "50px",
              
            }}
            onClick={handleClose}
          >
            <ListItemButton
              sx={{
                height: "65px",
                backgroundColor: "#FFFFFF",
                borderRadius: "8px 8px 0px 0px",
                ":hover": {
                  color: "white",
                  backgroundColor: "#4A96D2",
                  borderRadius: "8px 8px 0px 0px",
                }
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: "auto",
                  justifyContent: "center",
                }}
              >
                <img id="prueba_img"
                  src={logo}
                  
                  style={{
                    width: "20px",
                    height: "20px",
                    left: "8px",
                    top: "10px",
                  
                  }}
                  
                />
              </ListItemIcon>
              <ListItemText
                primary={"Transaciones"}
                primaryTypographyProps={{
                  fontSize: "16px",
                  fontFamily: "Nunito",
                  fontWeight: "400",
                  lineHeight: "22px",
                  letterSpacing: "0em",
                  textAlign: "center",
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Menu>
    </div>
  );
}
