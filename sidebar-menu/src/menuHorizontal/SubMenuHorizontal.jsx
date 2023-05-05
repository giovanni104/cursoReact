import * as React from "react";

import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./horizontal.css";

export const SubMenuHorizontal = ({
  handleClose,
  menuFields,
  setMenuFields,
}) => {
  //const [menuFields, setMenuFields] = React.useState([menuData]);

  const hover = (id) => {
    const menuValues = [...menuFields];
    menuValues[id].stateImg = false;
    setMenuFields(menuValues);
  };

  const unhover = (id) => {
    const menuValues = [...menuFields];
    menuValues[id].stateImg = true;
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
        {menuFields.map((data, index) => {
          return (
            <ListItem key={index}             
              onMouseOver={(event) => hover(index)}
              onMouseOut={(event) => unhover(index)}
              disablePadding
              
              sx={{
                width: "250px",
                maxHeight: "50px",
              
              }}
              onClick={(event) => handleClose()}
            >
              <ListItemButton   key={index}
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
                <ListItemIcon  key={index}
                  sx={{
                    minWidth: 0,
                    mr: "auto",
                    justifyContent: "center",
                  }}
                >
                  <img
                    id={index}
                    src={data.stateImg ? data.img1 : data.img2}
                    style={{
                      width: "20px",
                      height: "20px",
                      left: "8px",
                      top: "10px",
                    }}
                  />
                </ListItemIcon>
                <ListItemText sx={{marginLeft:"10px" ,width:""}}
                  primary={data.text}
                  primaryTypographyProps={{
                    fontSize: "16px",
                    fontFamily: "Nunito",
                    fontWeight: "400",
                    lineHeight: "22px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                />

                {!data.stateImg > 0 && (
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
          );
        })}
      </List>
    </>
  );
};
