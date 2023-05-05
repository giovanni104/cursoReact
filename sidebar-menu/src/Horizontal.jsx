import * as React from "react";
 
 import { MenuHorizontal} from "./menuHorizontal/MenuHorizontal"
 import { menu } from "./menuHorizontal/dataMenu";



export function Horizontal() {
  return (
    <>
      <MenuHorizontal dataMenu={menu}/>  
    </>
  );
}
