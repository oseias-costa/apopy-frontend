import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Dashboard } from "../pages/DashboardPage/Dashboard";
import { Layout } from "../pages/Layout/Layout";
import { Login } from "../pages/LoginPage/Login";
import { Register } from "../pages/RegisterPage/Register";
import { PrivateRoute } from "./PrivateRoute";
import { Category } from "../pages/CategoryPage/Category";
import { Suplier } from "../pages/SuplierPage/Suplier";
import { Product } from "../pages/ProductsPage/Product";
import { Stock } from "../pages/StockPage/Stock";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<PrivateRoute />}>
        <Route path={"/"} element={<Layout />}>
          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path={"/categorias"} element={<Category />} />
          <Route path={"/fornecedores"} element={<Suplier />} />
          <Route path={"/produtos"} element={<Product />} />
          <Route path={"/estoque"} element={<Stock />} />
        </Route>
      </Route>
      <Route path={"/login"} element={<Login />} />
      <Route path={"/registrar"} element={<Register />} />
    </>
  )
);
