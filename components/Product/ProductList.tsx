import type {NextPage} from 'next'
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../store";
import {authSelect, TokenSlice} from "../../slices/authSlice";

import {likeBook, unLikeBook} from "../../services/product";
import {likedProducts} from "../../slices/productSlice";

type Props = {
    product: {
        id: number,
        name: string,
        image: string,
        price: number
    }
}

const ProductList: NextPage<Props> = ({product}) => {

    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>()
    const accessToken = useSelector(authSelect);
    const likedProductsArr = useSelector(likedProducts);

    const [imageSrc, setImageSrc] = useState("https://img.icons8.com/ios/36/000000/hearts--v1.png");

    useEffect(() => {
        dispatch(TokenSlice.actions.checkCookie());
    }, [accessToken]);


    const showProductDetail = (product: any) => {
        router.push("/product/" + product.id)
    }

    const likeBookEvent = async () => {
        if (likedProductsArr.includes(product.id)) {
            await dispatch(unLikeBook({accessToken, productId: product.id}));
        } else {
            await dispatch(likeBook({accessToken, productId: product.id}));
        }
        localStorage.setItem("likes", JSON.stringify(likedProductsArr));
    }


    return (
        <div
            className="flex h-max flex-col bg-white border-2 border-gray-400 border-opacity-40 hover:cursor-pointer rounded-3xl p-4"
        >
            <div className="flex  justify-end mb-2">
                {!likedProductsArr.includes(product.id) ?
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
            <div>
                <div className="flex justify-center " onClick={() => showProductDetail(product)}>
                    <img className="p-1 drop-shadow-lg w-[240px] h-[330px] border-4"
                         src={"https://assignment-api.piton.com.tr" + product.image}/>
                </div>
            </div>
            <div className="flex mt-8 justify-center">
                <p className="text-center text-lg h-20 font-semibold"> {product.name}</p>
            </div>
            <div className="flex justify-center">
                <span className="w-4/5 h-[1px] block bg-gray-600 opacity-80 my-8 "></span>
            </div>
            <div className="flex justify-center text-2xl font-bold text-sky-600 mb-8">
                {product.price} ₺
            </div>
        </div>
    )
}
export default ProductList