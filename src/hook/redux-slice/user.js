import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: "user-info",
    initialState: null,
    reducers: {
        updateUser: (state, action) => {
            return action.payload
        }
    }

})
export const { updateUser } = user.actions
export default user.reducer
