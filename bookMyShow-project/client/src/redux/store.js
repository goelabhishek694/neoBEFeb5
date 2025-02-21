import { configureStore } from "@reduxjs/toolkit";
import loadersReducer from "./loaderSlice"
import usersReducer from "./userSlice";

const store = configureStore({
    reducer: {
        loaders: loadersReducer,
        users: usersReducer
    }
})

export default store;