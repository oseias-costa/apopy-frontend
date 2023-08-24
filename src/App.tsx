import { useEffect } from "react";
import { userUseCase } from "./application/acess/login.usecase";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./presentation/redux/slice/userSlice";
import { GlobalStyle } from "./presentation/styles/GlobalStyles/global.styles";
import { Loading } from "./presentation/components/global/Loading/Loading";

function App() {
  const dispatch = useDispatch();
  const getUser = userUseCase();
  const getToken = localStorage.getItem("apopyToken");
  const user = useSelector((state: any) => state.user.user);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUser.then((res) => dispatch(fetchUser(res.data.data.user)));
  }, [getToken]);

  return (
    <>
      <Loading disabled={isLoading} />
      <div style={{ display: "flex" }}></div>
      <GlobalStyle />
    </>
  );
}

export default App;
