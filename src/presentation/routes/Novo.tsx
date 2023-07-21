import { Link, Outlet } from "react-router-dom";

export const Novo = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/categorias">Categorias</Link>
      <Link to="/fornecedores">Fornecedores</Link>
      <Outlet />
    </nav>
  );
};
