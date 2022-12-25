import type {NextPage} from 'next'
import LoginHeader from "../../components/Header/LoginHeader";

const Product: NextPage = () => {

    return (
        <>
            <div className="h-screen flex flex-col">
                <LoginHeader/>
                <main className="pt-28 block h-full pb-20 ">
                    <div
                        className="mx-24 block  bg-white h-full border-2 border-gray-600 border-opacity-40 rounded-3xl ">
                        <div className="flex flex-col px-8 py-4 h-full">
                            <div className="flex justify-end ">
                                <div className="flex items-center">
                                    <span className="mr-4 text-lg">5 likes</span>
                                    <img className="opacity-40 flex-grow"
                                         src="https://img.icons8.com/ios/36/null/like--v1.png"/>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex justify-center border-gray-700 px-8 min-w-max">
                                    <img className="p-1 drop-shadow-lg w-[400px] h-[560px] border-4"
                                         src="https://picsum.photos/200"/>
                                </div>
                                <div className="py-4 ml-12 ">
                                    <p className="text-3xl font-semibold w-80 block">The art of Computer Programming</p>
                                    <p className="mt-12 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Maxime
                                        mollitia,
                                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                                        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                                        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                                        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                                        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam</p>
                                </div>
                            </div>
                            <div className="flex justify-end grow mb-8">
                                <div
                                    className="flex items-center justify-center -mr-8 rounded-l-full  bg-sky-700 w-60 py-4">
                                    <span className="block text-4xl font-bold text-white ">35.00 ₺</span>
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
