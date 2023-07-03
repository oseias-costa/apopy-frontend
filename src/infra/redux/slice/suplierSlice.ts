import { createSlice } from "@reduxjs/toolkit";
import getSupliersUseCase from "../../../application/suplier/get-supliers.usecase";

type SuplierProp = {
  supliers: { _id: string; name: string }[];
};

export const getSupliers = async () => {
  return getSupliersUseCase().then((res) => res.data.data.supliers);
};

export const initialState = {
  supliers: [],
};

const suplierSlice = createSlice({
  name: "suplier",
  initialState,
  reducers: {
    createSuplier: (state, action) => {
      state.supliers.push(action.payload);
    },
    removeSuplier: (state, action) => {
      state.supliers = state.supliers.filter(
        (suplier) => suplier._id !== action.payload
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

export const { createSuplier, removeSuplier, updateSuplier } =
  suplierSlice.actions;
export default suplierSlice.reducer;
