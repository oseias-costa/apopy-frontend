import { Stock } from "../domain/entities/stock";
import { getStockGateway } from "../infra/gateways/stock.gateway";

interface ApiResponse {
    data: { data: { stock: Stock[] } }
}

export async function getStockUseCase(): Promise<ApiResponse>{
    const response = await getStockGateway()
    return response
}