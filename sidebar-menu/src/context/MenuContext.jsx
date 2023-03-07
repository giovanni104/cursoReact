import React, {  useState } from "react";

export const MenuContext = React.createContext({});
export default function MenuContextProvider({ children }) {
  const [subMenu, setSubMenu] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <MenuContext.Provider value={{ subMenu, setSubMenu,menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
