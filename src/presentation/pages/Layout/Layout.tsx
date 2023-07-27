import { Outlet } from "react-router-dom";
import { Header } from "../../components/global/Header";
import { Menu } from "../../components/global/Menu/Menu";
import { Main } from "../../styles/GlobalStyles/layout.style";

export const Layout = () => {
  return (
    <Main>
      <Menu />
      <section style={{ width: "100vw" }}>
        <Header />
        <div style={{ paddingLeft: "36px" }}>
          <Outlet />
        </div>
      </section>
    </Main>
  );
};
