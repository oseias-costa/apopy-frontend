import { useState } from "react";
import { loginUseCase } from "../../../application/acess/login.usecase";

export function Login() {
  const [login, setLogin] = useState({ email: "", password: "" });

  async function handleLogin(){
   const req = await loginUseCase(login.email, login.password)

   if(req.status === 200){
    console.log(req)
   }
  }

  // if (data) {
  //   localStorage.setItem("apopyToken", JSON.stringify(data.loginUser.token));
  //   console.log(`
  //           Salvo no local storage
  //           ${localStorage.getItem("apopyToken")}
  //       `);
  // }

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
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}
