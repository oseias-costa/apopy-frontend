import { useEffect, useState } from "react";
import { userUseCase } from "./application/acess/login.usecase";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./presentation/redux/slice/userSlice";
import { GlobalStyle } from "./presentation/styles/GlobalStyles/global.styles";
import { Loading } from "./presentation/components/global/Loading/Loading";
import { RootState } from "./presentation/redux/store";

function App() {
  const dispatch = useDispatch();
  const getUser = userUseCase();
  const getToken = localStorage.getItem("apopyToken");
  const user = useSelector((state: RootState) => state.user.user);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if(user.name === ''){
      
      setIsLoading(false)
      getUser.then((res) => {
        dispatch(fetchUser(res.data.data.user))
        setIsLoading(true)
      });

    }
  }, [getToken]);

  return (
    <>
      <Loading disabled={isLoading} />
      <GlobalStyle />
    </>
  );
}

export default App;
