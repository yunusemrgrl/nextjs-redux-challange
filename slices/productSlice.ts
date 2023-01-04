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
    likedProducts: [1,2]
};


export const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getLikedProducts:(state) =>{
            state.likedProducts = JSON.parse(localStorage.getItem("likes") || "[]")
        }
    },
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
                const id = payload.id
                let updatedLikedProductIds:number[]
                updatedLikedProductIds = [...state.likedProducts, id ]
                state.likedProducts = updatedLikedProductIds

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
                let updatedLikedProductIds = state.likedProducts;
                updatedLikedProductIds = updatedLikedProductIds.filter((id: number) => id !== payload.id);
                state.likedProducts = updatedLikedProductIds;

                state.pending = false;
                state.error = false;
            })
            .addCase(unLikeBook.rejected, (state) => {
                state.pending = false;
                state.error = true;
            });
    },
});

export const productsSelect = (state: RootState): Product[] => state.product.products;
export const getProductDetailSelect = (state: RootState): Product => state.product.product;
export const likedProducts = (state: RootState): number[]  => state.product.likedProducts;

export const { getLikedProducts } = ProductSlice.actions

export default ProductSlice.reducer