export type CategoryState = {
  _id: string;
  name: string;
  type?: string;
  subcategory?: string[];
};

export const initialCategoryValue = {
  _id: "",
  name: "",
  subcategory: [],
  type: "create",
};
