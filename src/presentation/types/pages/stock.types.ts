import React from "react";
import { Stock } from "../../../domain/entities/stock";

export interface MenuDropdownStockProps {
    setState: React.Dispatch<React.SetStateAction<StockState>>
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
  type: string
}

export const initialStockState: StockState = {
  _id: '',
  product: '',
  category: '',
  subcategory: '',
  suplier: '',
  costPrice: 0,
  quantity: 0,
  total: 0,
  description: '',
  openModal: false,
  type: ''
}

export interface StockStateProps {
  setStockState: React.Dispatch<React.SetStateAction<StockState>>;
  stockState: StockState;
}