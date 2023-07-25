import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { registerUseCase } from "../../../application/acess/register.usecase"
import { RegisterUser } from "../../../domain/entities/user"
import { fetchUser } from "../../redux/slice/userSlice"
import { ButtonLogin, Container, FormContainer, IconLogo, InputLogin, Terms, TermsLink, Text } from "../../styles/PageStyles/acess.styles"
import Logo from "../../assets/logo/apopy-logo.svg";

export const Register = () => {
    const [ register, setRegister ] = useState<RegisterUser>(
        { name: "", email: "",  password: "0", phone: "" })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state: any) => state.user.user);

        console.log('register', register.phone)

    async function handleRegister(e){
        e.preventDefault();
        const req = await registerUseCase({
            name: register.name,
            email: register.email,
            password: register.password,
            phone: register.phone
        })

        if(req.data.data.registerUser){
            localStorage.setItem(
                "apopyToken",
                JSON.stringify("Bearer " + req.data.data.registerUser.token)
              );
            dispatch(fetchUser(req.data.data.user))
            
            return navigate("/dashboard")
        }

        console.log('esse é a requisição', req)
    }

    if(user){
        return navigate('/dashboard')
      }

    return(
        <Container>
            <IconLogo src={Logo} alt="Logo Apopy" />
            <FormContainer>
            <Text>Criar uma conta</Text>
            <InputLogin
                key='name' 
                placeholder="Nome completo"  
                onChange={(e) => setRegister({...register, name: e.target.value})}
            />
            <InputLogin 
                key='email' 
                placeholder="Número do celular" 
                onChange={(e) => setRegister({...register, phone: e.target.value})}
            />
            <InputLogin 
                key='phone' 
                placeholder="Email" 
                onChange={(e) => setRegister({...register, email: e.target.value})}
            />
            <InputLogin 
                key='password' 
                placeholder="Senha" 
                onChange={(e) => setRegister({...register, password: e.target.value})}
            />
            <Terms>Ao se cadastrar, você concorda com nossos <TermsLink>Termos</TermsLink> e <TermsLink>Política de Privacidade</TermsLink>.</Terms>
            <ButtonLogin type="submit" onClick={(e) => handleRegister(e)}>Cadastrar</ButtonLogin>
            <Terms>Já tem conta? <TermsLink onClick={() => navigate('/login')}>Login</TermsLink></Terms>
            </FormContainer>
        </Container>
    )
}