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
import { useEffect } from "react";
import { userUseCase } from "./application/acess/login.usecase";
import { useDispatch } from "react-redux";
import { fetchUser } from "./presentation/redux/slice/userSlice";

function App() {
const dispatch = useDispatch()

  useEffect( () => {

    async () => {
      const res = await userUseCase()
      if(res.status === 200){
        console.log(res)
        dispatch(fetchUser(res.data.data.user))
      }
    }
  }, [])

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
