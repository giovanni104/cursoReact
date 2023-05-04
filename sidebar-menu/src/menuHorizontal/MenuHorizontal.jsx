import * as React from "react";
 
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText"; 
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./horizontal.css";
import logo from "../assets/Solicitudes.svg"; 
import { menuData } from "./horizontalDinamic";
import { SubMenuHorizontal } from "./SubmenuHorizontal";

export function MenuHorizontal() {
  const [open, setOpen] = React.useState(false);


  const handleClick = (event) => {
    setOpen(!open);
  };
 
  const handleClose  = () => {
    setOpen(false);
  };


 

 
  return (
    <>
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
                  fontStyle:"normal",
                  fontWeight: "800",
                  lineHeight: "27px",
                  letterSpacing: "0em",
                  textAlign: "center",
                }}
              />
            </ListItemButton>
          </ListItem>

          
        </List>
 
        {open && (
        <SubMenuHorizontal  key={1}      handleClose={handleClose}    />
        )}
       
      </div>
    </>
  );
}
