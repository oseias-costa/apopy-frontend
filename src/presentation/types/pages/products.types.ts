export interface ProductInterface {
  _id: string;
  name: string;
  category: string;
  subcategory: string;
  suplier: string;
  userId: string;
}

export type ProductCreate = {
  name: string;
  category: string;
  subcategory: string;
  suplier: string;
  _id: string;
}