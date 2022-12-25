import {createSlice} from "@reduxjs/toolkit";
import {login} from "../services/auth";
import {register} from "../services/auth";
import {RootState} from "../store";

export type TokenState = {
    accessToken: string;
    pending: boolean,
    error: boolean,
    cookie: string | null
};

const initialState: TokenState = {
    accessToken: "",
    pending: false,
    error: false,
    cookie: "",
};


export const TokenSlice = createSlice({
    name: "accessToken",
    initialState,
    reducers: {
        checkCookie: (state) => {
            const cookie = document.cookie.split(";").find((c) => c.trim().startsWith("token="));
            if (cookie) {
                const token = cookie.split("=")[1];
                state.cookie = token;
            } else {
                state.cookie = null;
            }
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.pending = true;
            })
            .addCase(register.fulfilled, (state, {payload}) => {
                state.pending = false;
                state.accessToken = payload;
                state.cookie = `token=${payload.token}`;
                document.cookie = state.cookie;
            })
            .addCase(register.rejected, (state) => {
                state.pending = false;
                state.error = true;
            })
            .addCase(login.pending, (state) => {
                state.pending = true;
            })
            .addCase(login.fulfilled, (state, {payload}) => {
                state.pending = false;
                console.log(payload)
                if (payload.token === "") {
                    state.error = true
                } else {
                    state.error = false
                    state.accessToken = payload;
                    document.cookie = payload.token;
                    state.cookie = `token=${payload.token}`;
                }

                console.log(state.error)

            })
            .addCase(login.rejected, (state) => {
                state.pending = false;
                state.error = true;
            });
    },
});

export const authSelect = (state: RootState): string | null => state.accessToken.cookie;


export default TokenSlice.reducer