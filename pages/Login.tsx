import type {NextPage} from 'next'
import type {RootState} from '../store'

import React, {ChangeEvent, ChangeEventHandler, SetStateAction, useEffect, useRef, useState} from "react";
import {useSelector, useDispatch} from 'react-redux'

import {AppDispatch} from "../store";
import {login} from "../services/auth";


import Input from "../components/Input";
import Button from "../components/Button";
import RightSideTitle from "../components/RightSideTitle";
import LeftSideTitle from "../components/LeftSideTitle";

import backgroundSvg from "../public/backgroundImage.svg"


interface User {
    password: string;
    email: string;
}


const Login: NextPage = () => {

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        const remember = localStorage.getItem("rememberMe");
        if (remember) {
            setIsRemember(JSON.parse(remember));
        }
    }, []);


    const [userData, setUserData] = React.useState<User>({
        email: '',
        password: '',
    });


    const [isRemember, setIsRemember] = useState<boolean>(false);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
        console.log(userData)
    };

    const handleLogin = () => {
        console.log("login")
        dispatch(login({userData}));
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