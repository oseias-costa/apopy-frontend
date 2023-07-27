import { ImgLogo, MenuContainer, MenuItem, IconMenu, LinkMenu } from "../../../styles/GlobalStyles/menu.style"
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../assets/logo/logo-menu.svg";
import { DashboardIcon } from "./components/Dashboard.icon";
import { CategoryIcon } from "./components/Category.icon";
import { ProductIcon } from "./components/Product.icon";

export const Menu = () => {
    const location = useLocation()
    console.log('location', location)
    const pathSelected = (path: string) => Boolean(location?.pathname === path)

    return(
        <MenuContainer>
            <ImgLogo src={Logo} />
                <MenuItem isSelected={pathSelected('/dashboard')}>
                    <DashboardIcon isSelected={pathSelected('/dashboard')} />
                    <LinkMenu to="/dashboard" isSelected={pathSelected('/dashboard')}>Dashboard</LinkMenu>
                </MenuItem>
                <MenuItem isSelected={pathSelected('/categorias')}>
                    <CategoryIcon isSelected={pathSelected('/categorias')} />
                    <LinkMenu to="/categorias" isSelected={pathSelected('/categorias')}>Categorias</LinkMenu>
                </MenuItem>
                <MenuItem isSelected={pathSelected('/fornecedores')}>
                    <ProductIcon isSelected={pathSelected('/fornecedores')} />
                    <LinkMenu to="/fornecedores" isSelected={pathSelected('/fornecedores')}>Fornecedores</LinkMenu>
                </MenuItem>
        </MenuContainer>
    )
}