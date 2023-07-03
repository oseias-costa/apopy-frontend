import { configureStore } from "@reduxjs/toolkit";
import suplierReducer from "./slice/suplierSlice";

export const store = configureStore({
  reducer: {
    suplier: suplierReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
