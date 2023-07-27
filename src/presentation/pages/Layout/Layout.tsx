import { Outlet } from "react-router-dom"
import { Header } from "../../components/global/Header"
import { Menu } from "../../components/global/Menu/Menu"

export const Layout = () => {
    return(
        <main style={{ display: 'flex', width: '100vw'}}>
        <Menu />
        <section style={{width: '100vw'}}>
                <Header />
            <div style={{paddingLeft: '36px'}}>
                <Outlet />
            </div>
        </section>
        </main>
    )
}