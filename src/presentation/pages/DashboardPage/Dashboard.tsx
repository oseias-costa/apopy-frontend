import { useNavigate } from "react-router-dom"


export const Dashboard = () => {
    const navigate = useNavigate()

    function change(nav: string){
        return navigate(nav)
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => change("/categorias")}>Categorias</button>
            <button onClick={() => change("/fornecedores")}>Categorias</button>
        </div>
    )
}