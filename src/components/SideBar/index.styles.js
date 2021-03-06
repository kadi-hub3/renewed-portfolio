import styled from 'styled-components'
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Container= styled.nav`
    position: fixed;
    top:0;
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #16181d;
	width: 2.8rem;
    filter: drop-shadow(0 20px 13px rgba(0, 0, 0, 0.03)) drop-shadow(0 8px 5px rgba(0, 0, 0, 0.08));
    box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    z-index:10;

    @media screen and (max-width: 768px){
        width:2rem;
    }
`

export const IconsContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 1rem 0;

    path{
        stroke: rgba(251, 207, 232);
    }
`
export const NavLink = styled(LinkS)`
  cursor: pointer;
  margin:6px 0;
  
  &.active .sidebar-icon {
    background: rgb(5, 150, 105);
    color: #fff;
    border-radius: 0.75rem;
  }
`;
export const NavContainer= styled.ul``

export const IconLink = styled.a`
    cursor:pointer;
    margin: 4px 0;
`
export const Logo= styled(LinkR)`
    width: 100%;
    height:60px;
    color: #fff;
    font-size:25px;
    font-weight:bold;
    cursor:pointer;
    text-decoration:none;
    img{
        width:100%;  
    }
`
