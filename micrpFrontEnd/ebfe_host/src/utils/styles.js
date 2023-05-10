import styled, { css } from 'styled-components'
import { fadeIn } from '../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow-x: auto;
  width: 100%;
  font-size: inherit;
  background: rgba(31, 41, 55, var(--tw-bg-opacity));

  ${(props) => props.fixed && css`
  {
    ${fadeIn()}

    box-shadow: 0 0 20px rgba(0,0,0, 0.3);
    left: 0;
    margin: 0 auto;
    padding: 5px;
    position: absolute;
    right: 0;
    transform: scale(.9);
    z-index: 1;
    font-size: inherit
  }
  `}
`

export const Item = styled.li`
display: flex;
align-items: center;
color: white;
font-size: inherit;
border: none;
background-color: transparent;
cursor: pointer;
width: 50%;
`
