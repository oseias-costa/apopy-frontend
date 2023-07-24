import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { registerUseCase } from "../../../application/acess/register.usecase"
import { RegisterUser } from "../../../domain/entities/user"
import { fetchUser } from "../../redux/slice/userSlice"

export const Register = () => {
    const [ register, setRegister ] = useState<RegisterUser>(
        { name: "", email: "",  password: "", phone: "" })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state: any) => state.user.user);

    async function handleRegister(e){
        e.preventDefault();
        const req = await registerUseCase({
            name: register.name,
            email: register.email,
            password: register.password,
            phone: register.phone
        })

        if(req.status === 200){
            localStorage.setItem(
                "apopyToken",
                JSON.stringify("Bearer " + req.data.data.registerUser.token)
              );
            dispatch(fetchUser(req.data.data.user))
            
            return navigate("/dashboard")
        }
    }

    if(user){
        return navigate('/dashboard')
      }

    return(
        <div>
            <h1>Register</h1>
            <input 
                key='name' 
                placeholder="Seu nome"  
                label="Nome Completo" 
                onChange={(e) => setRegister({...register, name: e.target.value})}
            />
            <input 
                key='email' placeholder="Seu email" 
                label="Email" 
                onChange={(e) => setRegister({...register, email: e.target.value})}
            />
            <input 
                key='phone' placeholder="Seu telefone" 
                label="Telefone" 
                onChange={(e) => setRegister({...register, phone: e.target.value})}
            />
            <input 
                key='password' placeholder="Crie uma semja" 
                label="Senha" 
                onChange={(e) => setRegister({...register, password: e.target.value})}
            />
            <button type="submit" onClick={(e) => handleRegister(e)}>Cadastrar</button>
        </div>
    )
}