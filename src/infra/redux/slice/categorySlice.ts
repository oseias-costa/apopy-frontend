import { createSlice } from '@reduxjs/toolkit'
import { CategoryInterface } from '../../../domain/entities/category'

type initialStateProps = {
    categories: CategoryInterface[]
}

const initialState: initialStateProps = {
    categories: []
}

const categorySlice = createSlice({
    name: 'categoty',
    initialState,
    reducers: {
        fetchCategories: (state, action) => {
            state.categories = action.payload
        },
        createCategory: (state, action) => {
            state.categories.push(action.payload)
        },
        updateCategory: (state: initialStateProps, action) => {
            state.categories = state.categories.map(item => {
                if(item._id === action.payload._id){
                    item.name = action.payload.name
                }
            })
        },
        deleteCategory: (state, action) => {
            state.categories = state.categories.filter(item => 
                    item._id !== action.payload._id
                )
        }
    }
})

export const { fetchCategories, createCategory, updateCategory, deleteCategory} = categorySlice.actions
export default categorySlice.reducer
