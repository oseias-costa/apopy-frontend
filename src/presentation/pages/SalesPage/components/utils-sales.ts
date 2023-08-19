import { Sale } from "../../../../domain/entities/sale";
import { Stock } from "../../../../domain/entities/stock";
import { NewSale, SaleState } from "../../../types/pages/sale.types";
import { StockState } from "../../../types/pages/stock.types";

interface VariablesSales {
  (stockState: StockState, newSale: NewSale): Omit<Sale, "_id">;
}

export const variablesSales: VariablesSales = (
  stockState,
  newSale
): Omit<Sale, "_id"> => {
  const today = new Date();
  const total = newSale.price * newSale.quantity
  const profit = (newSale.price * newSale.quantity) - (newSale.quantity * stockState.costPrice)

  const variables: Omit<Sale, "_id"> = {
    stockId: stockState._id,
    category: stockState.category,
    product: stockState.product,
    subcategory: stockState.subcategory,
    suplier: stockState.suplier,
    quantity: newSale.quantity,
    price: newSale.price,
    total: total,
    costPrice: stockState.costPrice,
    description: stockState.description,
    profit: profit,
    percentage: profit / total,
    date: today.toString(),
  };

  return variables;
};

export const variablesReverseSales = (stockState: SaleState): Sale => {
  const variables: Sale = {
    _id: stockState._id,
    category: stockState.category,
    costPrice: stockState.costPrice,
    date: stockState.date,
    description: stockState.description,
    percentage: stockState.percentage,
    price: stockState.price,
    product: stockState.product,
    profit: stockState.profit,
    quantity: stockState.quantity,
    stockId: stockState.stockId,
    subcategory: stockState.subcategory,
    suplier: stockState.suplier,
    total: stockState.total,
  };

  return variables;
};

export const originStockMoviment = (
  stockState: StockState,
  newSale: NewSale
): Stock => {
  const originStock: Stock = {
    _id: stockState._id,
    category: stockState.category,
    product: stockState.product,
    costPrice: stockState.costPrice,
    description: stockState.description,
    quantity: newSale.quantity,
    subcategory: stockState.subcategory,
    suplier: stockState.suplier,
    total: stockState.total,
  };

  return originStock;
};

export const originStockReverse = ( saleState: SaleState ): Stock => {
  const originStock: Stock = {
    _id: saleState.stockId,
    category: saleState.category,
    product: saleState.product,
    costPrice: saleState.costPrice,
    description: saleState.description,
    quantity: saleState.quantity,
    subcategory: saleState.subcategory,
    suplier: saleState.suplier,
    total: saleState.total,
  };

  return originStock;
};


export const formatDate = (date: string): string => {
  const itemDate = new Date(date)
  const month = (itemDate.getMonth() + 1).toString() 
  const day = itemDate.getDate().toString()
  const year = itemDate.getFullYear().toString()

  const mm = month.length === 1 ? `0${month}` : month
  const dd = day.length === 1 ? `0${day}` : day
  const yy = year.slice(2,4)

  return `${dd}/${mm}/${yy}`
}