import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./slice";

export default configureStore({
    reducer: {
        account: tokenSlice
    }
})