import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice(
    {
        name: "account",
        intialState: {
            value: '',
        },
        devTools: true,
        reducers: {
            login: (state , action) => {
                state.value = action.payload
            }
        }
    }
)
export const { login } = tokenSlice.actions
export default tokenSlice.reducer