import { SetStateAction } from "react";
import { CategoryInterface } from "../../../domain/category";

export interface CategoryState {
  _id: string;
  name: string;
  type?: string;
  subcategory?: string[];
  openModal: boolean;
  newSubcategory: string;
  oldSubcategory: string;
}

export const initialCategoryValue: CategoryState= {
  _id: "",
  name: "",
  subcategory: [],
  type: "",
  openModal: false,
  newSubcategory: "",
  oldSubcategory: "",
};

export interface CategoryStateProps {
  state: CategoryState;
  setState: React.Dispatch<React.SetStateAction<CategoryState>>
}

export interface CreateCategoryState {
  isEmpty: boolean;
  loading: boolean
}

export interface MenuCategoryState {
  openMenu: boolean;
  item: string;
}

export type HandleSetCategory = (
  item: { _id: string; name: string },
  data: {
    type: string,
    newSubcategory: string,
    oldSubcategory: string,
  }
) => void;

export interface CategoryRowProps {
  state: CategoryInterface[],
  setCategoryState: React.Dispatch<SetStateAction<CategoryState>>
}

export interface SubcategoryRowProps {
  item: CategoryInterface;
  handleSetCategory: HandleSetCategory
}