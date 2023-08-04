import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  initialState: {
    products: [],
  },
  name: "Products",
  reducers: {
    fetchProducts: (state, action) => {
      state.products = action.payload;
    },
    createProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { fetchProducts, createProduct } = productSlice.actions;
export default productSlice.reducer;
