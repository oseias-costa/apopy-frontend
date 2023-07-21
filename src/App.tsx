import "./App.css";
import { CategoryList } from "./presentation/components/category/CategoryList";
import { SuplierList } from "./presentation/components/suplier/SuplierList";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Login } from "./presentation/pages/LoginPage/Login";
import { Novo } from "./presentation/routes/Novo";

function App() {
  const user = true;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Novo />}>
        <Route path="/login" element={<Login />} />
        <Route
          path="/categorias"
          element={user ? <CategoryList /> : <Navigate to="/login" />}
        />
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
