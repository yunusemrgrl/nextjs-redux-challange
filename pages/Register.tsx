import type {NextPage} from 'next'
import type {RootState} from '../store'

import React, {ChangeEventHandler, SetStateAction, useEffect, useRef, useState} from "react";
import {useSelector, useDispatch} from 'react-redux'

import {AppDispatch} from "../store";


import Input from "../components/Input";
import Button from "../components/Button";
import RightSideTitle from "../components/RightSideTitle";
import LeftSideTitle from "../components/LeftSideTitle";
import {maskPhoneNumber, phoneValidate} from "../validations/phoneValidation";
import {passwordValidation, passwordCheckValidate} from "../validations/PasswordValidation";
import {AnyAction, AsyncThunkAction} from "@reduxjs/toolkit";
import {register} from "../services/auth";

interface User {
    name: string;
    password: string;
    email: string;
    passwordRepeat: string;
    phone: string
}


const Register: NextPage = () => {

    const dispatch = useDispatch<AppDispatch>()

    const [formattedPhone, setFormattedPhone] = React.useState('')


    const [userData, setUserData] = React.useState<User>({
        name: '',
        email: '',
        password: '',
        passwordRepeat: '',
        phone: ''
    });


    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {

        const {name, value} = event.target;
        if (name == "phone") {
            setFormattedPhone(maskPhoneNumber(event.target.value))
        }
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleRegister = () => {
        Promise.all([
            phoneValidate(userData.phone),
            passwordValidation(userData.password),
            passwordCheckValidate(userData.password, userData.passwordRepeat)
        ]).then(results => {
            results.forEach(result => {
                if (result.status === "danger") {
                    return alert(result.message);
                }
            });
            const isSuccess = results.every(result => result.status === "success");
            if (isSuccess) {
                dispatch(register(userData))
            }
        });
    };


    useEffect(() => {
        console.log(userData)
    }, [userData])

    return (
        <main className="flex h-screen">
            <div
                className=" opacity-1 hidden lg:grid  w-[1150px] w-full grid place-items-center">
                <LeftSideTitle title="PitonShop" description="The most popular book shop for IT"
                               style="text-white mb-60"/>
            </div>
            <div className=" w-[750px] flex-1 lg:flex-none w-full flex-col flex items-center justify-center shrink-0">
                <div>
                    <RightSideTitle title="Hello!" description="Sign up to Get Started"/>
                    <div className="grid gap-y-4 mt-12 ">
                        <Input
                            name="name"
                            imageSrc="https://img.icons8.com/ios-glyphs/36/null/user--v1.png"
                            type="text"
                            value={userData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                        />
                        <Input
                            name="email"
                            imageSrc="https://img.icons8.com/ios/36/null/new-post--v1.png"
                            type="email"
                            value={userData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                        />
                        <Input
                            name="phone"
                            type="text"
                            imageSrc="https://img.icons8.com/ios-filled/36/null/phone.png"
                            value={formattedPhone}
                            onChange={handleChange}
                            placeholder="Phone"
                        />
                        <Input
                            name="password"
                            imageSrc="https://img.icons8.com/sf-regular-filled/40/null/lock.png"
                            type="password"
                            inputmode="numeric"
                            value={userData.password}
                            onChange={handleChange}
                            placeholder="Password"
                        />
                        <Input
                            name="passwordRepeat"
                            imageSrc="https://img.icons8.com/sf-regular-filled/40/null/lock.png"
                            type="password"
                            value={userData.passwordRepeat}
                            onChange={handleChange}
                            placeholder="Repeat your password"
                        />
                        <Button title="Register" className="" onClick={handleRegister}/>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Register