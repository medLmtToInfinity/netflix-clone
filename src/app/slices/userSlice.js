import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        currentPackage: "",
    },
    reducers: {
        login(state, action) {
            state.user = action.payload;
        },

        logout(state, action) {
            state.user = null;
        },
        setPackage(state, action) {
            state.currentPackage = action.payload;
        }
    }
})

export const { login, logout, setPackage } = userSlice.actions;

export const userReducer = userSlice.reducer;