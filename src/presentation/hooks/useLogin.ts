import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUseCase } from "../../application/acess/register.usecase";
import { registerError } from "../pages/RegisterPage/erros";
import { fetchUser } from "../redux/slice/userSlice";

export async function useLogin(register, user, setError) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
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

      return navigate("/dashboard");
    }

    if (req.data.errors) {
      const err = req.data.errors[0].message;
      registerError(err, setError);
    }
  }

  if (user) {
    return navigate("/dashboard");
  }

  return { handleRegister: (e) => handleRegister(e) };
}
