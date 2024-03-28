import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { returnBlog } from "../../firebase/database/blog-data";

export const getBlogs = createAsyncThunk('get-blogs', async () => {
    return await returnBlog();
})

const Blogs = createSlice({
    name: "Blogs",
    initialState: { blogArray: [] },
    extraReducers(builder) {
        builder.addCase(getBlogs.pending, () => { console.log("pending") })
        builder.addCase(getBlogs.fulfilled, (state, action) => {
            const { payload } = action
            console.log(payload);
            state.blogArray = payload
        })
        builder.addCase(getBlogs.rejected, () => { console.log("Error") })
    }
})



export default Blogs.reducer;