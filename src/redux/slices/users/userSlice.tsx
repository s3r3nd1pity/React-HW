import {IUser} from "../../../models/users/IUser.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

type UserSliceType = {
    users: IUser[],
    loadStateUser: boolean,
    userId: number
}

const initialState: UserSliceType = {users: [], loadStateUser: false, userId: 1}

const loadUsers = createAsyncThunk(
    "userSlice/loadUsers",
    async (_, thunkAPI) => {
        try {
            const users = await fetch("https://jsonplaceholder.typicode.com/users")
                .then(value => value.json())

            return thunkAPI.fulfillWithValue(users)

        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    });

export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.loadStateUser = action.payload
        },
        changeId:(state, action:PayloadAction<number>)=>{
            state.userId = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                state.users = action.payload
                state.loadStateUser = true;

            })
            .addCase(loadUsers.rejected, (state, action) => {
                console.log(state)
                console.log(action)
                state.loadStateUser = false;

            })
    }
})

export const userActions = {
    ...userSlice.actions, loadUsers
}
