import { RegisterUser } from "../../domain/entities/user";
import { registerGateway } from "../../infra/gateways/user.gateway";

export async function registerUseCase({name, email, password, phone}: RegisterUser){
    return await registerGateway({name, email, password, phone})
}