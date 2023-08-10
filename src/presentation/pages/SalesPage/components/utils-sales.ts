import { Sale } from "../../../../domain/entities/sale";
import { StockState } from "../../../types/pages/stock.types";
import { NewSale } from "./TransferToSale";

interface VariablesSales {
  (stockState: StockState, newSale: NewSale): Omit<Sale, "_id">;
}

export const variablesSales: VariablesSales = (stockState, newSale) => {
  const today = new Date();

  const variables: Omit<Sale, "_id"> = {
    stockId: stockState._id,
    category: stockState.category,
    product: stockState.product,
    subcategory: stockState.subcategory,
    suplier: stockState.suplier,
    quantity: newSale.quantity,
    price: newSale.price,
    total: newSale.price * newSale.quantity,
    costPrice: stockState.costPrice,
    description: stockState.description,
    profit: newSale.price - stockState.costPrice,
    percentage: (newSale.price - stockState.costPrice) / newSale.price,
    date: today.toString(),
  };

  return variables;
};
