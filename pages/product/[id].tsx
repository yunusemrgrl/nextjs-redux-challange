import type {NextPage} from 'next'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {AppDispatch} from "../../store";

import {authSelect, getProductDetailSelect, TokenSlice} from "../../slices/authSlice";
import {getProductDetail, likeBook, unLikeBook} from "../../services/product";

import LoginHeader from "../../components/Header/LoginHeader";
import img from "../../public/imgThumb.png"


const Product: NextPage = () => {


    const dispatch = useDispatch<AppDispatch>()
    const accessToken = useSelector(authSelect);
    const product = useSelector(getProductDetailSelect);
    const [likedProduct, setLikedProduct] = useState([])

    useEffect(() => {
        setLikedProduct(JSON.parse(localStorage.getItem("likes") || "[]"))
    }, [])

    const [imageSrc, setImageSrc] = useState("https://img.icons8.com/ios/36/000000/hearts--v1.png");

    useEffect(() => {
        console.log(window.location.pathname.split('/').reverse()[0])
        dispatch(TokenSlice.actions.checkCookie());
        const id = window.location.pathname.split('/').reverse()[0]
        if (accessToken) {
            dispatch(getProductDetail({accessToken, id}));
        }

    }, [accessToken])


    const likeBookEvent = () => {
        const likedProductIds = JSON.parse(localStorage.getItem("likes") || "[]");
        if (likedProductIds.includes(product.id)) {
            dispatch(unLikeBook({accessToken, productId: product.id}));
            const updatedLikedProductIds = likedProductIds.filter((id: number) => id !== product.id);
            setLikedProduct(updatedLikedProductIds);
            localStorage.setItem("likes", JSON.stringify(updatedLikedProductIds));
        } else {
            dispatch(likeBook({accessToken, productId: product.id}));
            likedProductIds.push(product.id);
            setLikedProduct(likedProductIds);
            localStorage.setItem("likes", JSON.stringify(likedProductIds));
        }
    }


    return (
        <>
            <div className="h-screen flex flex-col">
                <LoginHeader/>
                <main className="pt-16 block pb-20 ">
                    <div
                        className="lg:mx-24  w-full md:w-auto bg-white h-full border-2 border-gray-600 border-opacity-40 rounded-3xl  ">
                        <div className="flex flex-col px-8 py-4">
                            <div className="flex justify-end ">
                                <div className="flex items-center">
                                    <span
                                        className="mr-4 text-lg">{product?.likes ? product?.likes.length + " likes" : " "} </span>
                                    {!likedProduct.includes(product.id) ?
                                        <img
                                            onMouseOver={() => setImageSrc("https://img.icons8.com/color/36/null/filled-like.png")}
                                            onMouseOut={() => setImageSrc("https://img.icons8.com/ios/36/000000/hearts--v1.png")}
                                            onClick={likeBookEvent}
                                            src={imageSrc}/> :
                                        <img
                                            onClick={likeBookEvent}
                                            src="https://img.icons8.com/color/36/null/filled-like.png"/>
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row ">
                                <div className="flex justify-center border-gray-700 px-8 min-w-max">
                                    <img
                                        className="p-1 drop-shadow-lg w-[200px] h-[300px] md:w-[400px] md:h-[560px] border-4"
                                        src={product?.image ? "https://assignment-api.piton.com.tr" + product.image : img.src}/>
                                </div>
                                <div className="py-4 md:ml-12 ">
                                    <p className="text-2xl md:text-3xl font-semibold w-80 block">{product?.name}</p>
                                    <p className=" mt-12 text-xl block ">{product?.description ? product?.description : "The data does not exist"}</p>
                                </div>
                            </div>
                            <div className="flex justify-end grow mb-8">
                                <div
                                    className="flex items-center justify-center -mr-8 rounded-l-full  bg-sky-700 w-60 py-4">
                                    <span
                                        className={product?.price ? "block text-4xl font-bold text-white" : "block text-4xl font-bold text-white h-8"}>{product?.price ? product.price + " ₺" : " "} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </>
    )
}
export default Product
