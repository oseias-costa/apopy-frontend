import { httpClient } from "../http/httpClient"
import { REGISTER_USER } from "../queries/register-user"
import { USER } from "../queries/user.query"

export async function registerGateway(){
    const variables = {
        
    }

    return await httpClient(REGISTER_USER, variables)
}

export async function userGateway(){
    return httpClient(USER, {})
}