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
        },
        createStock: (state, action: PayloadAction<Stock>) => {
            state.stock.push(action.payload)
        },
        updateStock: (state, action: PayloadAction<Stock>) => {
            state.stock = state.stock.map(item => {
                if(item._id === action.payload._id){ 
                    item = action.payload
                }
                return item
            })
        },
        deleteStock: (state, action: PayloadAction<{ _id: string}>) => {
            state.stock = state.stock.filter(item => 
                item._id !== action.payload._id )
        }
    }
})

export const {  fetchStock, createStock, updateStock, deleteStock } = stockSlice.actions
export default stockSlice.reducer