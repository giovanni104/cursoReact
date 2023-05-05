import { SetStateAction, useContext,useState } from 'react';

import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { UIContext } from '../../context/ui';
import { useMenuItem} from '../../hooks/'
import { SWRConfiguration } from 'swr';
import Menuitem from './Menuitem';
import { IItem } from '@/interfaces';


export const Navbar = () => {

  const { openSideMenu } = useContext( UIContext );
  /*
  ,
    fallbackData: "fallback",
    revalidateOnMount: false
    */
  const config: SWRConfiguration = {
    refreshInterval: 50000
  };
  //const pages = ["Page 1", "Page 2", "Page 3"];   
  const { items, isLoading } = useMenuItem('/menu',config);
  /*
  const listItem: IItem[] = [
    {_id:"0", item:pages[0]},
    {_id:"1", item:pages[1]},
    {_id:"2", item:pages[2]},
  ];
  */
  console.log("items =>",items , isLoading);
  const [menuItems, setmenuItems] = useState(null);
  const openMenuToolTip = (event: { currentTarget: any; } ) => {
    setmenuItems(event.currentTarget);
  };
 
  const closeMenuToolTip = () => {
      setmenuItems(null);
  };

  return (
      <AppBar position='sticky'>
          <Toolbar>
          
              <IconButton 
                size='large'
                edge="start"
                //onClick={ openSideMenu }
                onClick = {openMenuToolTip}
              >
                  <MenuOutlinedIcon />
              </IconButton>
             

              <Typography variant='h6'>Home - HDRM PYT</Typography>

              <Box sx = {{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <Menuitem list={ items } menuItems ={ menuItems } setmenuItems = {setmenuItems}/>
              </Box>
               
               
          </Toolbar>
          
      </AppBar>
  )
};