import { IItem } from '@/interfaces';
import { Menu, MenuItem, Typography } from '@mui/material';
import Link from 'next/link';
import React,{ FC, useState } from 'react'

interface Props {
    list: IItem[];
    menuItems: any;
    setmenuItems: any;
}

export const Menuitem: FC<Props> = ({ list, menuItems,setmenuItems }) => {

    //const [menuItems, setmenuItems] = useState(null);
    const openMenuToolTip = (event: { currentTarget: any; } ) => {
        setmenuItems(event.currentTarget);
      };
     
    const closeMenuToolTip = () => {
          setmenuItems(null);
      };

  return (
    
    <>
            <Menu
                  anchorEl = {menuItems}
                  open = {Boolean(menuItems)}
                  onClose = {closeMenuToolTip}
               >
                  {
                    list.map( page => (
                      <MenuItem key = {page._id} onClick = {closeMenuToolTip}>
                          <Typography textAlign = "center"> 
                          <Link href={ page.item ==='Index'?'/': '/'+page.item}>
                          {page.item} 
                          </Link>
                          
                          </Typography>
                      </MenuItem>
                    ))
                  }
            </Menu>
    </>
  )
}


export default Menuitem;