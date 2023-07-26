
export function registerError(err: string, setError: (value: {error: string, msg: string}) => void ){
    if (err === "Name does not match") {
        return setError({ error: "name", msg: "O nome não é válido." });
      }

      if (err === "Phone dont match") {
        return setError({ error: "phone", msg: "O telefone não é válido." });
      }

      if (err === "Email is not valid") {
        return setError({ error: "email", msg: "O email não é válido." });
      }

      if (err === "Email already registered") {
        return setError({ error: "email", msg: "Email já cadastrado." });
      }

      if (err === "Password must contain at least 6 characters") {
        return setError({
          error: "password",
          msg: "A senha deve conter no mínimo 6 caracteres.",
        });
      }
}