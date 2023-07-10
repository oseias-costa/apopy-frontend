import { createSlice } from "@reduxjs/toolkit";

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

    updateSubcategory: (state, action) => {
      const updateSubcategory = state.categories.map((item) => {
        if (item._id === action.payload._id) {
          const i = item.subcategory.indexOf(action.payload.oldSubcategory);
          item.subcategory[i] = action.payload.newSubcategory;
        }
      });
      state = updateSubcategory;
    },
    deleteSubcategory: (state, action) => {
      const newState = state.categories.map((item) => {
        if (item._id === action.payload._id) {
          if (item.subcategory.length === 1) {
            item.subcategory = [];
          } else {
            const i = item.subcategory.indexOf(action.payload.oldSubcategory);
            item.subcategory.splice([i], [i]);
          }
        }
      });
      state = newState;
    },
    createSubcategory: (state, action) => {
      const newState = state.categories.map((item) => {
        if (item._id === action.payload._id) {
          if (!item.subcategory) {
            item.subcategory = [action.payload.newSubcategory];
          } else {
            item.subcategory.push(action.payload.newSubcategory);
          }
        }
      });
      state = newState;
    },
  },
});

export const {
  fetchCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  updateSubcategory,
  deleteSubcategory,
  createSubcategory,
} = categorySlice.actions;
export default categorySlice.reducer;
