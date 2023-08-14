import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../../components/global/Header/Header";
import { Menu } from "../../components/global/Menu/Menu";
import { Main } from "../../styles/GlobalStyles/layout.style";
import { ContainerContentLayout, ContentMain } from "../../styles/PageStyles/layout.styles";
import { Dashboard } from "../DashboardPage/Dashboard";

export const Layout = () => {
  const location = useLocation()

  return (
    <Main>
      <Menu />
      <ContentMain style={{ width: "100vw" }}>
        <Header />
        <ContainerContentLayout>
          { location.pathname === '/' 
          ? <Dashboard />
          : <Outlet /> }
        </ContainerContentLayout>
      </ContentMain>
    </Main>
  );
};
