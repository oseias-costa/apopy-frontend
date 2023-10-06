import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, redirect } from "react-router-dom";
import { registerUseCase } from "../../../application/register.usecase";
import { RegisterUser } from "../../../domain/user"; 
import { fetchUser } from "../../redux/slice/userSlice";
import {
  ButtonLogin,
  Container,
  RenderError,
  FormContainer,
  IconLogo,
  InputLogin,
  Terms,
  TermsLink,
  Text,
} from "../../styles/PageStyles/acess.styles";
import Logo from "../../assets/logo/apopy-logo.svg";
import { registerError } from "./erros";
import { SpinnerIcon } from "../../assets/icons/SpinnerIcon";

export const Register: React.FC = () => {
  const [register, setRegister] = useState<RegisterUser>({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [error, setError] = useState({ error: "", msg: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.user?.user);
  const [loading, setLoading] = useState(false);

  async function handleRegister(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    const req = await registerUseCase({
      name: register.name,
      email: register.email,
      password: register.password,
      phone: register.phone,
    });

    if (req.data.data.registerUser) {
      localStorage.setItem(
        "apopyToken",
        JSON.stringify("Bearer " + req.data.data.registerUser.token)
      );
      dispatch(fetchUser(req.data.data.user));

      return redirect('/');
    }

    if (req.data.errors) {
      const err = req.data.errors[0].message;
      registerError(err, setError);
    }
    setLoading(false);
  }

  if (user) {
    return navigate("/");
  }

  return (
    <Container>
      <IconLogo src={Logo} alt="Logo Apopy" />
      <FormContainer>
        <Text>Criar uma conta</Text>
        <RenderError error={error.msg !== "" ? 1 : 0}>{error.msg}</RenderError>
        <InputLogin
          error={error.error === "name" ? 1 : 0}
          placeholder="Nome completo"
          onChange={(e) => {
            setRegister({ ...register, name: e.target.value });
            setError({ error: "", msg: "" });
          }}
        />
        <InputLogin
          error={Boolean(error.error === "phone")}
          placeholder="Número do celular"
          onChange={(e) => {
            setRegister({ ...register, phone: e.target.value });
            setError({ error: "", msg: "" });
          }}
        />
        <InputLogin
          error={error.error === "email" ? 1 : 0}
          placeholder="Email"
          onChange={(e) => {
            setRegister({ ...register, email: e.target.value });
            setError({ error: "", msg: "" });
          }}
        />
        <InputLogin
          error={error.error === "password" ? 1 : 0}
          placeholder="Senha"
          type="password"
          onChange={(e) => {
            setRegister({ ...register, password: e.target.value });
            setError({ error: "", msg: "" });
          }}
        />
        <Terms>
          Ao se cadastrar, você concorda com nossos{" "}
          <TermsLink>Termos</TermsLink> e{" "}
          <TermsLink>Política de Privacidade</TermsLink>.
        </Terms>
        <ButtonLogin
          type="submit"
          onClick={(e) => handleRegister(e)}
          disabled={
            !(
              !loading &&
              register.email !== "" &&
              register.name !== "" &&
              register.password !== "" &&
              register.phone !== ""
            )
          }
        >
          {loading ? <SpinnerIcon /> : "Cadastrar"}
        </ButtonLogin>
        <Terms>
          Já tem conta?{" "}
          <TermsLink onClick={() => navigate("/login")}>Login</TermsLink>
        </Terms>
      </FormContainer>
    </Container>
  );
};
