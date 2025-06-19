import {IComment} from "../../../models/comments/IComment.tsx";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

type CommentSliceType = {
    comments: IComment[],
    loadStateComment: boolean
}

const initialState: CommentSliceType = {comments: [], loadStateComment: false}

const loadComments = createAsyncThunk(
    "commentSlice/loadComments",
    async (_, thunkAPI) => {
        try {
            const comments = await fetch("https://jsonplaceholder.typicode.com/comments")
                .then(value => value.json())
            return thunkAPI.fulfillWithValue(comments)
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }
    }
)

export const commentSlice = createSlice({
    name: "commentSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
                state.comments = action.payload
                state.loadStateComment = true;
            })
            .addCase(loadComments.rejected, (state) => {
                state.loadStateComment = false;
            });
    }
})

export const commentsActions = {
    ...commentSlice.actions, loadComments
}