import React, { Component, FC, FunctionComponent } from 'react'
interface Props {
  children: any,  
}

const Nav:FC<Props> =  ({children}) => {
  return (
    <nav style={{
        background: 'hotpink',
        width: '100%',
        height: '100px',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
      }}>
        {children}
      </nav>
  )
}

export default Nav;