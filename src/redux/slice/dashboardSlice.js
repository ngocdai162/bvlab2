import { createSlice } from "@reduxjs/toolkit";
const dashboardSlice = createSlice({
    name : 'dashboard',
    initialState: {
        active: "ads"
    },
    reducers: {
        activeTab (state,action) {
            state.active = action.payload;
        }
    }
})
export const {activeTab} = dashboardSlice.actions;
export default dashboardSlice.reducer;