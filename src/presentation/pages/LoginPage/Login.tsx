import React, { FormEvent, useState } from "react";
import { loginUseCase } from "../../../application/login.usecase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/slice/userSlice";
import * as S from "../../styles/PageStyles/acess.styles";
import Logo from "../../assets/logo/apopy-logo.svg";
import { ErrorLogin } from "./ErrorLogin";
import { SpinnerIcon } from "../../assets/icons/SpinnerIcon";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState({ loading: false, error: "" });
  const [login, setLogin] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.user);

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setLoginState({ error: "", loading: true });
    const req = await loginUseCase(login.email, login.password);

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
    <S.Container>
      <S.IconLogo src={Logo} alt="Logo Apopy" />
      <S.FormContainer>
        <S.Text>Entrar</S.Text>
        {loginState.error ? <ErrorLogin /> : null}
        <S.InputLoginWithLabel
          label="Email"
          type="text"
          value={login.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLogin({
              ...login,
              email: (e.target as HTMLInputElement).value.toLowerCase(),
            })
          }
          placeholder="Email"
        />
        <S.InputLoginWithLabel
          label="Senha"
          type="password"
          value={login.password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLogin({ ...login, password: e.target.value })
          }
          placeholder="Senha"
        />
        <S.ButtonLogin
          type="submit"
          onClick={(e) => handleLogin(e)}
          disabled={loginState.loading}
        >
          {loginState.loading ? <SpinnerIcon /> : "Login"}
        </S.ButtonLogin>
        <S.Terms>
          Não tem conta?{" "}
          <S.TermsLink onClick={() => navigate("/registrar")}>
            Registrar
          </S.TermsLink>
        </S.Terms>
      </S.FormContainer>
    </S.Container>
  );
};
