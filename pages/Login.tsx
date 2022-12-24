import type {NextPage} from 'next'
import type {RootState} from '../store'

import React, {ChangeEventHandler, useRef, useState} from "react";
import {useSelector, useDispatch} from 'react-redux'

import {AppDispatch} from "../store";
import {getToken} from "../slices/registerSlice";


import Input from "../components/Input";
import Button from "../components/Button";
import RightSideTitle from "../components/RightSideTitle";
import LeftSideTitle from "../components/LeftSideTitle";


interface User {
    name: string;
    password: string;
    email: string;
}

const Login: NextPage = () => {

    const handleClick = () => {

    }

    const [userData, setUserData] = React.useState<User>({
        name: '',
        password: '',
        email: '',
    });

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
        console.log(userData)
    };


    return (
        <main className="flex h-screen">
            <div
                className="bg-gradient-to-b from-blue-600 to-second-color opacity-1 hidden lg:grid  w-[1150px] w-full grid place-items-center">
                <LeftSideTitle title="PitonShop" description="The most popular book shop for IT"
                               style="text-white mb-60"/>
            </div>
            <div className=" w-[750px] flex-1 lg:flex-none w-full flex-col flex items-center justify-center shrink-0">
                <div>
                    <RightSideTitle title="Hello Again!" description="Welcome Back"/>
                    <div className="grid gap-y-4 mt-12">
                        <Input
                            name="email"
                            imageSrc="https://img.icons8.com/sf-regular-filled/40/null/lock.png"
                            type="email"
                            value={userData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                        />
                        <Input
                            name="password"
                            imageSrc="https://img.icons8.com/ios/36/null/new-post--v1.png"
                            type="password"
                            value={userData.password}
                            onChange={handleChange}
                            placeholder="Password"
                        />
                        <Button title="Login" onClick={handleClick}/>
                        <div className="flex justify-center">
                            <input type="checkbox" className="valid" checked/>
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