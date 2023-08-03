export interface CategoryState {
  _id?: string;
  name: string;
  type?: string;
  subcategory?: string[];
  openModal: boolean;
  newSubcategory?: string;
  oldSubcategory?: string;
}

export const initialCategoryValue = {
  _id: "",
  name: "",
  subcategory: [],
  type: "",
  openModal: false,
  newSubcategory: "",
  oldSubcategory: "",
};
