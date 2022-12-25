import type {NextPage} from 'next'
import {useEffect, useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../store";

import LoginHeader from "../../components/Header/LoginHeader";
import ProductList from "../../components/Product/ProductList";

import {getProducts} from "../../services/product";
import {authSelect, TokenSlice} from "../../slices/authSlice";
import {productsSelect} from "../../slices/productSlice";


const Products: NextPage = () => {

    const dispatch = useDispatch<AppDispatch>()

    const accessToken = useSelector(authSelect);
    const products = useSelector(productsSelect);


    useEffect(() => {
        dispatch(TokenSlice.actions.checkCookie());
        if (accessToken) {
            dispatch(getProducts({accessToken,}));
        }


    }, [accessToken])


    return (
        <div className="h-screen flex flex-col">
            <LoginHeader/>
            <main className="flex px-12 pb-20  pt-16 justify-center">
                <section
                    className="grid gap-8  flex-shrink  lg:gap-16 md:gap-8  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products && products.length > 0 && (
                        products.map((product, index) => {
                            return <ProductList key={index} product={product}/>
                        })
                    )}
                </section>
            </main>
        </div>
    )
}
export default Products