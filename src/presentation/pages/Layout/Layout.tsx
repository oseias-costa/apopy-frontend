import { Outlet } from "react-router-dom";
import { Header } from "../../components/global/Header/Header";
import { Menu } from "../../components/global/Menu/Menu";
import { Main } from "../../styles/GlobalStyles/layout.style";
import { ContainerContentLayout, ContentMain } from "../../styles/PageStyles/layout.styles";

export const Layout = () => {
  return (
    <Main>
      <Menu />
      <ContentMain style={{ width: "100vw" }}>
        <Header />
        <ContainerContentLayout>
          <Outlet />
        </ContainerContentLayout>
      </ContentMain>
    </Main>
  );
};
