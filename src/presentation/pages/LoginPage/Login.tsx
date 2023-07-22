import { useState } from "react";
import { loginUseCase } from "../../../application/acess/login.usecase";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate()
  const [login, setLogin] = useState({ email: "", password: "" });

  async function handleLogin(e) {
    e.preventDefault();
    const req = await loginUseCase(login.email, login.password);

    if (req.status === 200) {
      console.log(req);
      localStorage.setItem(
        "apopyToken",
        JSON.stringify("Bearer " + req.data.data.loginUser.token)
      );
      console.log(`
                 Salvo no local storage
                 ${localStorage.getItem("apopyToken")}
             `);
      return navigate("/");
    }
  }

  return (
    <div>
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
    </div>
  );
}
