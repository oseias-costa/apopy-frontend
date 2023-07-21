import { httpClient } from "../http/httpClient"
import { REGISTER_USER } from "../queries/register-user"

export async function registerGateway(){
    const variables = {
        
    }

    return await httpClient(REGISTER_USER, variables)
}