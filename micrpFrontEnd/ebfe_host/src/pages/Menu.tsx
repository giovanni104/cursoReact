import React from 'react'
import { NextPage  } from "next";
import { Sidenav } from '../components/menuVertical/Sidenav';
import MenuContextProvider from "../context/MenuContextVertical";
import "../styles/Menu.module.css";

const Menu: NextPage = (props) => {
  return (<>
       <MenuContextProvider>
           <Sidenav />
      </MenuContextProvider>
      
      </>
  );
};
 


export default Menu;