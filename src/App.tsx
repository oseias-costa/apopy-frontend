import "./App.css";
import { CategoryList } from "./presentation/components/category/CategoryList";
import { SuplierList } from "./presentation/components/suplier/SuplierList";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Login } from "./presentation/pages/LoginPage/Login";
import { Novo } from "./presentation/routes/Novo";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Novo />}>
        <Route path="/login" element={<Login />} />
        <Route path="/categorias" element={<CategoryList />} />
        <Route path="/fornecedores" element={<SuplierList />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <div>
        {/* <SuplierList />
        <CategoryList /> */}
      </div>
    </>
  );
}

export default App;
