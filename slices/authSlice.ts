import {createSlice} from "@reduxjs/toolkit";
import {login, register,} from "../services/auth";
import {getProducts, getProductDetail, likeBook, unLikeBook} from "../services/product";

import {RootState} from "../store";


type Product = {
    id: number,
    name: string,
    image: string,
    price: number,
    description: string,
    likes: [],
    timeStamp: string
}


export type TokenState = {
    products: []
    accessToken: string;
    pending: boolean,
    error: boolean,
    cookie: string | null
    product: Product
    like: []
};

const initialState: TokenState = {
    accessToken: "",
    pending: false,
    error: false,
    cookie: "",
    products: [],
    product: {
        id: 0,
        name: "",
        image: "",
        price: 0,
        timeStamp: "",
        description: "",
        likes: []
    },
    like: []

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
                if (payload.token === "") {
                    state.error = true
                } else {
                    state.error = false
                    state.accessToken = payload;
                    document.cookie = payload.token;
                    state.cookie = `token=${payload.token}`;
                }

            })
            .addCase(login.rejected, (state) => {
                state.pending = false;
                state.error = true;
            })
    },
});

export const authSelect = (state: RootState): string | null => state.accessToken.cookie;


export default TokenSlice.reducer