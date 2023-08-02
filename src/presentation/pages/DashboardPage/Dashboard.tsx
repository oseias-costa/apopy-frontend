import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../../presentation/redux/slice/userSlice";

export const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function change(nav: string) {
    return navigate(nav);
  }

  function handleLogout() {
    localStorage.removeItem("apopyToken");
    dispatch(fetchUser({}));

    //  return navigate("/login")
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => change("/categorias")}>Categorias</button>
      <button onClick={() => change("/fornecedores")}>Fornecedores</button>

      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
};
