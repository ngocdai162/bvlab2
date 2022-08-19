import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from './slice/dashboardSlice';
import isUserReducer from './slice/isUser'
const store = configureStore({
    reducer: {
        dashboard: dashboardReducer,
        isUser :  isUserReducer
    }
})
export default store;