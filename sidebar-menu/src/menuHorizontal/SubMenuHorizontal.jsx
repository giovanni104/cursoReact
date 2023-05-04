import * as React from "react";

import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./horizontal.css";

import { menuData } from "./horizontalDinamic";

export const SubMenuHorizontal= ({
    handleClose,
 
  }) => {
  const [menuFields, setMenuFields] = React.useState([]);

  React.useEffect(() => {
    
    const values = [...menuFields];
    values.push(JSON.parse(JSON.stringify(menuData)));
    setMenuFields(values);
  }, []);

  const hover = (event) => {
    const menuValues = [...menuFields];
    menuValues[0].stateImg = false;
    setMenuFields(menuValues);
  };

  const unhover = (event) => {
    const menuValues = [...menuFields];
    menuValues[0].stateImg = true;
    setMenuFields(menuValues);
  };

  return (
    <>
      <List
        id="submenu"
        className="div_submenu"
        component={Stack}
        direction="row"
      >



        <ListItem
          id="prueba"
          onMouseOver={hover}
          onMouseOut={unhover}
          disablePadding
          sx={{
            maxWidth: "180px",
            maxHeight: "50px",
          }}
          onClick={(event) => handleClose()  }
          
        >
          <ListItemButton
            sx={{
              height: "55px",
              backgroundColor: "#FFFFFF",
              borderRadius: "8px 8px 0px 0px",
              ":hover": {
                color: "white",
                backgroundColor: "#4A96D2",
                borderRadius: "8px 8px 0px 0px",
                height: "55px",
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
                id="prueba_img"
                src={
                  menuFields[0].stateImg
                    ? menuFields[0].img1
                    : menuFields[0].img2
                }
                style={{
                  width: "20px",
                  height: "20px",
                  left: "8px",
                  top: "10px",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary={"Transacciones"}
              primaryTypographyProps={{
                fontSize: "16px",
                fontFamily: "Nunito",
                fontWeight: "400",
                lineHeight: "22px",
                letterSpacing: "0em",
                textAlign: "center",
              }}
            />

            {!menuFields[0].stateImg > 0 && (
              <ArrowForwardIcon
                id="prueba_row"
                style={{
                  width: "20px",
                  height: "20px",
                  left: "8px",
                  top: "10px",
                }}
              />
            )}
          </ListItemButton>
        </ListItem>




      </List>
      
    </>
  )
}
