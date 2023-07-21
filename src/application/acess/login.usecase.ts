import { loginGateway } from "../../infra/gateways/login.gateway";

export async function loginUseCase(email: string, password: string){
    return await loginGateway(email, password)
}