export interface SaleState {
  _id: string;
  stockId: string;
  category: string;
  subcategory: string;
  product: string;
  suplier: string;
  quantity: number;
  price: number;
  total: number;
  costPrice: number;
  description: string;
  profit: number;
  percentage: number;
  date: string;
  openModal: boolean;
  type: string;
}

export const initialSaleState: SaleState = {
  _id: "",
  stockId: "",
  category: "",
  subcategory: "",
  product: "",
  suplier: "",
  quantity: 0,
  price: 0,
  total: 0,
  costPrice: 0,
  description: "",
  profit: 0,
  percentage: 0,
  date: "",
  openModal: false,
  type: "",
};
