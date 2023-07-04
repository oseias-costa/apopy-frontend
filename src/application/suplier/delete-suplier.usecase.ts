import { deleteSuplierGateway } from "../../infra/gateways/suplier.gateway";

export async function deleteSuplierUseCase(id: string){
    return await deleteSuplierGateway(id)
}