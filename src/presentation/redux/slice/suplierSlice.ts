import { createSlice } from "@reduxjs/toolkit";

const suplierSlice = createSlice({
  name: "suplier",
  initialState: {
    supliers: [],
  },
  reducers: {
    fetchData: (state, action) => {
      state.supliers = action.payload;
    },
    createSuplier: (state, action) => {
      state.supliers.push(action.payload);
    },
    removeSuplier: (state, action) => {
      state.supliers = state.supliers.filter(
        (suplier) => suplier._id !== action.payload._id
      );
    },
    updateSuplier: (state, action) => {
      state.supliers = state.supliers.map((suplier) => {
        if (suplier._id === action.payload._id) {
          suplier.name = action.payload.name;
        }
        return suplier;
      });
    },
  },
});

export const { createSuplier, removeSuplier, updateSuplier, fetchData } =
  suplierSlice.actions;
export default suplierSlice.reducer;
