import type {NextPage} from 'next'
import {AppDispatch} from "../store";
import React, {ChangeEvent, ChangeEventHandler, useEffect, useState} from "react";

import {useDispatch} from 'react-redux'
import {useRouter} from "next/router";


import Input from "../components/Input";
import Button from "../components/Button";
import RightSideTitle from "../components/RightSideTitle";
import LeftSideTitle from "../components/LeftSideTitle";

import {passwordValidation,} from "../validations/PasswordValidation";
import {emailValidation,} from "../validations/EmailValidation";

import {login} from "../services/auth";


import backgroundSvg from "../public/backgroundImage.svg"
import {TokenSlice} from "../slices/authSlice";

interface User {
    password: string;
    email: string;
}


const Login: NextPage = () => {

    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter();


    const [userData, setUserData] = React.useState<User>({
        email: '',
        password: '',
    });

    const [isRemember, setIsRemember] = useState<boolean>(false);

    useEffect(() => {
        const remember = localStorage.getItem("rememberMe");
        dispatch(TokenSlice.actions.checkCookie());
        if (remember) {
            setIsRemember(JSON.parse(remember));
        }
    }, []);


    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
    };

    const handleLogin = () => {
        Promise.all([
            passwordValidation(userData.password),
            emailValidation(userData.email)
        ]).then(results => {
            results.forEach(result => {
                if (result.status === "danger") {
                    return alert(result.message);
                }
            });
            const isSuccess = results.every(result => result.status === "success");
            if (isSuccess) {
                dispatch(login({userData})).then((res) => {
                    if (res.payload.token === "") return
                    router.push("/products")
                });
            }
        });
    };


    const checkboxRemember = (event: ChangeEvent<HTMLInputElement>) => {
        setIsRemember(event.target.checked);
        localStorage.setItem('rememberMe', JSON.stringify(event.target.checked));
    };


    return (
        <main className="flex h-screen">
            <div
                style={{
                    backgroundImage: `url("${backgroundSvg.src}")`,
                }}
                className=" opacity-1 hidden lg:grid  w-[1150px] w-full grid place-items-center">
                <LeftSideTitle title="PitonShop" description="The most popular book shop for IT"
                               style="text-white mb-60"/>
            </div>
            <div className=" w-[750px] flex-1 lg:flex-none w-full flex-col flex items-center justify-center shrink-0">
                <div>
                    <RightSideTitle title="Hello Again!" description="Welcome Back"/>
                    <div className="grid gap-y-4 mt-12">
                        <Input
                            name="email"
                            imageSrc="https://img.icons8.com/ios/36/null/new-post--v1.png"
                            type="email"
                            value={userData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                        />
                        <Input
                            name="password"
                            imageSrc="https://img.icons8.com/sf-regular-filled/40/null/lock.png"
                            type="password"
                            value={userData.password}
                            onChange={handleChange}
                            placeholder="Password"
                        />
                        <Button title="Login" onClick={handleLogin}/>
                        <div className="flex justify-center">
                            <input type="checkbox" className="valid" onChange={checkboxRemember} checked={isRemember}/>
                            <label
                                className="py-2 px-2  outline-0 text-gray-600 text-lg font-semibold opacity-80">Remember
                                me
                            </label>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}
export default Login