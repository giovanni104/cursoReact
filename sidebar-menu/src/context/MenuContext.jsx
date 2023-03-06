import React, {  useState } from "react";

export const MenuContext = React.createContext({});
export default function MenuContextProvider({ children }) {
  const [subMenu, setSubMenu] = useState(false);
  return (
    <MenuContext.Provider value={{ subMenu, setSubMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
