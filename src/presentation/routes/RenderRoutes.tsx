import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, Routes } from "react-router-dom"
import { CategoryList } from "../components/category/CategoryList"
import { SuplierList } from "../components/suplier/SuplierList"
import { Dashboard } from "../pages/DashboardPage/Dashboard"
import { Login } from "../pages/LoginPage/Login"
import { Register } from "../pages/RegisterPage/Register"
import { Novo } from "./Novo"
import { PrivateRoute } from "./PrivateRoute"

     export const router = createBrowserRouter(
            createRoutesFromElements(
                    <>
                    <Route element={<PrivateRoute />}>
                        <Route path={'/'} element={<Novo />} />
                        <Route path={'/categorias'} element={<CategoryList />} />
                        <Route path={'/fornecedores'} element={<SuplierList />} />
                        <Route path={'/dashboard'} element={<Dashboard />} />
                    </Route>
                    <Route path={'/login'} element={<Login />} />
                    <Route path={'/registrar'} element={<Register />} />
                    </>
        )
    )