import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./reducer";

export const store = configureStore({
    reducer: {
        account: accountReducer
    }
});
