import { useEffect } from "react";
import { userUseCase } from "./application/acess/login.usecase";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./presentation/redux/slice/userSlice";
import { RouterProvider } from "react-router-dom";
import { router } from "./presentation/routes/RenderRoutes";
// import { useNavigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const getUser = userUseCase();
  //  const navigate = useNavigate()
  const getToken = localStorage.getItem("apopyToken");
  const user = useSelector((state: any) => state.user.user);

  useEffect(() => {
      getUser.then((res) => dispatch(fetchUser(res.data.data.user)));
  

  }, [getToken]);

  console.log('user', user)

  function handleLogout(){
    localStorage.removeItem("apopyToken")
    dispatch(fetchUser({}))

    //  return navigate("/login")
  }

  return (
    <>
    <RouterProvider router={router} />
     <p>{user?.name}</p>
     <button onClick={() => handleLogout()}>Logout</button>
    </>
  );
}

export default App;