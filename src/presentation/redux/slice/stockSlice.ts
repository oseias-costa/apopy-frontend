import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Stock } from "../../../domain/entities/stock";

interface StockState {
    stock: Stock[]
}

const initialState: StockState = {
    stock: []
}

export const stockSlice = createSlice({
    name: 'stock',
    initialState: initialState,
    reducers: {
        fetchStock: (state, action: PayloadAction<Stock[]>) => {
            state.stock = action.payload
        }
    }
})

export const { fetchStock } = stockSlice.actions
export default stockSlice.reducer