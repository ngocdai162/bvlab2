import { createSlice } from "@reduxjs/toolkit";
const isUser = createSlice({
    name : 'dashboard',
    initialState: {
        isUser:  false,
    },
    reducers: {
        signInUser (state,action) {
            state.isUser = true;
        },
        signOutUser (state, action) {
            state.isUser = false;
        }
    }
})
export const {signInUser,signOutUser} = isUser.actions;
export default isUser.reducer;