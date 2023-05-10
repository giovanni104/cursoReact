import React from 'react'
import { Linkd, Nav } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const SIZE = '32px'

export const NavBar = () => {
  return (
    <Nav>
      <Linkd to='/'><MdHome size={SIZE} /></Linkd>
      <Linkd to='/favs'><MdFavoriteBorder size={SIZE} /></Linkd>
      <Linkd to='/user'><MdPersonOutline size={SIZE} /></Linkd>
    </Nav>
  )
}
