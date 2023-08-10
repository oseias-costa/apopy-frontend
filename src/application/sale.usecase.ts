import { AxiosResponse } from "axios";
import { Sale } from "../domain/entities/sale";
import { getSalesGateway, reverseSaleGateway, transferSaleGateway } from "../infra/gateways/sale.gateway";

export async function getSaleUseCase(): Promise<AxiosResponse>{

    return await getSalesGateway()
}

export async function transferSaleUseCase(data: Sale): Promise<AxiosResponse>{

    return await transferSaleGateway(data)
} 

export async function reverseSaleUseCase(data: Sale): Promise<AxiosResponse>
{
    return await reverseSaleGateway(data)
}