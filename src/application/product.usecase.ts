import { getProductGateway } from "../infra/gateways/product.gateway";

export async function getProductsUseCase(){
    return await getProductGateway()
}