import { configureStore } from "@reduxjs/toolkit";
import suplierReducer from "./slice/suplierSlice";
import modalReducer from "./slice/modalSlice";
import categoryReducer from "./slice/categorySlice";

export const store = configureStore({
  reducer: {
    suplier: suplierReducer,
    modal: modalReducer,
    category: categoryReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
