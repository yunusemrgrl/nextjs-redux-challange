import type {NextPage} from 'next'

const ProductList: NextPage = () => {

    return (
        <div
            className="flex h-max flex-col bg-white border-2 border-gray-400 border-opacity-40 rounded-3xl p-4">
            <div className="flex  justify-end mb-2">
                <img className="opacity-40" src="https://img.icons8.com/ios/36/null/like--v1.png"/>
            </div>
            <div>
                <div className="flex justify-center border-gray-700 px-8">
                    <img className="p-1 drop-shadow-lg w-[240px] h-[330px] border-4"
                         src="https://picsum.photos/200"/>
                </div>
            </div>
            <div className="flex mt-8 justify-center">
                <p className="text-center text-lg w-60 font-semibold"> CODE: The hidden Language of
                    Computer
                    Hardware
                    and
                    Software</p>
            </div>
            <div className="flex justify-center">
                <span className="w-4/5 h-[1px] block bg-gray-600 opacity-80 my-8 "></span>
            </div>
            <div className="flex justify-center text-2xl font-bold text-sky-600 mb-8">
                35TL ₺
            </div>
        </div>
    )
}
export default ProductList