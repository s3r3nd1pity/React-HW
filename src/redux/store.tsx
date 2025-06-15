import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/users/userSlice.tsx";

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
    }
})