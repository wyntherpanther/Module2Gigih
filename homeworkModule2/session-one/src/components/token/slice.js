import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "" } 

export const tokenSlice = createSlice(
    {
        
        name: "account",
        initialState,
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