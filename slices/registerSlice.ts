import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {login} from "../services/auth";
import {register} from "../services/auth";

export type TokenState = {
    accessToken: string;
    pending: boolean,
    error: boolean,
    cookie: string
};

interface User {
    name?: string;
    password: string;
    email: string;
}

const initialState: TokenState = {
    accessToken: "",
    pending: false,
    error: false,
    cookie: "",
};


export const TokenSlice = createSlice({
    name: "accessToken",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                console.log("pending")
                state.pending = true;
            })
            .addCase(register.fulfilled, (state, {payload}) => {
                console.log(payload)
                state.pending = false;
                state.accessToken = payload;
                console.log(payload.token)
                state.cookie = `token=${payload.token}`;
                document.cookie = state.cookie;
            })
            .addCase(register.rejected, (state) => {
                console.log("rejected")
                state.pending = false;
                state.error = true;
            }).addCase(login.pending, (state) => {
            console.log("pending")
            state.pending = true;
        })
            .addCase(login.fulfilled, (state, {payload}) => {
                console.log(payload)
                state.pending = false;
                state.accessToken = payload;
                state.cookie = `token=${payload}`;
                document.cookie = state.cookie;
            })
            .addCase(login.rejected, (state) => {
                console.log("rejected")
                state.pending = false;
                state.error = true;
            });
        ;

    },
});


export default TokenSlice.reducer