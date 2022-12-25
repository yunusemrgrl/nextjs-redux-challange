import {createSlice} from "@reduxjs/toolkit";
import {getProducts, login, getProductDetail, register, likeBook, unLikeBook} from "../services/auth";
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

            .addCase(getProducts.pending, (state) => {
                state.pending = true;
            })
            .addCase(getProducts.fulfilled, (state, {payload}) => {
                state.pending = false
                state.error = false
                state.products = payload.products;
            })
            .addCase(getProducts.rejected, (state) => {
                state.pending = false;
                state.error = true;
            })

            .addCase(getProductDetail.pending, (state) => {
                state.pending = true;
            })
            .addCase(getProductDetail.fulfilled, (state, {payload}) => {
                state.pending = false
                state.error = false
                state.product = payload.product;
            })
            .addCase(getProductDetail.rejected, (state) => {
                state.pending = false;
                state.error = true;
            })

            .addCase(likeBook.pending, (state) => {
                state.pending = true;
            })
            .addCase(likeBook.fulfilled, (state, {payload}) => {
                console.log(payload)
                state.pending = false
                state.error = false
            })
            .addCase(likeBook.rejected, (state) => {
                state.pending = false;
                state.error = true;
            })

            .addCase(unLikeBook.pending, (state) => {
                state.pending = true;
            })
            .addCase(unLikeBook.fulfilled, (state, {payload}) => {
                console.log(payload)
                state.pending = false
                state.error = false
            })
            .addCase(unLikeBook.rejected, (state) => {
                state.pending = false;
                state.error = true;
            });
    },
});

export const authSelect = (state: RootState): string | null => state.accessToken.cookie;
export const productsSelect = (state: RootState): [] => state.accessToken.products;
export const getProductDetailSelect = (state: RootState): Product => state.accessToken.product;
export const errorSelect = (state: RootState): boolean => state.accessToken.error;


export default TokenSlice.reducer