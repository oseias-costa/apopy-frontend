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