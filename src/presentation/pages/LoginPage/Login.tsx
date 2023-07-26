import { useState } from "react";
import { loginUseCase } from "../../../application/acess/login.usecase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/slice/userSlice";
import {
  Container,
  FormContainer,
  IconLogo,
  Text,
  Link,
  InputLogin,
  ButtonLogin,
} from "../../styles/PageStyles/acess.styles";
import Logo from "../../assets/logo/apopy-logo.svg";
import { Spinner } from "./Spinner";
import { ErrorLogin } from "./ErrorLogin";

export function Login() {
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState({ loading: false, error: "" });
  const [login, setLogin] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.user);

  async function handleLogin(e) {
    e.preventDefault();
    setLoginState({ error: "", loading: true });
    const req = await loginUseCase(login.email, login.password);
    console.log(req);
    if (req.data.data.loginUser) {
      localStorage.setItem(
        "apopyToken",
        JSON.stringify("Bearer " + req.data.data.loginUser.token)
      );
      dispatch(fetchUser(req.data.data.loginUser));

      navigate("/");
      setLoginState({ ...loginState, loading: false });
    }

    if (req.data.errors) {
      setLoginState({ error: "Email ou Senha incorreta", loading: false });
    }
  }

  if (user) {
    return navigate("/");
  }

  return (
    <Container>
      <IconLogo src={Logo} alt="Logo Apopy" />
      <FormContainer>
        <Text>Entrar</Text>
        {loginState.error ? <ErrorLogin /> : null}
        <InputLogin
          type="text"
          value={login.email}
          onChange={(e) => setLogin({ ...login, email: e.target.value })}
          placeholder="Email"
        />
        <InputLogin
          type="password"
          value={login.password}
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
          placeholder="Senha"
        />
        <ButtonLogin
          type="submit"
          onClick={(e) => handleLogin(e)}
          disabled={!loginState.loading}
        >
          {loginState.loading ? <Spinner /> : "Login"}
        </ButtonLogin>
        <Link>Recuperar a senha</Link>
      </FormContainer>
    </Container>
  );
}
