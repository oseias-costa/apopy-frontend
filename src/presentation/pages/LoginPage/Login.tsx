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
} from "../../styles/LoginStyles/login.styles";
import Logo from "../../assets/logo/apopy-logo.svg";
import { Input } from "../../styles/GlobalStyles/input.style";
import { Button } from "../../styles/GlobalStyles/button.style";

export function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
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

      navigate("/dashboard");
    }
  }

  if (user) {
    return navigate("/dashboard");
  }

  return (
    <Container>
      <IconLogo src={Logo} alt="Logo Apopy" />
      <FormContainer>
        <Text>Entrar</Text>
        <Input
          type="text"
          value={login.email}
          onChange={(e) => setLogin({ ...login, email: e.target.value })}
          placeholder="Email"
        />
        <Input
          type="text"
          value={login.password}
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
          placeholder="Senha"
        />
        <Button type="submit" onClick={(e) => handleLogin(e)}>
          Login
        </Button>
        <Link>Recuperar a senha</Link>
      </FormContainer>
    </Container>
  );
}
