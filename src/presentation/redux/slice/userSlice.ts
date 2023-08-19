import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../domain/entities/user";

interface UserState {
    user: User
}

export const initialUserState: UserState = {
    user: {
        _id: "",
        createAt: null,
        email: "",
        name: "",
        phone: ""
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        fetchUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        }
    }
})

export const { fetchUser } = userSlice.actions
export default userSlice.reducer
