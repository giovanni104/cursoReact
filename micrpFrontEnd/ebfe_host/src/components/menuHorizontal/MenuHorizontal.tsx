import * as React from "react";

import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Axios from "axios";
import "../../styles/MenuH.module.css";

//import { subMenuData } from "./horizontalDinamic";
import { SubMenuHorizontal } from "./SubMenuHorizontal";

import { subMenuType } from "./typesMenuHorizontal";
import { IMenuResponse, MenuItemDto } from "../../interfaces/IMenu";

import ClickAwayListener from "@mui/base/ClickAwayListener";

const logo = "/Solicitudes.svg";

interface Props {
  dataMenu: MenuItemDto[];
}

export const MenuHorizontal = () => {
  let infoDataMenu: MenuItemDto[] = [];
  let responseData: IMenuResponse[] = [];
  let infoSubMenuType: subMenuType[] = [];

  const [open, setOpen] = React.useState(false);
  const [dataMenu, setDataMenu] = React.useState(infoDataMenu);
  const [dataResponse, setDataResponse] = React.useState(responseData);
  const [menuFields, setMenuFields] =
    React.useState<subMenuType[]>(infoSubMenuType);

  React.useEffect(() => {
    const fetchData = async () => {
      const { data } = await Axios.get<IMenuResponse[]>(
        "http://172.41.0.31:30095/menu"
      );

      let menuData: MenuItemDto[] = [];
      setDataResponse(data);
      data.map((menu) => {
        let obj = menu.menuItemDto.filter(function (menu) {
          return menu.tipo == "menu";
        });
        if (obj[0] != undefined) {
          menuData.push(obj[0]);
        }
      });

      menuData = menuData.sort((a, b) => a.orden - b.orden);
      setDataMenu(menuData);
    };

    fetchData();
  }, []);

  const handleClick = (idOpcion: string) => {
    let data: subMenuType[] = [];
    let opcion = dataResponse.filter(function (menu) {
      return menu.menuItem == idOpcion;
    });
    let subMenuData = opcion[0].menuItemDto.filter(function (menu) {
      return menu.tipo == "submenu";
    });
    subMenuData = subMenuData.sort((a, b) => a.orden - b.orden);

    subMenuData.forEach((opcion) => {
      let informacion: subMenuType = {
        img1: "/Servicios.svg",
        img2: "/Solicitudes.svg",
        stateImg: true,
        text: opcion.title,
        link: "/",
      };
      data.push(informacion);
    });

    setMenuFields(data);
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={(event) => handleClose()}>
      <div className="div_menu">
        <List component={Stack} direction="row">
          {dataMenu.map((data, index) => {
            return (
              <ListItem
                key={index}
                disablePadding
                sx={{ maxWidth: "200px", maxHeight: "50px" }}
                onClick={(event) => handleClick(data.e2PAM5)}
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
                    sx={{ marginLeft: "10px" }}
                    primary={data.title}
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
            handleClose={handleClose}
            menuFields={menuFields}
            setMenuFields={setMenuFields}
          />
        )}
      </div>
    </ClickAwayListener>
  );
};
