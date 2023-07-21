import { httpAxiosRequest } from "../http/httpAxiosRequest"
import { REGISTER_USER } from "../queries/register-user"

export async function registerGateway(){
    const variables = {
        
    }

    return await httpAxiosRequest(REGISTER_USER, variables)
}