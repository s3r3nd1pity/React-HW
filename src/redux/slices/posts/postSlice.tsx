import {IPost} from "../../../models/posts/IPost.tsx";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

type PostSliceType = {
    posts: IPost[],
    loadStatePost:boolean
}
const initialState: PostSliceType = {posts: [], loadStatePost:false};

const loadPosts = createAsyncThunk(
    "postSlice/loadPosts",
    async (_, thunkAPI) => {
        try {
            const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
                .then(value => value.json())
            return thunkAPI.fulfillWithValue(posts)
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)

export const postSlice = createSlice({
    name: "postSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
                state.posts = action.payload
                state.loadStatePost = true;

            })
            .addCase(loadPosts.rejected, (state) => {
                state.loadStatePost = false;
            });

    }
});

export const postsActions = {
    ...postSlice.actions, loadPosts
}