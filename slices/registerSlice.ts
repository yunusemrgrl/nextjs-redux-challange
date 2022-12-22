import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export type TokenState = {
    accessToken: string;
    pending: boolean,
    error: boolean,
};

const initialState: TokenState = {
    accessToken: "",
    pending: false,
    error: false,
};

export const getToken = createAsyncThunk("Token/getToken", async () => {
    const response = await fetch(
        "https://assignment-api.piton.com.tr/api/v1/user/register",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:"yunus", password: "123123", email: "test@test.com"})
        }

    );
    return await response.json();
});

export const TokenSlice = createSlice({
    name:"accessToken",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getToken.pending, (state) => {
                state.pending = true;
            })
            .addCase(getToken.fulfilled, (state, { payload }) => {
                state.pending = false;
                state.accessToken = payload;
            })
            .addCase(getToken.rejected, (state) => {
                state.pending = false;
                state.error = true;
            });
    },
});


export default TokenSlice.reducer