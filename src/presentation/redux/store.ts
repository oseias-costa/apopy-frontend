import { configureStore } from "@reduxjs/toolkit";
import suplierReducer from "./slice/suplierSlice";
import modalReducer from "./slice/modalSlice";
import categoryReducer from "./slice/categorySlice";
import userReducer from "./slice/userSlice";
import productReducer from "./slice/productSlice";

export const store = configureStore({
  reducer: {
    suplier: suplierReducer,
    modal: modalReducer,
    category: categoryReducer,
    user: userReducer,
    product: productReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
