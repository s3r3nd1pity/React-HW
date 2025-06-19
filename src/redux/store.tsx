import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/users/userSlice.tsx";
import {postSlice} from "./slices/posts/postSlice.tsx";
import {commentSlice} from "./slices/comments/commentSlice.tsx";

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer,
        commentSlice: commentSlice.reducer,
    }
})

