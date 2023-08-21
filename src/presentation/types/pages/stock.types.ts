import React from "react";
import { Stock } from "../../../domain/entities/stock";

export interface MenuDropdownStockProps {
  setState: React.Dispatch<React.SetStateAction<StockState>>;
  item: Stock;
}

export interface StockState {
  _id: string;
  product: string;
  category: string;
  subcategory: string;
  suplier: string;
  costPrice: number;
  quantity: number;
  total: number;
  description: string;
  openModal: boolean;
  type: string;
}

export const initialStockState: StockState = {
  _id: "",
  product: "",
  category: "",
  subcategory: "",
  suplier: "",
  costPrice: 0,
  quantity: 0,
  total: 0,
  description: "",
  openModal: false,
  type: "",
};

export const initialStockStateCreate: Stock = {
  _id: "",
  product: "",
  category: "",
  subcategory: "",
  suplier: "",
  costPrice: 0,
  quantity: 0,
  total: 0,
  description: "",
};

export interface InitialFilterStock {
  openFilter: boolean;
  product: string;
  category: string;
  subcategory: string;
  suplier: string;
  month: string;
  year: string;
}

export const initialFilterStockState: InitialFilterStock = {
  openFilter: false,
  product: "",
  category: "",
  subcategory: "",
  suplier: "",
  month: "",
  year: "",
};

export interface StockStateProps {
  setStockState: React.Dispatch<React.SetStateAction<StockState>>;
  stockState: StockState;
}

export function UpdateStockItemData(updateStockItem: Stock): Stock {
  return {
    _id: updateStockItem._id,
    product: updateStockItem.product,
    category: updateStockItem.category,
    subcategory: updateStockItem.subcategory,
    suplier: updateStockItem.suplier,
    quantity: updateStockItem.quantity,
    costPrice: updateStockItem.costPrice,
    total: updateStockItem.total,
    description: updateStockItem.description,
  };
}

export interface ProductComponentState {
  isEmpty: boolean;
  loading: boolean;
}

export const initialCreateProduct: ProductCreateState = {
  name: "",
  category: "",
  subcategory: "",
  suplier: "",
  _id: "",
};

export interface ProductCreateState {
  name: string;
  category: string;
  subcategory: string;
  suplier: string;
  _id: string;
}
