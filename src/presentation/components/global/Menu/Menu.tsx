import {
  ImgLogo,
  ImgLogoMobile,
  ButtonMenuMobile,
  MenuContainer,
  MenuItem,
  LinkMenu,
  MenuBlock,
  MenuBlockMobile,
} from "../../../styles/GlobalStyles/menu.style";
import { useLocation } from "react-router-dom";
import Logo from "../../../assets/logo/logo-menu.svg";
import LogoMobile from "../../../assets/logo/logo-menu-mobile.svg";
import Hamburguer from "../../../assets/icons/hamburguer.svg";
import { DashboardIcon } from "./components/Dashboard.icon";
import { CategoryIcon } from "./components/Category.icon";
import { ProductIcon } from "./components/Product.icon";
import { useState } from "react";
import { SettingsIcon } from "./components/Settings.icon";

export const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();
  const pathSelected = (path: string) => Boolean(location?.pathname === path);

  return (
    <MenuContainer>
      <ImgLogo src={Logo} />
      <ImgLogoMobile src={LogoMobile} />
      <ButtonMenuMobile
        isOpen={openMenu}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <img src={Hamburguer} />
      </ButtonMenuMobile>
      <MenuBlock isOpen={openMenu} id="MenuBackground">
        <MenuBlockMobile>
          <MenuItem
            isSelected={pathSelected("/dashboard")}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <DashboardIcon isSelected={pathSelected("/dashboard")} />
            <LinkMenu to="/dashboard" isSelected={pathSelected("/dashboard")}>
              Dashboard
            </LinkMenu>
          </MenuItem>
          <MenuItem
            isSelected={pathSelected("/categorias")}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <CategoryIcon isSelected={pathSelected("/categorias")} />
            <LinkMenu to="/categorias" isSelected={pathSelected("/categorias")}>
              Categorias
            </LinkMenu>
          </MenuItem>
          <MenuItem
            isSelected={pathSelected("/fornecedores")}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <ProductIcon isSelected={pathSelected("/fornecedores")} />
            <LinkMenu
              to="/fornecedores"
              isSelected={pathSelected("/fornecedores")}
            >
              Fornecedores
            </LinkMenu>
          </MenuItem>
          <MenuItem
              isSelected={pathSelected("/produtos")}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <SettingsIcon isSelected={pathSelected("/produtos")} />
              <LinkMenu
                to="/produtos"
                isSelected={pathSelected("/produtos")}
              >
                Produtos
              </LinkMenu>
            </MenuItem>
          <MenuItem
              isSelected={pathSelected("/estoque")}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <SettingsIcon isSelected={pathSelected("/estoque")} />
              <LinkMenu
                to="/estoque"
                isSelected={pathSelected("/estoque")}
              >
                Estoque
              </LinkMenu>
            </MenuItem>
          <MenuItem
              isSelected={pathSelected("/vendas")}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <SettingsIcon isSelected={pathSelected("/vendas")} />
              <LinkMenu
                to="/vendas"
                isSelected={pathSelected("/vendas")}
              >
                Vendas
              </LinkMenu>
            </MenuItem>
          <MenuItem className="settings"
              isSelected={pathSelected("/configuracoes")}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <SettingsIcon isSelected={pathSelected("/configuracoes")} />
              <LinkMenu
                to="/configuracoes"
                isSelected={pathSelected("/configuracoes")}
              >
                Configurações
              </LinkMenu>
            </MenuItem>
        </MenuBlockMobile>
      </MenuBlock>
    </MenuContainer>
  );
};
