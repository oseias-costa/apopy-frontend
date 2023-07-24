import { useEffect } from "react";
import { userUseCase } from "./application/acess/login.usecase";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./presentation/redux/slice/userSlice";
import { RouterProvider } from "react-router-dom";
import { router } from "./presentation/routes/RenderRoutes";
import { GlobalStyle } from "./presentation/styles/GlobalStyles/global.styles";

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
      <RouterProvider router={router} />
      <GlobalStyle />
    </>
  );
}

export default App;
