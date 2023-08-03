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
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;
