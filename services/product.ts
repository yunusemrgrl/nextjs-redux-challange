import {createAsyncThunk} from "@reduxjs/toolkit";


export const getProducts = createAsyncThunk("Token/getProducts", async (param: { accessToken: string }) => {
    const response = await fetch(
        "https://assignment-api.piton.com.tr/api/v1/product/all",
        {
            method: "GET",
            headers: {
                "access-token": param.accessToken,
                Accept: "application/json",
                "Content-Type": "application/json",
            },

        },
    );
    return await response.json();
});

export const getProductDetail = createAsyncThunk("Token/getProductDetail", async (param: { accessToken: string, id: string }) => {
    console.log(param.id)
    const response = await fetch(
        "https://assignment-api.piton.com.tr/api/v1/product/get/" + param.id,
        {
            method: "GET",
            headers: {
                "access-token": param.accessToken,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        },
    );
    return await response.json();
});


export const likeBook = createAsyncThunk("Token/likeBook", async (param: { accessToken: string | null, productId: number }) => {

    const response = await fetch(
        "https://assignment-api.piton.com.tr/api/v1/product/like",
        {
            method: "POST",
            headers: {
                "access-token": param.accessToken || "",
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({productId: param.productId},),
        },
    );
    return await response.json();
});

export const unLikeBook = createAsyncThunk("Token/unLikeBook", async (param: { accessToken: string | null, productId: number }) => {
    const response = await fetch(
        "https://assignment-api.piton.com.tr/api/v1/product/unlike",
        {
            method: "POST",
            headers: {
                "access-token": param.accessToken || "",
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({productId: param.productId},),
        },
    );
    return await response.json()
});
