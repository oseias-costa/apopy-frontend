import { AxiosResponse } from "axios";
import { Sale } from "../../domain/entities/sale";
import { httpClient } from "../http/httpClient";
import { GET_SALES, REVERSE_SALE, TRANSFER_SALE } from "../queries/sale.query";


export async function getSalesGateway(): Promise<AxiosResponse>{

    return await httpClient(GET_SALES, {})
}

export async function transferSaleGateway(data: Sale): Promise<AxiosResponse>{

    const variables = {
        saleInput: {
            stockId: "64d19bdb765f56b4c60a7da5",
            category: "Estofado",
            product: "Turing",
            subcategory: "De Canto",
            suplier: "Taska",
            quantity: 1,
            price: 4000,
            total: 5000,
            costPrice: 1200,
            description: "Descrição",
            profit: 4000,
            percentage: 8,
            date: null
          }
    }

    return await httpClient(TRANSFER_SALE, variables)
}

export async function reverseSaleGateway(data: Sale): Promise<AxiosResponse>{

    const variables = {
        saleInput: {
            _id: "64d41ebe8a3019076f0a2b7a",
            userId: "6451a787de4c08d54ed8da35",
            stockId: "64d19bdb765f56b4c60a7da5",
            category: "Estofado",
            product: "Turing",
            subcategory: "De Canto",
            suplier: "Taska",
            quantity: 1,
            price: 4000,
            total: 5000,
            costPrice: 1200,
            description: "Descrição",
            profit: 4000,
            percentage: 8,
            date: null
          }
    }

    return await httpClient(REVERSE_SALE, variables)
}