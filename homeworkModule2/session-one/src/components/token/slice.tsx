import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "" }

export const tokenSlice = createSlice(
    {

        name: "account",
        initialState,
        reducers: {
            login: (state, action) => {
                state.value = action.payload
            }
        }
    }
)
export const { login } = tokenSlice.actions
export type RootState = ReturnType<typeof tokenSlice.reducer>;
export default tokenSlice.reducer
