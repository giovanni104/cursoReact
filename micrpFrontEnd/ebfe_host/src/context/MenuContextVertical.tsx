import React, {  useState ,ReactNode} from "react";
import {Menu} from "./typesMenuVertical"
export const MenuContext = React.createContext({});

interface Props{
  children :ReactNode
}


export default function MenuContextProvider({ children }:Props) {
  //const [subMenu, setSubMenu] = useState(false);
  const [menuContext, setMenuContext] = useState<Menu>({menu:false,submenu:false});
  return (
    <MenuContext.Provider value={{  menuContext, setMenuContext }}>
      {children}
    </MenuContext.Provider>
  );
}
