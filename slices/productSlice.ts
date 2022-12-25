import {createSlice} from "@reduxjs/toolkit";
import {getProducts, getProductDetail, likeBook, unLikeBook} from "../services/product";

import {RootState} from "../store";


export interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    timeStamp: string;
    description: string;
    likes: number[];
}


const initialState = {
    pending: false,
    error: false,
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
};


export const PsroductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
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

export const productsSelect = (state: RootState): Product[] => state.product.products;
export const getProductDetailSelect = (state: RootState): Product => state.product.product;


export default PsroductSlice.reducer