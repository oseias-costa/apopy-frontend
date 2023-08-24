import React, { SetStateAction } from "react";
import { Product } from "../../../domain/entities/product";

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

export interface MenuDropdownProps {
  setState: React.Dispatch<SetStateAction<ProductState>>,
  item: Product;
}

export type PositionItem = {
  pageX: number;
  pageY: number;
};

export type MenuState = {
  openMenu: boolean;
  item: string;
}

export interface ProductState {
  _id: string;
  name: string;
  category: string;
  subcategory: string;
  suplier: string;
  openModal: boolean;
  type: string
}

export type ProductStateProps = {
  state: ProductState,
  setState: (state: ProductState) => void
}

export const initialStateProducts = {
  name: "",
  category: "",
  subcategory: "",
  suplier: "",
  _id: "",
  openModal: false,
  type: ''
}