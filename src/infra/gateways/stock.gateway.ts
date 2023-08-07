import { Stock } from "../../domain/entities/stock";
import { httpClient } from "../http/httpClient";
import { GET_STOCK } from "../queries/stock.query";

interface ApiResponse {
    data: { data: { stock: Stock[]} }
}

export async function getStockGateway(): Promise<ApiResponse>{

    return await httpClient(GET_STOCK, {})
}