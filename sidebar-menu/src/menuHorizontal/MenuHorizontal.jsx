import * as React from "react";

import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import "./horizontal.css";
import logo from "../assets/Solicitudes.svg";
import { subMenuData } from "./horizontalDinamic";
import { SubMenuHorizontal } from "./SubmenuHorizontal";
import { submenu } from "./dataMenu";
import ClickAwayListener from '@mui/base/ClickAwayListener';


export function MenuHorizontal({ dataMenu }) {
  const [open, setOpen] = React.useState(false);

  const [menuFields, setMenuFields] = React.useState([subMenuData]);

  const handleClick = (idOpcion) => {
    let data = [];
    var results = submenu.filter(function (submenu) {
      return submenu.opcion == idOpcion;
    });

    results.forEach(function (opcion, index) {
      let informacion = JSON.parse(JSON.stringify(subMenuData));

      informacion.img1 = "/src/assets/Servicios.svg";
      informacion.img2 = "/src/assets/Solicitudes.svg";
      informacion.stateImg = true;
      informacion.text = opcion.text;
      informacion.link = "/";
      data.push(informacion);
    });
    console.log(data);
    setMenuFields(data);
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={(event) => handleClose()}>
      <div className="div_menu">
        <List component={Stack} direction="row"  >
          
          {dataMenu.map((data, index) => {
            return (
              <ListItem key={index}
                disablePadding
                sx={{ maxWidth: "200px", maxHeight: "50px" }}
                onClick={(event) => handleClick(data.id)}
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
                  <ListItemText sx={{marginLeft:"10px"}}
                    primary={data.text}
                    primaryTypographyProps={{
                      fontSize: "20px",
                      fontFamily: "Nunito",
                      fontStyle: "normal",
                      fontWeight: "800",
                      lineHeight: "27px",
                      letterSpacing: "0em",
                      textAlign: "start",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        {open && (
          <SubMenuHorizontal
            key={1}
            handleClose={handleClose}
            menuFields={menuFields}
            setMenuFields={setMenuFields}
          />
        )}
      </div>
      </ClickAwayListener>
  );
}
