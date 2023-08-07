import { AxiosResponse } from "axios";
import { Stock } from "../domain/entities/stock";
import {
  createStockItemGateway,
  getStockGateway,
} from "../infra/gateways/stock.gateway";

export async function getStockUseCase(): Promise<AxiosResponse<Stock[]>> {
  return await getStockGateway();
}

export async function createStockUseCase(
  data: Stock
): Promise<AxiosResponse<Stock>> {
  return await createStockItemGateway(data);
}
