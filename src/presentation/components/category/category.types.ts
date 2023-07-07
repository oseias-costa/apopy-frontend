export interface CategoryState {
  _id: string;
  name: string;
  type?: string;
  subcategory?: string[];
  openModal: boolean;
}

export const initialCategoryValue = {
  _id: "",
  name: "",
  subcategory: [],
  type: "",
  openModal: false,
};
