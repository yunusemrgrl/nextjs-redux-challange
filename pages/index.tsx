import type {NextPage} from 'next'

import Register from "./Register";
import Login from "./Login";
import {useEffect, useState,} from "react";
import {TokenSlice,} from "../slices/authSlice";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../store";

import {authSelect} from "../slices/authSlice"
import {useRouter} from "next/router";

const Home: NextPage = () => {

    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch<AppDispatch>()
    const accessToken = useSelector(authSelect);
    const router = useRouter();

    const [isRemember, setIsRemember] = useState<boolean>(false);

    useEffect(() => {
        dispatch(TokenSlice.actions.checkCookie());
        setLoading(false);

        const remember = localStorage.getItem("rememberMe");
        if (remember) {
            setIsRemember(JSON.parse(remember));
        }
        if (isRemember && accessToken) {
            router.push("/products")
        }

    }, [isRemember, accessToken])


    if (loading) {
        return <div className="h-screen w-screen grid place-items-center">Yükleniyor...</div>;
    }
    if (accessToken) {
        return (<Login/>)
    }
    return (<Register/>)
}
export default Home
