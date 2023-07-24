import { useState } from "react";
import { loginUseCase } from "../../../application/acess/login.usecase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/slice/userSlice";
import { Container } from "../../styles/LoginStyles/Login.styles";

export function Login() {
  const navigate = useNavigate()
  const [login, setLogin] = useState({ email: "", password: "" });
  const dispatch = useDispatch()
  const user = useSelector((state: any) => state.user.user);

  async function handleLogin(e) {
    e.preventDefault();
    const req = await loginUseCase(login.email, login.password);

    if (req.status === 200) {
      localStorage.setItem(
        "apopyToken",
        JSON.stringify("Bearer " + req.data.data.loginUser.token)
      );
      dispatch(fetchUser(req.data.data.loginUser));
      
      navigate("/dashboard")
    }
  }

  if(user){
    return navigate('/dashboard')
  }

  return (
    <Container>
      <h1>Login</h1>
      <form>
        <input
          type="text"
          value={login.email}
          onChange={(e) => setLogin({ ...login, email: e.target.value })}
        />
        <input
          type="text"
          value={login.password}
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
        />
        <button type="submit" onClick={(e) => handleLogin(e)}>
          Login
        </button>
      </form>
    </Container>
  );
}
