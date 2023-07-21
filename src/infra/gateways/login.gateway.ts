import { httpAxiosRequest } from "../http/httpAxiosRequest"
import { LOGIN } from "../queries/login.query"

export async function loginGateway(email: string, password: string){

const variables = {
    loginInput: {
        email: email,
        password: password
    }
}

return await httpAxiosRequest(LOGIN, variables)

}