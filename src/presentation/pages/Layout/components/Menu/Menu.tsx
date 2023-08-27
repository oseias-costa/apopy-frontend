import * as S from "../../../../styles/GlobalStyles/menu.style";
import { useLocation } from "react-router-dom";
import Logo from "../../../../assets/logo/logo-menu.svg";
import LogoMobile from "../../../../assets/logo/logo-menu-mobile.svg";
import Hamburguer from "../../../../assets/icons/hamburguer.svg";
import { DashboardIcon } from "./components/Dashboard.icon";
import { CategoryIcon } from "./components/Category.icon";
import { ProductIcon } from "./components/Product.icon";
import { useState } from "react";
import { SettingsIcon } from "./components/Settings.icon";
import { SaleIcon } from "./components/Sale.icon";
import { ProductsIcon } from "./components/ProductsIcon";
import { SuplierIcon } from "./components/SuplierIcon";

export const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();
  const pathSelected = (path: string) => Boolean(location?.pathname === path);
  
  return (
    <S.MenuContainer>
      <S.ImgLogo src={Logo} />
      <S.ImgLogoMobile src={LogoMobile} />
      <S.ButtonMenuMobile
        isOpen={openMenu}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <img src={Hamburguer} />
      </S.ButtonMenuMobile>
      <S.MenuBlock isOpen={openMenu} id="MenuBackground">
        <S.MenuBlockMobile>
          <S.MenuItem
            isSelected={pathSelected("/")}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <DashboardIcon isSelected={pathSelected("/")} />
            <S.LinkMenu to="/" isSelected={pathSelected("/")}>
              Dashboard
            </S.LinkMenu>
          </S.MenuItem>
          <S.MenuItem
            isSelected={pathSelected("/categorias")}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <CategoryIcon isSelected={pathSelected("/categorias")} />
            <S.LinkMenu to="/categorias" isSelected={pathSelected("/categorias")}>
              Categorias
            </S.LinkMenu>
          </S.MenuItem>
          <S.MenuItem
            isSelected={pathSelected("/fornecedores")}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <SuplierIcon isSelected={pathSelected("/fornecedores")} />
            <S.LinkMenu
              to="/fornecedores"
              isSelected={pathSelected("/fornecedores")}
            >
              Fornecedores
            </S.LinkMenu>
          </S.MenuItem>
          <S.MenuItem
              isSelected={pathSelected("/produtos")}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <ProductIcon isSelected={pathSelected("/produtos")} />
              <S.LinkMenu
                to="/produtos"
                isSelected={pathSelected("/produtos")}
              >
                Produtos
              </S.LinkMenu>
            </S.MenuItem>
          <S.MenuItem
              isSelected={pathSelected("/estoque")}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <ProductsIcon isSelected={pathSelected("/estoque")} />
              <S.LinkMenu
                to="/estoque"
                isSelected={pathSelected("/estoque")}
              >
                Estoque
              </S.LinkMenu>
            </S.MenuItem>
          <S.MenuItem
              isSelected={pathSelected("/vendas")}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <SaleIcon isSelected={pathSelected("/vendas")} />
              <S.LinkMenu
                to="/vendas"
                isSelected={pathSelected("/vendas")}
              >
                Vendas
              </S.LinkMenu>
            </S.MenuItem>
          <S.MenuItem
              isSelected={pathSelected("/configuracoes")}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <SettingsIcon isSelected={pathSelected("/configuracoes")} />
              <S.LinkMenu
                to="/configuracoes"
                isSelected={pathSelected("/configuracoes")}
              >
                Configurações
              </S.LinkMenu>
            </S.MenuItem>
        </S.MenuBlockMobile>
      </S.MenuBlock>
    </S.MenuContainer>
  );
};
