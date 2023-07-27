import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const MenuContainer = styled.div`
    background-color: #FFF;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    width: 230px;
    margin-right: 2px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
`

export const ImgLogo = styled.img`
    width: 62px;
    height: auto;
    padding-bottom: 40px;
`

export const MenuItem = styled.div<{isSelected: boolean}>`
    display: flex;
    align-items: center;
    background-color: ${props => props.isSelected ? '#EAE5E5': '#fff'};
    border-radius: 3px;
    width: 130px;
    padding-left: 17px;
    padding-right: 17px;
    padding-top: 2px;
    padding-bottom: 2px;
    margin-bottom: 7px;
    transition: 0.3s linear;
`

export const IconMenu = styled("svg")<{ fill: boolean}>`
    color: #fff;
    fill: ${props => props.fill ?  '#012E40' : '#828282' };
    transition: 0.3s linear;
`

export const LinkMenu = styled(Link)<{isSelected: boolean}>`
    color: ${props => props.isSelected ? '#012E40' : '#828282'};
    text-decoration: none;
    font-family: var(--font-primary);
    padding-left: 6px;
    transition: 0.3s linear;
    font-size: 15px;
    font-weight: 500;
`