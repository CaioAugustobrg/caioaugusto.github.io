import styled from 'styled-components'
import {AiOutlineMenu} from 'react-icons/ai'
const breakpoint = '768px';
export const Container = styled.header`
width: 100%;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
background-color: #1b1c1d;
outline: 0;
ul {
    display: flex;
    list-style: none;
}
`

export const MyName = styled.div`
display: flex;
align-items: center;

`

export const Propeties = styled.li`
min-width: 50px;
padding: 0  30px;

&:hover {
    cursor: pointer;
    transition: all .2s ease-out;
  transform: scale(1.1);
    
}
@media (max-width: ${breakpoint}) {
    margin: 0;
    min-width: auto;
    padding: 5px;
    font-weight: bold;
  }
`

export const NameText = styled.h3`
color: #348feb;
padding-right: 8px;
`



export const OpenedCurlyBraces = styled.h2`
color: #bd34eb;

`

export const ClosedCurlyBraces = styled.h2`
color: #bd34eb;
padding-right: 8px;
@media (max-width: ${breakpoint}) {
    display: flex;
  }

`

export const StyledAiOutlineMenu = styled(AiOutlineMenu)`
font-size: 30px;
padding-left: 8px;
align-items: flex-end;
`

export const MenuToMobile = styled.nav`
  position: absolute;
  background-color: #1b1c1d;
  z-index: 9999;
  top: 50px;
  right: 0;
  border: none;
  margin: 0;
  border-radius: 2px;
  padding: 10px;
  ul {
    display: flex;
    flex-direction: column;
align-items: flex-start;
padding: 0;
    list-style: none;
    
  }
`