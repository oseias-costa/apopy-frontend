import { createSlice } from "@reduxjs/toolkit";
import { CategoryInterface } from "../../../domain/entities/category";

const categorySlice = createSlice({
  name: "categoty",
  initialState: {
    categories: [],
  },
  reducers: {
    fetchCategories: (state, action) => {
      state.categories = action.payload;
    },
    createCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    updateCategory: (state, action) => {
      const { _id, name } = action.payload;

      const updateCategory = state.categories.map((item) => {
        if (item._id === _id) {
          item.name = name;
        }
      });
      state = updateCategory;
    },
    deleteCategory: (state, action) => {
      state.categories = state.categories.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
});

export const {
  fetchCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = categorySlice.actions;
export default categorySlice.reducer;
