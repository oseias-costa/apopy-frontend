import React from "react";
import { useLocation } from "react-router-dom";
import { LinkMenu, MenuItem } from "../../../../../styles/GlobalStyles/menu.style";


export const MenuLinkItem = ({path, content, Icon}: 
    {path: string, content: string, Icon: React.FunctionComponent}) => 
{  
    const isSelected = false
    const location = useLocation()

    return(
        <MenuItem>
            <Icon isSelected={isSelected} />
            <LinkMenu to={path}>{content}</LinkMenu>
        </MenuItem>
    )
}