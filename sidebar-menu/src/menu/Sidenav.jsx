import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'

import { SubSidenav } from './SubSidenav'
import { MenuContext } from '../context/MenuContext'
import { navData } from './dataMenu'
import { DrawerHeader, Drawer } from './menuControles'
import { useNavigate } from 'react-router-dom'

export function Sidenav() {
  const navigate = useNavigate()
  const theme = useTheme()

  const stateMenus = React.useContext(MenuContext)

  const ControlDrawerHeader = () => {
    stateMenus.setMenu(!stateMenus.menu)
  }

  const ControlDrawerItem = () => {
    stateMenus.setMenu(true)
  }

  const ControlDrawerItemClose = () => {
    stateMenus.setMenu(false)
  }

  const ControlSubmenu = () => {
    stateMenus.setSubMenu(true)
    
  }

  const mapStructure = (nodes) => {
    if (nodes) {
      return nodes.map(({ id, text, link }) => (
        <ListItem
          key={id}
          disablePadding
          sx={{ display: 'block' }}
          onClick={() => {
            navigate(link)
          }}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: stateMenus.menu ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: stateMenus.menu ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <InboxIcon
                style={{ color: '#4A96D2', width: '34px', height: '29.33px' }}
              />
            </ListItemIcon>
            <ListItemText
              primary={text}
              sx={{ opacity: stateMenus.menu ? 1 : 0 }}
              onClick={ControlSubmenu}
              primaryTypographyProps={{
                fontSize: '24px',
                fontFamily: 'Nunito',
              }}
            />
          </ListItemButton>
        </ListItem>
      ))
    }
  }

  const DynamicNestedItems = (RootObject) => {
    return <List>{mapStructure(RootObject)}</List>
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/*onMouseOut={ControlDrawerItemClose} */}
      <Drawer
        variant="permanent"
        open={stateMenus.menu}
        onMouseOut={ControlDrawerItemClose}
        onMouseOver={ControlDrawerItem}
        PaperProps={{
          sx: {
            borderTopRightRadius: '24px',
            backgroundColor: '#F5F5F5',
            boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={ControlDrawerHeader}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        {DynamicNestedItems(navData)}
      </Drawer>
      <SubSidenav />
    </Box>
  )
}
