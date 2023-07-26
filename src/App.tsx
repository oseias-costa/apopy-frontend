import { useEffect } from "react";
import { userUseCase } from "./application/acess/login.usecase";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./presentation/redux/slice/userSlice";
import { RouterProvider, Outlet } from "react-router-dom";
import { router } from "./presentation/routes/RenderRoutes";
import { GlobalStyle } from "./presentation/styles/GlobalStyles/global.styles";
import { Header } from "./presentation/components/global/Header";

function App() {
  const dispatch = useDispatch();
  const getUser = userUseCase();
  const getToken = localStorage.getItem("apopyToken");
  const user = useSelector((state: any) => state.user.user);

  useEffect(() => {
    getUser.then((res) => dispatch(fetchUser(res.data.data.user)));
  }, [getToken]);

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <RouterProvider router={router} />
        <p>teste</p>
      </div>
      <GlobalStyle />
    </>
  );
}

export default App;
