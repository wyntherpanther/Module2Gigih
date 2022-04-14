import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./slice";

const store = configureStore({
    reducer: {
        account: tokenSlice
    }
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch