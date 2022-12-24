import {createAsyncThunk} from "@reduxjs/toolkit";


interface User {
    name?: string;
    password: string;
    email: string;
}


export const register = createAsyncThunk("register/register", async (userData: User) => {
    // Fetch API kullanarak bir POST isteği gönderin ve cevabı döndürün
    const response = await fetch(
        "https://assignment-api.piton.com.tr/api/v1/user/register",
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: userData.name,
                password: userData.password,
                email: userData.email,
            }),
        }
    );
    console.log("aaaaaaaaaa")
    return await response.json();
});


export const login = createAsyncThunk("Token/Login", async (param: { userData: User }) => {
    const response = await fetch(
        "https://assignment-api.piton.com.tr/api/v1/user/login",
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email: param.userData.email, password: param.userData.password},),
        }
    );
    return await response.json();
});